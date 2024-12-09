import { useState } from "react"
import Header from "./components/header"
import Producto from "./components/producto"
import { db } from "./data/db";

function App() {
    const [data, setData] = useState(db)

  return (
    //aqui dentro se pueden usar expressions: 
    //ternarios, array methods que generen un nuevo array o un .map que genere un nuevo array
    <>
    <Header/>
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((producto) => (
            <Producto
            //los props comparten info entre componentes,
            //siempre de padre a hijo
            key={producto.id}
            producto={producto}
            />
          )
          )}
             
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
