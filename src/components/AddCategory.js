import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory({setCategorias}) {

   const [inputValue, setInputValue] = useState('');

   const handleInputChange = e => {
      setInputValue(e.target.value);
      
   }  

   const handleSubmit = e => {
      e.preventDefault();

      if(inputValue.trim().length > 2 ){

         setCategorias([inputValue]);
         setInputValue(' ');

      }
      
   }

   return (

      <form className='row-cols-1' onSubmit={handleSubmit}>
      
         <div className="input-group mb-3 my-4 barra-busqueda">
            <div className="input-group-text ">
               <span className="">
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="38" height="38" viewBox="0 0 24 24" stroke-width="2.5" stroke="#000000e5" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
               <circle cx="10" cy="10" r="7" />
               <line x1="21" y1="21" x2="15" y2="15" />
               </svg>

               </span>
            </div>

            <input
               type="text"
               className="form-control"
               placeholder="Que Gif estas Buscando?"
               aria-describedby="basic-addon1"
               value={inputValue}
               onChange={handleInputChange}
            />

         </div>
         
      </form>  

   )
}

AddCategory.propTypes = {
   setCategorias: PropTypes.func.isRequired
}

export default AddCategory

