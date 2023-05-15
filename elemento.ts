export interface IFormatoDeElemento {
  desenhar(): void;
  redimensionar(novaAltura: number, novaLargura: number): void;
}

export class Retangulo implements IFormatoDeElemento {
  constructor(public altura: number, public largura: number) {}

  desenhar(): void {
    const perimetro = 2 * (this.altura + this.largura);
    console.log(
      `Voce desenhou ${Retangulo.name} de perimetro: ${perimetro} cm`
    );
  }

  redimensionar(novaAltura: number, novaLargura: number): void {
    this.altura = novaAltura;
    this.largura = novaLargura;
    console.log(
      `Redimensionado para altura =  ${this.altura} e largura = ${this.largura} :) `
    );
  }
}

export class Circulo implements IFormatoDeElemento {
  constructor(public raio: number) {}
  desenhar(): void {
    console.log(`O raio atual é ${this.raio}`);
  }
  redimensionar(novoRaio: number): void {
    this.raio = novoRaio;
    console.log(`O novo raio do circulo é: ${this.raio}`);
  }
}
