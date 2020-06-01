class Usuarios {

    constructor() {

        this.personas = [];

    };

    agregarPersona(id, nombre, sala) {

        let persona = {
            id: id,
            nombre: nombre,
            sala: sala
        }

        this.personas.push(persona);

        return this.personas;

    };

    getPersona(id) {

        let persona = this.personas.filter(persona => {

            return persona.id === id;
        })[0];

        return persona;
    };

    getPersonas() {

        return this.personas;

    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => {

            return persona.sala === sala;
        });

        return personasEnSala;

    };

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        //arma nuevo arreglo sin la persona q tiene como parametro
        this.personas = this.personas.filter(persona => {
            return persona.id !== id;
        });

        return personaBorrada;

    };

};


module.exports = { Usuarios };