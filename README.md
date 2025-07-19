# 🛠️ Serralheria Canadá - Landing Page

Uma landing page moderna, responsiva e visualmente marcante para a Serralheria Canadá, desenvolvida com Next.js, Tailwind CSS e ShadCN UI.

## 🎨 Identidade Visual

- **Fundo:** Preto (#000000)
- **Cor principal:** Amarelo neon (#FFFF00)
- **Estilo:** Industrial/moderno inspirado em serralheria e soldagem
- **Efeitos:** Glow neon, bordas metálicas, transições suaves

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **Tailwind CSS 4** - Framework CSS
- **Lucide React** - Ícones
- **TypeScript** - Tipagem estática
- **Vercel** - Deploy (pronto para deploy)

## 📱 Funcionalidades

### ✅ Header Fixo
- Logo da empresa com design minimalista
- Menu de navegação responsivo
- Menu mobile com hambúrguer
- Botão CTA para orçamento

### ✅ Seções da Landing Page
1. **Hero Section** - Boas-vindas com diferenciais
2. **Nossa História** - História desde 2016
3. **Serviços** - Portões, escadas, estruturas e containers
4. **Portfólio** - Projetos recentes (6 cards)
5. **Diferenciais** - 4 diferenciais com ícones
6. **Depoimentos** - 3 depoimentos de clientes
7. **CTA Final** - Call-to-action para contato
8. **Footer** - Informações de contato e redes sociais

### ✅ Responsividade
- Design mobile-first
- Menu hambúrguer para dispositivos móveis
- Grid responsivo para todas as seções
- Tipografia escalável

### ✅ Efeitos Visuais
- Glow neon nos títulos principais
- Bordas com efeito sparkle nos botões
- Transições suaves em hover
- Background com textura metálica
- Gradientes industriais

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd serralheria-canada

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Build para Produção
```bash
# Build do projeto
npm run build

# Iniciar servidor de produção
npm start
```

## 📁 Estrutura do Projeto

```
serralheria-canada/
├── app/
│   ├── globals.css          # Estilos globais e variáveis CSS
│   ├── layout.tsx           # Layout principal com metadados
│   └── page.tsx             # Página principal da landing page
├── public/
│   └── container.jpg        # Imagem do container para locação
├── lib/
│   └── utils.ts             # Utilitários
├── package.json             # Dependências e scripts
└── README.md               # Este arquivo
```

## 🎯 Seções Implementadas

### Header
- Logo "SC" com fundo amarelo
- Nome da empresa com efeito neon
- Menu de navegação com links âncora
- Botão CTA "Orçamento"

### Hero Section
- Título principal com glow neon
- Subtítulo sobre compromisso com durabilidade
- 3 diferenciais com ícones (Shield, Sparkles, Palette)
- Botão CTA principal

### Nossa História
- Título "Transformamos metal em confiança"
- História desde 2016
- Destaque para locação de containers

### Serviços (4 cards)
- Portões sob medida
- Escadas personalizadas  
- Estruturas metálicas
- Locação de containers (com imagem real)

### Portfólio
- Grid 3x2 com 6 projetos
- Placeholders para imagens
- Descrições dos projetos

### Diferenciais (4 cards)
- Segurança contra o tempo
- Acabamento de alto padrão
- Design funcional
- Atendimento próximo

### Depoimentos
- 3 depoimentos com 5 estrelas
- Nomes e cidades fictícios
- Cards com bordas amarelas

### CTA Final
- Título chamativo
- Botão "Fale com a gente agora"

### Footer
- Informações de contato
- Lista de serviços
- Horário de atendimento
- Redes sociais
- Copyright

## 🌐 Deploy na Vercel

O projeto está configurado para deploy automático na Vercel:

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

## 📞 Informações de Contato

- **Telefone:** (18) 98127-0860
- **WhatsApp:** (18) 98127-0860
- **Email:** serralheriacanada@gmail.com
- **Endereço:** Araçatuba, SP
- **Horário:** Seg-Sex 8h-18h, Sáb 8h-12h

## 📱 Redes Sociais

- **Facebook:** [Serralheria Canadá](https://www.facebook.com/SerralheriaaCanada)
- **Instagram:** [@serralheria.canada](https://www.instagram.com/serralheria.canada/)

## 💬 WhatsApp Integration

Todos os botões de "Solicitar Orçamento" abrem automaticamente o WhatsApp com mensagens pré-definidas:

- **Mensagem Geral:** "Olá, vi o site da Serralheria Canadá e gostaria de um orçamento"
- **Mensagem Container:** "Olá, vi o site da Serralheria Canadá e gostaria de um orçamento de container"
- **Número:** +55 18 98127-0860

## 🎨 Personalização

### Cores
As cores podem ser alteradas no arquivo `app/globals.css` nas variáveis CSS:
- `--background`: Cor de fundo
- `--foreground`: Cor do texto principal
- `--primary`: Cor primária (amarelo neon)

### Conteúdo
- Textos podem ser editados diretamente no `app/page.tsx`
- Imagens podem ser substituídas na pasta `public/`
- Metadados podem ser alterados no `app/layout.tsx`

## 📱 Responsividade

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Servidor de produção
- `npm run lint` - Linting do código

---

**Desenvolvido com ❤️ para a Serralheria Canadá**
