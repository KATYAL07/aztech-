import React from 'react'

import styles from './product-page.module.css'

const ProductPage = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['product-page']}>
        <span className={styles['text']}>
          <span>₹200</span>
        </span>
        <span className={styles['text02']}>
          <span>or</span>
        </span>
        <span className={styles['text04']}>
          <span>50 Points</span>
        </span>
        <button className={styles['button']}>
          <span className={styles['text06']}>
            <span>Buy</span>
          </span>
        </button>
        <img
          src="/buttonunfilled1218-5lci.svg"
          alt="ButtonUnfilled1218"
          className={styles['button-unfilled']}
        />
        <span className={styles['text08']}>
          <span>Spy Camera</span>
        </span>
        <span className={styles['text10']}>
          <span>/Featured</span>
        </span>
        <span className={styles['text12']}>
          <span>
            Lorem ipsum is so cool man i love deisnj wio i am cool boy katyal
            ekdum woaoe bhai physics ni hori sorry
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>bhooki lagri</span>
          <br></br>
          <span>koi zepto karke redbull bhijwado</span>
          <br></br>
          <span>sir bhai ni ho?</span>
        </span>
        <span className={styles['text21']}>
          <span>khaana</span>
          <br></br>
          <span>shaana</span>
        </span>
        <img
          src="/line41223-saz.svg"
          alt="Line41223"
          className={styles['line4']}
        />
        <img
          src="/svg3601224-i70j.svg"
          alt="SVG3601224"
          className={styles['svg360']}
        />
        <img
          src="/image591225-4y8f-1000h.png"
          alt="image591225"
          className={styles['image59']}
        />
      </div>
    </div>
  )
}

export default ProductPage
