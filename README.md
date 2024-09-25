## Cliente Gateway
El gateway es el punto de comunicación entre nuestros clientes y nuestros servicios. Es el encargado de recibir las peticiones, enviarlas a los servicios correspondientes y devolver la respuesta al cliente.


## Dev

1. Clonar el repositorio
2. Instalar dependencias
3. Crear un archivo `.env` basado en el `env.template`
4. Tener levantados los microservicios que se van a consumir
5. Levantar proyecto con `npm run start:dev`


##nats
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```

##id nats 
87fc76c500f090863d4162db769ce68603e0b35278d3f4cef586d2ce783ed249
