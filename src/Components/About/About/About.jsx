import React from 'react'
import styles from "./About.module.css"
export default function About() {
  return <>
       <div className={styles.about}>
             <div>
              <div className=' text-white text-center'>
                <h2 className={styles.dis}>ABOUT COMPONENT</h2>
                <div className='text-center d-flex justify-content-center align-items-center'>
            <div className={styles.line} ></div>
            <i className='fa-solid fa-star' ></i>
            <div className={styles.line}></div>
          </div>
              </div>
              <div className='container mt-3'>
                      <div className="row px-5">
                        <div className="col-md-6 ps-md-5">
                          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-md-6 pe-5">
                          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                      </div>
              </div>
             </div>
       </div>
  
  </>
}
