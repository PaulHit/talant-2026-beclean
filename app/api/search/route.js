import { NextResponse } from 'next/server';
import { getParticipants } from '@/lib/sheets';

/**
 * Normalize a string for comparison:
 * - lowercase
 * - remove diacritics (ă→a, î→i, ș→s, ț→t, â→a etc.)
 */
function normalize(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

/**
 * Sanitize user input:
 * - strip anything that isn't a letter (including diacritics), space, or hyphen
 * - limit length
 * NOTE: There is no SQL here — data comes from Google Sheets.
 *       We sanitize to prevent abuse of the search endpoint.
 */
function sanitize(str) {
  return str
    .replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F\s\-]/g, '') // keep letters, diacritics, space, hyphen
    .slice(0, 100)
    .trim();
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const raw = searchParams.get('q') || '';

  const query = sanitize(raw);

  if (query.length < 2) {
    return NextResponse.json(
      { results: [], error: 'Introdu cel puțin 2 caractere.' },
      { status: 400 }
    );
  }

  try {
    const participants = await getParticipants();
    const normalizedQuery = normalize(query);

    const results = participants.filter((p) =>
      normalize(p.nume).includes(normalizedQuery)
    );

    // Cap results to 20 to avoid huge payloads
    return NextResponse.json({ results: results.slice(0, 20) });
  } catch (error) {
    console.error('[/api/search] Error:', error.message);
    return NextResponse.json(
      { results: [], error: 'Eroare la căutare. Încearcă din nou mai târziu.' },
      { status: 500 }
    );
  }
}
