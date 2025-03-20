export default function Producto({producto, addToCart}){
    const {id, name, image, description, price } = producto
    // Función para formatear el precio ARG
    const formatearPrecioArgentino = (precio) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2
        }).format(precio);
    };
    return(
        
        <div className="col-md-6 col-lg-4 my-4 align-items-center">
                <div className="row">
                    <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="row">
                    <h3 className="text-black fs-5 text-uppercase">{name}</h3>
                    <p>{description}</p>
                    <p className="fw-black fw-bold fs-5 price">${price}</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={() => addToCart(producto)}
                        //poniendo un callback, el primer argumento es el argumento actual del estado
                        // y usando ...prevcart conserva el arreglo de carrito actual agregando un nuevo
                        //producto al arreglo
                    >Agregar al Carrito</button>
                </div>
            </div>
    )
}