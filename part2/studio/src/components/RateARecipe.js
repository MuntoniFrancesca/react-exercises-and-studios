let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  
  function GiveRating(props) {
    return <h3>{stars[props.rating]}</h3>
  }
  return (props.rating >= 1 && props.rating <= 5) ? GiveRating(props) : null;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
