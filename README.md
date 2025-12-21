# 🎬 Catálogo de Filmes 

SPA **FullStack** para busca e exploração de filmes, integrando **React + Node.js** e consumo da API pública **OMDb**.

Projeto desenvolvido com foco em **integração frontend/backend**, organização de código e experiência do usuário.

---

## 🖼️ Demonstração

### Resultado da busca
<img width="1884" height="906" alt="Captura de tela 2025-12-20 154950" src="https://github.com/user-attachments/assets/599ae438-f05f-424b-97f4-6214a40a4eb9" />

### Filme não encontrado
<img width="1883" height="897" alt="Captura de tela 2025-12-20 155254" src="https://github.com/user-attachments/assets/503c1de6-0530-49ef-9b83-86a743e4c97b" />

---

## ✨ Funcionalidades

- 🔎 Busca de filmes por título
- 🎞️ Exibição em cards
- 🌐 Integração frontend ↔ backend
- 💡 Mensagem orientativa quando o filme não é encontrado
- 🧠 Tratamento de respostas da API
- 🧩 Componentização no React

---

## ⚠️ Observação sobre a API OMDb

A API realiza buscas prioritariamente pelo **título original do filme**.

**Exemplo:**
- ❌ Velozes e Furiosos  
- ✅ Fast and Furious  

O sistema orienta o usuário quando a busca não retorna resultados.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express
- Axios
- CORS
- Dotenv

### Integração
- API OMDb

---

## 📂 Estrutura do Projeto

catalogo-filmes-inteligente/
├── backend/
│   ├── controllers/
│   ├── database/
│   ├── routes/
│   ├── services/
│   ├── tests/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md


## 🚀 Como rodar o projeto

### Backend
```bash
cd backend
npm install
npm run dev
```

### Crie um arquivo .env dentro da pasta backend:

```bash
PORT=3001
OMDB_API_KEY=SUA_CHAVE

```

### Frontend
```bash
cd frontend
npm install
npm run dev

```

### Acesse:

```bash
http://localhost:5173
```

---

## 🎯 O que foi praticado neste projeto

- Integração FullStack

- Consumo de API externa

- Organização de pastas

- Tratamento de erros

- UX para falhas de busca

- Componentização no React

## 👩‍💻 Autora

Geovana Santos
Desenvolvedora FullStack em formação

## 🔗 LinkedIn:
https://www.linkedin.com/in/geovana-santos-343437116

## 💻 GitHub:
https://github.com/Geoziihdev
