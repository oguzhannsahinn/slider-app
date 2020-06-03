$(document).ready(function () {

  // add image click
  $('body').on('click','#addImageButton',function () {
    $('#addImageInput').removeClass('d-none');
    $('#createItemButton').removeClass('d-none');
  })

  // add text click
  $('body').on('click','#addTextButton',function () {
    $('#addTextInput').removeClass('d-none');
    $('#createItemButton').removeClass('d-none');
  })

  // create item function
  $('body').on('click','#createItemButton',function () {
    
    var img = document.createElement('img');
    img.classList = 'card-img-top';
    img.src = $('#addImageInput').val();

    var text = document.createElement('p');
    text.classList = 'card-text';
    text.innerHTML = $('#addTextInput').val();

    var cardBody = document.createElement('div');
    cardBody.classList = 'card-body';
    cardBody.append(text);

    var card = document.createElement('div');
    card.classList = 'card col-5 p-0 mb-5';
    card.setAttribute('id','item');
    card.append(img, cardBody);
    $('.items-wrapper').prepend(card);

    $('.items-wrapper').removeClass('d-none');
  });

})