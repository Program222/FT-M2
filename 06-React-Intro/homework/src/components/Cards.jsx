import React from 'react';
import Card from "./Card";
import styles from '../styles/Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  if(!props.cities) return <h1>No hay Ciudades disponibles</h1>;
  // tip, podés usar un map
  return (<div className={styles.cards_container}>
  {
    props.cities && props.cities.map(city =>(<Card 
          
          max={city.main.temp_max} 
          min={city.main.temp_min} 
          name={city.name}   
          img={city.weather[0].icon} 
          onClose={() => alert(city.name)} 
          key={city.id} id={city.id}/>))
  }
  </div>)
};