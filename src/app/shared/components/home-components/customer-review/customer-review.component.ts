import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-customer-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-review.component.html',
  styleUrl: './customer-review.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class CustomerReviewComponent {
  reviews = [
    {
      name: 'Jordan',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!',
      designation: 'Tech Lead',
      image: 'assets/img/customer-review.png'
    },
    {
      name: 'Alice',
      message: 'This service was fantastic. The team was responsive and helpful.',
      designation: 'Product Manager',
      image: 'assets/img/customer-review.png'
    },
    {
      name: 'Robert',
      message: 'I would definitely recommend this company to my colleagues!',
      designation: 'UX Designer',
      image: 'assets/img/customer-review.png'
    }, {
      name: 'Jordan',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!',
      designation: 'Tech Lead',
      image: 'assets/img/customer-review.png'
    },
    {
      name: 'Alice',
      message: 'This service was fantastic. The team was responsive and helpful.',
      designation: 'Product Manager',
      image: 'assets/img/customer-review.png'
    },
    {
      name: 'Robert',
      message: 'I would definitely recommend this company to my colleagues!',
      designation: 'UX Designer',
      image: 'assets/img/customer-review.png'
    }
  ];
  selectedIndex = 0;

  onSlideChange(event: any) {
    this.selectedIndex = event.realIndex;
  }
  

}
