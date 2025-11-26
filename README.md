# 🛒 Solución del Proyecto – E-commerce Frontend (Módulo 2)

Este repositorio contiene la **solución de referencia** para el proyecto del Módulo 2: construcción del MVP de un e-commerce utilizando **HTML5 semántico**, **Bootstrap** y **JavaScript**.  
La implementación muestra una manera correcta y completa de cumplir todos los requisitos técnicos y funcionales que los estudiantes deben desarrollar.

---

## 1. Estructura del proyecto

La solución se organiza en una estructura simple y clara:

```bash
/ecommerce-frontend-m2
│
├── index.html # Página Home (listado de productos)
├── product.html # Página de detalle del producto
├── cart.html # Página del carrito simulado
│
├── /assets
 ├── /img # Imágenes de productos
 └── /css # Estilos adicionales (opcional)
  │
  └── /js
    ├── data.js # Arreglo de productos
    └── app.js # Lógica del carrito y eventos
```

---

## 2. Tecnologías utilizadas

### HTML5

-   Uso de `header`, `nav`, `main`, `section`, `article`, `footer`.
-   Separación clara de contenido y estructura.

### Bootstrap (v5.x vía CDN)

-   Componentes usados: **navbar**, **card**, **button**, **badge**.
-   Grid responsivo para Home y páginas internas.
-   Utilidades para márgenes, espaciados, tipografía y display.

### JavaScript

-   Manejo de eventos `click`.
-   Funciones modulares para:
    -   Renderizado de productos.
    -   Actualización del contador del carrito.
    -   Navegación entre páginas.
-   Simulación del carrito usando **localStorage** (opcional pero recomendado).

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

## 6. Observaciones pedagógicas

-   Esta solución muestra **una forma correcta**, pero **no la única**, de resolver el proyecto.
-   Se privilegia la claridad del código por sobre la complejidad.
-   La separación de `data.js` y `app.js` es intencional para favorecer buenas prácticas.
-   La solución evita frameworks para enfocarse en los fundamentos del módulo.

---

## 7. Autor

Solución preparada para acompañar y guiar el desarrollo del proyecto de los estudiantes del Módulo 2 – Frontend.
