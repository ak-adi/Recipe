import React from 'react'
import { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'
import { useDispatch, useSelector } from 'react-redux';
import { searchRecipes } from '../../features/recipeSlice';


function AllReceipes() {

    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")
    const { recipe, loading, totalPages, limit } = useSelector((state) => state.recipe);

    useEffect(() => {

        dispatch(searchRecipes({ searchQuery, limit, page }))

    }, [dispatch, searchQuery, page, limit])

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
        setPage(1)
    }

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    }

    return !loading ? (
        <div className='min-h-screen w-full py-8'>

            <div className="px-10 search-bar justify-center">
                <input
                    type="text"
                    placeholder="Search for meals"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <div className='flex flex-wrap'>

                {recipe && recipe.length > 0 ? ( // Check if meals is populated
                    recipe.map((meal) => (
                        <div className="p-2" key={meal.id}>
                            <RecipeCard
                                {...meal}
                            />
                        </div>

                    ))
                ) : (
                    <p>No meals found.</p>
                )}
            </div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span className="mx-2">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    ) : (
        <p>Loading...</p>
    )

}

export default AllReceipes
