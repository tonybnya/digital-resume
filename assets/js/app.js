let tl = gsap.timeline();

tl.from(".picture", { duration: 5, opacity: 0, scale: .3, ease: "back" });
tl.to(".picture", { duration: 5, rotation: 360, ease: "back" });

gsap.to(".icon", { duration: 10, rotation: 360 , backgroundColor: "#B8A17A", borderRadius: "50%", padding: "5px" });

gsap.to(".pointer", { duration: 10, rotation: 360 , backgroundColor: "#FFFFFF", borderRadius: "50%", padding: "3px" });

gsap.to(".joinme, .fa-file, .fa-brands", { duration: 10, rotation: 360 });