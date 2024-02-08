import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Input() all: number = 0;
  @Input() available: number = 0;
  @Input() notAvailable: number = 0;

  selectedRadioButtonValue: string = 'All';

  @Output()
  filterRadioButtonSelectedChanged: EventEmitter<string> = new EventEmitter<string>;
  
  onRadioButtonSelectedChanged(){
    this.filterRadioButtonSelectedChanged.emit(this.selectedRadioButtonValue);
   
  }
}
