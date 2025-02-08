import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  productPhotos = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg',
  ];

  thumbPhotos = [
    'images/image-product-1-thumbnail.jpg',
    'images/image-product-2-thumbnail.jpg',
    'images/image-product-3-thumbnail.jpg',
    'images/image-product-4-thumbnail.jpg',
  ];

  photoIndex = signal<number>(0);

  setPhotoIndex(value: number) {
    if (!isNaN(value)) {
      this.photoIndex.set(value);
    }
  }
}
