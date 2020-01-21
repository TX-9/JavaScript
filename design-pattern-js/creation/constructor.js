function Recipe(name, calorie, vegetarian=false, spicyLevel='mild') {
    this.name = name, this.calorie = calorie, this.vegetarian = vegetarian, this.spicyLevel = spicyLevel;
    // bad practice: redefined for each of the instance
    this.isVegetarian = function () {
        console.log(this.vegetarian ? 'This recipie is for vegetarian' : 'This recipie is for non-vegetarian');
    }
}

let recipe1 = new Recipe('thai chicken curry', '100');
let recipe2 = new Recipe('Vege salad', '20', true);

recipe1.isVegetarian();
recipe2.isVegetarian();

// better practice: shared for instances
Recipe.prototype.getSpicyLevel = function () {
    console.log(this.spicyLevel);
}
recipe2.getSpicyLevel();
let recipe3 = new Recipe('cheese burger', '120');
