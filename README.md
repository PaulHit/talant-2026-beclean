# Talantul în Negoț 2026 – Site Județean Bistrița-Năsăud

Site-ul oficial al fazei județene a concursului biblic **Talantul în Negoț 2026**.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Google Sheets API** (pentru căutarea participanților)
- **Vercel** (deployment)

---

## Setup local

```bash
# 1. Instalează dependențele
npm install

# 2. Copiază fișierul de variabile de mediu
cp .env.example .env.local

# 3. Completează .env.local cu credențialele reale (vezi mai jos)

# 4. Pornește serverul de dezvoltare
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

---

## Configurare Google Sheets

### 1. Creează un Google Sheet

Structura tabelului (Sheet-ul trebuie să se numească **`Participants`**):

| A – `nume`    | B – `categorie` | C – `loc` |
|---------------|-----------------|-----------|
| Ion Popescu   | Clasa a 2-a     | 14        |
| Maria Ionescu | Clasa a 11-a    | 7         |

- **Rândul 1** = header (ignorat automat)
- **Rândul 2+** = participanți

### 2. Creează un Service Account

1. Mergi la [Google Cloud Console](https://console.cloud.google.com/)
2. Creează un proiect nou (sau folosește unul existent)
3. Activează **Google Sheets API**
4. Mergi la **IAM & Admin → Service Accounts → Create Service Account**
5. Descarcă fișierul JSON cu credențiale
6. **Dă acces** la sheet: Share sheet-ul cu email-ul service account-ului (cu rol Viewer)

### 3. Completează `.env.local`

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=talant2026@proiect.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nMII...\n-----END RSA PRIVATE KEY-----\n"
SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms
```

> ⚠️ **IMPORTANT**: Nu pune niciodată `.env.local` în Git. Este deja inclus în `.gitignore`.

---

## Deployment pe Vercel

```bash
# Instalează Vercel CLI (o singură dată)
npm i -g vercel

# Deploy
vercel
```

**Sau** conectează repo-ul GitHub la Vercel prin interfața web.

### Variabile de mediu pe Vercel

Mergi la **Vercel Dashboard → Project → Settings → Environment Variables** și adaugă:

| Key | Value |
|-----|-------|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | email-ul service account |
| `GOOGLE_PRIVATE_KEY` | cheia privată (inclusiv `\n`) |
| `SHEET_ID` | ID-ul sheet-ului |

---

## Ce trebuie actualizat

### Înainte de concurs

- [ ] `app/program/page.js` → înlocuiește array-ul `PROGRAM` cu programul real
- [ ] `app/locatii/page.js` → actualizează adresa terenurilor sportive (Badoc/Corabian)
- [ ] `app/live/page.js` → pune `YOUTUBE_URL` și `EMBED_URL`
- [ ] Google Sheet → completează participanții cu locurile alocate

### După concurs

- [ ] `app/galerie/page.js` → pune `DRIVE_LINK` cu albumul foto
- [ ] `app/barem/page.js` → pune `BAREM_LINK` (se deblochează automat la ora 14:00)

### Domeniu custom (când e disponibil)

În **Vercel Dashboard → Project → Settings → Domains** → adaugă domeniul custom.

---

## Structura proiectului

```
talant2026/
├── app/
│   ├── layout.js          # Layout global + Navbar + Footer
│   ├── page.js            # Homepage
│   ├── program/page.js    # Programul zilei
│   ├── locatii/page.js    # Hărți și adrese
│   ├── cautare/page.js    # Căutare participant
│   ├── live/page.js       # Transmisiune live
│   ├── barem/page.js      # Barem (blocat până la 14:00)
│   ├── galerie/page.js    # Galerie foto
│   └── api/search/
│       └── route.js       # API endpoint căutare
├── components/
│   ├── Navbar.js
│   └── Footer.js
├── lib/
│   └── sheets.js          # Integrare Google Sheets API
└── .env.example
```

---

## Securitate

- **Fără SQL** – datele vin direct din Google Sheets, zero risc de SQL injection
- **Input sanitizat** – query-ul de căutare e filtrat (doar litere + diacritice + spații)
- **Read-only** – Service Account-ul are doar permisiuni de citire
- **Env vars** – credențialele nu intră niciodată în codul sursă
