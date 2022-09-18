export class PoligonoRegular {
  constructor(lados) {
    if (typeof lados !== "number") {
      throw new Error(`El atributo lados debe ser un número`);
    }

    if (Number.isInteger(lados) === false || lados <= 0) {
      throw new Error(`El atributo lados debe ser un número entero positivo`);
    }

    if (lados <= 2) {
      throw new Error(`El atributo lados debe ser un mayor a 2`);
    }

    this.lados = lados;
  }

  getPerimetro() {}

  getArea() {}
}
