# Syntra AI MVP 🚀

Plataforma de IA para análise de planos e produtos com integração Stripe.

## 📋 Sobre o Projeto

Syntra AI é um MVP (Minimum Viable Product) que oferece:
- **Dashboard interativo** com análise de dados
- **Gerenciamento de Planos** com integração de pagamentos
- **Catálogo de Produtos** com IA
- **Webhooks** para eventos de pagamento

## 🛠️ Tecnologias

- **Node.js** com Express.js
- **Supabase** para banco de dados
- **Stripe** para pagamentos
- **IA Integration** para análise inteligente
- **CORS** habilitado para multiplos domínios

## 📦 Instalação

```bash
git clone https://github.com/tradingmurilo-prog/Syntra-AI.git
cd Syntra-AI
npm install
```

## 🚀 Como Executar

1. Configure as variáveis de ambiente em `.env`:
```env
PORT=3001
SUPABASE_URL=sua_url
SUPABASE_KEY=sua_chave
STRIPE_SECRET_KEY=sua_chave_stripe
```

2. Inicie o servidor:
```bash
npm start
```

3. Acesse em `http://localhost:3001`

## 📡 Endpoints Disponíveis

- `GET /` - Status do servidor
- `GET/POST /plans` - Gerenciar planos
- `GET/POST /products` - Gerenciar produtos  
- `GET /dashboard` - Dashboard com dados
- `POST /webhook` - Webhooks do Stripe

## 📝 Estrutura do Projeto

```
syntra-ai-mvp/
├── server.js              # Servidor principal
├── package.json           # Dependências
├── config/
│   └── supabase.js       # Configuração Supabase
├── routes/
│   ├── plans.js
│   ├── products.js
│   ├── dashboard.js
│   └── webhook.js
├── middleware/
│   └── messageLimit.js
└── ai/
    └── salesAI.js
```

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` com:
- `PORT` - Porta do servidor
- `SUPABASE_URL` - URL do Supabase
- `SUPABASE_KEY` - Chave do Supabase
- `STRIPE_SECRET_KEY` - Chave secreta do Stripe

## 🚀 Deploy

Para fazer deploy em produção:
- [Railway.app](https://railway.app)
- [Render.com](https://render.com)
- [Heroku](https://heroku.com)

## 📧 Contato

Desenvolvido por: TradingMurilo

## 📄 Licença

MIT License

---

**Status**: Em desenvolvimento 🔧
