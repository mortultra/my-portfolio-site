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
const logoBox = document.getElementById('logoContainer');

window.onscroll = () => {scrollFunction()};

scrollFunction = () => {
  if (document.body.clientWidth < 450) {
    navScroll.style.padding = '20px 0 20px 0';
    logoBox.style.width = '50%';
  }
  else if (document.body.clientWidth < 768) {
    navScroll.style.padding = '20px 0 20px 0';
    logoBox.style.width = '40%';
  }
  else if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navScroll.style.padding = '20px 0 15px 0';
    logoBox.style.width = '25%';
  }
  else if (document.body.clientWidth > 768) {
    navScroll.style.padding = '50px 0 20px 0';
    logoBox.style.width = '30%';
  }
}
