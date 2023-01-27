import React from 'react'

import { v4 as uuidv4 } from 'uuid';
import Country from './Country';
import style from '../Css/countries.module.css';

const Countries = (props) => {
  return (
    <section className={style.countries}>
        {props.counties.map((country)=>{
            const newCountries = {country,id: uuidv4()}

            return <Country {...newCountries} key={newCountries.id} onRemove={props.onRemove} />
        })}
    </section>
  )
}

export default Countries