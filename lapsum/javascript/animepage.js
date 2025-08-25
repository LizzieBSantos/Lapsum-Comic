gsap.registerPlugin(MotionPathPlugin);
MorphSVGPlugin.convertToPath("circle, rect");
gsap.set("#paperPlaneRoute", { drawSVG: "0% 0%"});
gsap.set("#rectSentItems", { x: "-=240"});
const tl= gsap.timeline();

let ranOnce = false;

function onBtnUp()