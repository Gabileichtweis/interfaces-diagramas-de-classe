interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void;
  aplicarDescontoEmReais(desconto: number): void;
  recuperarValorTotal(): number;
}

export class Pedido implements Desconto {
  valorTotal: number;
  itens: ItemPedido[];

  constructor() {
    this.valorTotal = 0;
    this.itens = [];
  }

  adicionarItem(item: ItemPedido): void {
    this.itens.push(item);
    this.valorTotal += item.quantidade * item.valor;
  }

  removerItem(nomeItem: string): void {
    this.itens = this.itens.filter((item) => item.nome !== nomeItem);
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valorTotal -= desconto;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    this.valorTotal -= this.valorTotal * porcentagem;
  }

  recuperarValorTotal(): number {
    return this.valorTotal;
  }
}

export class ItemPedido implements Desconto {
  valor: number;
  nome: string;
  quantidade: number;
  valorDesconto?: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    this.valor -= this.valor * porcentagem;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }
}
