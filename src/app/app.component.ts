import { Component } from '@angular/core';

export const uuid = (a?: any, b?: any) => {
  for (
    b = a = '';
    a++ < 36;
    b += (a * 51) & 52 ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16) : '-'
  );
  return b;
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Shopping List';

  // grocery list holding mock data
  groceryList: GroceryItem[] = [
    { name: 'Bananas', id: uuid()},
    { name: 'Apples', id: uuid()},
    { name: 'Oranges', id: uuid() },
    { name: 'Bread', id: uuid() },
    { name: 'Milk', id: uuid() },
    { name: 'Chicken', id: uuid() }
  ];

  editingItem = new GroceryItem('');

  save() {
    this.editingItem.id 
      ? this.editItem()
      : this.addItem();
      this.cancelEdit();
  }

  onDelete(item: GroceryItem) {
    const groceryList = [...this.groceryList];
    this.groceryList = groceryList.filter(groceryItem => groceryItem.name !== item.name);
  }

  setEditingItem(item: GroceryItem) {
    this.editingItem = new GroceryItem(item.name);
    this.editingItem.id = item.id;
  }

  editItem() {
    const index = this.groceryList.findIndex(item => item.id === this.editingItem.id);
    this.groceryList.splice(index, 1, this.editingItem);
  }

  addItem() {
    this.editingItem.id = uuid();
    this.groceryList.push(this.editingItem);
  }

  cancelEdit() {
    this.editingItem = new GroceryItem('');
  }
}

export class GroceryItem {
  name: string;
  id?: string;

  constructor(name: string) {
    this.name = name;

  }
}