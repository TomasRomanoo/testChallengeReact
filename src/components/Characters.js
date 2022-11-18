import React from 'react'

export const Characters = ({muchosDatos}) => {
return (
    <div>
        {
        muchosDatos.map((item,index) => (       
        <img src={item.img_src} alt="" />))
        }
    </div>
    
        // { muchosDatos.map((item) => (       
        //     <div key={index}> 
        //     <img src={item.img_src} alt="" />
        //     </div>
        // })
    //        muchosDatos.map((item,index) => (
    //             <div key={index}> 
    //             <img src={item.photos.img_src} alt="" > </img>

    //             </div>
    //         ))
    // }

)}
