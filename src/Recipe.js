import React from 'react';
import style from './recipes.module.css';


const Recipe = ({title, calories, image, ingredients, url}) => { //props flowing//
    return (
        <div className = {style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
                <p>{url}</p>
            <img className = {style.image} src = {image} alt = "image"/>
        </div>
    )
}

export default Recipe;