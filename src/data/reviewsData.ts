export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  tag?: string;
}

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: '1',
    author: 'Enzo Samuel',
    rating: 5,
    timeAgo: 'Recente',
    comment: 'Tive uma experiência excelente no Food Time! A comida é muito saborosa, bem servida e com um preço justo. O ambiente é agradável e a localização, perto da praia, deixa tudo ainda melhor.',
    tag: 'Almoço R$ 40–60',
  },
  {
    id: '2',
    author: 'Pedro Henrique',
    rating: 5,
    timeAgo: 'Recente',
    comment: 'Excelente restaurante! A comida é deliciosa, muito bem preparada e com um preço excelente. Os pratos custam a partir de R$ 20, oferecendo um ótimo custo-benefício. Pertinho da praia!',
    tag: 'Almoço R$ 20–40',
  },
  {
    id: '3',
    author: 'Mariaclara Santos',
    rating: 5,
    timeAgo: '1 ano atrás',
    comment: 'Uma delícia, comida maravilhosa, sabor caseiro e irresistível super recomendo!',
    tag: 'R$ 1–20',
  },
  {
    id: '4',
    author: 'Bruno de Oliveira Soares',
    rating: 5,
    timeAgo: '9 meses atrás',
    comment: 'Preço, quantidade e sabor excelentes! Atendimento também muito bom. Boas lembranças de Maceió e da Praia do Francês.',
    tag: 'Almoço Executivo',
  },
  {
    id: '5',
    author: 'Marcos Lima Gonçalves',
    rating: 5,
    timeAgo: '8 meses atrás',
    comment: 'Uma delícia. Gente atenciosa. Local com muita história, a dona atende com carinho. Saborear um peixe fresco de frente para o mar vale muito a pena!',
    tag: 'Peixe na Brasa',
  },
  {
    id: '6',
    author: 'Lara Elisia',
    rating: 5,
    timeAgo: 'Recente',
    comment: 'Comida maravilhosa, o ambiente maravilhoso, atendimento nota 10. Super recomendo!',
    tag: 'Almoço R$ 1–20',
  },
  {
    id: '7',
    author: 'Samuel Moraes',
    rating: 5,
    timeAgo: '11 meses atrás',
    comment: 'Tomamos café e almoçamos no local, comida excelente, cerveja gelada e preço justo. Parabéns ao Food Time.',
    tag: 'Café & Almoço',
  },
  {
    id: '8',
    author: 'David Alan',
    rating: 5,
    timeAgo: '4 anos atrás',
    comment: 'Ótimo lugar, aconchegante! Almoço perfeito e os sorvetes então nem se fala, com uma vista maravilhosa de frente para a praia!',
    tag: 'Frente ao Mar',
  },
  {
    id: '9',
    author: 'Kack Rodrigo',
    rating: 5,
    timeAgo: '4 anos atrás',
    comment: 'Lugar maravilhoso frente ao mar da bela Praia do Francês, a comida maravilhosa e preço justo. Atendimento nota 10!',
    tag: 'Praia do Francês',
  },
  {
    id: '10',
    author: 'Sueli Santos',
    rating: 5,
    timeAgo: '4 anos atrás',
    comment: 'Ambiente maravilhoso de frente para a praia, sem falar nas delícias que são servidas e com preços ótimos a partir de R$ 20.',
    tag: 'Almoço R$ 20–40',
  },
  {
    id: '11',
    author: 'Zilmara Nislaneys',
    rating: 5,
    timeAgo: '4 anos atrás',
    comment: 'A melhor lanchonete do Francês. A comida é maravilhosa, o atendimento maravilhoso, comida de primeira qualidade com temperinho caseiro!',
    tag: 'Comida Caseira',
  },
];
