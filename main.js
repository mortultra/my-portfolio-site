const menuOption = document.querySelector('.mainMenu');

menuOption.addEventListener('click', (event) => {
  if (event.target.tagName == 'LI') {
    const type = event.target.className;
    const scrollTo = document.querySelector('#' + type);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }
});

const navScroll = document.getElementById('navScroll');
const fullName = document.getElementById('fullName');
const initials = document.getElementById('initials');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navScroll.style.padding = '20px 0 15px 0';
    fullName.style.fontSize = '4rem';
    fullName.style.lineHeight = '3rem'
    initials.style.fontSize = '8rem';
    initials.style.top = '40%';
    initials.style.left = '7%';
  }
  else {
    navScroll.style.padding = '50px 0 40px 0';
    fullName.style.fontSize = '6rem';
    fullName.style.lineHeight = '5rem';
    initials.style.fontSize = '13rem';
    initials.style.top = '45%';
    initials.style.left = '10%';
  }
}