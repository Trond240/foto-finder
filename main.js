var cardTitle = document.getElementById('title');
var input = document.querySelector('.input')
var cardCaption = document.getElementById('caption');
var addPhotoAlbumButton = document.querySelector('.add-button');
var makePhotoCard = document.querySelector('.add-button');
var makeFavoriteBtn = document.querySelector('.like');
var makeFavoriteBtn = document.querySelector('.delete');
var photoArr = [];
var addPhotoUrl = document.querySelector('.photo-url');
var mainContainer = document.querySelector('.photo-album');
var deleteCard = document.querySelector('.delete');
var likecard = document.querySelector('.like')

// asideTitleInput.addEventListener('input', disableEnterButton);
addPhotoAlbumButton.addEventListener('click', makeCard);
mainContainer.addEventListener('click', styleFavorite);

document.querySelector('.add-button').addEventListener('click', showCard);

//add handler for main section of the document

function mainClickHandler() {
  styleFavorite();
};
// Disable add to album button if information is missing in the input feilds
// function disableEnterButton() {
//   if (input.value.length > 0) {
//     makePhotoCard.disabled = false;
//   } else {
//     makePhotoCard.disabled = true;
//   }
// };

// on click a new Instantiation of the photo class shoukd be  created.
function makeCard() {
  var photo = new Photo ({id: Date.now(), title: cardTitle.value, caption: cardCaption.value, url: addPhotoUrl.value});
  photoArr.push (photo);
  showCard(photo);
  return photo;
 photoArr
};

//on click cards should appear in the main section
function showCard(event) {
  event.preventDefault();
  mainContainer.innerHTML = `
  <section class='photo-card'>
    <p class='card-title'><span>${cardTitle.value}</span>
      <div class='photo-holder'>
      <p class='card-photo' data-id='${Date.now()}'><img id='image' src='${addPhotoUrl.value}'</p>
      </div>
      <div class ='card-caption'><span>${cardCaption.value}</span>
      </div>
      <div class='card-buttons'>
        <button class ='delete'></button>
        <button class ='like'></button>
      </div>
    </section>`+ mainContainer.innerHTML;
};

// function findIndex(event) {
//   // var photoId = event.target.closest('.card-photo').id;
//   // console.log("photoId", photoId);
//     console.log(event)
//     // for (var i = 0; i < photoArr.length; i++) {
//       if (event.target.dataset.id === photoArr[i].id) {
//         return photoArr[i];
//       }
//       styleFavorite(event);
//   }
// };

//Target id in photo array to 
function findIndex(event) {
  var photoId = event.target.closest('.like').id;
  console.log("photoId", photoId);
    for (var i = 0; i < photoArr.length; i++) {
      if (photoArr[i].id === photoArr) {
        return photoArr[i];
      }
    }
};
//
function styleFavorite(event) {
  var photoObj = findIndex(event);
    photoObj.favoritePhoto();
};

// function findIndex(event) {
//     for (var i = 0; i < photoArr.length; i++) {
//       if (event.target.dataset.id == photoArr[i].id) {
//         return photoArr[i];
//       }
//     }
// };
