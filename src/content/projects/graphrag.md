---
title: "Tripartite GraphRAG and memory for agents"
subtitle: "Plugin ontologies that give retrieval-augmented generation a structure — and what software-engineering agents need to remember"
start: 2024
end: null
era: perelyn
topics: [knowledge-graphs]
status: ongoing
order: 50
hero:
  src: /images/projects/graphrag-hero.svg
  alt: "Three columns — documents, ontology concepts and entities — connected into a tripartite graph."
  caption: "A tripartite knowledge graph: documents link to concepts from a pluggable domain ontology, which link to concrete entities."
  fit: contain
summary: "Plain retrieval-augmented generation pulls text chunks by similarity and hopes the answer is in them. GraphRAG adds structure, but building a knowledge graph from scratch per domain is expensive and brittle. The tripartite approach separates the three things that actually matter — documents, domain concepts and concrete entities — and lets the concept layer be a swappable ontology plugin. The same thinking carries into what coding agents should remember across sessions."
role: "Lead author with Johannes Kuhn; applied in Perelyn client systems for manufacturing and engineering knowledge."
collaborators: ["Johannes Kuhn", "Sławomir Garcarz", "Max Becker"]
links:
  - label: "Tripartite-GraphRAG via Plugin Ontologies · arXiv 2504.19667"
    url: https://arxiv.org/abs/2504.19667
  - label: "Memory-Aware Software Engineering Agents (workshop paper, 2026)"
    url: ""
  - label: "MCP in Manufacturing · Workshop on AI in Production 2025"
    url: ""
---

## Tripartite GraphRAG

The idea is to stop asking a language model to invent a schema. A tripartite graph keeps three node types apart: the **documents** (or chunks) that hold evidence; the **concepts** of a domain ontology — process, machine, defect, sensor — that come from a plugin rather than from extraction; and the **entities**, the specific lines, parts and events the documents mention. Retrieval then walks the graph: a question is grounded in concepts, concepts point to entities, entities point to the documents that mention them. Because the ontology is a plugin, the same machinery serves a press shop, a lab or a legal archive, and the answers come with a traceable path instead of a similarity score.

## Memory-aware software-engineering agents

Coding agents forget everything between sessions unless something deliberately remembers for them. The workshop paper surveys the architectures and mechanisms in current systems — episodic logs, working-memory summaries, semantic stores, graph memories — and maps the open gaps: what to keep, how to consolidate it, and how to keep a growing memory from steering the agent wrong. It is the research side of the same question we face in production.

## MCP in manufacturing

A companion line of work asks whether the Model Context Protocol can be the integration layer between AI agents and the heterogeneous machinery of Industry 4.0 — OPC UA, MES, quality systems — and what a comprehensive framework for that would need. It connects back to the [retrofit and monitoring work](/projects/manufacturing-ml/) from fabforce.
