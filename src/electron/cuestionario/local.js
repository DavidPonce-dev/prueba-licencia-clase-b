import { leerArchivo, escribirArchivo } from "../fileManager";

const leerLista = async () => await leerArchivo("lista.json")

const escribirLista = async (lista) => await escribirArchivo("lista.json", lista)


const crearCuestionario = async () => {
  //esta funcion genera un numero random entre 0.5 y -0.5, 
  //se utiliza para desordenar los rreglos en el metodo sort()
  const sortRand = () => 0.5 - Math.random()

  const lista = await leerLista()

  const unPunto = lista
    .filter(p => !p.dosPuntos)
    .sort(sortRand).slice(0, 32)

  const dosPuntos = lista
    .filter(p => p.dosPuntos)
    .sort(sortRand).slice(0, 3)

  return [
    ...unPunto,
    ...dosPuntos
  ].sort(sortRand)
};

const setPregunta = async ({ pregunta, accion }) => {
  const lista = await leerLista()

  //si la accion es add agreca la pregunta a su lista correpondiente
  if (accion == 'add') lista.push(pregunta);

  //si la accion es mod, reemplaza la pregunta de la lista con la ingresada
  else if (accion == 'mod')lista[pregunta.id] = pregunta;

  //si la  accion es del elimina el indice de la pregunta de la lista
  else if (accion == 'del')lista.splice(pregunta.id, 1);

  //si la accion no corresponde a las anteriores lanza un error
  else throw new Error('accion no corresponde a una correspondiente \n ingrese {accion: add|mod|del} de forma correspondiente')
  
  //reescribe el archivo leido con la lista ya modificada
  escribirLista(lista);

  //retorna la lista
  return lista;
};
export default {
  crearCuestionario,
  leerLista,
  setPregunta
}