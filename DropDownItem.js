import React from 'react'
import '../searchbar.css'




const DropDownItem = ({query, setSearchVal}) => (
     <li 
        className='drop-down-itm'
        onClick={() => setSearchVal(query)}
        >
        {query}
    </li>
)


export default DropDownItem
