import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return <>
      <div className='footer'>
              <div className={styles.fristbackGround}>
                    <div className="row  py-5">
                        <div className="col-md-4 text-center text-white py-5">
                            <div>
                                <h2>LOCATION</h2>
                                <p className=''>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center text-white py-5">
                            <div>
                                <h2>AROUND THE WEB</h2>
                                <div className='d-flex justify-content-center align-items-center'>
         <div className={styles.icons}> <i  className='fa-brands fa-facebook mx-1 icon'></i></div>
         <div className={styles.icons}> <i  className='fa-brands fa-twitter mx-1 icon'></i></div>
         <div className={styles.icons}> <i  className='fa-brands fa-linkedin mx-1 icon'></i></div>
         <div className={styles.icons}> <i  className='fa-solid fa-globe mx-1 icon'></i></div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center text-white py-5">
                            <div>
                                <h2>ABOUT FREELANCER</h2>
                                <p>Freelance is a free to use, licensed Bootstrap theme <br></br> created by Route</p>
                                           
                            </div>
                        </div>
                    </div>
              </div>
              <div className={styles.lastbackGround}>
              <div className="last text-white d-flex justify-content-center align-items-center pt-4 pb-2">
                     <p>Copyright © Your Website 2021</p>
              </div></div>
      </div>
  </>
}


