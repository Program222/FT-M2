import React from 'react';
import styles from '../styles/SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (<div className={styles.container}>

  <input className={styles.input_search} type={"text"} placeholder={"Buscar Ciudad... "}/>
  <button className={styles.btnSearch} onClick={()=> onSearch('una Ciudad')}>Agregar</button>

          </div>)

};
