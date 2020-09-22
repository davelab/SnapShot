import {Model} from './core';

export class Photo extends Model {
  get defaults() {
    return {
      id: '',
      server: '',
      farm: '',
      secret: '',
      title: '',
      latitude: '',
      longitude: '',
    };
  }

  get imageURL() {
    return `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}_m.jpg`;
  }
}   