import React from 'react'
import AddToCard from './AddToCard';
import styles from './ProductCard.module.css';

styles.card

const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'>
        <AddToCard/>
    </div>
  )
}

export default ProductCard