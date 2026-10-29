class Bebida {
  constructor(nombre) {
    this.nombre = nombre;
  }

  preparar() {
    return `${this.nombre}: servir en un vaso`;
  }
}

class Espresso extends Bebida {
  constructor() {
    super('Espresso');
  }

  preparar() {
    return `${this.nombre}: moler café, presionar y extraer 30 ml`;
  }
}

class Latte extends Bebida {
  constructor() {
    super('Latte');
  }

  preparar() {
    return `${this.nombre}: extraer espresso, vaporizar leche y mezclar`;
  }
}

class TeHelado extends Bebida {
  constructor() {
    super('Té helado');
  }

  preparar() {
    return `${this.nombre}: infusionar el té y verterlo sobre hielo`;
  }
}

class Frappe extends Bebida {
  constructor() {
    super('Frappé');
  }

  preparar() {
    return `${this.nombre}: licuar café con hielo y coronar con crema`;
  }
}

class Barista {
  atender(bebida) {
    console.log(bebida.preparar());
  }
}

const barista = new Barista();
const pedidos = [new Espresso(), new Latte(), new TeHelado()];

pedidos.forEach((bebida) => barista.atender(bebida));

barista.atender(new Frappe());
