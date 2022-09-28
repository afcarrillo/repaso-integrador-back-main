# OH-repaso-integrador-back-review
ejercicios completados del repo OH-repaso-integrador-back

+++ con thunder client o postman testear +++

antes que nada, parados sobre nuestra carpeta OH-repaso-integrador-back vamos a hacer:
-createdb ohBack
-npm i
-npm start

recorramos brevemente el proyecto 
-tenemos nuestro archivo server.js donde va a estar la configuracion inicial del servidor
-una carpeta utils con un archivo seed que tiene objetos con propiedades
-una carpeta routes que tiene dos archivos, un index que va a llamar al archivo libros, y en este archivo libros ya tenemos hecha la ruta para obtener todos los libros (get) y para crear libros nuevos en nuestra db (post)
- la carpeta models con el archivo libros.js donde ya esta definido el modelo libros conlos campos:
titulo: string,
autor: string, 
ventas:  biginit

y por ultimo en la carpeta db esta el archivo index con la configuracion que conecta nuestra db con sequelize

Ahora si! empecemos!

lo primero que vamos a hacer es testear que las rutas ya hechas funcionen! para eso:

1 - npm start (si no lo dejamos corriendo despues de hacer npm i mas arriba)
2 - acceder a thunder client/ postman y vamos a pegarle a la siguiente URL: 
 http://localhost:3001/api/libros
3- vamos a colocarle el metodo post y uno por uno vamos a ir pegando los objetos de nuestro archivo seed y vamos aprentando send para que se ejecute la ruta
4- luego de hacer el punto 3 con todos los objetos de nuestro archivo, cambiamos el metodo de post a get y deberia devolvernos un arrgelo de objetos con los objetos que mandamos en el punto 3
# UPDATEAR UN LIBRO
si todo esto funciona, pasemos a hacer la ruta de update, (deberia updatear cualquier campo pasado por req.body)

# ENCONTRAR TODOS LOS LIBROS QUE EMPICEN CON LA LETRA...
para esta parte del ejecercicio nos vamos a parar en la carpeta models y vamos a crear un metodo de clase donde nosotros podamos pasarle una letra y nos devuelva todos los libros que el titulo empiece con esa letra (pista: hay operadores de sequelize que podrian ayudarte ;))

una vez hecho el metodo de clase vamos a volver a nuestras rutas y crear una ruta para que ejecutemos el metodo de clase que acabamos de hacer y veamos el resultado! 

# ENCONTRAR OTROS LIBROS DEL MISMO AUTOR
para esto vamos a hacer un metodo de instancia que se fije de buscar todos los libros que tengan el mismo autor que el que tiene esa instancia


# HOOK EXTRA CREDIT
añade al modelo un hook que si la cantidad de ventas es mayor a 30000 al campo titulo se le añada el string best seller