import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Shopping List';

  // grocery list holding mock data
  groceryList: GroceryItem[] = [
    { name: 'Bananas' },
    { name: 'Apples' },
    { name: 'Oranges' },
    { name: 'Bread' },
    { name: 'Milk' },
    { name: 'Chicken' }
  ];

  onAddItem(name: string) {
    this.groceryList.push(new GroceryItem(name));
  }
}

export class GroceryItem {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}