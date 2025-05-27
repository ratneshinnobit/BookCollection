import { Component } from '@angular/core';
import { LucideAngularModule, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  readonly ChevronRight=ChevronRight
}
