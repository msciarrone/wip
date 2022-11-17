var bee = document.getElementById("img");
document.addEventListener("mousemove", getMouse);

bee.style.position = "absolute"; //css
var beepos = { x: 0, y: 0 };

fired = 0;

var mouse = { x: 0, y: 0 }; //mouse.x, mouse.y

var dir = "right";
function getMouse(e) {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
  //Checking directional change
  if (mouse.x > beepos.x) {
    dir = "right";
  } else {
    dir = "left";
  }
}

function followMouse() {
  fired += 1;
  if (fired == 1000) {
    fired = 0;
  }
  //1. find distance X , distance Y
  var distX = mouse.x - beepos.x;
  var distY = mouse.y - beepos.y;
  //Easing motion
  //Progressive reduction of distance
  beepos.x += distX / 5;
  beepos.y += distY / 2;

  bee.style.left = beepos.x + "px";
  bee.style.top = beepos.y + "px";
  var div = document.createElement("div");
  div.className = "img";
  div.style.left = beepos.x + "px";
  div.style.top = beepos.y + "px";
  var x = document.getElementById("content").childElementCount;
  var backgroundList = [
    "https://images.unsplash.com/photo-1568733873715-f9d497a47ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1589299756654-99734377e023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    "https://images.unsplash.com/photo-1571254233438-9d6a515607bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1550322532-b97e95da20b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  ];
  var randBack = Math.floor(Math.random() * 4);
  div.style.backgroundImage = "url('" + backgroundList[randBack] + "')";

  if (x < 5) {
    if (fired % 5 == 0) {
      document.getElementById("content").appendChild(div);
    }
  } else {
    document
      .getElementById("content")
      .removeChild(document.getElementById("content").childNodes[0]);
    if (fired % 5 == 0) {
      document.getElementById("content").replaceChild(div, old);
    }
  }
}

function mobile() {
  fired += 1;
  if (fired == 1000) {
    fired = 0;
  }
  //1. find distance X , distance Y
  var randX = Math.floor(Math.random() * 100);
  var randY = Math.floor(Math.random() * 100);
  var distX = randX;
  var distY = randY;
  //Easing motion
  //Progressive reduction of distance
  beepos.x = distX;
  beepos.y = distY;

  bee.style.left = beepos.x + "px";
  bee.style.top = beepos.y + "px";
  var div = document.createElement("div");
  div.className = "img";
  div.style.left = beepos.x + "px";
  div.style.top = beepos.y + "px";
  var x = document.getElementById("content").childElementCount;
  var backgroundList = [
    "https://images.unsplash.com/photo-1568733873715-f9d497a47ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1589299756654-99734377e023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    "https://images.unsplash.com/photo-1571254233438-9d6a515607bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1550322532-b97e95da20b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  ];
  var randBack = Math.floor(Math.random() * 4);
  div.style.backgroundImage = "url('" + backgroundList[randBack] + "')";

  if (x < 5) {
    if (fired % 5 == 0) {
      document.getElementById("content").appendChild(div);
    }
  } else {
    document
      .getElementById("content")
      .removeChild(document.getElementById("content").childNodes[0]);
    if (fired % 5 == 0) {
      document.getElementById("content").replaceChild(div, old);
    }
  }
}

if ($(window).width() < 960) {
  window.setInterval(function () {
    mobile();
  }, 100);
} else {
  document.onmousemove = function () {
    followMouse();
  };
}

$(".button-container").click(function () {
  $(".button-container").toggleClass("open");
  $(".menu").toggleClass("open");
});

var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function noise(ctx) {

  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    idata = ctx.createImageData(w, h),
    buffer32 = new Uint32Array(idata.data.buffer),
    len = buffer32.length,
    i = 0;

  for (; i < len;)
    buffer32[i++] = ((255 * Math.random()) | 0) << 24;

  ctx.putImageData(idata, 0, 0);
}

var toggle = true;

// added toggle to get 30 FPS instead of 60 FPS
(function loop() {
  toggle = !toggle;
  if (toggle) {
    requestAnimationFrame(loop);
    return;
  }
  noise(ctx);
  requestAnimationFrame(loop);
})();

function imgNext(on) {
  if (on == 1) {
    $(".one").removeClass("active");
    $(".two").addClass("active");
  } else if (on == 2) {
    $(".two").removeClass("active");
    $(".three").addClass("active");
  } else if (on == 3) {
    $(".three").removeClass("active");
    $(".four").addClass("active");
  }
}

const MathUtils = {
  lineEq: (y2, y1, x2, x1, currentVal) => {
    // y = mx + b
    var m = (y2 - y1) / (x2 - x1),
      b = y1 - m * x1;
    return m * currentVal + b;
  },
  lerp: (a, b, n) => (1 - n) * a + n * b,
  getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
};

const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  posx = e.clientX;
  posy = e.clientY;
  return { x: posx, y: posy };
};

let winsize;
const calcWinsize = () =>
  (winsize = { width: window.innerWidth, height: window.innerHeight });
calcWinsize();
window.addEventListener("resize", calcWinsize);

let mousepos = { x: winsize.width / 2, y: winsize.height / 2 };
window.addEventListener("mousemove", (ev) => (mousepos = getMousePos(ev)));

class Cursor {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.circle = this.DOM.el.querySelector(".js-cursor-inner");
    this.DOM.arrows = {
      right: this.DOM.el.querySelector(".js-cursor-right"),
      left: this.DOM.el.querySelector(".js-cursor-left")
    };
    this.bounds = this.DOM.circle.getBoundingClientRect();
    this.lastMousePos = { x: 0, y: 0 };
    this.scale = 1;
    this.lastScale = 1;
    requestAnimationFrame(() => this.render());
  }
  render() {
    this.lastMousePos.x = MathUtils.lerp(
      this.lastMousePos.x,
      mousepos.x - this.bounds.width / 2,
      0.2
    );
    this.lastMousePos.y = MathUtils.lerp(
      this.lastMousePos.y,
      mousepos.y - this.bounds.height / 2,
      0.2
    );
    this.lastScale = MathUtils.lerp(this.lastScale, this.scale, 0.15);
    this.DOM.circle.style.transform = `translateX(${this.lastMousePos.x}px) translateY(${this.lastMousePos.y}px) scale(${this.lastScale})`;
    requestAnimationFrame(() => this.render());
  }
  enter() {
    this.scale = 1.9;
  }
  leave() {
    this.scale = 1;
  }
  click() {
    this.lastScale = 0.4;
  }
  showArrows() {
    TweenMax.to(Object.values(this.DOM.arrows), 1, {
      ease: Expo.easeOut,
      startAt: { x: (i) => (i ? 10 : -10) },
      opacity: 1,
      x: 0
    });
  }
  hideArrows() {
    TweenMax.to(Object.values(this.DOM.arrows), 1, {
      ease: Expo.easeOut,
      x: (i) => (i ? 10 : -10),
      opacity: 0
    });
  }
}

// Custom mouse cursor
const cursor = new Cursor(document.querySelector(".js-cursor"));

// Activate the enter/leave/click methods of the custom cursor when hovering in/out on every <a> (and the close content ctrl)
const links = document.querySelectorAll(".js-link");

[...links].forEach((link) => {
  link.addEventListener("mouseenter", () => cursor.enter());
  link.addEventListener("mouseleave", () => cursor.leave());
});
