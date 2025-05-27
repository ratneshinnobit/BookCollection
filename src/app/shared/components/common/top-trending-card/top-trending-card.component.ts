import { Component, Input, input } from '@angular/core';
import { LucideAngularModule, MoveUpRight } from 'lucide-angular';
import { ITrending } from '../../../../core/model/trendingbook.model';

@Component({
  selector: 'app-top-trending-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './top-trending-card.component.html',
  styleUrl: './top-trending-card.component.css'
})
export class TopTrendingCardComponent {
  readonly MoveUpRight=MoveUpRight
  @Input() trendingBook!:ITrending

}
