export interface RecipeData {
    id: number,
    number: number,
    offset: number,
    results: Recipe[],
    totalResults: number,
}

export interface Recipe {
    id: number,
    image: string,
    imageType: string,
    title: string,
}

export interface Ingredient {
    name: string;
    amount: number; // or string if you want to keep it as a string
    unit: string;
    // Add other properties if present in your JSON response
}


export interface RecipeDetails {
    id: number,
    vegetarian: boolean,
    vegan: boolean,
    glutenFree: boolean,
    dairyFree: boolean,
    title: string,
    readyIn: number,
    servings: number,
    image: string,
    summary: string,
    cuisines: [string],
    diets: [string],
    instructions: string,
    ingredients: Ingredient[]

}

