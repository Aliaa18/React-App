import React, { useEffect, useRef, useState } from 'react'
import styles from "./Portofolio.module.css"
import ph1 from '../../Assets/poert1.png'
import ph2 from '../../Assets/port2.png'
import ph3 from '../../Assets/port3.png'

export default function Portofolio() {
      //  {  var imgs=document.querySelectorAll('.items img')
      //      var box=document.getElementById("lightBox")
      //      var boxData=document.getElementById("boxData")
      //      var layer =document.querySelectorAll('.items .layer') 
      //      function closeBox(){
      //       box.classList.add('d-none');
      //      }
      //      useEffect(()=> {
      //      document.addEventListener('click' , function({target}){
      //         if(target==box){
      //            closeBox();
      //        }
      //    })
      //    for(var i=0 ; i<imgs.length ; i++){
      //     imgs[i].addEventListener('click',function({target}){
      //    box.classList.remove('d-none');
      //    var currSrc=target.getAttribute('src');
      //    boxData.style.backgroundImage=`url(${currSrc})`;
      //   console.log("Aliaa");
      //     })
      //   }
      // },[])
        //   // imgs[i].addEventListener('mouseenter',function({target}){
        //   //   // layer[i].classList.remove("d-none")
        //   //  // console.log(imgs);
        //   //    })
        //   //    imgs[i].addEventListener('mouseleave',function({target}){
        //   //    // layer[i].classList.add("d-none")
        //   //    console.log("bye");
        //   //      })
        //  }
        //

         
        // })
         

        // }
     let x = useRef(null);
     let box = useRef(null);
     let boxData=useRef(null);
       let y;
      
     function test (){
       y = x.current.children[0].getAttribute("src");
      box.current.classList.remove("d-none");
      boxData.current.setAttribute("src" , y);   
                 
     }
  

    document.addEventListener('click' , function({target}){
              if(target===box.current){
                box.current.classList.add("d-none")

              }

    })

   
  return <>
      
            <div className={styles.portofolio}> 
            <div className='pt-5'>
            <div className='head mb-5 pt-5'>
                       <h2  className={styles.dis}>PORTOFOLIO SECTION</h2>
                       <div className='text-center d-flex justify-content-center align-items-center'>
            <div className={styles.line} ></div>
            <i className='fa-solid fa-star' ></i>
            <div className={styles.line}></div>
          </div>
                   </div>
                   <div className='container'>
                    <div  className="row gy-5 mb-5">
                      <div   className="col-md-4 position-relative ">
                        <div onClick={test} ref={x} className= {`${styles.inner} items rounded-3 position-relative overflow-hidden`}>
                        <img  src={ph1} alt="ph1" className='w-100 rounded-3 '/>
                        <div   className={`${styles.layers} `}><i className="fa-solid fa-plus fa-5x"></i></div>
                      </div></div>
                      <div  className="col-md-4">
                      <div  className={`${styles.inner} items rounded-3 position-relative overflow-hidden`}>
                        <img  src={ph2} alt="ph2" className='w-100 rounded-3'/>
                        <div className={`${styles.layers} `}><i className="fa-solid fa-plus fa-5x"></i></div>
                      </div></div>
                      <div className="col-md-4">
                      <div className={`${styles.inner} items rounded-3 position-relative overflow-hidden`}>
                        <img  src={ph3} alt="ph3" className='w-100 rounded-3' />
                        <div className={`${styles.layers}  `}><i className="fa-solid fa-plus fa-5x"></i></div>
                      </div></div>
                    </div>
                    <div className="row gy-5">
                      <div className="col-md-4">
                      <div className={`${styles.inner} items rounded-3 position-relative overflow-hidden`}>
                        <img src={ph1} alt="ph1" className='w-100 rounded-3'/>
                        <div  className={`${styles.layers} `}><i className="fa-solid fa-plus fa-5x"></i></div>
                      </div></div>
                      <div className="col-md-4">
                      <div className={`${styles.inner} items rounded-3 position-relative overflow-hidden`}>
                        <img  src={ph2} alt="ph2" className='w-100 rounded-3'/>
                        <div className={`${styles.layers} layer `}><i className="fa-solid fa-plus fa-5x"></i></div>
                      </div></div>
                      <div className="col-md-4">
                      <div className={`${styles.inner} items rounded-3 position-relative overflow-hidden`}>
                        <img  src={ph3} alt="ph3" className='w-100 rounded-3'/> 
                         <div  className={`${styles.layers} layer `}>
                          <i className="fa-solid fa-plus fa-5x"></i>
                          </div> 
                      </div></div>
                    </div>
                   </div>
                    
               </div>
            </div>
 
    

              <div ref={box} className={`${styles.box} light-box d-none`}>
                        <img src='' ref={boxData} className={styles.boxData}>
                             
                        </img>
                </div>
  
  </>
}
