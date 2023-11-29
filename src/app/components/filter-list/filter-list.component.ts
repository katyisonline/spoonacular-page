import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent {

  showContent(){
    const content = document.getElementById('hidden-items');
  }
}
