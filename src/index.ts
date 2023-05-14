import { ItemPedido, Pedido } from './crud';

function atividade1() {}
atividade1();

function atividade2() {}
atividade2();

function atividade4() {}
atividade4();

function atividade5() {
  const item1 = new ItemPedido(100, 'camiseta', 2);
  const item2 = new ItemPedido(180, 'calça', 3);

  const pedido = new Pedido();
  item2.aplicarDescontoEmReais(10);
  console.log(item2);

  pedido.adicionarItem(item1);
  pedido.adicionarItem(item2);

  console.log(`O valor do pedido é R$${pedido.recuperarValorTotal()}`);

  pedido.aplicarDescontoEmPorcentagem(10);
  console.log(`O valor do pedido é R$${pedido.recuperarValorTotal()}`);

  pedido.aplicarDescontoEmReais(50);
  console.log(`O valor do pedido é R$${pedido.recuperarValorTotal()}`);

  pedido.removerItem('camiseta');
  console.log(pedido);
}
