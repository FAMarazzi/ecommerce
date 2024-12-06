import { useState, useEffect } from "react"
import Header from "./components/header"
import Producto from "./components/producto"
import { db } from "./data/db";

function App() {
 
    const [auth, setAuth] = useState(false);

    //states
    //no se puede poner un hook en un condicional
    //parte superior de la función, deben ejecutarse todo el tiempo
    //no deben estar en ciclos de repeticion ni en funciones

    useEffect(()=>{
        if(auth)
        {
            console.log('Autenticado')
        }
    }, [auth])  //arreglo vacío no tiene dependencias (se actualiza solo una vez cuando componente listo)
            //si dentro del arreglo pongo variables, se actualizara además de esa vez
            // siempre que cambie alguna de esas variables)
    setTimeout(() =>{
        setAuth(true)
    }, 3000);

  return (
    <>
    <Header/>
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
             <Producto/>
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
