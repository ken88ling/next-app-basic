import React, { useState, useEffect } from 'react'
import styles from '../styles/content.module.css'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'

function Cart(props) {
  const { products, carts } = props
  const [items, setItems] = useState([])

  const sumFunction = () => {
    let sum = 0
    props.carts.forEach((e) => {
      sum += e.price
    })
    return sum
  }

  const groupAndSum = () => {
      const newItem = [
          ...carts
              .reduce((map, item) => {
                  const { id: key, price } = item
                  const prev = map.get(key)

                  if (prev) {
                      prev.price += price
                  } else {
                      map.set(key, Object.assign({}, item))
                  }
                  return map
              }, new Map())
              .values(),
      ]

      setItems(newItem)
  }

    useEffect(()=> {
        groupAndSum()
    },[carts])

  return (
    <div className={styles.col}>
      <div className={styles.between}>
        <div>Delivery Options</div>
        <div>Logo</div>
      </div>
      <div className={styles.flex}>
        <div>Logo</div>
        <div>Ships from Overseas</div>
      </div>
      <hr />
      <div className={styles.between}>
        <div className={styles.flex}>
          <div className={styles.deliveryLogo}>logo 1</div>
          <div>
            <div>Postal Letterbox</div>
            <div>Get by 28 Sep</div>
          </div>
        </div>
        <div className={styles.deliveryPrice}>$1.60</div>
      </div>
      <div className={styles.between}>
        <div className={styles.flex}>
          <div className={styles.deliveryLogo}>logo 2</div>
          <div>
            <div>Postal Letterbox</div>
            <div>Get by 26 Sep</div>
          </div>
        </div>
        <div className={styles.deliveryPrice}>$1.00</div>
      </div>
      <div className={styles.flex}>
        <div>Logo</div>
        <div>Cash on Delivery</div>
      </div>
      <div className={styles.flex}>
        <div>Logo</div>
        <div>Eligible for Collection</div>
      </div>

      <hr />

      <h5>Return & Warranty</h5>
      <div className={styles.flex}>
        <div>Logo</div>
        <div>100% Authentic</div>
      </div>

      <div className={styles.flex}>
        <div>Logo</div>
        <div>
          <div>Free Returns</div>
          <div>Change of mind is applicable</div>
        </div>
      </div>

      <div className={styles.flex}>
        <div>Logo</div>
        <div>International Seller</div>
      </div>

      <hr />
      <div className={styles.flex}>
        <div>Total</div>
        <div>{sumFunction()}</div>
      </div>

      <div>
        {items.map((item, index) => (
          <div key={index} className={styles.flex}>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
