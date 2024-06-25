import gsap from "gsap";

export function buttonAnimation(element: HTMLButtonElement | null) {
  return gsap.fromTo(element, {
    autoAlpha: 1,
    opacity: 0,
    y: -100
  }, {
    opacity: 1,
    y: 0,
    duration: 1
  })
}