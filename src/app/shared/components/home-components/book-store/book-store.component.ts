import { Component } from '@angular/core';
import { Heading } from 'lucide-angular';
import { BookStoreCardComponent } from "../../common/book-store-card/book-store-card.component";
import { CommonModule } from '@angular/common';
import { TopTrendingBookComponent } from "../top-trending-book/top-trending-book.component";

@Component({
  selector: 'app-book-store',
  standalone: true,
  imports: [BookStoreCardComponent, CommonModule, ],
  templateUrl: './book-store.component.html',
  styleUrl: './book-store.component.css'
})
export class BookStoreComponent {

  bookCardList=[
    {
      id:1,
      image:"../../../../../assets/img/book1.png",
      heading:"A digital bookstore",
      description:"The best reading or listening experience on any computer ,tablet and smartphone Read or listen anywhere ,anytime",
      color:"#fff570"

    },
    {
      id:2,
      image:"../../../../../assets/img/book5.png",
      heading:"A digital bookstore",
      description:"The best reading or listening experience on any computer ,tablet and smartphone Read or listen anywhere ,anytime",
      color:"#c3f6f3"

    },
    {
      id:3,
      image:"../../../../../assets/img/book3.png",
      heading:"A digital bookstore",
      description:"The best reading or listening experience on any computer ,tablet and smartphone Read or listen anywhere ,anytime",
      color:"#ffc2be"
    }
  ]

}
