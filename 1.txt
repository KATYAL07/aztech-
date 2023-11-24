import React from 'react'

import styles from './login.module.css'

const Login = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['login']}>
        <div className={styles['group43']}>
          <div className={styles['group41']}>
            <div className={styles['group34']}>
              <span className={styles['text']}>
                <span>Sign in</span>
              </span>
              <div>
                <span className={styles['text02']}>
                  <span className={styles['text03']}>
                    <span>If you don’t have an account</span>
                    <br></br>
                    <span>
                      you can
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>register here!</span>
                </span>
              </div>
            </div>
            <div className={styles['group40']}>
              <div className={styles['group38']}>
                <div className={styles['group37']}></div>
                <div className={styles['group36']}>
                  <span className={styles['text08']}>
                    <span>Password</span>
                  </span>
                  <img
                    src="/rectangle9678-xiu-200h.png"
                    alt="Rectangle9678"
                    className={styles['rectangle9']}
                  />
                  <div className={styles['group35']}>
                    <span className={styles['text10']}>
                      <span>Enter your Password</span>
                    </span>
                    <div className={styles['padlock1']}>
                      <div className={styles['group']}>
                        <div className={styles['group1']}>
                          <img
                            src="/vector684-8rb1.svg"
                            alt="Vector684"
                            className={styles['vector']}
                          />
                        </div>
                      </div>
                      <div
                        className={styles['group2']}
                        className={styles['group2']}
                      >
                        <div className={styles['group3']}>
                          <img
                            src="/vector687-7s6h.svg"
                            alt="Vector687"
                            className={styles['vector1']}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles['invisible1']}>
                    <div className={styles['group4']}>
                      <div className={styles['group5']}>
                        <div className={styles['group6']}>
                          <img
                            src="/vector692-i8qd.svg"
                            alt="Vector692"
                            className={styles['vector2']}
                          />
                          <img
                            src="/vector693-nvp.svg"
                            alt="Vector693"
                            className={styles['vector3']}
                          />
                          <img
                            src="/vector694-0q8m.svg"
                            alt="Vector694"
                            className={styles['vector4']}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['group24']}>
                <img
                  src="/rectangle5696-stda-200h.png"
                  alt="Rectangle5696"
                  className={styles['rectangle5']}
                />
                <span className={styles['text12']}>
                  <span>Remember me</span>
                </span>
                <span className={styles['text14']}>
                  <span>Forgot Password ?</span>
                </span>
              </div>
              <div className={styles['group39']}>
                <span className={styles['text16']}>
                  <span>Login</span>
                </span>
              </div>
            </div>
          </div>
          <span className={styles['text18']}>
            <span>or continue with</span>
          </span>
          <img
            src="/google6103-wi8s.svg"
            alt="google6103"
            className={styles['google']}
          />
          <span className={styles['text20']}>
            <span>Email</span>
          </span>
          <span className={styles['text22']}>
            <span>Enter your email address</span>
          </span>
          <img
            src="/rectangle86106-exiq-200h.png"
            alt="Rectangle86106"
            className={styles['rectangle8']}
          />
          <div className={styles['message1']}>
            <div className={styles['group7']}>
              <div className={styles['group8']}>
                <img
                  src="/vector6110-y7r.svg"
                  alt="Vector6110"
                  className={styles['vector5']}
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/youngmaninorangeheadphonessittingatthecomputer6111-2rbb-800h.png"
          alt="youngmaninorangeheadphonessittingatthecomputer6111"
          className={styles['youngmaninorangeheadphonessittingatthecomputer']}
        />
      </div>
    </div>
  )
}

export default Login
