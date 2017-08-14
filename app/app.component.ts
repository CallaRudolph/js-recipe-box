import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box!!!</h1><br><br>
    <h3><ul class="list-unstyled" *ngFor="let currentRecipe of recipes"><div id="title">{{currentRecipe.title}}</div>
    <br>
      <h4>Ingredients:</h4>
      <ul class *ngFor="let currentIngredient of currentRecipe.ingredients">
        <li id="ingredient"><h5>{{currentIngredient}}</h5></li>
      </ul>
      <h4>INSTRUCTIONS:</h4>
      <ul class *ngFor="let currentDirection of currentRecipe.directions">
        <li id="direction"><h5>{{currentDirection}}</h5></li>
      </ul>
      <br>
    </ul></h3>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Brownies', ['Flour', 'chocolate', 'sprinkles', 'butter'], ['mix together', 'eat']),
    new Recipe('Pizza', ['Crust', 'chicken', 'sauce', 'CHEESE'], ['throw final three ingredients on crust', 'bake in oven', 'wait five minutes', 'eat'])
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string[]) { }
}
