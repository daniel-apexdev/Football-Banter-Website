window.addEventListener("scroll", function(){
   var header = this.document.querySelector("header");
   header.classList.toggle("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
   menu.classList.toggle('bx-x');
   navlist.classList.toggle('open');
};

window.onscroll = () => {
   menu.classList.remove('bx-x');
   navlist.classList.remove('open');
};
