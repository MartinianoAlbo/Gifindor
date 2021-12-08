import React, {useState} from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {

   const [categorias, setCategorias] = useState([])



   return (
      <>
      <div className='titulo'>
         <h1 className='animate__animated animate__jackInTheBox'>GifinDor</h1>
      </div>

      <AddCategory setCategorias={setCategorias}/>

      <hr />

      <ol>
         
         {
            categorias.map(categoria =>
               <GifGrid
                  categorias = {categorias}
                  key = {categoria} 
               />
               )
         }
        
      </ol>
      </>
   )
}

export default GifExpertApp;