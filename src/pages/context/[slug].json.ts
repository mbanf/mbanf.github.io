// Machine-readable "context pack" per project: the material a future
// assistant (chat widget, MCP server, RAG index) needs to answer questions
// about one project. Served statically at /context/<slug>.json.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import eras from '../../data/eras.json';
import topics from '../../data/topics.json';
import publications from '../../data/publications.json';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map((p) => ({ params: { slug: p.id }, props: { project: p } }));
}

export const GET: APIRoute = ({ props }) => {
  const p = props.project;
  const d = p.data;
  const pack = {
    id: p.id,
    title: d.title,
    subtitle: d.subtitle ?? null,
    years: { start: d.start, end: d.end },
    status: d.status,
    era: eras.find((e) => e.id === d.era) ?? null,
    topics: d.topics.map((id) => topics.find((t) => t.id === id)).filter(Boolean),
    summary: d.summary,
    role: d.role ?? null,
    collaborators: d.collaborators,
    links: d.links.filter((l) => l.url),
    publications: publications.filter((x) => x.project === p.id),
    figures: [d.hero, ...d.figures],
    body_markdown: p.body ?? '',
  };
  return new Response(JSON.stringify(pack, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
