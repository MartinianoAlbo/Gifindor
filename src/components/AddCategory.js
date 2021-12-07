import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory({setCategorias}) {

   const [inputValue, setInputValue] = useState();

   const handleInputChange = e => {
      setInputValue(e.target.value);
      
   }  

   const handleSubmit = e => {
      e.preventDefault();

      if(inputValue.trim().length > 2 ){

         setCategorias(cats => [...cats, inputValue ]);
         setInputValue('');

      }else {

      }
      
   }

   return (

      <form onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder='Que Gif esta Buscando?'
          value={inputValue}
          onChange={handleInputChange}
          

         />
      </form>  

   )
}

AddCategory.propTypes = {
   setCategorias: PropTypes.func.isRequired
}

export default AddCategory
