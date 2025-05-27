import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ValueServiceService } from '../../../../services/value-service.service';

@Component({
  selector: 'app-our-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-values.component.html',
  styleUrl: './our-values.component.css'
})
export class OurValuesComponent implements OnInit {
  values:any
  valueService = inject(ValueServiceService)

  ngOnInit(): void {
    this.valueService.getValues().subscribe((data)=>{
      this.values=data.values
    })
    
    

    
  }



}
