import React from 'react'
import CategoryCard from './CategoryCard'

function CuratedPicks() {
   const categories = [
    {
        category: "electronics",
        img: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
        category: "Men's Clothing",
        img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbidzJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
        category: "Women's Clothing",
        img: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdvbWVuJ3MlMjBDbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        category: "Jewelery",
        img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
    },
   ]

  return (
    <div className='w-full flex flex-col justify-center items-center py-10'>
        <h1 className="text-[1.5rem] font-bold text-DarkBlue p-4">Curated Picks</h1>
         <div className='w-full md:w-[95%] flex justify-center items-center  flex-wrap gap-2'>
        {
            categories.map((category) => (
                <CategoryCard category={category.category} img={category.img}/>
            ))
        }
        </div>
    </div>
  )
}

export default CuratedPicks
