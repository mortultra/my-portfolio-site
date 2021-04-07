// nav menu smooth scroll to section
const menuOption = document.querySelector('.mainMenu');

menuOption.addEventListener('click', (event) => {
  if (event.target.tagName == 'LI') {
    const type = event.target.className;
    const scrollTo = document.querySelector('#' + type);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }
});

// nav bar shrink on scroll
const navScroll = document.getElementById('navScroll');
const fullName = document.getElementById('fullName');
const initials = document.getElementById('initials');

window.onscroll = () => {scrollFunction()};

scrollFunction = () => {
  if (document.body.clientWidth < 768) {
    navScroll.style.padding = '20px 0 15px 0';
    fullName.style.fontSize = '4rem';
    fullName.style.lineHeight = '3rem'
    initials.style.fontSize = '8.35rem';
    initials.style.top = '47.5%';
    initials.style.left = '13.5%';
  }
  else if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navScroll.style.padding = '20px 0 15px 0';
    fullName.style.fontSize = '4rem';
    fullName.style.lineHeight = '3rem'
    initials.style.fontSize = '8.35rem';
    initials.style.top = '39.5%';
    initials.style.left = '7.5%';
  }
  else if (document.body.clientWidth > 768){
    navScroll.style.padding = '50px 0 40px 0';
    fullName.style.fontSize = '6rem';
    fullName.style.lineHeight = '5rem';
    initials.style.fontSize = '13.25rem';
    initials.style.top = '45.5%';
    initials.style.left = '10%';
  }

}