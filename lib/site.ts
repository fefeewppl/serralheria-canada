// Dados centrais da Serralheria Canadá — edite aqui para atualizar o site inteiro.

export const SITE = {
  name: "Serralheria Canadá",
  url: "https://serralheriacanada.com",
  since: 2016,
  phone: "(18) 98127-0860",
  phoneE164: "+5518981270860",
  email: "serralheriacanada@gmail.com",
  city: "Avanhandava",
  state: "SP",
  street: "Avenida Boa Vista, 2142",
  mapQuery: "Avenida Boa Vista, 2142, Avanhandava - SP",
  citiesServed: ["Avanhandava", "Penápolis", "Barbosa", "Promissão"],
  hours: [
    { label: "Segunda a Sexta", value: "8h às 18h" },
    { label: "Sábado e Domingo", value: "Fechado" },
  ],
  social: {
    instagram: "https://www.instagram.com/serralheria.canada/",
    facebook: "https://www.facebook.com/SerralheriaaCanada",
  },
} as const;

export type ServiceId = "portoes" | "escadas" | "grades" | "estruturas" | "containers";

export const SERVICES: {
  id: ServiceId;
  title: string;
  short: string;
  description: string;
  items: string[];
  image: string;
}[] = [
  {
    id: "portoes",
    title: "Portões sob medida",
    short: "Portões",
    description: "Portões que unem segurança e estética, projetados para a sua fachada.",
    items: ["De correr", "Basculante", "Pivotante", "Social e de garagem"],
    image: "/portoes/portao-design-circular.webp",
  },
  {
    id: "escadas",
    title: "Escadas e corrimãos",
    short: "Escadas",
    description: "Escadas metálicas funcionais e elegantes para ambientes internos e externos.",
    items: ["Escada reta e em L", "Escada caracol", "Corrimãos", "Guarda-corpos"],
    image: "/escadas/escada-reta-lateral.webp",
  },
  {
    id: "grades",
    title: "Grades e proteções",
    short: "Grades",
    description: "Grades para janelas, muros e piscinas, com proteção e bom acabamento.",
    items: ["Grades de janela", "Grade de piscina", "Grades de muro", "Telas e alambrados"],
    image: "/grades/grade-residencial.jpg",
  },
  {
    id: "estruturas",
    title: "Estruturas metálicas",
    short: "Estruturas",
    description: "Estruturas robustas e duráveis para projetos residenciais, comerciais e industriais.",
    items: ["Coberturas", "Mezaninos", "Galpões", "Projetos especiais"],
    image: "/estruturas/cobertura-galpao.webp",
  },
];

export const CONTAINER = {
  image: "/container.jpg",
  features: [
    { title: "Segurança", text: "Estrutura resistente para proteger materiais e equipamentos." },
    { title: "Entrega e retirada", text: "Levamos até a obra e buscamos após o uso." },
    { title: "Prazo flexível", text: "Períodos de locação adaptados ao seu cronograma." },
    { title: "Bem conservados", text: "Manutenção regular em todas as unidades." },
  ],
};

// Para adicionar fotos novas: coloque o arquivo em /public e acrescente uma linha aqui.
// Para vídeos: `src` é a imagem de capa e `video` o arquivo .mp4.
export const PROJECTS: { src: string; title: string; category: ServiceId; video?: string }[] = [
  { src: "/portoes/portao6.jpg", title: "Portão residencial", category: "portoes" },
  { src: "/portoes/portao-design-circular.webp", title: "Portão com design circular", category: "portoes" },
  { src: "/portoes/portao-ripado-horizontal.webp", title: "Portão ripado horizontal", category: "portoes" },
  {
    src: "/portoes/portoes-oficina.jpg",
    video: "/portoes/portoes-oficina.mp4",
    title: "Portões prontos na oficina (vídeo)",
    category: "portoes",
  },
  { src: "/portoes/portao-estacionamento.webp", title: "Portão de estacionamento", category: "portoes" },
  { src: "/portoes/portao-social-ripado.webp", title: "Portão social ripado", category: "portoes" },
  { src: "/estruturas/cobertura-galpao.webp", title: "Cobertura de galpão com treliças", category: "estruturas" },
  {
    src: "/estruturas/cobertura-barracao-300m2.jpg",
    video: "/estruturas/cobertura-barracao-300m2.mp4",
    title: "Cobertura de barracão 300 m² (vídeo)",
    category: "estruturas",
  },
  { src: "/estruturas/mezanino-com-cobertura.webp", title: "Mezanino com escada e cobertura", category: "estruturas" },
  { src: "/estruturas/cobertura-garagem.webp", title: "Cobertura de garagem", category: "estruturas" },
  { src: "/estruturas/icamento-cobertura.webp", title: "Montagem de cobertura com guindaste", category: "estruturas" },
  { src: "/grades/grade-piscina.jpg", title: "Grade de piscina", category: "grades" },
  { src: "/escadas/corrimao-decorativo.jpg", title: "Corrimão decorativo", category: "escadas" },
  { src: "/escadas/escada-reta-lateral.webp", title: "Escada reta com guarda-corpo", category: "escadas" },
  {
    src: "/escadas/escada-caracol-mezanino.jpg",
    video: "/escadas/escada-caracol-mezanino.mp4",
    title: "Escada caracol com mezanino (vídeo)",
    category: "escadas",
  },
  { src: "/escadas/escada-reta-frontal.webp", title: "Escada reta — vista frontal", category: "escadas" },
  { src: "/portoes/portao-comercial.jpg", title: "Portão comercial", category: "portoes" },
  { src: "/grades/grade-residencial.jpg", title: "Grade residencial", category: "grades" },
  { src: "/escadas/escada-interna.jpg", title: "Escada interna", category: "escadas" },
  { src: "/portoes/portao-residencial.jpg", title: "Portão social", category: "portoes" },
  { src: "/portoes/portao-principal.jpg", title: "Portão de garagem", category: "portoes" },
  { src: "/container-contato.jpg", title: "Container para obra", category: "containers" },
];

export const STEPS = [
  { title: "Contato", text: "Você chama no WhatsApp e conta o que precisa — se puder, mande fotos do local." },
  { title: "Medição", text: "Visitamos o local, tiramos as medidas e enviamos o orçamento." },
  { title: "Fabricação", text: "Produzimos tudo na nossa oficina, com material de qualidade." },
  { title: "Instalação", text: "Instalamos e entregamos o serviço pronto para uso." },
];

export const TESTIMONIALS = [
  { quote: "Excelente trabalho! O portão ficou perfeito e a equipe foi muito profissional.", name: "Magali Marinho", city: "Avanhandava, SP" },
  { quote: "Contratei para alugar containers e fiquei muito satisfeito com a qualidade.", name: "João Spina", city: "Penápolis, SP" },
  { quote: "Estrutura metálica de primeira qualidade. Recomendo para todos!", name: "Tamara Cristina", city: "Avanhandava, SP" },
];

export const FAQ = [
  {
    q: "Quanto custa um portão ou uma escada sob medida?",
    a: "O valor depende do tamanho, do modelo e do material escolhido. Mande pelo WhatsApp as medidas aproximadas e uma foto do local que já conseguimos passar uma estimativa.",
  },
  {
    q: "Vocês vão até o local para medir?",
    a: "Sim. Para fechar o orçamento final, agendamos uma visita para tirar as medidas certas e entender o projeto.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "Varia conforme o tipo e o tamanho do serviço. O prazo é informado junto com o orçamento, antes de você fechar.",
  },
  {
    q: "Quais cidades vocês atendem?",
    a: `Atendemos ${SITE.citiesServed.slice(0, -1).join(", ")} e ${SITE.citiesServed.at(-1)}, além de outras cidades da região. Consulte pelo WhatsApp.`,
  },
  {
    q: "Como funciona a locação de container?",
    a: "Você informa o endereço da obra e o período. Entregamos o container no local e fazemos a retirada ao final da locação.",
  },
  {
    q: "Vocês fazem manutenção e conserto?",
    a: "Sim, fazemos reparos e reformas em portões, grades e estruturas metálicas. Envie uma foto do problema pelo WhatsApp.",
  },
];
