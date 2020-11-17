// FOR CUSTOM MOUSE CURSOR
var cursor = document.querySelector(".cursor"),
  follower = document.querySelector(".cursor-follower");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});


// FOR BURGER MENU ICON
var btn = document.querySelector(".menu-btn");
var btn_1 = document.querySelector(".menu-overlay");
var btn_2 = document.querySelector(".menu");

btn.addEventListener("click", (e) => {
  btn.classList.toggle("open");
  btn_1.classList.toggle("appear");
  btn_2.classList.toggle("appear");
});

btn_1.addEventListener("click", (e) => {
  btn.classList.remove("open");
  btn_1.classList.remove("appear");
  btn_2.classList.remove("appear");
});


/*  PROJECT IMAGE OVERLAY ON MOUSE OVER
    IN HOME PAGE
*/
var $cursor = $(".cursor-2"),
  $overlay = $(".project-overlay");

function moveCircle(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.pageX,
      top: e.pageY
    },
    delay: 0.03
  });
}

$(".p-1").hover(function() {
  $(".cursor-2").css({ "background-image": "url(../images/image-1.jpg)" });
});
$(".p-2").hover(function() {
  $(".cursor-2").css({ "background-image": "url(../images/image-2.jpg)" });
});
$(".p-3").hover(function() {
  $(".cursor-2").css({ "background-image": "url(../images/image-3.jpg)" });
});
$(".p-4").hover(function() {
  $(".cursor-2").css({ "background-image": "url(../images/image-4.jpg)" });
});

var flag = false;
$($overlay).mousemove(function() {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay).on("mousemove", moveCircle);
});

$($overlay).mouseout(function() {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});



/* PROJECT BOX HORIZONTAL SCROLL IN PROJECT PAGE */
var blocks = document.getElementsByClassName('block');
var container = document.getElementsByClassName('project-box');
var hs = new HorizontalScroll.default({
	blocks : blocks,
	container: container,
  isAnimated: true,
  springEffect: 0.8,
})