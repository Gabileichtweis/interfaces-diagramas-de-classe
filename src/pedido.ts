export interface ContratoItem {
  valor: number;
  nome: string;
  descricao: string;
}

export interface ContratoPedido {
  valorTotal: number;
  items: ContratoItem[];

  adicionarMaisUmItem(novoItem: ContratoItem): void;
}

export class Pedido1 implements ContratoPedido {
  valorTotal: number;

  constructor(public items: ContratoItem[]) {
    this.valorTotal = items.reduce((soma, item) => (soma += item.valor), 0);
  }

  public adicionarMaisUmItem(novoItem: ContratoItem) {
    this.items.push(novoItem);
    this.valorTotal += novoItem.valor;

    console.log(
      `O produto ${
        novoItem.nome
      } foi adiciona ao carrinho com sucesso! Agora o valor total é de R$ ${this.valorTotal
        .toFixed(2)
        .replace('.', ',')}`
    );
  }
}

export class Pizza implements ContratoItem {
  constructor(
    public valor: number,
    public nome: string,
    public descricao: string
  ) {}
}

export class Computador implements ContratoItem {
  constructor(
    public valor: number,
    public nome: string,
    public descricao: string
  ) {}
}
