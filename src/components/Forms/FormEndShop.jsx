import { useState } from "react"
import "./FormEndShop.css"
import { useAppContext } from "../../../context/context"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase"
import { useNavigate } from "react-router"

function FormEndShop() {
  const { cart, clearCart } = useAppContext()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    provincia: "",
    localidad: "",
    email: "",
    telefono: "",
  })
  const [orderId, setOrderId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const finalPrice = cart.reduce((acc, product) => acc + product.price * product.cant, 0).toFixed(2)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (cart.length === 0) {
      alert("No hay productos en el carrito")
      return
    }

    setIsLoading(true)

    try {
      const order = {
        buyer: formData,
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.cant,
          subtotal: item.price * item.cant,
        })),
        total: Number.parseFloat(finalPrice),
        date: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, "orders"), order)
      setOrderId(docRef.id)

      clearCart()

      setFormData({
        nombre: "",
        direccion: "",
        provincia: "",
        localidad: "",
        email: "",
        telefono: "",
      })

    } catch (error) {
      console.error("Error creating order: ", error)
      alert("Hubo un error al crear la orden. Por favor intente nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="form-container">
      {orderId ? (
        <div className="order-success">
          <h2>¡Gracias por tu compra!</h2>
          <p>
            Tu número de orden es: <strong>{orderId}</strong>
          </p>
          <p>Hemos enviado los detalles a tu correo electrónico.</p>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Volver a la tienda
          </button>
        </div>
      ) : (
        <>
          <h2>Formulario de Datos Personales</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre y Apellido:</label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección:</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="provincia">Provincia:</label>
              <input
                type="text"
                id="provincia"
                name="provincia"
                value={formData.provincia}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="localidad">Localidad:</label>
              <input
                type="text"
                id="localidad"
                name="localidad"
                value={formData.localidad}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                pattern="[0-9]{10}"
                placeholder="Ej: 1234567890"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>

            <div className="order-summary">
              <h3>Resumen de la orden</h3>
              <p>Total a pagar: ${finalPrice}</p>
              <p>Cantidad de productos: {cart.reduce((acc, item) => acc + item.cant, 0)}</p>
            </div>

            <input
              type="submit"
              value={isLoading ? "Procesando..." : "Finalizar Compra"}
              disabled={isLoading || cart.length === 0}
            />
          </form>
        </>
      )}
    </div>
  )
}

export default FormEndShop