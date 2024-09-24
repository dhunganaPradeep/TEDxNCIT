import "@styles/lenis.css";
// import gsap from "gsap";
import Lenis from "lenis";

// Script to handle Lenis library settings for smooth scrolling
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// // Select wave elements
// const waves = document.querySelectorAll('.wave');

// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY;

//   // Apply parallax effect based on scroll position
//   waves.forEach((wave, index) => {
//     const speed = 0.2 + index * 0.1; // Different speed for each wave
//     gsap.to(wave, {
//       y: scrollY * speed,
//       duration: 0.5,
//       ease: "power1.out"
//     });
//   });
// });
