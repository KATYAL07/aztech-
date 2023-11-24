import React from 'react'

import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['footer']}>
        <div className={styles['group3']}>
          <span className={styles['text']}>
            <span>LINKWAYS</span>
          </span>
        </div>
        <div className={styles['frame16']}></div>
        <div className={styles['footer-ui']}>
          <span className={styles['text02']}>
            <span>© 2020 Lift Media.All right reserved</span>
          </span>
          <div className={styles['pointinghand1']}></div>
          <span className={styles['text04']}>
            <span>Dateenschutz Impressum Cookie Policy AGBs</span>
          </span>
          <div className={styles['quick-links']}>
            <span className={styles['text06']}>
              <span>Quick links</span>
            </span>
            <span className={styles['text08']}>
              <span>
                <span>Home</span>
                <br></br>
                <span>About Us</span>
                <br></br>
                <span>Jobs</span>
                <br></br>
                <span>Contact</span>
                <br></br>
                <span></span>
              </span>
            </span>
          </div>
          <div className={styles['newz']}>
            <span className={styles['text19']}>
              <span>News</span>
            </span>
            <span className={styles['text21']}>
              <span>
                <span>Blog</span>
                <br></br>
                <span>FAQ</span>
                <br></br>
                <span>Media</span>
                <br></br>
                <span>Press</span>
              </span>
            </span>
          </div>
          <div className={styles['behandlung']}>
            <span className={styles['text30']}>
              <span>Legal</span>
            </span>
            <span className={styles['text32']}>
              <span>
                <span>Terms and Conditions</span>
                <br></br>
                <span>Privacy Policy</span>
                <br></br>
                <span>CORE &lt;3 Velocity</span>
                <br></br>
                <span>HAIL CORE</span>
              </span>
            </span>
          </div>
          <div className={styles['textfiels']}>
            <div className={styles['form']}>
              <div className={styles['group48']}>
                <span className={styles['text41']}>
                  <span>Enter E-Mail Address</span>
                </span>
                <div className={styles['group6']}>
                  <img
                    src="/vector21525-9dfc.svg"
                    alt="Vector21525"
                    className={styles['vector2']}
                  />
                </div>
              </div>
              <img
                src="/line91526-oyh.svg"
                alt="Line91526"
                className={styles['line9']}
              />
            </div>
            <span className={styles['text43']}>
              <span>
                <span>Subscribe to our newsletter to be</span>
                <br></br>
                <span>notified about the latest developments!</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
