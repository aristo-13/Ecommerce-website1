import React from 'react'
import CategoryCard from './CategoryCard'
import { Context } from '../Context/DataContext'
import { useContext } from 'react'

function CuratedPicks() {
    const {Categories} = useContext(Context)
   
   console.log(Categories)
  return (
    <div className='w-full flex flex-col justify-center items-center py-10'>
        <h1 className="text-[1.5rem] font-bold text-DarkBlue p-4">Curated Picks</h1>
         <div className='w-full md:w-[95%] flex justify-center items-center  flex-wrap gap-2'>
        {
            Categories.map((category) => (
                <CategoryCard category={category.name} img={category.image} key={category.id}/>
            ))
        }
        </div>
    </div>
  )
}

export default CuratedPicks
