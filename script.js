class Personas {
    constructor() {
        this.personas = [{ nombre: "Mauro", apellido: "Gómez" }, { nombre: "Juan", apellido: "Perez" }];
        this.ul = document.querySelector('ul');
        this.recorrer_lista();
    }

    añadir_personas() {
        const form = document.querySelector('form');
        const nombre = form.querySelector('input[name="nombre"]').value;
        const apellido = form.querySelector('input[name="apellido"]').value;

        if (nombre && apellido) {
            this.personas.push({ nombre, apellido });
            this.recorrer_lista();
            form.reset();
        } else {
            alert('Por favor, complete ambos campos.');
        }
    }

    recorrer_lista() {
        this.ul.innerHTML = '';
        this.personas.forEach((persona) => {
            const li = document.createElement('li');
            li.textContent = `${persona.nombre} ${persona.apellido}`;
            this.ul.appendChild(li);
        });
    }
}

const personas = new Personas();
