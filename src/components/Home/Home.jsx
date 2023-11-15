import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Home() {

    const { recipe } = useSelector((state) => state.recipe)

    function truncateText(text, sentences) {
        const sentencesArray = text.split('. '); // Split the text into sentences
        const truncatedText = sentencesArray.slice(0, sentences).join('. '); // Join the first 'sentences' sentences
        return sentencesArray.length > sentences ? `${truncatedText}...` : truncatedText;
    }

    return (
        <>
            <div className='bg-gradient-to-r from-red-400 via-red-400 to-yellow-400'>

                <div className=' pt-24 pl-20'>
                    <div className="container pl-11 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                            <p className="uppercase tracking-loose w-full">Looking for delicious recipes</p>
                            <h1 className="my-4 text-5xl font-bold leading-tight">
                            Indulge Your Palate: Discover a World of Culinary Delights 
                            </h1>
                            <p className="leading-normal text-2xl mb-8">
                            "Unleash Your Inner Chef: Dive into a rich collection of recipes curated for every taste and skill level.
                            </p>
                            <div className="flex items-center lg:order-2">
                                <Link
                                    to='/allrecipes'
                                    className="text-white  bg-orange-700 hover:bg-orange-800 font-medium rounded-full text-lg px-4 lg:px-8 py-2 lg:py-2.5 mr-2 mb-16 hover:duration-400 focus:outline-none">
                                    Explore
                                </Link>
                            </div>
                        </div>
                        <div className="flex ml-52 mb-11 w-full md:w-2/5 py-6 text-center">
                            <img className="w-full md:w-3/5" src="/recipe-book.png" />
                        </div>
                    </div>
                </div>
                <div className="relative -mt-12 lg:-mt-24">
                    <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                                <path
                                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                    opacity="0.100000001"
                                ></path>
                                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                            </g>
                            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path
                                    d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
                                ></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <section className="bg-white border-b py-8">
                    <div className="container max-w-5xl mx-auto m-8">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Glimpse
                        </h2>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto bg-gradient-to-r from-red-400 via-red-400 to-yellow-400 w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>

                        {recipe && recipe.length > 0 ? (
                            recipe.filter((meal) => meal.id === 1)
                                .map((meal) => (
                                    <div className="flex flex-wrap" key={meal.id}>
                                        <div className="w-5/6 sm:w-1/2 p-6">
                                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                                {meal.strMeal}
                                            </h3>
                                            <p className="text-gray-600 mb-8">
                                                {truncateText(meal.strInstructions, 3)}
                                                <br />
                                                <br />
                                            </p>
                                        </div>

                                        <div className="w-full pl-14 sm:w-1/2 p-6">
                                            <NavLink
                                                to={`/recipeDetail/${meal.id}`}>
                                                <div className='w-96 h-64'>
                                                    <img src={meal.strMealThumb} alt={meal.id}
                                                        className='rounded-2xl w-full h-full' />
                                                </div>
                                            </NavLink>
                                        </div>

                                    </div>
                                ))
                        ) : (
                            <div className="flex flex-wrap">

                                <div className="w-5/6 sm:w-1/2 p-6">
                                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                        Lorem ipsum dolor sit amet
                                    </h3>
                                    <p className="text-gray-600 mb-8">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                                        <br />
                                        <br />

                                        Images from:

                                        <a className="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
                                    </p>
                                </div>
                                <div className="w-full pl-14 sm:w-1/2 p-6">
                                    <div className=' w-96'>
                                        <img src="https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?size=626&ext=jpg&ga=GA1.1.2028813914.1688197541&semt=sph" alt="food"
                                            className='rounded-2xl' />
                                    </div>
                                </div>
                            </div>
                        )
                        }


                        {recipe && recipe.length > 0 ? (
                            recipe.filter((meal) => meal.id === 8)
                                .map((meal) => (
                                    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                                        <div className="w-full sm:w-1/2 p-6 mt-6">
                                            <NavLink
                                                to={`recipeDetail/${meal.id}`}>
                                                <div className='w-96 h-64'>
                                                    <img src={meal.strMealThumb} alt={meal.id}
                                                        className='rounded-2xl w-full h-full' />
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className="w-full sm:w-1/2 pl-14 p-6 mt-6">
                                            <div className="align-middle">
                                                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                                    {meal.strMeal}
                                                </h3>
                                                <p className="text-gray-600 mb-8">
                                                    {truncateText(meal.strInstructions, 3)}
                                                    <br />
                                                    <br />

                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                ))
                        ) : (
                            <p></p>
                        )
                        }


                    </div>
                </section>
                <section className="bg-white border-b py-8">
                    <div className="container mx-auto flex flex-wrap justify-center pt-4 pb-12">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Deserts
                        </h2>
                        <div className="w-full mb-12">
                            <div className="h-1 mx-auto bg-gradient-to-r from-red-400 via-red-400 to-yellow-400 w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>


                        {recipe && recipe.length > 0 ? (
                            recipe.filter((meal) => meal.id === 2)
                                .map((meal) => (
                                    <div className="bg-cover w-full rounded-xl mx-2 md:w-1/4 p-6 flex-col h-full "
                                        key={meal.id}
                                        style={{ backgroundImage: `url(${meal.strMealThumb})` }}>

                                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                            <p className="w-full underline font-bold text-black text-xl py-1 px-6">
                                                {meal.strArea} desert
                                            </p>
                                            <div className="w-full font-bold text-xl text-black py-1 px-6">
                                                {meal.strMeal}
                                            </div>
                                            <p className="text-black font-semibold text-base px-6 mb-5">
                                                {truncateText(meal.strInstructions, 2)}
                                            </p>
                                        </a>
                                        <div className="flex mt-auto bg-transparent p-6 overflow-hidden items-center justify-center">
                                            <Link
                                            to={`recipeDetail/${meal.id}`}>
                                            <button className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-red-400 via-red-400 to-yellow-400 text-white font-semibold rounded-full my-6 py-4 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                                More Details
                                            </button>
                                            </Link>
                                        </div>

                                    </div>
                                ))
                        ) : (
                            <p></p>
                        )
                        }



                        {recipe && recipe.length > 0 ? (
                            recipe.filter((meal) => meal.id === 6)
                                .map((meal) => (
                                    <div className="w-full md:w-1/4 rounded-xl mx-14 p-6 flex flex-col"
                                        style={{ backgroundImage: `url(${meal.strMealThumb})` }}>

                                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                            <p className="w-full underline font-bold text-black text-xl py-1 px-6">
                                                {meal.strArea} desert
                                            </p>
                                            <div className="w-full font-bold text-xl text-black py-1 px-6">
                                                {meal.strMeal}
                                            </div>
                                            <p className="text-black font-semibold text-base px-6 mb-5">
                                                {truncateText(meal.strInstructions, 2)}
                                            </p>
                                        </a>


                                        <div className="flex mt-auto bg-transparent p-6 overflow-hidden items-center justify-center">
                                            <Link
                                            to={`recipeDetail/${meal.id}`}>
                                            <button className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-red-400 via-red-400 to-yellow-400 text-white font-bold rounded-full my-6 py-4 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                                More Details
                                            </button>
                                            </Link>
                                        </div>

                                    </div>
                                ))
                        ) : (
                            <p></p>
                        )}

                        {recipe && recipe.length > 0 ? (
                            recipe.filter((meal) => meal.id === 5)
                                .map((meal) => (
                                    <div className="w-full rounded-xl md:w-1/4 mx-2 p-6 flex-col"
                                        style={{ backgroundImage: `url(${meal.strMealThumb})` }}>
                                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                            <p className="w-full underline font-bold text-black text-xl py-1 px-6">
                                            {meal.strArea} desert
                                            </p>
                                            <div className="w-full font-bold text-xl text-black py-1 px-6">
                                            {meal.strMeal}
                                            </div>
                                            <p className="text-black font-semibold text-base px-6 mb-5">
                                            {truncateText(meal.strInstructions, 3)}
                                            </p>
                                        </a>
                                        <div className="flex mt-auto bg-transparent p-6 overflow-hidden items-center justify-center">
                                            <Link
                                            to={`recipeDetail/${meal.id}`}>
                                            <button className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-red-400 via-red-400 to-yellow-400 text-white font-bold rounded-full my-6 py-4 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                                More Details
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <p></p>
                        )}
                    </div>

                </section>
                <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                            <g className="wave" fill="#f8fafc">
                                <path
                                    d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
                                ></path>
                            </g>
                            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                                    <path
                                        d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                        opacity="0.100000001"
                                    ></path>
                                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <section className="container mx-auto text-center py-6">
                    <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                        Call to Action
                    </h2>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <h3 className="my-4 text-3xl leading-tight">
                        Main Hero Message to sell yourself!
                    </h3>
                    <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Action!
                    </button>
                </section>
            </div>
        </>
    );
}

export default Home