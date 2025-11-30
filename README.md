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
│   │   │   ├── fender_coronado_ii_1966.webp
│   │   │   ├── fender_duo_sonic_1956.webp
│   │   │   ├── fender_esquire_1954.webp
│   │   │   ├── fender_jaguar_1965.webp
│   │   │   ├── fender_jazzmaster_1962.webp
│   │   │   ├── fender_lead_ii_1979.webp
│   │   │   ├── fender_mustang_1964.webp
│   │   │   ├── fender_starcaster_1976.webp
│   │   │   ├── fender_stratocaster_1965.webp
│   │   │   ├── fender_telecaster_1972_custom.webp
│   │   │   ├── gibson_es-335_1961.webp
│   │   │   ├── gibson_explorer_1976.webp
│   │   │   ├── gibson_firebird_v_1963.webp
│   │   │   ├── gibson_flying_v_1975.webp
│   │   │   ├── gibson_l6-s_1973.webp
│   │   │   ├── gibson_les_paul_standard_1959.webp
│   │   │   ├── gibson_marauder_1975.webp
│   │   │   ├── gibson_melody_maker_1964.webp
│   │   │   ├── gibson_rd_artist_1978.webp
│   │   │   └── gibson_sg_special_1968.webp
│   │   └── ui
│   │       ├── favicon.png
│   │       ├── img_01.webp
│   │       ├── img_02.webp
│   │       └── img_03.webp
│   └── js
│       ├── best-sellers.js
│       ├── cart-details.js
│       ├── cart.js
│       ├── data.js
│       ├── product-details.js
│       ├── footer.js
│       ├── navbar.js
│       ├── products.js
│       └── render-cards.js
├── cart.html
├── product-details.html
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

## 4. ⚠️ Cómo ejecutar el proyecto de manera local (IMPORTANTE)

El proyecto no funciona si abres index.html directamente desde tu PC (ruta `file://`).
Esto se debe a que el navbar y el footer se cargan mediante `fetch()` desde archivos externos:

```javascript
import { updateCartCount } from "./cart.js";

fetch("../../navbar.html")
    .then((res) => res.text())
    .then((html) => {
        document.getElementById("navbar").innerHTML = html;
        updateCartCount();
    });
```

Los navegadores bloquean `fetch()` cuando se usa sin servidor.

**Para que todo funcione, debes levantar un servidor local**

Puedes usar cualquiera de estas opciones:

### Opción 1: Usar VSCode con Live Server

1. Instala la extensión **Live Server** en VSCode.
2. Abre la carpeta del proyecto.
3. Haz clic derecho en `index.html` → **Open with Live Server**.
4. El proyecto se abrirá en `http://127.0.0.1:5500`.

### Opción 2: Usar un servidor local con Python

Si tienes Python instalado:

```bash
python3 -m http.server 8000
```

Luego abre en tu navegador:

```bash
http://localhost:8000
```

### Opción 3: Usar Node.js (http-server)

Si tienes Node instalado:

```
npm install -g http-server
http-server .
```

Esto abrirá el proyecto desde:

```bash
http://localhost:8080
```

Esto abrirá el proyecto desde:

http://localhost:8080

## **Importante**

El uso de un servidor local asegura que rutas como:

```javascript
fetch("../../footer.html")
    .then((res) => res.text())
    .then((html) => {
        document.getElementById("footer").innerHTML = html;
    });
```

funcionen correctamente tanto en tu PC como en otros equipos al ejecutar el proyecto de forma local.

---

## 5. Enlace al repositorio

https://github.com/wh01s17/ecommerce-frontend-m2

---

## 6. Autor

Solución preparada para acompañar y guiar el desarrollo del proyecto de los estudiantes del Módulo 2 - Frontend.
