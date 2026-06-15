import type { APIRoute } from 'astro';
import { snippets, prompts } from '../data/buttons';

// Emitted as a static /button-data.json file at build time. The client fetches
// it on demand (first time the copy modal is opened) so this ~360 KB of snippet
// + prompt text stays out of the initial HTML document.
export const GET: APIRoute = () =>
  new Response(JSON.stringify({ snippets, prompts }), {
    headers: { 'Content-Type': 'application/json' },
  });
