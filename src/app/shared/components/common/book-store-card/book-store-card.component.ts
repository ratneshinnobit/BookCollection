import { Component, Input } from '@angular/core';
import { IBookList } from '../../../../core/model/booklist.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-store-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-store-card.component.html',
  styleUrl: './book-store-card.component.css'
})
export class BookStoreCardComponent {
  @Input() bookDetails!:IBookList
  @Input() color!:string

}
