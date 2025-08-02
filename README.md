# 📦 Instalação

### Clone o repositório

```bash
git clone https://github.com/guilhermematos13/tictactoe.git
```

### Acesse o diretório do projeto

```bash
cd tictactoe
```

### Instale as dependências

```bash
npm install
```

# 🕹️ Jogo da Velha React

Este é um projeto de **Jogo da Velha (Tic Tac Toe)** desenvolvido com **React** e **Tailwind CSS**, como parte de um desafio prático. Ele simula partidas entre dois jogadores, com recursos extras como:

- Temporizador automático para jogadas
- Personalização de cores dos jogadores
- Placar acumulativo
- Modal de resultado (com vitória ou empate)
- Reset de placar e jogo

---

## 🚀 Acesse o Projeto

🔗 **Deploy**: [Clique aqui para jogar](https://tictactoe-henna-zeta.vercel.app/)

---

## 🧠 Funcionalidades

- ✅ Jogabilidade entre dois jogadores (X e O)
- ⏱️ Temporizador de 5 segundos por jogada (auto move)
- 🎨 Escolha de cores para cada jogador
- 🧮 Placar acumulado (vitórias e empates)
- 🏆 Modal final após 11 vitórias ou 11 empates
- 🔄 Botões para resetar o jogo ou placar

---

## 📁 Estrutura de Pastas

```bash
.
├── public/
│   └── index.html
├── src/
│   ├── assets/           # Ícones, imagens, cores, fontes (se necessário)
│   ├── components/       # Componentes reutilizáveis (Tabuleiro, Célula, Modal, Painel, etc.)
│   ├── hooks/            # Hooks personalizados (ex: useGameLogic)
│   ├── App.jsx           # Componente raiz
│   └── main.jsx          # Entrada da aplicação React
├── tailwind.config.js    # Configuração do Tailwind
├── postcss.config.js     # Configuração para uso com Tailwind
├── .prettierrc           # Configuração do Prettier
└── README.md             # Documentação do projeto
```
