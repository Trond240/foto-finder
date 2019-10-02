var cardTitle = document.getElementById('title');
var input = document.querySelector('.input')
var cardCaption = document.getElementById('caption');
var addPhotoAlbumButton = document.querySelector('.add-button');
var makePhotoCard = document.querySelector('.add-button');
var photos = [];
var addPhotoUrl = document.querySelector('.photo-url');
var mainContainer = document.querySelector('.photo-album');

// asideTitleInput.addEventListener('input', disableEnterButton);
addPhotoAlbumButton.addEventListener('click', makeCard);
document.querySelector('.add-button').addEventListener('click', showCard);

// Disable add to album button if information is missing in the input feilds
// function disableEnterButton() {
//   if (input.value.length > 0) {
//     makePhotoCard.disabled = false;
//   } else {
//     makePhotoCard.disabled = true;
//   }
// };

//Instantiate a new instance of the photo class on add to album button.
function makeCard() {
  var photo = new Photo ({id: Date.now(), title: cardTitle.value, caption: cardCaption.value, url: addPhotoUrl.value});
  photos.push (photo);
  showCard(photo);
  return photo;
 photos
};

//on click cards should appear in the main section
function showCard(event) {
  event.preventDefault();
  mainContainer.innerHTML = `
  <section class='photo-card'>
    <p class='card-title'><span>${cardTitle.value}</span>
      <div class ='photo-holder'>
      <p class= 'card-photo' data-id='${Date.now()}'>${addPhotoUrl.value}</p>
      </div>
      <div class ='card-caption'><span>${cardCaption.value}</span>
      </div>
      <div class='card-buttons'>
        <button class ='delete'></button>
        <button class ='like'></button>
      </div>
    </section>`+ mainContainer.innerHTML;
};
