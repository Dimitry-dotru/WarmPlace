function openNav() {
  document.getElementById("mySidepanel").style.width = "50vw";
  document.getElementById("mySidepanel").style.minWidth = "200px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.minWidth = "0";
  document.getElementById("mySidepanel").style.width = "0";
}

$('.slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

  $(".num").text(slick.slickCurrentSlide() + 1)
  $(".amnt").text(slick.slideCount)

});

$(document).ready(function () {

  $('.slider').slick({
    centerMode: true,
    centerPadding: '0',
    appendArrows: ".slider-tools-btns",
    slidesToShow: 3,
    prevArrow: '<div class="slick-prev">Previous</div>',
    nextArrow: '<div class="slick-next">Next</div>',
    infinite: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          centerPadding: '120px',
          slidesToShow: 1
        }
      }
    ]
  });

});


moreText = document.getElementById("more");
moreText.style.display = "none";

function myFunction() {
  moreText = document.getElementById("more"),
  btnText = document.getElementById("myBtn");


  if (moreText.style.display === "inline") {
    btnText.innerHTML = "Читать далее";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Спрятать";
    moreText.style.display = "inline";
  }

}

mybutton = document.getElementById("btnUp");

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}