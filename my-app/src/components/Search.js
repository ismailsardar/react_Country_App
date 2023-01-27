import React, { useEffect, useState } from 'react'

const Search = (props) => {

    const [searchText, setSearchText] = useState("");

    const handelChange = (e)=>{
        setSearchText(e.target.value);
    }

    useEffect(()=>{
        props.onSearch(searchText)
    },[searchText])
    
  return (
    <div style={{textAlign:"center"}}>
        <input type="text" placeholder='search country...' value={searchText} onChange={handelChange} />
    </div>
  )
}

export default Search;