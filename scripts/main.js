// nav menu smooth scroll to section
// const menuOption = document.querySelector('.mainMenu');

// menuOption.addEventListener('click', (event) => {
//   if (event.target.tagName == 'LI') {
//     const type = event.target.className;
//     const scrollTo = document.querySelector('#' + type);
//     scrollTo.scrollIntoView({ behavior: "smooth" });
//   }
// });

function anchorLinkHandler(e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(() => {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus();
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

// accessible scroll into view from https://codepen.io/a8t/pen/JOYwLM?editors=1010



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

// the element behind the header description moves on scroll of 200px from top
topBoxMovement = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBlock.style.left = '90%';
    }
  else {
    topBlock.style.left = '23%';
    }
}

// the background element behind development moves after 1250px of scrolling from top
devBoxMovement = () => {
  if (document.body.scrollTop > 1250 || document.documentElement.scrollTop > 1250) {
    devBlock.style.right = '30%';
  } else {
    devBlock.style.right = '0%';
  }
}

// the background element behind design moves after 2000px of scrolling from top
bottomBoxMovement = () => {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    bottomBlock.style.left = '75%';
  } else {
    bottomBlock.style.left = '30%';
  }
}



// use the span with the id of selfDesc to update with descriptions
// time the descriptions to change every 2 seconds

//get span element
// const descSpan = document.getElementById('selfDesc');

//store descriptions in an array
const descriptions = [
  'developer',
  'designer',
  'thinker',
  'human'
]

//randomize the description 
// const randDesc = Math.floor(Math.random() * descriptions.length);

//a function that fills the span with random descriptions every 2.5 seconds
descFunction = () => {
    setInterval(() => {
    const randDesc = Math.floor(Math.random() * descriptions.length);
    document.getElementById('selfDesc').textContent = descriptions[randDesc];
    // console.log(descriptions[randDesc]);
  }, 2500);
}

descFunction();

