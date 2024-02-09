import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchValue: string = '';

  changeSearchValue(event: Event){
    // console.log((<HTMLInputElement>event.target).value);
    this.searchValue = (<HTMLInputElement>event.target).value;
  }

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchValue)
  }

}
