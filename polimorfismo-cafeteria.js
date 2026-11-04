
// 1. CLASE USUARIO (CLASE PADRE)
class Usuario {
    constructor(id, nombre, correo, contraseña) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
    }

    iniciarSesion() {
        console.log("El usuario ha iniciado sesión");
    }

    cerrarSesion() {
        console.log("El usuario ha cerrado sesión");
    }
}

// 2. HERENCIA: PROPIETARIO
class Propietario extends Usuario {
    constructor(id, nombre, correo, contraseña) {
        super(id, nombre, correo, contraseña);
    }

    registrarMascota(mascota) {
        console.log("Mascota registrada: " + mascota.nombre);
    }

    // POLIMORFISMO POR SOBRESCRITURA:
    // Modifica el comportamiento del método heredado.
    iniciarSesion() {
        console.log("El propietario ha iniciado sesión");
    }
}



// 3. HERENCIA: CUIDADOR


class Cuidador extends Usuario {
    constructor(id, nombre, correo, contraseña) {
        super(id, nombre, correo, contraseña);
    }

    cuidarMascota(mascota) {
        console.log("El cuidador está atendiendo a " + mascota.nombre);
    }

    // POLIMORFISMO POR SOBRESCRITURA:
    // Implementa una versión diferente del mismo método.
    iniciarSesion() {
        console.log("El cuidador ha iniciado sesión");
    }
}



// 4. CLASE MASCOTA


class Mascota {
    constructor(id, nombre, tamaño, raza, fechaNacimiento, notas) {
        this.id = id;
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.raza = raza;
        this.fechaNacimiento = fechaNacimiento;
        this.notas = notas;
    }

    mostrarInformacion() {
        console.log(
            this.nombre + " - " + this.raza + " - " + this.tamaño
        );
    }
}



// 5. CLASE SERVICIOAUTENTICACION


class ServicioAutenticacion {

    registrar(usuario) {
        console.log("Registrando a: " + usuario.nombre);
    }

    iniciarSesion(usuario) {
        usuario.iniciarSesion();
    }

    cerrarSesion(usuario) {
        usuario.cerrarSesion();
    }
}



// 6. CLASE SERVICIOMASCOTAS


class ServicioMascotas {

    crear(mascota) {
        console.log("Mascota creada: " + mascota.nombre);
    }

    consultar(mascotas) {
        mascotas.forEach(mascota => {
            mascota.mostrarInformacion();
        });
    }

    actualizar(mascota, nuevoNombre) {
        mascota.nombre = nuevoNombre;
        console.log("Mascota actualizada");
    }

    eliminar(mascotas, id) {
        return mascotas.filter(mascota => mascota.id !== id);
    }
}



// 7. EJEMPLO DE POLIMORFISMO


// Creamos dos tipos diferentes de usuarios.
const propietario = new Propietario(
    1, "Ana", "ana@gmail.com", "1234"
);

const cuidador = new Cuidador(
    2, "Carlos", "carlos@gmail.com", "5678"
);

// Ambos se pueden tratar como usuarios.
const usuarios = [propietario, cuidador];

// POLIMORFISMO POR SOBRESCRITURA:
// Se llama al mismo método, pero cada objeto
// ejecuta su propia implementación.

const servicioAutenticacion = new ServicioAutenticacion();

usuarios.forEach(usuario => {
    servicioAutenticacion.iniciarSesion(usuario);
});



// 8. EJEMPLO DE USO DE LAS CLASES


const mascota1 = new Mascota(
    1, "Max", "Mediano", "Labrador", "2022-05-10", "Amigable"
);

const mascota2 = new Mascota(
    2, "Luna", "Pequeño", "Poodle", "2023-02-15", "Juguetona"
);

// El propietario registra mascotas.
propietario.registrarMascota(mascota1);

// El cuidador atiende una mascota.
cuidador.cuidarMascota(mascota2);

// Administrar mascotas.
const servicioMascotas = new ServicioMascotas();

servicioMascotas.crear(mascota1);
servicioMascotas.consultar([mascota1, mascota2]);
