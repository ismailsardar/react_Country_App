import React, { useState, useEffect } from 'react'
import Countries from './Countries';
import Search from './Search';

const url = "https://restcountries.com/v3.1/all";
const FatchData = () => {
    const [isLoding, setLoding] = useState(true);
    const [error, setError] = useState(null);
    const [counties, setCounties] = useState([]);
    const [filterCounties, setFilterCounties] = useState(counties);
    
    const fatchData = async (url) =>{
        setLoding(true);
        try {
            const respons = await fetch(url);
            const data = await respons.json();
            setCounties(data);
            setFilterCounties(data);
            setLoding(false);
            setError(null)
            // console.log(counties)
        } catch (error) {
            setLoding(false);
            setError(error);
        }
    }

    useEffect(() => {
      fatchData(url);
    }, []);

    const handelRemoveCountry = (name) =>{
        const filter = filterCounties.filter((country) => country.name.common !== name);
        setFilterCounties(filter);
    }

    const handelSearch = (searchValue) => {
        const value = searchValue.toLowerCase();
        const searchCountry = counties.filter((country)=>{
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value);
        });
        setFilterCounties(searchCountry);   
    }
    
    return (
        <>
        <h1>Country App</h1>
        <Search onSearch={handelSearch} />
        {isLoding && <h2 style={{textAlign:"center"}}>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        {counties && <Countries counties={filterCounties} onRemove={handelRemoveCountry} />}
        </>
   )
}

export default FatchData