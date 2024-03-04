import { gsap } from "../node_modules/gsap/all.js";

//------------------------------------------------
// Nav Menu Scroll-Into-View
//------------------------------------------------

function anchorLinkHandler(e) {
  const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

  const checkIfDone = setInterval(() => {
    const atBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach((each) => (each.onclick = anchorLinkHandler));

// // accessible scroll into view from https://codepen.io/a8t/pen/JOYwLM?editors=1010

//------------------------------------------------
// Nav & Background Box Scroll Behaviour
//------------------------------------------------

// nav bar shrink on scroll
const navScroll = document.getElementById("navScroll");
const logoBox = document.getElementById("logoContainer");
// const topBlock = document.getElementById("topBlock");
// const devBlock = document.getElementById("devBlock");
// const bottomBlock = document.getElementById("bottomBlock");

window.onscroll = () => {
  scrollFunction()
};

const scrollFunction = () => {
  if (document.body.clientWidth < 450) {
    navScroll.style.padding = "20px 0 35px 0";
    logoBox.style.width = "50%";
  } else if (document.body.clientWidth < 768) {
    navScroll.style.padding = "20px 0 20px 0";
    logoBox.style.width = "40%";
  } else if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80
  ) {
    navScroll.style.padding = "20px 0 15px 0";
    logoBox.style.width = "25%";
  } else if (document.body.clientWidth > 768) {
    navScroll.style.padding = "50px 0 20px 0";
    logoBox.style.width = "30%";
  }
};

// // the element behind the header description moves on scroll of 200px from top
// topBoxMovement = () => {
//   if (
//     document.body.scrollTop > 200 ||
//     document.documentElement.scrollTop > 200
//   ) {
//     topBlock.style.left = "90%";
//   } else {
//     topBlock.style.left = "23%";
//   }
// };

// // the background element behind development moves after 1250px of scrolling from top
// devBoxMovement = () => {
//   if (
//     document.body.scrollTop > 1250 ||
//     document.documentElement.scrollTop > 1250
//   ) {
//     devBlock.style.right = "30%";
//   } else {
//     devBlock.style.right = "0%";
//   }
// };

// // the background element behind design moves after 2000px of scrolling from top
// bottomBoxMovement = () => {
//   if (
//     document.body.scrollTop > 2000 ||
//     document.documentElement.scrollTop > 2000
//   ) {
//     bottomBlock.style.left = "75%";
//   } else {
//     bottomBlock.style.left = "30%";
//   }
// };

//------------------------------------------------
// Intro Description Updater
//------------------------------------------------

// use the span with the id of selfDesc to update with descriptions
// time the descriptions to change every 2 seconds

//get span element
// const descSpan = document.getElementById('selfDesc');

//store descriptions in an array
const descriptions = ["developer", "enthusiast", "designer", "human"];

//randomize the description
// const randDesc = Math.floor(Math.random() * descriptions.length);

//a function that fills the span with random descriptions every 2.5 seconds
// descFunction = () => {
//     setInterval(() => {
//     const randDesc = Math.floor(Math.random() * descriptions.length);
//     document.getElementById('selfDesc').textContent = descriptions[randDesc];
//     // console.log(descriptions[randDesc]);
//   }, 2500);
// }

// descFunction();

//code below adapted from https://cmsdk.com/javascript/change-backgroundimage-from-array-using-setinterval-but-only-twice.html

// const descSpan = document.getElementById("selfDesc");
// let index = 0;
// let iterations = 0;
// const updateDesc = () => {
//   // reset index to zero if current index is greater than number of descriptions.
//   if (index >= descriptions.length) {
//     index = 0;
//     iterations++;
//   }
//   descSpan.textContent = descriptions[index];

//   // need to clean this up and combine it into the above if statement.
//   if (iterations === Infinity) {
//     interval();
//   } else {
//     index++;
//   }
// };

// updateDesc();

// const interval = setInterval(updateDesc, 1750);

//------------------------------------------------
// GSAP Portfolio Animations
//------------------------------------------------

// get all portfolio preview images (PPI) by class
// add PPI to array
// iterate over array adding GSAP animations to each
// add event listener mouseenter to trigger animation

// without GSAP utility classes

// const portfolioList = document.querySelectorAll(".portfolioCard");

// const portfolioArray = Array.from(portfolioList);

// const arrayEvents = () => {
//   portfolioArray.forEach((item) => {
//     let hover = item.querySelectorAll(".portfolioCardInfo")
//     let tl = gsap.timeline({paused: true});

//     tl.from(hover, {
//       bottom: "102.5%",
//       ease: "bounce.inOut",
//     });
//     tl.to(hover, { 
//       duration: 0.75, 
//       bottom: 0, 
//       ease: "back.inOut" 
//     });
//     tl.to(hover, { 
//       duration: 0.5, 
//       height: "100%", 
//       width: "100%", 
//       ease: "power4.in" 
//     });

//     item.addEventListener("mouseenter", () => tl.play(0));
//   }); 
// };

// arrayEvents();

// Using GSAP utilities

const portfolioList = gsap.utils.toArray(".portfolioCardContents");

const listEvents = () => {
  portfolioList.forEach((item) => {
    let hover = item.querySelectorAll(".portfolioCardInfo");
    let info = item.querySelectorAll(".portfolioCardDesc");
    let tl = gsap.timeline({ paused: true });

    tl.set(hover, {
      bottom: "102.5%",
      height: "16px",
      width: "16px"
    })
    tl.to(hover, { 
      duration: 0.75, 
      bottom: 0, 
      ease: "back.inOut" 
    });
    tl.to(hover, { 
      duration: 0.5, 
      height: "100%", 
      width: "100%", 
      ease: "power4.in" 
    });
    tl.to(info, {
      duration: 0.01,
      display: "block",
    });
    tl.to(info, {
      duration: 0.35,
      opacity: 1,
      ease: "power2.in"
    })

    item.addEventListener("mouseenter", () => tl.play());
    item.addEventListener("mouseleave", () => tl.reverse(), tl.revert());
  })
}

listEvents()