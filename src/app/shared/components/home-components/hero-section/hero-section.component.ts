import { Component } from '@angular/core';
import { LucideAngularModule, ChevronRight } from 'lucide-angular';
import {Router} from "@angular/router"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [LucideAngularModule,CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  readonly ChevronRight=ChevronRight

  constructor(private router:Router){}

  handleClick(){
    this.router.navigate(["bookstore"])
  }
  
  
}
