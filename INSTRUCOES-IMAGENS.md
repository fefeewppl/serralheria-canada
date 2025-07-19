# 📸 Instruções para Adicionar Imagens dos Projetos

Para incluir as imagens reais dos projetos da Serralheria Canadá na landing page, siga estas instruções:

## 📁 Estrutura de Pastas

```
public/
├── portoes/
│   ├── portao-principal.jpg     ← Adicionar foto do portão principal
│   └── README.md
├── grades/
│   ├── grade-piscina.jpg        ← Adicionar foto da grade de piscina
│   ├── grade-residencial.jpg    ← Adicionar foto da grade residencial
│   └── README.md
├── escadas/
│   ├── escada-interna.jpg       ← Adicionar foto da escada interna
│   ├── corrimao-decorativo.jpg  ← Adicionar foto do corrimão decorativo
│   └── README.md
└── container-novo.jpg           ← ✅ Já existe (nova imagem com publicidade)
```

## 🖼️ Imagens Necessárias

### 1. **Portão Principal** (`/portoes/portao-principal.jpg`)
- **Baseado na foto:** Portão metálico robusto com design moderno
- **Descrição:** Portão principal com estrutura metálica e acabamento premium

### 2. **Grade de Piscina** (`/grades/grade-piscina.jpg`)
- **Baseado na foto:** Grade de segurança para piscina
- **Descrição:** Grade metálica elegante com padrão de malha

### 3. **Escada Interna** (`/escadas/escada-interna.jpg`)
- **Baseado na foto:** Escada moderna com corrimão metálico
- **Descrição:** Escada interna com degraus claros e guarda-corpo preto

### 4. **Corrimão Decorativo** (`/escadas/corrimao-decorativo.jpg`)
- **Baseado na foto:** Corrimão com elementos geométricos vazados
- **Descrição:** Corrimão decorativo com design exclusivo

### 5. **Grade Residencial** (`/grades/grade-residencial.jpg`)
- **Baseado na foto:** Grade com padrão entrelaçado
- **Descrição:** Grade residencial com acabamento premium

### 6. **Container** (`/container-novo.jpg`)
- **Status:** ✅ Já incluído
- **Descrição:** Container amarelo com publicidade da Serralheria Canadá

## 📋 Especificações Técnicas

### Formato e Tamanho
- **Formato:** JPG ou PNG
- **Tamanho recomendado:** 800x600px ou maior
- **Proporção:** 4:3 ou 16:9 (retangular)
- **Qualidade:** Alta resolução

### Otimização para Web
- **Tamanho máximo:** 500KB por imagem
- **Compressão:** Otimize para web
- **Alt text:** Já configurado no código

## 🔧 Como Adicionar as Imagens

### Opção 1: Copiar e Colar
1. Copie as imagens das fotos fornecidas
2. Cole-as nas pastas correspondentes
3. Renomeie conforme a estrutura acima

### Opção 2: Comando de Cópia
```bash
# Exemplo para copiar imagens
copy "caminho\para\foto-portao.jpg" "public\portoes\portao-principal.jpg"
copy "caminho\para\foto-grade.jpg" "public\grades\grade-piscina.jpg"
```

### Opção 3: Arrastar e Soltar
1. Abra o explorador de arquivos
2. Navegue até a pasta `public/` do projeto
3. Arraste as imagens para as pastas corretas
4. Renomeie conforme necessário

## ✅ Verificação

Após adicionar as imagens:

1. **Execute o servidor:** `npm run dev`
2. **Acesse:** http://localhost:3000
3. **Verifique:** Seção "Projetos Recentes"
4. **Confirme:** Todas as imagens aparecem corretamente

## 🎨 Efeitos Visuais

As imagens terão:
- **Crop automático** para manter proporção
- **Hover effects** suaves
- **Bordas amarelas** que brilham no hover
- **Transições** suaves

## 📱 Responsividade

As imagens são responsivas e se adaptam a:
- **Desktop:** 3 colunas
- **Tablet:** 2 colunas  
- **Mobile:** 1 coluna

---

**💡 Dica:** Se alguma imagem não carregar, verifique se o nome do arquivo está exatamente igual ao especificado no código. 