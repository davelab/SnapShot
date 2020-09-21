import { List } from "./core";
import { Photo } from "./photos";

class Gallery extends List {
  get model() {
    return Photo;
  }
}

export default Gallery;