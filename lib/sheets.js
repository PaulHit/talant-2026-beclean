let cache = { data: null, fetchedAt: 0 };
const CACHE_TTL_MS = 60 * 1000;

export async function getParticipants() {
  const now = Date.now();
  if (cache.data && now - cache.fetchedAt < CACHE_TTL_MS) {
    return cache.data;
  }

  const url = `https://docs.google.com/spreadsheets/d/${process.env.SHEET_ID}/export?format=csv`;
  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);

  const csv = await res.text();

  const rows = csv.split('\n').slice(1); // skip header row
  const participants = rows
    .filter((row) => row.trim())
    .map((row) => {
      const [nume, categorie, loc] = row.split(',').map((c) => c.replace(/"/g, '').trim());
      return { nume, categorie, loc };
    })
    .filter((p) => p.nume); // elimină rânduri goale

  cache = { data: participants, fetchedAt: now };
  return participants;
}