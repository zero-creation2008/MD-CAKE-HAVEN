// Mobile menu toggle (shared across pages)
const burger = document.querySelector('.burger');
const navlinks = document.querySelector('.navlinks');
if (burger && navlinks) {
  burger.addEventListener('click', () => {
    const open = navlinks.style.display === 'flex';
    if (open) {
      navlinks.style.cssText = 'display:none;';
    } else {
      navlinks.style.cssText = 'display:flex; position:absolute; top:70px; left:0; right:0; background:#FBF3EC; flex-direction:column; padding:24px 28px; gap:20px; border-bottom:1px solid rgba(58,36,24,0.12);';
    }
  });
}
