$(document).ready(function () {

  var infinite = false;
  var arrows = false;
  var autoPlay = false;
  var slidesToShow = 3;
  var slidesToScroll = 3;
  var slidesSpeed = 1000;

  $('body').on('click', '#createButton', function () {
    const sliderItemsCount = $('.card').length;

    var sliderContainer = $("<div/>")
      .addClass("multiple-items d-none")
      .appendTo("body");

    var sliderItem = $("<div/>")
      .addClass("box")

    sliderContainer.append(sliderItem);
    for (var i = 0; i < sliderItemsCount; i++) {

      sliderContainer.append(sliderItem.clone());
      $('.card').removeClass('col-5');
      $('.box')[i].append($('.card')[i]);
    }
    
    infinite = $('#infinite')[0].checked;
    arrows = $('#arrows')[0].checked;
    autoPlay = $('#autoPlay')[0].checked;
    slidesToShow = parseInt($('#slidesToShow').val());
    slidesToScroll = parseInt($('#slidesToScroll').val());
    slidesSpeed = $('#slidesSpeed').val();

    try {
      $('.create-slider-wrapper').addClass('d-none')

      slider();
      $('.multiple-items').removeClass('d-none')
      $('#prevButton').addClass('d-none')

    } catch (error) {
      console.log("slider error " + error);
    }
  });

  function slider() {

    $('.multiple-items').slick({
      infinite: infinite,
      arrows: arrows,
      autoPlay: autoPlay,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll,
      speed: slidesSpeed
    });
  }
});