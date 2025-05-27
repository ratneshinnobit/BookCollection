import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../home-components/hero-section/hero-section.component';
import { BookStoreComponent } from "../../home-components/book-store/book-store.component";
import { TopTrendingBookComponent } from "../../home-components/top-trending-book/top-trending-book.component";
import { BrowseGenresComponent } from "../../home-components/browse-genres/browse-genres.component";
import { CustomerReviewComponent } from "../../home-components/customer-review/customer-review.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, BookStoreComponent, TopTrendingBookComponent, BrowseGenresComponent, CustomerReviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
