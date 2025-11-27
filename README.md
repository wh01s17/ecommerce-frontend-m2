# 🛒 Solución del Proyecto – E-commerce Frontend (Módulo 2)

Este repositorio contiene la **solución de referencia** para el proyecto del Módulo 2: construcción del MVP de un e-commerce utilizando **HTML5 semántico**, **Bootstrap** y **JavaScript**.  
La implementación muestra una manera correcta y completa de cumplir todos los requisitos técnicos y funcionales que los estudiantes deben desarrollar.

---

## 1. Estructura del proyecto

La solución se organiza en una estructura simple y clara:

```bash
ecommerce-frontend-m2
├── assets
│   ├── css
│   │   └── style.css
│   ├── img
│   │   ├── products
│   │   │   ├── fender_jaguar_1965.webp
│   │   │   ├── fender_jazzmaster_1962.webp
│   │   │   ├── fender_mustang_1964.webp
│   │   │   ├── fender_stratocaster_1965.webp
│   │   │   ├── fender_telecaster_1972_custom.webp
│   │   │   ├── gibson_es-335_1961.webp
│   │   │   ├── gibson_explorer_1976.webp
│   │   │   ├── gibson_firebird_v_1963.webp
│   │   │   ├── gibson_les_paul_standard_1959.webp
│   │   │   └── gibson_sg_special_1968.webp
│   │   └── ui
│   │       ├── img_01.webp
│   │       ├── img_02.webp
│   │       └── img_03.webp
│   └── js
│       ├── best-sellers.js
│       ├── cart-details.js
│       ├── cart.js
│       ├── data.js
│       ├── details.js
│       ├── footer.js
│       ├── navbar.js
│       ├── products.js
│       └── render-cards.js
├── cart.html
├── details.html
├── footer.html
├── index.html
├── navbar.html
├── products.html
└── README.md
```

---

## 2. Tecnologías utilizadas

### HTML5

-   Uso de `header`, `nav`, `main`, `section`, `footer`.
-   Separación clara de contenido y estructura.

### Bootstrap (v5.3.8 vía CDN)

-   Componentes usados: **navbar**, **card**, **button**, **badge**.
-   Grid responsivo para Home y páginas internas.
-   Utilidades para márgenes, espaciados, tipografía y display.

### JavaScript

-   Manejo de eventos `click`.
-   Funciones modulares para:
    -   Renderizado de productos.
    -   Actualización del contador del carrito.
    -   Navegación entre páginas.
-   Simulación del carrito usando **localStorage**.

### Git / GitHub

-   Mínimo 3 commits claros y descriptivos.
-   Rama principal `main`.

---

## 3. Funcionalidades implementadas

### 3.1 Home (index.html)

-   Renderiza una **grilla responsiva de productos** utilizando cards de Bootstrap.
-   Cada card incluye:
    -   Imagen
    -   Nombre
    -   Precio
    -   Botón **Ver más**
    -   Botón **Agregar al carrito**

Los productos se cargan desde `data.js` para mostrar cómo separar datos de lógica.

---

### 3.2 Detalle de producto (product.html)

Incluye:

-   Imagen principal del producto.
-   Nombre, precio y descripción.
-   Botón **Agregar al carrito**.
-   Enlace de retorno a Home.

La página lee el ID del producto desde la URL y lo busca en `data.js`.

---

### 3.3 Carrito (cart.html)

-   Muestra el listado de productos agregados.
-   Usa Bootstrap para tabla o cards (dependiendo del diseño).
-   Calcula:
    -   Cantidad total
    -   Total acumulado

El carrito se almacena en `localStorage` para persistencia básica.

---

### 3.4 Navbar + contador

-   Navbar de Bootstrap incluido en todas las páginas.
-   Badge que muestra el número de productos en el carrito.
-   El contador se actualiza automáticamente en cada carga de página.

---

### 3.5 Responsive design

Cumple con:

-   Resolución móvil: **≤ 420px**
-   Resolución escritorio: **≥ 1024px**

La grilla del Home usa breakpoints de Bootstrap para adaptarse a distintos tamaños.

---

## 4. Cómo ejecutar la solución

1. Descargar o clonar el repositorio.
2. Abrir `index.html` en el navegador.
3. Navegar entre Home → Detalle → Carrito.
4. Probar la interacción agregando productos.

No requiere servidor ni dependencias adicionales.

---

## 5. Enlace al repositorio

https://github.com/wh01s17/ecommerce-frontend-m2

---

## 6. Autor

Solución preparada para acompañar y guiar el desarrollo del proyecto de los estudiantes del Módulo 2 - Frontend.
