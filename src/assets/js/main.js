// SplideJS
document.addEventListener("DOMContentLoaded", function () {
  // Vertical slider
  const verticleSlider = new Splide(".splide__vertical", {
    direction: "ttb",
    height: "100vh",
    arrows: false,
    wheel: true,
    speed: 1000,
    waitForTransition: true,
    classes: {
      pagination: "splide__pagination splide__pagination--vertical",
      page: "splide__pagination__page splide__pagination__page--vertical",
    },
  });
  verticleSlider.mount();
});

// BG Gradient Canvas
var canvas = document.querySelector(".js-bg-gradient");
var ctx = canvas.getContext("2d");

function Pixel(x, y) {
  this.x = x;
  this.y = y;
  this.hue = Math.floor(Math.random() * 360);
  var direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = (Math.random() * 30 + 20) * 0.01 * direction;
}

Pixel.prototype.update = function () {
  this.hue += this.velocity;
};

Pixel.prototype.render = function (ctx) {
  var hue = Math.round(this.hue);
  ctx.fillStyle = "hsl(" + hue + ", 100%, 50% )";
  ctx.fillRect(this.x, this.y, 1, 1);
};

var pixels = [
  new Pixel(0, 0),
  new Pixel(1, 0),
  new Pixel(0, 1),
  new Pixel(1, 1),
];

function animate() {
  pixels.forEach(function (pixel) {
    pixel.update();
    pixel.render(ctx);
  });
  requestAnimationFrame(animate);
}

animate();

// Toggle Resources
const resources = document.querySelector(".resources");
const btnResources = document.querySelector(".resources > h3");

btnResources.addEventListener("click", function () {
  resources.classList.toggle("resources--active");
});

document.addEventListener("click", function (e) {
  const target = e.target;
  if (
    target.closest(".resources") !== resources &&
    resources.classList.contains("resources--active")
  ) {
    resources.classList.remove("resources--active");
  }
});

// Add Noise
const btnAddNoise = document.querySelector(".noise > button");
const canvasContainer = document.querySelector(".canvas__container");
const noiseControls = document.querySelector(".noise__controls");

btnAddNoise.addEventListener("click", function (e) {
  if (!canvasContainer.classList.contains("canvas__container--noise")) {
    btnAddNoise.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
    </svg>Remove Noise`;
  } else {
    btnAddNoise.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>Add Noise`;
  }
  canvasContainer.classList.toggle("canvas__container--noise");
  noiseControls.classList.toggle("noise__controls--active");
});

noiseControls.addEventListener("change", function (e) {
  const target = e.target;
  const value = target.value;
  const svgNoise = document.querySelector("feTurbulence");

  function syncInputValues(className, inputValue) {
    document.querySelectorAll(`.${className}`).forEach((el) => {
      el.value = inputValue;
      el.setAttribute("value", inputValue);
    });
  }

  function resetNoise() {
    canvasContainer.classList.remove("canvas__container--noise");
    setTimeout(() => {
      canvasContainer.classList.add("canvas__container--noise");
    }, 50);
  }

  if (target.classList.contains("js-numoctaves")) {
    syncInputValues(target.getAttribute("class"), value);
    svgNoise.setAttribute("numOctaves", value);
    return resetNoise();
  }

  if (target.classList.contains("js-basefrequency")) {
    syncInputValues(target.getAttribute("class"), value);
    svgNoise.setAttribute("baseFrequency", value);
    return resetNoise();
  }
});

// CTA GSAP
// CTA 1
const ctaBtn1 = document.querySelector(".js-cta-gsap-1");
const svg1 = document.querySelector(".js-cta-gsap-1 svg");
const paths1 = document.querySelectorAll(".js-cta-gsap-1 path");

gsap.to(svg1, {
  rotate: 360,
  transformOrigin: "center",
  repeat: -1,
  ease: "linear",
  duration: 30,
});

const timeline1 = gsap
  .timeline({
    paused: true,
    defaults: {
      ease: "none",
    },
  })
  .to(svg1, {
    scale: 1.3,
    // ease: "Bounce.easeOut",
    duration: 1,
  })
  .to(
    paths1,
    {
      scale: 1.5,
      stagger: 0.01,
      // ease: "Power2.easeOut",
      duration: 0.02,
      transformOrigin: "center",
    },
    "-=1"
  );

ctaBtn1.addEventListener("mouseenter", function () {
  // timeline1.play();
  timeline1.tweenFromTo(timeline1.time(), timeline1.duration(), {
    duration: 1.5,
    ease: "Bounce.easeOut",
  });
});

ctaBtn1.addEventListener("mouseleave", function () {
  // timeline1.reverse();
  timeline1.tweenFromTo(timeline1.time(), 0, {
    duration: 1.5,
    ease: "Bounce.easeOut",
  });
});

// CTA 2
const ctaBtn2 = document.querySelector(".js-cta-gsap-2");
const svg2 = document.querySelector(".js-cta-gsap-2 svg");
const paths2 = document.querySelectorAll(".js-cta-gsap-2 path");

gsap.to(svg2, {
  rotate: 360,
  transformOrigin: "center",
  repeat: -1,
  ease: "linear",
  duration: 30,
});

const timeline2 = gsap
  .timeline({ paused: true })
  .to(svg2, {
    scale: 1.3,
    ease: "Power2.easeOut",
    duration: 1,
  })
  .to(
    paths2,
    {
      scale: 1.5,
      stagger: {
        each: 0.01,
        from: "edges",
      },
      ease: "Power2.easeOut",
      duration: 0.02,
      transformOrigin: "center",
    },
    "-=1"
  );

ctaBtn2.addEventListener("mouseenter", function () {
  timeline2.play();
});

ctaBtn2.addEventListener("mouseleave", function () {
  timeline2.reverse();
});

// Scroll Speed
