import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, source, ingredients }) => {
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <h5>{source}</h5>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;