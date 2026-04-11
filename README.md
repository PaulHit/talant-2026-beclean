# Talantul în Negoț 2026 – Site Județean Bistrița-Năsăud

Site-ul oficial al fazei județene a concursului biblic **Talantul în Negoț 2026**.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
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

### 2. Completează `.env.local`

```env
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
| `SHEET_ID` | ID-ul sheet-ului |

---

## Ce trebuie actualizat

### Înainte de concurs

- [ ] `app/program/page.js` → înlocuiește array-ul `PROGRAM` cu programul real
- [ ] `app/live/page.js` → pune `YOUTUBE_URL` și `EMBED_URL`
- [ ] Google Sheet → completează participanții cu locurile alocate

### După concurs

- [ ] `app/galerie/page.js` → pune `DRIVE_LINK` cu albumul foto
- [ ] `app/barem/page.js` → pune `BAREM_LINK` (se deblochează la ora 13:00)

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
│   ├── barem/page.js      # Barem (blocat până la 13:00)
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
