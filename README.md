# Mi Primer E-commerce

## Autor
**Esteban Guillermo Francisco Pourpour**

[![GitHub](https://img.shields.io/badge/GitHub-EsGuFrPourpour-blue?style=flat&logo=github)](https://github.com/EsGuFrPourpour)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Esteban_Pourpour-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/esteban-g-f-pourpour-desarrolladorweb)

## Descripción del Proyecto

Este proyecto es una aplicación de e-commerce desarrollada con React que permite a los usuarios navegar por productos, filtrarlos por categorías, ver detalles, agregar productos al carrito y finalizar la compra generando una orden en Firebase.

### Sobre las imágenes

Las imágenes de los productos están cargadas mediante URLs externas porque personalmente a este proyecto no le voy a dar mucha relevancia, solo quiero darle ilustración para cuando el profesor lo corrija. En un entorno de producción, sería recomendable almacenar las imágenes en un servicio de almacenamiento como Firebase Storage o similar.

## Funcionalidades Principales

- **Navegación por categorías**: Filtrado de productos por electrónica, ropa y muebles.
- **Detalle de productos**: Vista detallada con descripción, precio y stock disponible.
- **Carrito de compras**: Agregar productos, modificar cantidades y ver resumen.
- **Proceso de checkout**: Formulario para datos personales y generación de orden.
- **Integración con Firebase**: Almacenamiento de órdenes en Firestore.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario
- **React Router**: Navegación entre componentes
- **Context API**: Manejo del estado global (carrito de compras)
- **Firebase/Firestore**: Base de datos para almacenar órdenes
- **Bootstrap**: Estilos y componentes UI
- **CSS**: Estilos personalizados

## Instalación y Uso

1. Clonar el repositorio:
   \`\`\`bash
   git clone https://github.com/EsGuFrPourpour/mi-primer-ecommerce.git
   cd mi-primer-ecommerce
   \`\`\`

2. Instalar dependencias:
   \`\`\`bash
   npm install
   \`\`\`

3. Configurar Firebase:
   - Crear un proyecto en Firebase
   - Habilitar Firestore
   - Copiar las credenciales en `src/firebase.js`

4. Iniciar la aplicación:
   \`\`\`bash
   npm run dev
   \`\`\`

## Estructura del Proyecto

\`\`\`
mi-primer-ecommerce/
├── context/
│   └── context.jsx         # Contexto global para el carrito
├── src/
│   ├── components/
│   │   ├── CartDetail/     # Componente de detalle del carrito
│   │   ├── CartWidget/     # Icono del carrito en la navegación
│   │   ├── Forms/          # Formulario de finalización de compra
│   │   ├── Item/           # Tarjeta de producto individual
│   │   ├── ItemCount/      # Contador para seleccionar cantidad
│   │   ├── ItemDetail/     # Detalle completo del producto
│   │   ├── ItemListContainer/ # Contenedor de lista de productos
│   │   ├── Loader/         # Componente de carga
│   │   ├── Navbar/         # Barra de navegación
│   │   └── NotFound/       # Página 404
│   ├── App.jsx             # Componente principal
│   ├── fetchData.js        # Funciones para obtener datos
│   ├── firebase.js         # Configuración de Firebase
│   └── products.js         # Datos de productos
└── index.html              # Archivo HTML principal
\`\`\`

## Funcionalidad de Órdenes de Compra

El sistema permite a los usuarios completar el proceso de compra mediante un formulario donde ingresan sus datos personales. Al enviar el formulario:

1. Se crea un objeto de orden que incluye:
   - Información del comprador
   - Productos seleccionados con cantidades y precios
   - Precio total
   - Fecha y hora de la compra

2. La orden se almacena en la colección "orders" en Firebase Firestore

3. Se muestra al usuario un mensaje de confirmación con el ID de su orden

4. El carrito se vacía automáticamente

## Mejoras Futuras

- Implementar autenticación de usuarios
- Agregar pasarela de pagos
- Crear panel de administración para gestionar productos
- Implementar sistema de búsqueda
- Añadir filtros adicionales por precio, popularidad, etc.
- Desarrollar sistema de notificaciones por email

---

Este proyecto fue desarrollado como parte del curso de React JS.
