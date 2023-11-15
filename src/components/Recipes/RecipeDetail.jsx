import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { getRecipeById } from '../../features/recipeSlice';

function RecipeDetail() {
    // const [meals, setMeals] = useState([]);
    const meals = useSelector(state => state.recipe.recipe)
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
        if(id){
            dispatch(getRecipeById({id}))
        }
        else{
            navigate('/')
        }
    },[])

    return (
        <>
            {meals ? (
                <div
                    className="relative min-h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(${meals.strMealThumb})` }}
                >
                    <div className=" w-full inset-0  items-center justify-center p-4">
                        <div className="bg-white bg-opacity-70 rounded-lg p-8">
                            <div className="w-28 h-28 bg-cover bg-center rounded-full mx-auto">
                                <img
                                    className="w-full h-full rounded-full"
                                    src={meals.strMealThumb}
                                    alt={meals.idMeal}
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-center mt-4">{meals.strMeal}</h2>
                            <p className="text-gray-600 font-semibold text-center mt-2">Origin : {meals.strArea}</p>
                            <h4 className="text-s font-semibold mt-2">Tags: {meals.strTags}</h4>
                            <p className="text-gray-700 mt-4">
                                {meals.strInstructions}
                            </p>
                            <h3 className="text-xl font-semibold mt-4">Ingredients</h3>
                            <h4 className="text-s font-semibold mt-2">
                                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                                    const ingredientKey = `strIngredient${index}`;
                                    const ingredient = meals[ingredientKey];
                                    if (ingredient) {
                                        return `${ingredient}`;
                                    }
                                    return null;
                                })
                                    .filter((item) => item !== null) // Remove null values
                                    .join(', ')}
                            </h4>
                        </div>
                    </div>

                </div>

            ) : (
                <p>No meal found.</p>
            )}

        </>
    );
}

export default RecipeDetail;