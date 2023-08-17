import React from 'react'
import DropDownItem from './DropDownItem'
import '../searchbar.css'


const DropDownModal = ({trie, searchVal, setSearchVal,barRef}) => {

  const barRefCurr= barRef.current
  const position = {
      position: 'relative', 
      top: `${barRefCurr.offSetHeight}px`
  }
  return (
      <div className='modal-overlay'>
        <dialog open
          id='search-res'  
          style={position}
          >
          <ul>
            {trie.complete(searchVal).map((query, idx) => 
              <DropDownItem key={idx} query={query} setSearchVal={setSearchVal}/>
            )}
          </ul>

        </dialog>
      </div>

  )
}

export default DropDownModal
