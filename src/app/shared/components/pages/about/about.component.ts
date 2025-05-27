import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutUsComponent } from "../../about-component/about-us/about-us.component";
import { OurValuesComponent } from "../../about-component/our-values/our-values.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AboutUsComponent, OurValuesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  values = [
    {
      image: 'assets/customer-satisfaction.jpg',
      title: 'Customer Satisfaction',
      description: 'We prioritize our customers and always aim to deliver the best experience.'
    },
    {
      image: 'assets/quality-books.jpg',
      title: 'Quality Books',
      description: 'We offer only the highest quality books for our customers, carefully selected for every taste.'
    },
    {
      image: 'assets/integrity.jpg',
      title: 'Integrity',
      description: 'We believe in honest business practices, transparent pricing, and clear communication.'
    },
    {
      image: 'assets/community.jpg',
      title: 'Community Support',
      description: 'We support literacy initiatives and strive to make books accessible to everyone.'
    }
  ];
}
