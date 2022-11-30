const OPENING = {};
OPENING.intro = document.querySelector(".intro-screen_bg1");
OPENING.animation = OPENING.intro.querySelector(".heading--h1");
OPENING.path = OPENING.intro.querySelector("path");

const svgAnimation = () => {
	console.log("Animation");

	anime({
		targets: OPENING.intro,
		duration: 2000,
		easing: "easeInOutSine",
		translateY: "-150vh"
	});

	anime({
		targets: OPENING.path,
		duration: 1500,
		easing: "easeInOutSine",
		d: OPENING.path.getAttribute("pathdata:id")
	});
};

OPENING.animation.addEventListener("animationend", svgAnimation);