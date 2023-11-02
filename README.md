Reto para el hackatón en jum2digital-rick&morti

Para este proyecto, utilizaremos React, Vite, Typescript, Zustand para el contexto y Tailwind CSS. Crearemos una aplicación web que mostrará toda la información relacionada con la serie Rick & Morty, permitiendo seleccionar personajes o episodios individuales y ver su información.

El usuario podrá filtrar a través de diferentes puntos finales como Ubicación, personaje o Episodio utilizando la división en el lado izquierdo y buscar un personaje específico en la barra de búsqueda.

Para comenzar el proyecto, necesitarás:
1. Clonar el proyecto desde este repositorio utilizando el comando: git clone https://github.com/REALcuba/hackatoon-j2d.git
2. Instalar las dependencias con: npm install (npm i)
3. Finalmente, ejecutar el proyecto con: npm run dev

Requisitos técnicos
1−  Conexión a la API: es necesario obtener los datos utilizando la API:
https://rickandmortyapi.com/documentation
 -Hecho: se ha utilizado Axios para la conección a la api
 mas información en: https://axios-http.com/es/ 

2− Estilo y diseño: Utilizar CSS para dar estilo a la aplicación y hacer que sea atractiva y fácil de
utilizar. No hace falta que sea altamente elaborada, pero debe ser funcional y agradable a la
vista.
 -Hecho - Para los estilos se ha utilizado la libreria: Tailwindcss,
  mas información en https://tailwindcss.com/
3− Responsive: la aplicación debe ser totalmente responsiva y que se vea bien en dispositivos
móviles y de escritorio.
-Hecho - Para los estilos se ha utilizado la libreria: Tailwindcss,
  mas información en https://tailwindcss.com/
4− Documentación: proporcionar una documentación de la pila tecnológica utilizada,
instrucciones para poner en marcha el proyecto e idealmente un enlace a una demo.
 -Hecho - Sitio desplegado usando la opción de Github Pages, 
 Link: https://realcuba.github.io/hackatoon-j2d/

Puntos adicionales (opcionales)
Si deseas destacar aún más, puedes considerar añadir las siguientes características opcionales a la aplicación: 

5− Búsqueda de personajes: implementar la funcionalidad de búsqueda mediante el campo de investigación. La aplicación debe mostrar una lista de los personajes coincidentes en tiempo real a medida que el usuario escribe en el campo de búsqueda.
 -Hecho: se ha implementado un campo de buscando, el cual al insertar texto despliega una lista filtrada y actualizada en tiempo real de los nombres de lospersonajes.
6− Implementar la carga infinita o un botón 'Muestra más' a medida que el usuario hace scroll. 
-Hecho: En la barra lateral, tenemos la posibilidad de filtar por caracteres, episodios o lugares de la serie y al final se encuentra un boton que carga la siguiente pagina, independientemente de el filtrado

Proyecto aún en contrucción.