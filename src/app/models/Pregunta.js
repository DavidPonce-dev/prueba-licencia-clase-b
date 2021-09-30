export default class Pregunta {
    constructor({
        pregunta,
        alternativas,
        imagen,
        dosPuntos
    })
    {
        this.pregunta = pregunta;
        this.alternativas = alternativas;
        this.imagen = imagen;
        this.dosPuntos = dosPuntos;
    }
}