import {useState} from "react";
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

         <div className='row p-0'>
            <ol className='col-sm-12 col-md-12 col-lg-12 cards'>
               
               {
                  categorias.map(categoria =>
                     <GifGrid
                        categorias = {categorias}
                        key = {categoria} 
                     />
                     )
               }
            
            </ol>

         </div>   
      </>
   )
}

export default GifExpertApp;