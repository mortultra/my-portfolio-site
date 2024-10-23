document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // import gsap from "https://cdn.skypack.dev/gsap";

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

  // enable scrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // nav bar shrink on scroll
  const bodyWidth = document.body.clientWidth;
  const navScroll = document.getElementById("navScroll");
  const logoParts = document.querySelectorAll(".logoBox");

  const navReduce = gsap.to(navScroll, {
    padding: "15px 0",
    scrollTrigger: {
      trigger: navScroll,
      // start: 'trigger viewport',
      start: "110px top",
      end: "80px",
      // markers: true,
      onUpdate: (self) => {
        self.direction === 1 ? navReduce.play() : navReduce.reverse();
      },
      duration: 0.125,
      ease: "power1.inOut",
    },
  });

  const logoResizer = gsap.utils.toArray(".logoBox").forEach((item) => {
    const logoResize = gsap.to(item, {
      top: () => "-=" + (item.offsetTop - item.offsetHeight),
      stagger: 0.25,
      scrollTrigger: {
        trigger: navScroll,
        // start: 'trigger viewport',
        start: "110px top",
        end: "80px",
        onUpdate: (self) => {
          self.direction === 1 ? logoResize.play() : logoResize.reverse();
        },
        duration: 0.125,
        ease: "power1.inOut",
      },
    });
  });

  //------------------------------------------------
  // Design Modal Functionality
  //------------------------------------------------

  const openButtons = document.querySelectorAll(".modalOpen");
  const closeButtons = document.querySelectorAll(".modalClose");

  // Open GSAP animation
  function openModalAnimation(modal) {
    const modalContent = modal.querySelector(".modalSlideout");
    modal.style.display = "flex";
    gsap.fromTo(
      modalContent,
      { x: "100%" },
      {
        duration: 0.5,
        x: "0%",
        ease: "power2.out",
      }
    );
  }

  // Close GSAP animation
  function closeModalAnimation(modal) {
    const modalContent = modal.querySelector(".modalSlideout");
    gsap.to(modalContent, {
      duration: 0.5,
      x: "100%",
      ease: "power2.in",
      onComplete: () => {
        modal.style.display = "none";
      },
    });
  }

  // Open event listener
  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      openModalAnimation(modal);
    });
  });

  // Close event listener
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModalAnimation(modal);
    });
  });

  // Close modal if user clicks outside of the modal content
  window.addEventListener("click", (e) => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (e.target === modal) {
        closeModalAnimation(modal);
      }
    });
  });

  //------------------------------------------------
  // Intro Description Updater
  //------------------------------------------------

  // use the span with the id of selfDesc to update with descriptions
  // time the descriptions to change every 2 seconds

  //get span element
  // const descSpan = document.getElementById('selfDesc');

  //store descriptions in an array
  const descriptions = [
    "_design",
    "_develop",
    "_seek",
    "_collaborate",
    "_ideate",
    "_signal/lost",
    "_>",
    "_>>",
    "_>>>",
    "_signal/found",
  ];

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

  const descSpan = document.getElementById("selfDesc");
  let index = 0;
  let iterations = 0;
  const updateDesc = () => {
    // reset index to zero if current index is greater than number of descriptions.
    if (index >= descriptions.length) {
      index = 0;
      iterations++;
    }
    descSpan.textContent = descriptions[index];

    // need to clean this up and combine it into the above if statement.
    if (iterations === Infinity) {
      interval();
    } else {
      index++;
    }
  };

  updateDesc();

  const interval = setInterval(updateDesc, 1250);

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
        top: "0",
        left: "0",
        height: "16px",
        width: "16px",
      });
      tl.to(hover, {
        duration: 0.35,
        height: "100%",
        width: "100%",
        ease: "power4.in",
      });
      tl.to(info, {
        duration: 0.01,
        display: "block",
      });
      tl.to(info, {
        duration: 0.15,
        opacity: 1,
        ease: "power2.in",
      });

      item.addEventListener("mouseenter", () => tl.play());
      item.addEventListener("mouseleave", () => tl.reverse());
    });
  };

  const portfolioReset = () => {
    window.addEventListener("resize", (event) => {
      if (event) {
        listEvents();
      }
    });
  };

  listEvents();
  portfolioReset();
});

