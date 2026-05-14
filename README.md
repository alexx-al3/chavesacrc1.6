# 🔑 ACRC Imóveis — Controle de Chaves

Sistema mobile-first de controle de chaves para a ACRC Imóveis.

---

## 🚀 Deploy no Vercel (5 minutos, gratuito)

### Passo 1 — Criar conta no Vercel
Acesse **https://vercel.com** e clique em **Sign Up**.
Recomendado: entrar com uma conta **GitHub** (facilita o processo).

### Passo 2 — Fazer upload do projeto

**Opção A — Pelo site (mais fácil):**
1. Acesse https://vercel.com/new
2. Clique em **"Browse"** ou arraste a pasta `acrc-chaves-v2` inteira
3. Clique **Deploy**
4. Pronto! Em ~30 segundos você receberá uma URL pública

**Opção B — Pelo terminal (se tiver Node.js instalado):**
```bash
npm install -g vercel
cd acrc-chaves-v2
vercel
```

---

## 🌐 Domínio personalizado (opcional)

Depois do deploy, no painel do Vercel:
1. Vá em **Settings → Domains**
2. Adicione `chaves.acrcimoveis.com.br`
3. No provedor do domínio (registro.br, Hostgator, etc), adicione um registro CNAME:
   - **Nome:** `chaves`
   - **Valor:** `cname.vercel-dns.com`
4. Aguarde até 24h para propagar

---

## 📱 Instalar como app no celular

Após acessar a URL no celular:
- **iPhone/iPad:** Safari → compartilhar → "Adicionar à Tela de Início"
- **Android:** Chrome → menu (⋮) → "Adicionar à tela inicial"

O app aparece como um ícone nativo, sem barra do navegador.

---

## ✨ Funcionalidades

| Aba | O que faz |
|-----|-----------|
| **Chaves** | Lista todas as chaves com filtros por status e busca |
| **Busca** | Localiza qualquer chave instantaneamente por código ou localização |
| **Histórico** | Registro completo de saídas, devoluções e edições |
| **Gerenciar** | Adicionar novas chaves (ex: E1.1, F2.3), renomear, excluir |

### Comprovante PDF
- Gere comprovantes para **Inquilino**, **Proprietário** ou **Terceiro**
- Tipos de saída: **Temporária** (com prazo em dias), **Novo Locatário** ou **Definitiva**
- PDF profissional com assinatura, dados da ACRC e aviso de prazo

---

## 💾 Dados

Os dados são salvos no navegador de cada dispositivo (`localStorage`).  
Use o botão **Exportar CSV** (ícone ↓ no topo) para fazer backup regularmente.

> **Para dados compartilhados entre todos os usuários em tempo real**, será necessário adicionar um banco de dados (Supabase, Firebase, etc). Entre em contato com um desenvolvedor para esse upgrade.

---

## 📁 Arquivos do projeto

```
acrc-chaves-v2/
├── index.html      ← App completo (HTML + CSS + JS)
├── manifest.json   ← Configuração PWA (instalar como app)
├── vercel.json     ← Configuração de deploy
└── README.md       ← Este arquivo
```
