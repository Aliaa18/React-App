import React from 'react'
import styles from "./Contact.module.css"
export default function Contact() {
      function test(){
            { document.getElementById("lab").classList.replace(`${styles.pos}`,'top-0')      }    
      }
   

  return <>
             <div className={styles.contact}>
                <div className='w-100 pt-5'>
                   <div className='head mb-5 pt-5'>
                       <h2 className={styles.dis}>CONTACT SECTION</h2>
                       <div className='text-center d-flex justify-content-center align-items-center'>
            <div className={styles.line} ></div>
            <i className='fa-solid fa-star' ></i>
            <div className={styles.line}></div>
          </div>
                   </div>
                     
                        <form  className={styles.formSt} >
                      <label htmlFor="name" className={`${styles.pos}  position-relative `}>userName:</label>
                      <input   type="text" name="name" id="name" placeholder='userName' className={`${styles.inputST} mt-3 form-control border-0 border-bottom`}/>
                      <label htmlFor="age" className={`${styles.pos}  position-relative`}>userAge:</label>
                      <input   type="number" name="age" id="age" placeholder='userAge' className={`${styles.inputST} mt-3 form-control border-0 border-bottom`}/>
                      <label  htmlFor="email" className={`${styles.pos}  position-relative `}>userEmail:</label>
                      <input  type="email" name="email" id="email" placeholder='userEmail' className={`${styles.inputST} mt-3 form-control border-0 border-bottom`}/>
                      <label  htmlFor="pass" className={`${styles.pos}  position-relative  `}>userPassword:</label>
                      <input   type="password" name="pass" id="pass" placeholder='userPassword' className={`${styles.inputST} mt-3 form-control border-0 border-bottom`}/>
                      
                      <button type='button'  className='btn mt-3 butt'>Send Message</button>
                      
                      
                      
                        </form>
             </div>
                    
             </div>
  </>

}
