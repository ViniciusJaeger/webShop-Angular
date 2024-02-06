import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchValue: string = 'Penis';

  changeSearchValue(event: Event){
    // console.log((<HTMLInputElement>event.target).value);
    this.searchValue = (<HTMLInputElement>event.target).value;
  }
}
