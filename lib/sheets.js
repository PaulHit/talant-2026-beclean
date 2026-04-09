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

  const rows = csv.split('\n').slice(1);
  const participants = rows
    .filter((row) => row.trim())
    .map((row) => {
      const cols = row.split(',').map((c) => c.replace(/"/g, '').trim());
      return {
        sectiunea: cols[0],
        rand: cols[1],
        loc: cols[2],
        nume: cols[3],
        categorie: cols[4],
        biserica: cols[5],
        id: cols[6],
      };
    })
    .filter((p) => p.nume);

  cache = { data: participants, fetchedAt: now };
  return participants;
}
