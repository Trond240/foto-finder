class Photo {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.caption = obj.caption;
    this.url = obj.url;
    this.favorite = false;
  }
  saveToStorage() {

  }
  deleteFromStorage() {

  }
  favoritePhoto() {
    this.favorite = !this.favorite;
  }
}
