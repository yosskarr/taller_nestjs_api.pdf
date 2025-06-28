# 🧪 API Tienda - NestJS + TypeORM

Este proyecto es una API RESTful desarrollada con NestJS que implementa buenas prácticas, un CRUD completo y relaciones entre múltiples entidades conectadas a una base de datos MySQL mediante TypeORM.

---

## 🚀 Características principales

✅ Arquitectura modular en NestJS  
✅ CRUD completo (Create, Read, Update, Delete)  
✅ Validaciones con `class-validator` y `class-transformer`  
✅ Manejo de errores con `HttpException` y `HttpStatus`  
✅ Relaciones entre entidades (`ManyToOne`, `OneToMany`, `ManyToMany`)  
✅ Documentación y pruebas con Postman  
✅ Código limpio y organizado en módulos  
✅ Variables de entorno para configuración flexible  

---

## 📦 Requisitos

- Node.js (v18+ recomendado)
- NestJS CLI: `npm install -g @nestjs/cli`
- MySQL (o MariaDB)
- Postman

---

## ⚙️ Variables de entorno (.env)

Crea un archivo `.env` en la raíz del proyecto con esta configuración:

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=tu_usuario_mysql
DB_PASSWORD=tu_contraseña
DB_NAME=tienda_db

> Asegúrate de tener creada la base de datos `tienda_db` en tu servidor MySQL.

Instala dependencias:

npm install

Levanta el servidor en desarrollo:

npm run start:dev

La API estará disponible en:
📍 http://localhost:3000


🔌 Rutas disponibles (CRUD)
🔹 Categorías
POST /categorias

GET /categorias

GET /categorias/:id

PUT /categorias/:id

DELETE /categorias/:id

🔹 Productos
POST /productos

GET /productos

GET /productos/:id

PUT /productos/:id

DELETE /productos/:id

🔹 Usuarios
POST /usuario

GET /usuario

GET /usuario/:id

PUT /usuario/:id

DELETE /usuario/:id

🔹 Pedidos
POST /pedidos

GET /pedidos

GET /pedidos/:id

PUT /pedidos/:id

DELETE /pedidos/:id

📮 Colección de Postman
Se incluye el archivo peticiones_postman.json para que puedas probar todas las rutas fácilmente desde Postman.

Pasos:

Abrir Postman

Importar la colección desde archivo

Usar las rutas según tus necesidades



 












