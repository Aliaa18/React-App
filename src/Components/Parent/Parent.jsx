import React from 'react'
import styles from './Parent.module.css'
import parentPhoto from '../../Assets/avataaars.svg'
export default function Parent() {
  return <>
       <div className={styles.parent}> 
             <div className='allContent'>
              <div className='d-flex justify-content-center mb-5 pt-5'>
              <img src={parentPhoto} alt="view" width={250} className='pt-5' /></div>
          <div className='content'>
          <h2 className={styles.dis}>START FRAMEWORK</h2>
          <div className='text-center d-flex justify-content-center align-items-center'>
            <div className={styles.line} ></div>
            <i className='fa-solid fa-star' ></i>
            <div className={styles.line}></div>
          </div>
          <div className={styles.last}>Graphic Artist - Web Designer - Illustrator</div>
         </div></div></div>
  </>
}
