import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS, UNITY_GAMES } from './models/constants';

// Provide prerender params for parameterized routes using the known project ids.
async function getProjectPrerenderParams(): Promise<Record<string, string>[]> {
  // Return a promise resolving to an array of param objects where keys match the route parameter names.
  return PROJECTS.map(p => ({ id: String(p.id) }));
}

async function getDemoPrerenderParams(): Promise<Record<string, string>[]> {
  return UNITY_GAMES.map(g => ({ id: String(g.id) }));
}

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  {
    path: 'project/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getProjectPrerenderParams
  },
  {
    path: 'demo/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getDemoPrerenderParams
  },
  // Fallback - prerender app shell / wildcard
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
