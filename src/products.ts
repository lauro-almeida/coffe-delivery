import americano from './assets/coffes/americano.png'
import arabe from './assets/coffes/arabe.png'
import cafeComLeite from './assets/coffes/cafe-com-leite.png'
import cafeGelado from './assets/coffes/cafe-gelado.png'
import capuccino from './assets/coffes/capuccino.png'
import chocolateQuente from './assets/coffes/chocolate-quente.png'
import cubano from './assets/coffes/cubano.png'
import expressoCremoso from './assets/coffes/expresso-cremoso.png'
import expresso from './assets/coffes/expresso.png'
import havaiano from './assets/coffes/havaiano.png'
import irlandes from './assets/coffes/irlandes.png'
import latte from './assets/coffes/latte.png'
import macchiato from './assets/coffes/macchiato.png'
import mochaccino from './assets/coffes/mochaccino.png'

export interface Product {
  id: number
  title: string
  labels: string[]
  price: string
  photo: string
}

export const products = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    labels: ['Tradicional'],
    text: 'O tradicional café feito com água quente e grãos moídos',
    price: '9.90',
    photo: americano,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    labels: ['t radicional'],
    text: 'Expresso diluído, menos intenso que o tradicional',
    price: '9.90',
    photo: expresso,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    labels: ['tradicional'],
    text: 'Café expresso tradicional com espuma cremosa',
    price: '9.90',
    photo: expressoCremoso,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    labels: ['tradicional', 'gelado'],
    text: 'O tradicional café feito com água quente e grãos moídos',
    price: '9.90',
    photo: cafeGelado,
  },
  {
    id: 5,
    title: 'Café com Leite',
    labels: ['tradicional', 'com leite'],
    text: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9.90',
    photo: cafeComLeite,
  },
  {
    id: 6,
    title: 'Latte',
    labels: ['tradicional', 'com leite'],
    text: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9.90',
    photo: latte,
  },
  {
    id: 7,
    title: 'Capuccino',
    labels: ['tradicional', 'com leite'],
    text: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9.90',
    photo: capuccino,
  },
  {
    id: 8,
    title: 'Macchiato',
    labels: ['tradicional', 'com leite'],
    text: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9.90',
    photo: macchiato,
  },
  {
    id: 9,
    title: 'Mocaccino',
    labels: ['tradicional', 'com leite'],
    text: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9.90',
    photo: mochaccino,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    labels: ['especial', 'com leite'],
    text: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9.90',
    photo: chocolateQuente,
  },
  {
    id: 11,
    title: 'Cubano',
    labels: ['especial', 'alcoólico', 'gelado'],
    text: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9.90',
    photo: cubano,
  },
  {
    id: 12,
    title: 'Havaiano',
    labels: ['especial'],
    text: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9.90',
    photo: havaiano,
  },
  {
    id: 13,
    title: 'Árabe',
    labels: ['especial'],
    text: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9.90',
    photo: arabe,
  },
  {
    id: 14,
    title: 'Irlandês',
    labels: ['especial', 'alcoólico'],
    text: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9.90',
    photo: irlandes,
  },
]
