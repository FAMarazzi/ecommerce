export default function Producto({producto, addToCart}){
    const {id, name, image, description, price } = producto

    return(
        
        <div className="col-md-6 sombra-items col-lg-4 my-4 align-items-center">
                <div className="d-flex.flex-column col-4">
                    <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                    {/*<button 
                        type="button"
                        className="btn btn-dark w-15 text-center"
                        onClick={() => addToCart(producto)}
                        //poniendo un callback, el primer argumento es el argumento actual del estado
                        // y usando ...prevcart conserva el arreglo de carrito actual agregando un nuevo
                        //producto al arreglo
                    ><img className="img-chica" src="./public/img/carrito.png" alt="imagen carrito" /></button>¨*/}   
                </div>
                <div className="col-8">
                    <h3 className="text-black text-center fs-4 fw-bold text-uppercase">{name}</h3>
                    <p className="fw-black text-primary text-center fs-3--bs-text-opacity no-margin">${price}</p>
                    <p className="text-center">{description}</p>
                </div>
            </div>
    )
}