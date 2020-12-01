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



/* TRANSITION IN PROJECT PAGE */
var $activeSlide = $('.active'),
$homeSlide = $(".slide"),
$slideNavPrev = $("#prev"),
$slideNavNext = $("#next");

function init() {
      TweenMax.set($homeSlide.not($activeSlide), {autoAlpha: 0});
      TweenMax.set($slideNavPrev, {autoAlpha: 0.2});
}

init();

function goToNextSlide(slideOut, slideIn, slideInAll) {
      var t1 = new TimelineLite(),
      slideOutContent = slideOut.find('.box-content'),
      slideInContent = slideIn.find('.box-content'),
      slideOutImg = slideOut.find('.box-img'),
      slideInImg = slideIn.find('.box-img'),
      index = slideIn.index(),
      size = $homeSlide.length;
      console.log(index);

      if(slideIn.length !== 0) {
      t1
      .set(slideIn, {autoAlpha: 1, className: '+=active'})
      .set(slideOut, {className: '-=active'})
      .to(slideOutContent, 0.65, {y: "+=40px", ease: Power3.easeInOut}, 0)
      .to(slideOutImg, 0.65, {backgroundPosition :'bottom', ease: Power3.easeInOut}, 0)
      .to(slideInAll, 1, {y: "-=100%", ease: Power3.easeInOut}, 0)
      .fromTo(slideInContent, 0.65, {y: '-=40px'}, {y : 0, ease: Power3.easeInOut}, "-=0.7")
      .fromTo(slideInImg, 0.65, {backgroundPosition: 'top'}, {backgroundPosition: 'bottom', ease: Power3.easeInOut}, '-=0.7')
      }

      TweenMax.set($slideNavPrev, {autoAlpha: 1});

      if(index === size - 1){
            TweenMax.to($slideNavNext, 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
      }
};

$slideNavNext.click(function(e) {
      e.preventDefault();

      var slideOut = $('.slide.active'),
      slideIn = $('.slide.active').next('.slide'),
      slideInAll = $('.slide');

      goToNextSlide(slideOut, slideIn, slideInAll);

});

function goToPrevSlide(slideOut, slideIn, slideInAll) {
      var t1 = new TimelineLite(),
      slideOutContent = slideOut.find('.box-content'),
      slideInContent = slideIn.find('.box-content'),
      slideOutImg = slideOut.find('.box-img'),
      slideInImg = slideIn.find('.box-img'),
      index = slideIn.index(),
      size = $homeSlide.length;

      if(slideIn.length !== 0) {
      t1
      .set(slideIn, {autoAlpha: 1, className: '+=active'})
      .set(slideOut, {className: '-=active'})
      .to(slideOutContent, 0.65, {y: "-=40px", ease: Power3.easeInOut}, 0)
      .to(slideOutImg, 0.65, {backgroundPosition :'top', ease: Power3.easeInOut}, 0)
      .to(slideInAll, 1, {y: "+=100%", ease: Power3.easeInOut}, 0)
      .fromTo(slideInContent, 0.65, {y: '+=40px'}, {y : 0, ease: Power3.easeInOut}, "-=0.7")
      .fromTo(slideInImg, 0.65, {backgroundPosition: 'bottom'}, {backgroundPosition: 'top', ease: Power3.easeInOut}, '-=0.7')
      }

      TweenMax.set($slideNavPrev, {autoAlpha: 1});

      if(index === 0){
            TweenMax.to($slideNavPrev, 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
      }
};

$slideNavPrev.click(function(e) {
      e.preventDefault();

      var slideOut = $('.slide.active'),
      slideIn = $('.slide.active').prev('.slide'),
      slideInAll = $('.slide');

      goToPrevSlide(slideOut, slideIn, slideInAll);

});

/***
 * PANZOOM JS FOR DRAGGABLE CANVA
 */
var element = document.querySelector('.container');
panzoom(element, {
  minZoom: 1,
  maxZoom: 1
});