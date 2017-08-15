import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box!!!</h1>
    <h3>Click on a recipe to show the details</h3><br><br>
    <ul class="list-unstyled" *ngFor="let currentRecipe of recipes">
      <li (click)="viewRecipe(currentRecipe)"><div id="title"><h3>{{currentRecipe.title}}</h3></div></li>
    </ul>
    <br>
    <div *ngIf="selectedRecipe" >
      <h4 (click)="finishedViewing()">Ingredients:</h4>
      <ul *ngFor="let currentIngredient of selectedRecipe.ingredients">
        <li id="ingredient"><h5>{{currentIngredient}}</h5></li>
      </ul>
      <h4>INSTRUCTIONS:</h4>
      <ul *ngFor="let currentDirection of selectedRecipe.directions">
        <li id="direction"><h5>{{currentDirection}}</h5></li>
      </ul>
      <br>
      <label>Edit your recipe</label><br>
      <input [(ngModel)]="selectedRecipe.title"><br>
      <textarea [(ngModel)]="selectedRecipe.ingredients"></textarea><br>
      <textarea [(ngModel)]="selectedRecipe.directions"></textarea><br>
      <button (click)="editRecipe(selectedRecipe)">Edit</button>

    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Brownies', ['Flour', 'chocolate', 'sprinkles', 'butter'], ['mix together', 'eat']),
    new Recipe('Pizza', ['Crust', 'chicken', 'sauce', 'CHEESE'], ['throw final three ingredients on crust', 'bake in oven', 'wait five minutes', 'eat'])
  ];
  selectedRecipe = null;

  viewRecipe(currentRecipe) {
    this.selectedRecipe = currentRecipe;
  }

  finishedViewing() {
    this.selectedRecipe = null;
  }

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
    this.selectedRecipe = null;
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string[]) { }
}
