import { leerArchivo, escribirArchivo } from "../fileManager";

// eslint-disable-next-line no-unused-vars
const leerListas = async () => {
  //lee los archivos los cuales contienen los JSONs con 
  //la lista de las preguntas
  let unPunto = await leerArchivo("preguntas.json");
  let dosPuntos = await leerArchivo("preguntas2.json");  

  //retorna un objeto con ambas listas en ella 
  return {
    unPunto,
    dosPuntos
  }
}

// eslint-disable-next-line no-unused-vars
const crearCuestionario = async (evt) => {
  //esta funcion genera un numero random entre 0.5 y -0.5, 
  //se utiliza para desordenar los rreglos en el metodo sort()
  const sortRand = () => 0.5 - Math.random()

  //cargamos ambas listas de preguntas 
  let { unPunto, dosPuntos } = leerListas()

  //desordenamos las listas y seleccionamos 32 y 3 
  //preguntas de cada una respectivamente
  unPunto = unPunto.sort(sortRand).slice(0, 32)
  dosPuntos = dosPuntos.sort(sortRand).slice(0, 3)


  //retornamos el cuestionario mezclando ambas listas y
  //las desordenamos otra vez para que queden bien mezlcadas
  return [
    ...unPunto,
    ...dosPuntos
  ].sort(sortRand)
};

// eslint-disable-next-line no-unused-vars
const setPregunta = async (evt, { pregunta, puntos = 1, indice, accion}) => {
  //cargamos una de las listas dependiendo de cuantos puntos tiene la pregunta
  const archivo = ["preguntas.json", "preguntas2.json"];
  const lista = await leerArchivo(archivo[puntos - 1]);

  //si la accion es add agreca la pregunta a su lista correpondiente
  if (accion == 'add') lista.push(pregunta);

  //si la accion es mod, reemplaza la pregunta de la lista con la ingresada
  else if (accion == 'mod')lista[indice] = pregunta;

  //si la  accion es del elimina el indice de la pregunta de la lista
  else if (accion == 'del')lista.splice(indice, 1);

  //si la accion no corresponde a las anteriores lanza un error
  else throw new Error('accion no corresponde a una correspondiente \n ingrese {accion: add|mod|del} de forma correspondiente')
  
  //reescribe el archivo leido con la lista ya modificada
  escribirArchivo(archivo[puntos - 1], lista);

  //retorna la lista
  return lista;
};
export default {
  crearCuestionario,
  leerListas,
  setPregunta
}