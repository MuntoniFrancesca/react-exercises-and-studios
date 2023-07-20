import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients = ["butter", "granulated sugar", "vanilla extract", "eggs", "purpose flour"]
    return (
    <div>
    <h3>Recipe Ingredients</h3>
    <ul className = {StyleSheet.ingredientList}>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
    </ul>
    </div>
)
}