const s=document.getElementById("content"),e=document.querySelector("nav"),t=document.getElementById("nav-bg");let o=e?e.offsetHeight:0,c=`-${window.innerHeight-o}px`;const r=(g,v)=>{g.forEach(m=>{t&&e&&(m.isIntersecting?(t.classList.remove("opacity-0"),t.classList.add("opacity-100"),e.classList.add("shadow-md")):(t.classList.remove("opacity-100"),e.classList.remove("shadow-md"),t.classList.add("opacity-0")))})};let a={rootMargin:`0px 0px ${c} 0px`},n=new IntersectionObserver(r,a);s&&n.observe(s);window.addEventListener("resize",()=>{o=e?e.offsetHeight:0,c=`-${window.innerHeight-o}px`,a={rootMargin:`0px 0px ${c} 0px`},n&&n.disconnect(),n=new IntersectionObserver(r,a),s&&n.observe(s)});const l=document.getElementById("navTgl"),d=document.getElementById("closeTgl"),i=document.getElementById("mobileLinks");l&&d&&i&&(l.addEventListener("click",()=>{i.classList.remove("-translate-x-full")}),d.addEventListener("click",()=>{i.classList.add("-translate-x-full")}));
