import React from 'react'
import {FaPlus } from 'react-icons/fa'
const AddItem = () => {
  return (
    <form className='addForm'>
        <label htmlFor="addItem">Add Item</label>
        <input type="text"
        autoFocus
        id='addItem'
        placeholder='Add Item' />
        <button type='submit'
        aria-label='Add Item'>
            <FaPlus/> 
        </button>
    </form>
  )
}

export default AddItem