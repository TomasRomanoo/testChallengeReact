import React, {Fragment, useEffect,useState} from "react";
import Characters from "./components/Characters"




function App() {
  //trae de a 25
  const url3 ="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY"
  //filtra por fecha terrestre
  const url2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/photos?earth_date=2015-6-3&page=1&api_key=DEMO_KEY";
  //trae todo 
  const url1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=DEMO_KEY";


  const obtenerDatos = async (url) =>{
    const data = await fetch(url)
    const info = await data.json()
    // console.log(data)
    console.log(info.photos)
    setMuchosDatos(info.photos)
  }
  
  const [muchosDatos, setMuchosDatos] = useState();

  useEffect (() =>{
    obtenerDatos();
  },[]);


  // useEffect (() =>{
  //   obtenerDatosCuriosity(url);
  // },[]);


  // const obtenerDatosOpportunity = async (url) =>{
  //   const data = await fetch(url)
  //   const info = await data.json()
  //   // console.log(data)
  //   console.log(info.photos)
  //   setMuchosDatos(info.photos)
  //   //agragar time out
  // }

//t
// const KEY = "app"
//   useEffect(() => {
//     const storedMuchosDatos = JSON.parse(localStorage.getItem(KEY));
//     if(storedMuchosDatos){
//       setMuchosDatos(storedMuchosDatos);
//     }
// },[])

// useEffect(()=> {
//     localStorage.setItem(KEY, JSON.stringify(muchosDatos));
// }, [muchosDatos]);
//f

  return(
    <Fragment> 
      <h1> testeamos imagenes</h1>
      <button onClick={obtenerDatos()}>Curiosity</button>
      {/* <button onClick={obtenerDatos(url2)}>Opportunity</button> */}
      {/* <button onClick={""}>Spirit</button> */}
        
        {/* {muchosDatos.map((item) => (       
          <img src={item.img_src} alt="" />))
        } */}

      <div>
        {/* <Characters characters={muchosDatos} /> */}
      </div>
    </Fragment>
  )

}

export default App;
