import { useState } from "react"
import Header from "./components/header"
import Producto from "./components/producto"
import { db } from "./data/db";

function App() {
    const [data, setData] = useState(db)
    const [cart, setCart] =useState([])
    
    function addToCart(item){
      const itemExists =cart.findIndex((producto) => producto.id === item.id)
      if(itemExists>=0){
        const updatedCart=[...cart]
        updatedCart[itemExists].quantity++
        setCart(updatedCart)
      }
      else{
        item.quantity=1
        setCart([...cart, item])
      }
      
      
  }
  return (
    //aqui dentro se pueden usar expressions: 
    //ternarios, array methods que generen un nuevo array o un .map que genere un nuevo array
    <>
    <Header
      cart={cart}
    
    />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((producto) => (
            <Producto
            //los props comparten info entre componentes,
            //siempre de padre a hijo
            key={producto.id} //siempre la key debe existir en componentes creados muchas veces y debe ser una clave irrepetible
            producto={producto}
            setCart={setCart}
            addToCart={addToCart}
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
