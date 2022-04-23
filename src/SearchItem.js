import React from 'react'

const SearchItem = () => {
  return (
     <form class='searcForm' onSubmit={(e)=> e.preventDefault()}>
         <label htmlFor="search">
             <input
             id='search'
             type='text'
             role='searchbox'
             placeholder='Search Items'
             />
         </label>
     </form>

  )
}

export default SearchItem