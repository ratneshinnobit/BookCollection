import { Component } from '@angular/core';
import { TopTrendingCardComponent } from '../../common/top-trending-card/top-trending-card.component';
@Component({
  selector: 'app-top-trending-book',
  standalone: true,
  imports: [TopTrendingCardComponent],
  templateUrl: './top-trending-book.component.html',
  styleUrl: './top-trending-book.component.css'
})
export class TopTrendingBookComponent {

  treandingBookList=[
    {
      id:1,
      heading:"A digital bookstore",
      link:"/bookstore",
      image:"../../../../../assets/img/what-not-to-say.png",
      price:"33"
    },
    {
      id:1,
      heading:"A digital bookstore",
      link:"/bookstore",
      image:"../../../../../assets/img/what-not-to-say.png",
      price:"33"
    },
    {
      id:1,
      heading:"A digital bookstore",
      link:"/bookstore",
      image:"../../../../../assets/img/what-not-to-say.png",
      price:"33"
    },
  
  ]


}
