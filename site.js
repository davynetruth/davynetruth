document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

document.addEventListener('DOMContentLoaded', () => {
  const slides = [...document.querySelectorAll('.placement-slide')];
  if (!slides.length) return;
  const thumbs = [...document.querySelectorAll('.placement-thumb')];
  const prev = document.getElementById('reelPrev');
  const next = document.getElementById('reelNext');
  const counter = document.getElementById('reelCounter');
  let current = 0;

  function showSlide(index){
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle('active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      const video = slide.querySelector('video');
      if (!active && video) video.pause();
    });
    thumbs.forEach((thumb, i) => thumb.classList.toggle('active', i === current));
    if (counter) counter.textContent = String(current + 1).padStart(2,'0') + ' / ' + String(slides.length).padStart(2,'0');
    if (thumbs[current]) thumbs[current].scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
  }

  prev?.addEventListener('click', () => showSlide(current - 1));
  next?.addEventListener('click', () => showSlide(current + 1));
  thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => showSlide(i)));

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') showSlide(current - 1);
    if (e.key === 'ArrowRight') showSlide(current + 1);
  });
});

document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.mobile-menu-toggle').forEach(btn=>{const nav=btn.closest('.nav');const links=nav?.querySelector('.links');if(!links)return;btn.addEventListener('click',()=>{const open=links.classList.toggle('open');btn.classList.toggle('open',open);btn.setAttribute('aria-expanded',open?'true':'false')});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');btn.classList.remove('open');btn.setAttribute('aria-expanded','false')}))})});
