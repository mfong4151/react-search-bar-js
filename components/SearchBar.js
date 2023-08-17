import React, { useRef, useState } from 'react'
import '../index.css'
import DropDownModal from './DropDownModal'




const SearchBar = ({trie}) => {
  const [searchVal, setSearchVal] = useState('')
  const searchBarRef = useRef(null)
  const handleOnClick = (e) => {
      e.preventDefault();
      e.stopPropagation();

  }
  
  return (
    <div>
      <form id='search-form' ref={searchBarRef}>
        <input type="text" value={searchVal} onChange={e => setSearchVal( e.target.value)}/>
        <button onClick={handleOnClick}>Search</button>
      </form>
      {searchVal && 
        <DropDownModal 
          trie={trie} 
          searchVal={searchVal} 
          setSearchVal={setSearchVal}
          barRef={searchBarRef}  
        />
      }
  </div>
  )
}

export default SearchBar
