import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/recipeDescription'
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from './components/Photos';

function App() {
  return (
    <div className="App">
      <div>
        <RecipeDescription />
        <RecipeIngredients />
      </div>
    </div>
  );
}

export default App;
