const phrases = ["Student & Web Developer","Frontend Enthusiast","JavaScript Learner","Problem Solver"];
let p=0, i=0, deleting=false;
const typing=document.getElementById("typingText");

function type(){
  const word=phrases[p];
  typing.textContent=deleting ? word.substring(0,i--) : word.substring(0,i++);
  if(!deleting && i>word.length){deleting=true;setTimeout(type,1100);return}
  if(deleting && i<0){deleting=false;p=(p+1)%phrases.length;i=0}
  setTimeout(type,deleting?45:75);
}
type();

document.getElementById("year").textContent=new Date().getFullYear();

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{topBtn.style.display=window.scrollY>450?"block":"none"});
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

document.querySelectorAll(".nav-link").forEach(link=>{
  link.addEventListener("click",()=>{
    const menu=document.getElementById("navMenu");
    if(menu.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});

document.getElementById("contactForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const form=e.currentTarget;
  const msg=document.getElementById("formMessage");
  if(!form.checkValidity()){
    form.classList.add("was-validated");
    msg.innerHTML='<div class="alert alert-warning">Please fill in all required fields correctly.</div>';
    return;
  }
  msg.innerHTML='<div class="alert alert-success">Thanks! This demo form is working. Connect it to your email/backend before publishing.</div>';
  form.reset();
  form.classList.remove("was-validated");
});
