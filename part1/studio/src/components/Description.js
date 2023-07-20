import styles from './Description.module.css';
import React from 'react';

export default function RecipeAuthor() {
    let authorLink = "https://joyfoodsunshine.com/about-laura/";
    let authorPhoto = "https://joyfoodsunshine.com/wp-content/uploads/2022/12/JFS-profile-pic.jpg";
    let authorName = "Laura";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="photo of the author" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Recipes</a>
            </div>
        </div>
    )
}