import React from 'react'
import '../index.css'




const DropDownItem = ({query, setSearchVal}) => (
     <li 
        className='drop-down-itm'
        onClick={() => setSearchVal(query)}
        >
        {query}
    </li>
)


export default DropDownItem
