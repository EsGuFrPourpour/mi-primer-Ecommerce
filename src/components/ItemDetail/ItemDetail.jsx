import { useEffect, useState } from "react"
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link, useParams } from "react-router"
import { fetchData } from "../../fetchData"
import Loader from "../Loader/Loader"
import NotFound from "../NotFound/NotFound"
import { useAppContext } from "../../../context/context"


function ItemDetail() {
  const [count, setCount] = useState(1)
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useAppContext()

  useEffect(() => {
    fetchData()
      .then((response) => {
        const productToShow = response.find((el) => el.id === Number.parseInt(id))
        setProduct(productToShow)
        setTimeout(() => {
          setLoading(false)
        }, 500)
      })
      .catch((err) => console.error(err))
  }, [id])

  return loading ? (
    <Loader />
  ) : (
    <div className="col col-detail">
      {product ? (
        <div className="card card-detail text-center mb-3">
          <h2 className="card-title">{product.name}</h2>
          <p className="card-text">{product.category}</p>
          <p className="card-text">${product.price}</p>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.stock} disponibles</p>
          <ItemCount stock={product.stock} count={count} setCount={setCount} />
          <button className="btn btn-secondary" onClick={() => addToCart(product, count)}>
            Añadir al carrito
          </button>
          <Link className="linkTo" to="/">
            <button className="btn btn-secondary">Volver al inicio </button>
          </Link>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  )
}

export default ItemDetail
