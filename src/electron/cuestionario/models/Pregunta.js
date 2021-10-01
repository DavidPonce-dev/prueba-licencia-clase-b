export default class Pregunta {
    constructor({
        id,
        pregunta,
        alternativas,
        imagen,
        dosPuntos
    })
    {
        this.id = id;
        this.pregunta = pregunta;
        this.alternativas = alternativas;
        this.imagen = imagen;
        this.dosPuntos = dosPuntos;
    }
}