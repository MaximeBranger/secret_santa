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

const LANDING = {};
LANDING.intro = document.querySelector(".intro-screen");
LANDING.continue = LANDING.intro.querySelector(".intro-screen__shape");
LANDING.plop = LANDING.continue.querySelector(".start_1")
LANDING.test = LANDING.continue.querySelector(".intro-screen_shape_2")
LANDING.path = LANDING.test.querySelector("path");

const svgAnimation_two = () => {
	console.log("Animation 2");

	anime({
		targets: LANDING.intro,
		duration: 2000,
		easing: "easeInOutSine",
		translateY: "calc(-300vh - 130px)"
	});

	anime({
		targets: LANDING.path,
		duration: 1500,
		easing: "easeInOutSine",
		d: LANDING.path.getAttribute("pathdata:id")
	});
};

LANDING.plop.addEventListener("click", svgAnimation_two);