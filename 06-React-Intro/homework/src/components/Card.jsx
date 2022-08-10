import React from 'react';
import styles from '../styles/Card.module.css'

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (

  <div className={styles.caja}>
      <button className={styles.btnCard} onClick={onClose}>X</button>
        <h4 className={styles.titleCity}>{name}</h4>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={"img"}/>
      <div className={styles.temps}>
        <p>Min</p>
        <p>{min}</p>
        <p>Max</p>
        <p>{max}</p>
      </div>
   </div>


  )
};