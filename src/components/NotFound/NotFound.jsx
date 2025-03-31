import { Link } from "react-router"
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Página no encontrada</h2>
      <p>La página que estás buscando no existe o ha sido movida.</p>
      <Link to="/" className="back-home-btn">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound