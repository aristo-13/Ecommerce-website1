import React from 'react'
import CategoryCard from './CategoryCard'

function CuratedPicks() {
   const categories = [
    {
        category: "electronics",
    },
    {
        category: "Men's Clothing",
    },
    {
        category: "Women's Clothing",
    },
    {
        category: "Jewelery",
    },
   ]

  return (
    <div className='w-full flex flex-col justify-center items-center py-10'>
        <h1 className="text-[1.5rem] font-bold text-DarkBlue p-4">Curated Picks</h1>
         <div className='w-full md:w-[95%] flex justify-center items-center  flex-wrap gap-2'>
        {
            categories.map((category) => (
                <CategoryCard category={category.category}/>
            ))
        }
        </div>
    </div>
  )
}

export default CuratedPicks
