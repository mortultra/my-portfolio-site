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
const topBlock = document.getElementById('topBlock');
const devBlock = document.getElementById('devBlock');
const bottomBlock = document.getElementById('bottomBlock')

window.onscroll = () => {scrollFunction(), topBoxMovement(), devBoxMovement(), bottomBoxMovement()};

scrollFunction = () => {
  if (document.body.clientWidth < 450) {
    navScroll.style.padding = '20px 0 35px 0';
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

topBoxMovement = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBlock.style.left = '90%';
    }
  else {
    topBlock.style.left = '23%';
    }
}

devBoxMovement = () => {
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    devBlock.style.right = '30%';
  } else {
    devBlock.style.right = '0%';
  }
}

bottomBoxMovement = () => {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    bottomBlock.style.left = '75%';
  } else {
    bottomBlock.style.left = '30%';
  }
}