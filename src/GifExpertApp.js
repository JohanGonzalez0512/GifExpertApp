import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
//import PropTypes from 'prop-types'
//const categories=['Spiderman','Dua lipa','Twenty One Pilots']
export const GifExpertApp=(()=>{


    const [categories, setCategories] = useState(['Dua lipa'])


   /*  const handleAdd=()=>{
        setCategories([...categories,'Iron man'])
    } */

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

       
        
        <ol>
            {
                categories.map(category=>(
                 <GifGrid category={category}
                 key={category}
                 />
                ))
            }
        </ol>

        </>



    )

})