// Main site JS: optimistic counters, gallery loader, booking flow (client-only) with Firebase hooks.
(function(){
  // Helpers
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  // VISITS & LIKES (uses Firestore if configured, else localStorage)
  const visitsEl = $('#visits');
  const likesEl = $('#likes');
  const likeBtn = $('#likeBtn');

  let firebaseApp = null, db = null, auth = null;
  const useFirebase = !!window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey !== 'REPLACE_ME';

  async function initFirebase(){
    try{
      // load firebase libs dynamically
      await loadScript('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
      await loadScript('https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js');
      await loadScript('https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-compat.js');
      firebaseApp = window.firebase.initializeApp(window.FIREBASE_CONFIG);
      auth = window.firebase.auth();
      db = window.firebase.firestore();
      console.log('Firebase initialized');
    }catch(e){
      console.warn('Firebase not initialized', e);
    }
  }

  function loadScript(src){
    return new Promise((res, rej)=>{
      const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s);
    })
  }

  async function incrementVisit(){
    if(db){
      const ref = db.collection('meta').doc('counts');
      await db.runTransaction(async tx => {
        const doc = await tx.get(ref);
        const current = doc.exists ? (doc.data().visits||0) : 0;
        tx.set(ref, {visits: current+1}, {merge:true});
        return current+1;
      }).then(newCount => visitsEl.textContent = `Visits: ${newCount}`)
      .catch(e => {
        console.warn('visit tx error',e); visitsEl.textContent = `Visits: —`;
      });
    } else {
      const v = Number(localStorage.getItem('visits')||0)+1; localStorage.setItem('visits',v); visitsEl.textContent = `Visits: ${v}`;
    }
  }

  async function fetchLikes(){
    if(db){
      const ref = db.collection('meta').doc('counts');
      const doc = await ref.get();
      const likes = doc.exists ? (doc.data().likes||0) : 0; likesEl.textContent = likes;
    } else {
      likesEl.textContent = localStorage.getItem('likes')||0;
    }
  }

  async function addLike(){
    if(db){
      const ref = db.collection('meta').doc('counts');
      await db.runTransaction(async tx => {
        const doc = await tx.get(ref);
        const current = doc.exists ? (doc.data().likes||0) : 0;
        tx.set(ref, {likes: current+1}, {merge:true});
        return current+1;
      }).then(newCount => likesEl.textContent = newCount)
      .catch(e => console.warn('like tx error', e));
    } else {
      const l = Number(localStorage.getItem('likes')||0)+1; localStorage.setItem('likes', l); likesEl.textContent = l;
    }
  }

  likeBtn.addEventListener('click', async ()=>{
    likeBtn.disabled = true; await addLike(); likeBtn.disabled = false;
  })

  // GALLERY: attempt to load numbered images from three folders; easy to update by dropping files
  const galleryGrid = document.getElementById('galleryGrid');
  const categories = ['travel','family','friends'];
  async function tryImage(path){
    try{
      const resp = await fetch(path, {method:'HEAD'});
      return resp.ok;
    }catch(e){return false}
  }

  async function loadGallery(){
    for(const cat of categories){
      for(let i=1;i<=8;i++){
        const candidate = `assets/images/${cat}/${i}.jpg`;
        const ok = await tryImage(candidate);
        if(ok){
          const div = document.createElement('div'); div.className='gallery-item';
          const img = document.createElement('img'); img.src = candidate; img.alt = `${cat} ${i}`;
          div.appendChild(img); galleryGrid.appendChild(div);
        }
      }
    }
    if(galleryGrid.children.length===0){
      // fallback samples
      for(let i=0;i<6;i++){
        const d=document.createElement('div');d.className='gallery-item';d.innerHTML=`<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);font-size:14px">Add images to assets/images/{travel,family,friends} named 1.jpg .. 8.jpg</div>`;galleryGrid.appendChild(d);
      }
    }
  }

  // BOOKING flow (client-only)
  const bookingForm = document.getElementById('bookingForm');
  const bookingStatus = document.getElementById('bookingStatus');

  bookingForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const email = $('#bookEmail').value.trim();
    const length = $('#bookLength').value;
    const time = $('#bookTime').value;
    if(!email || !time){ bookingStatus.textContent = 'Please provide email and preferred time.'; return }

    // Use Firebase Email link sign-in for verification: send sign-in link that includes booking payload in state
    if(!db || !auth){
      bookingStatus.textContent = 'Booking requires Firebase configuration. See README to enable bookings.'; return;
    }

    const actionCodeSettings = {
      url: window.location.href + `?booking=1&email=${encodeURIComponent(email)}`,
      handleCodeInApp: true
    };
    try{
      await auth.sendSignInLinkToEmail(email, actionCodeSettings);
      // store pending booking locally until verification completes
      const pending = {email,length,time,createdAt:new Date().toISOString()};
      localStorage.setItem('pending_booking_'+email, JSON.stringify(pending));
      bookingStatus.innerHTML = `Verification sent to <strong>${email}</strong>. Click the link in your email to confirm the booking.`;
    }catch(err){
      console.error(err); bookingStatus.textContent = 'Failed to send verification email. Check Firebase config and auth settings.';
    }
  })

  // Handle incoming sign-in link to finalize booking
  async function tryHandleSignInLink(){
    if(!auth) return;
    if(auth.isSignInWithEmailLink(window.location.href)){
      // get email from url param or prompt
      const urlParams = new URLSearchParams(window.location.search);
      let email = urlParams.get('email');
      if(!email) email = window.prompt('Confirm your email for booking');
      try{
        const result = await auth.signInWithEmailLink(email, window.location.href);
        // finalize booking from localStorage
        const pendingKey = 'pending_booking_'+email;
        const pending = JSON.parse(localStorage.getItem(pendingKey) || 'null');
        if(pending){
          // store booking in Firestore
          await db.collection('bookings').add(Object.assign({}, pending, {confirmedAt:new Date().toISOString(), uid: result.user.uid}));
          bookingStatus.innerHTML = `Booking confirmed for <strong>${email}</strong> at ${pending.time} (${pending.length}m). Thank you!`;
          localStorage.removeItem(pendingKey);
        } else {
          bookingStatus.textContent = 'No pending booking found for this email.';
        }
      }catch(e){console.error('signInWithEmailLink',e); bookingStatus.textContent = 'Could not complete sign-in with link.'}
    }
  }

  // init
  (async function main(){
    if(useFirebase) await initFirebase();
    if(db) await fetchLikes(); else fetchLikes();
    await incrementVisit();
    await loadGallery();
    if(auth) await tryHandleSignInLink();
  })();

})();
