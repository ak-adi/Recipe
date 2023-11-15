import React from 'react'
import { Link } from 'react-router-dom'
function RecipeCard({ id, strMeal, strCategory }) {
    return (

        <figure className="md:flex bg-lime-100 rounded-xl p-8 md:p-0">
            <div className="pt-6 md:p-8 md:text-left space-y-4">
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {strMeal}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {strCategory}
                    </div>
                </figcaption>
                <Link to={`/recipeDetail/${id}`}>
                    <button
                        className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold  text-pink-500 uppercase align-baseline transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="w-4 h-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </figure>

    )
}

export default RecipeCard