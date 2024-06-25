import gsap from "gsap";

export function rightButtonAnimation() {
  return gsap.from(`.switcherWrapper .englishBtn`, {
    x: -100,
    duration: 1,
    ease: "bounce.out",
    opacity: 0,
    autoAlpha: 0
  })
}

export function leftButtonAnimation() {
  return gsap.from(`.switcherWrapper .arabicBtn`, {
    x: 100,
    duration: 1,
    ease: "bounce.out",
    opacity: 0,
    autoAlpha: 0
  })
}