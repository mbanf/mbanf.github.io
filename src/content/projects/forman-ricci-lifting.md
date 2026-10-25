---
title: "Curvature, lifting and over-squashing"
subtitle: "Topological deep learning: Forman–Ricci curvature as a guide from graphs to hypergraphs, and the TopoBench ecosystem"
start: 2024
end: null
era: perelyn
topics: [geometric-dl]
status: ongoing
order: 40
demo: forman
hero:
  src: /images/projects/forman-hero.png
  alt: "A graph, its edges annotated with Forman–Ricci curvature, and the resulting hypergraph whose hyperedges cover the graph's backbone."
  caption: "Structural lifting γ: G → H. Edges with very negative curvature form the network backbone; the lifting turns them into hyperedges that carry messages across bottlenecks."
  fit: contain
summary: "Message passing on a graph squashes information that has to travel far or through bottlenecks. Forman–Ricci curvature is an edge statistic from discrete differential geometry that finds exactly those bottleneck edges. We use it to lift a graph to a hypergraph whose hyperedges span the backbone, so that higher-order networks can route messages across it — and benchmark the idea in TopoBench."
role: "Lead author of the lifting paper; contributor to TopoBench and to the ICML 2024 / 2025 Topological Deep Learning Challenges, with the Perelyn team."
collaborators: ["Dominik Filipiak", "Max Schattauer", "Liliya Imasheva", "the TopoBench / TDL challenge community"]
links:
  - label: "Paper · arXiv 2508.11390 (HOOC workshop, 2025)"
    url: https://arxiv.org/abs/2508.11390
  - label: "TopoBench · arXiv 2406.06642"
    url: https://arxiv.org/abs/2406.06642
  - label: "ICML TDL Challenge 2024 · arXiv 2409.05211"
    url: https://arxiv.org/abs/2409.05211
  - label: "TDL Challenge 2025 · PMLR 321"
    url: https://proceedings.mlr.press/v321/
  - label: "Code · TopoBench on GitHub"
    url: https://github.com/geometric-intelligence/TopoBench
figures:
  - src: /images/projects/forman-manifolds.png
    alt: "Spherical, Euclidean and hyperbolic surfaces with geodesics."
    caption: "Curvature in the continuous world: geodesics converge (K > 0), stay parallel (K = 0) or diverge (K < 0). On graphs, cliques behave like spheres and trees like hyperbolic space."
  - src: /images/projects/forman-fig3.png
    alt: "Figure 3 of the paper, showing the lifting with curvature values on each edge."
    caption: "Lifting with θ = −1 on an unweighted graph: red hyperedges collect edges with Ric_F ≥ θ, blue ones those with Ric_F < θ."
---

## The problem

Graph neural networks pass messages along edges. The receptive field of a node after *ℓ* layers is its *ℓ*-hop neighbourhood, and in many graphs that neighbourhood grows exponentially while the node's representation stays fixed-size. Information from far away is compressed through a few edges — a phenomenon known as **over-squashing** — and in practice GCNs and GATs fail at long-range dependencies.

## The metric

Forman–Ricci curvature assigns a number to each edge from the degrees of its endpoints and the weights around them (for an unweighted graph the simplest form is 4 − deg(u) − deg(v)). Strongly negative curvature marks edges that are bridges between dense regions: the bottlenecks where squashing happens. Unlike Ollivier–Ricci curvature it needs no optimal transport, so it scales.

## The remedy

Rather than rewiring the graph, we lift it. A threshold θ (chosen as a quantile of the curvature distribution) selects the backbone edges; connected runs of backbone edges become hyperedges of a hypergraph H, alongside the original edges. Hypergraph networks such as EDGNN, AllSetTransformer or UniGNN2 then pass messages along hyperedges that span whole bottleneck paths at once. On graph-classification benchmarks the lifted representation improved accuracy in roughly three quarters of the model/dataset pairs we tested.

An earlier version of the lifting is part of [TopoBench](https://github.com/geometric-intelligence/TopoBench), the community library for benchmarking topological deep learning that grew out of the ICML 2024 challenge — and which we helped build and extend through the 2025 challenge.

## Try it

The interactive demo below computes Forman–Ricci curvature on a small two-community graph and lets you drag the threshold to see which edges would become hyperedges.
