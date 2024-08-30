const data = [
  {
    category: 'HTML',
    questions: [
      {
        question: 'Qual tag cria um parágrafo?',
        options: ['<p>', '<h1>', '<text>', '<ul>', '<link>'],
        answer: '<p>',
        tip: 'É uma tag de uma letra apenas',
      },
      {
        question: 'Qual atributo adiciona um link para a tag a?',
        options: ['alt', 'href', 'src', 'link', 'rel'],
        answer: 'href',
        tip: 'Hyperlink Reference',
      },
      {
        question: 'As listas não ordenadas tem a tag de:',
        options: ['<ol>', '<ul>', '<li>', '<list>', '<a>'],
        answer: '<ul>',
      },
      {
        question: "O atributo 'required' deixa o input obrigatório?",
        options: ['certo', 'errado'],
        answer: 'certo',
      },
      {
        question: 'Div é uma tag semântica indicada para rodapés?',
        options: ['certo', 'errado'],
        answer: 'errado',
      },
    ],
  },
  {
    category: 'CSS',
    questions: [
      {
        question: 'Qual regra altera a cor de um elemento?',
        options: [
          'color',
          'background-color',
          'font-size',
          'transition',
          'padding',
        ],
        answer: 'color',
        tip: 'Cor em inglês',
      },
      {
        question: 'Para aumentar a fonte de um elemento utilizamos:',
        options: [
          'font',
          'text-transform',
          'font-size',
          'hover',
          'align-items',
        ],
        answer: 'font-size',
      },
      {
        question: 'A posição que deixa um elemento fixo é a:',
        options: ['static', 'absolute', 'fixed', 'relative', 'center'],
        answer: 'fixed',
      },
    ],
  },
  {
    category: 'JavaScript',
    questions: [
      {
        question: 'O que é Vanilla JavaScript?',
        options: [
          'JavaScript puro',
          'Uma biblioteca JavaScript',
          'Um framework JavaScript',
          'Um compilador de JavaScript',
        ],
        answer: 'JavaScript puro',
      },
      {
        question: 'Com qual instrução declaramos uma constante em JavaScript?',
        options: ['const', 'let', 'var', 'define', 'for'],
        answer: 'const',
      },
      {
        question: 'Qual dos tipos de dado a seguir não existe em JavaScript?',
        options: ['string', 'number', 'boolean', 'float'],
        answer: 'float',
      },
      {
        question: 'Qual dos métodos a seguir seleciona um elemento?',
        options: ['querySelector', 'parseInt', 'sort', 'reduce', 'select'],
        answer: 'querySelector',
      },
      {
        question:
          'A propriedade length da a quantidade de elementos de um array?',
        options: ['certo', 'errado'],
        answer: 'certo',
      },
    ],
  },
];

export default data;
