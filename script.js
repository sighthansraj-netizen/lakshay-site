document.getElementById('year').textContent = new Date().getFullYear();
const navToggle=document.getElementById('nav-toggle');const nav=document.getElementById('nav');
navToggle&&navToggle.addEventListener('click',()=>{if(nav.style.display==='flex'||nav.style.display==='block'){nav.style.display='none';}else{nav.style.display='block';nav.style.flexDirection='column';}});
