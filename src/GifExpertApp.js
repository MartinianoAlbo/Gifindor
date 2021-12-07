import React, {useState} from "react";
import AddCategory from "./components/AddCategory";




const GifExpertApp = () => {

   const [categorias, setCategorias] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
  
   // const handleAdd = () => {

   //    // setCategorias([...categorias, 'Full Metal'])

   // }


   return (
      <>
      <h1>GifExpertApp</h1>

      <AddCategory setCategorias={setCategorias}/>

      <hr />

      <ol>
         {
            categorias.map(categoria => {
               return(
                  <li key={categoria}>{categoria}</li>
               )
            })
         }
      </ol>
      </>
   )
}

export default GifExpertApp;