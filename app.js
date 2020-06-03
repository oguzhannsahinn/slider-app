$(document).ready(function () {

  $('body').on('click','#nextButton',function () {
    $('.set-slider-items').addClass('d-none');
    $('.slider-settings').removeClass('d-none');
    
    if(!$('.slider-settings').hasClass('d-none')) {
      $('#prevButton').removeClass('d-none');
      $('#nextButton').addClass('d-none')
    }
  });

  $('body').on('click','#prevButton',function () {
    $('.set-slider-items').removeClass('d-none');
    $('.slider-settings').addClass('d-none');
    $('#prevButton').addClass('d-none');
    $('#nextButton').removeClass('d-none')
  })  
});