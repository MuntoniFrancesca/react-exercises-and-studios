import React from "react";
import RecipeAuthor from "./Description";

class RecipeDescription extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Chocolate Chip Cookies</h1>
                    <p>The best chocolate chip cookies recipe ever</p>
                </div>
                <RecipeAuthor />
            </div>
            
        )
    }
    
    
}

export default RecipeDescription;