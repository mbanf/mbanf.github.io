---
title: "Finding disease modules in molecular networks"
subtitle: "The DREAM Disease Module Identification Challenge, and a recursive sparsification-and-clustering method submitted to it"
start: 2016
end: 2019
era: carnegie
topics: [gene-regulation, geometric-dl]
status: published
order: 27
hero:
  src: /images/projects/dream-hero.png
  alt: "Overview of the DREAM challenge: six anonymised networks, two sub-challenges with 42 and 33 teams, and scoring of predicted modules against 180 GWAS."
  caption: "The challenge: six anonymised molecular networks, single- and multi-network module prediction, scored by association of modules with 180 genome-wide association studies (Choobdar et al., Nature Methods 2019, Fig. 1)."
  fit: contain
summary: "Dozens of methods promise to carve a large protein-interaction or co-expression network into biologically meaningful modules; nobody had compared them on an even footing. The DREAM Module Identification Challenge did — 75 methods, six network types, scored against 180 GWAS — and found that top algorithms recover complementary, trait-associated modules that mostly map to core disease pathways. I took part with a method based on recursive local graph sparsification and clustering."
role: "Participant in the challenge consortium; developed and submitted a module-detection method (recursive local graph sparsification and clustering), later written up as a preprint."
collaborators: ["The DREAM Module Identification Challenge Consortium", "Sarvenaz Choobdar, Daniel Marbach and Sven Bergmann (organisers)"]
links:
  - label: "Paper · Nature Methods 2019"
    url: https://doi.org/10.1038/s41592-019-0509-5
  - label: "Preprint · bioRxiv 2018"
    url: https://doi.org/10.1101/265553
  - label: "My method · Network module detection using recursive local graph sparsification and clustering (Preprints 2018)"
    url: ""
---

## The challenge

Six anonymised networks — two protein-interaction, one signalling, one co-expression, one cancer-dependency, one homology — with up to 2.2 million edges. Sub-challenge 1 asked for modules in each network separately; sub-challenge 2 for modules across all six. Predictions were scored by how many modules showed significant association with complex traits and diseases in a held-out collection of 180 GWAS, which makes the benchmark biological rather than topological.

## What came out

Of 75 methods, the top performers — kernel clustering, random-walk and modularity-based approaches among them — identified complementary sets of trait-associated modules; most of those modules correspond to core disease-relevant pathways and often contain therapeutic targets. The paper established interpretable benchmarks, tools and guidelines for module identification in human disease biology.

## My entry

Large biological networks are dense and noisy, and most clustering algorithms struggle with hubs and with the sheer number of weak edges. My submission sparsified the graph *locally* — keeping, for each node, only the edges that are strong relative to that node's neighbourhood — clustered the sparsified graph, and recursed into clusters that were still too large. The idea connects to the sparse-prior thinking in [GRACE](/projects/grace/) and, later, to the curvature-based backbone extraction in the [topological deep learning](/projects/forman-ricci-lifting/) work.
