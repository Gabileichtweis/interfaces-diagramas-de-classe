import { ItemPedido, Pedido } from './crud';
import { Usuario } from './cadastroUsuario';
import { Retangulo, Circulo } from './elemento';
import { Computador, Pizza, Pedido1 } from './pedido';

function atividade1() {
  const computador = new Computador(10000, 'computador bom', 'ele é bom mesmo');
  const pizza = new Pizza(68, 'pizza doce', 'cocholate branco com nozes');
  const pizza2 = new Pizza(60, 'pizza salgada', 'brocolis e frango');

  const pedido = new Pedido1([computador, pizza]);

  pedido.adicionarMaisUmItem(pizza2);
  console.log(pedido);
}

function atividade2() {
  const retangulo = new Retangulo(1, 2);
  const circulo = new Circulo(8);

  retangulo.desenhar();
  retangulo.redimensionar(6, 7);
  circulo.desenhar();
  circulo.redimensionar(10);
}

function atividade4() {
  const usuario1 = new Usuario('gabrielaleichtweis@gmail.com', '123456abc');

  console.log(usuario1);
}

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
