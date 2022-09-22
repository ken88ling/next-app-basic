import React, { useState, useEffect } from 'react'
import styles from '../styles/content.module.css'
import Cart from './Cart'

function Content(props) {
  const prods = [
    { id: 1, name: 'dog', price: 500, bookmark: true },
    { id: 2, name: 'cat', price: 450, bookmark: true },
  ]
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  const handleClick = (e) => {
    console.log('e',e.target.value)
    const result = products.filter((element) => element.id == e.target.value)
    console.log('result1',result)

    if (result.length > 0) {
      setCarts([...carts,result[0]])
    }
  }

  useEffect(() => {
    setProducts(prods)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <div>
          <img
            crossOrigin="anonymous"
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Blue_merle_koolie_short_coat_heading_sheep.jpg"
            alt=""
          />
        </div>
        <div>
          <div>Carousell</div>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <div>LazMall</div>
        </div>
        <div>
          <div>
            Lenovo HE05X (HE05 Pro) Neckband Sports Bluetooth 5.0 In-Ear
            Earphone True Wireless Earbuds Headphone Handfree IPX5 Long Battery
            Headset with mic earpieces Auido TWS Earpods Microphone High bass
            HE05
          </div>
        </div>
        <div>
          <div>52 Ratings</div>
        </div>
        <div>Brand:LenovoMore Headphones & Headsets from Lenovo</div>
        <div>$8.60</div>
        <div className={styles.flex}>
          <div>$20.90</div>
          <div className={styles.space}>-59%</div>
        </div>
        <div className={styles.flex}>
          <div>Promotion</div>
          <div className={styles.space}>
            <div>No Min spend</div>
            <div>Buy 2, Get 5%</div>
          </div>
        </div>
        <div className={styles.flex}>
          <div>Color</div>
          <div className={styles.space}>
            <div>Blue</div>
            <div>Picture</div>
          </div>
        </div>
        <div>
          <div>Quantity</div>
          <div className={styles.flex}>
            <div>+</div>
            <div>-</div>
          </div>
        </div>

        <hr />
        <h4>Products</h4>
        <ul>
          {products.map((item, index) => (
            <div key={index} className={styles.flex}>
              <li>{item.name} {' '} {item.price}</li>
              <button onClick={handleClick} value={item.id}>Add to cart</button>
            </div>
          ))}
        </ul>
      </div>

      <Cart products={products} carts={carts} />
      <hr />
    </div>
  )
}

export default Content
