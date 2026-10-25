---
title: "ARSK1 — how roots sense phosphate"
subtitle: "A regulatory-network view of phosphorus deficiency that pointed to the kinase connecting nutrient sensing to TOR signalling"
start: 2018
end: 2023
era: carnegie
topics: [gene-regulation]
status: published
order: 25
hero:
  src: /images/projects/arsk1-hero.png
  alt: "Inferred gene regulatory network of the Arabidopsis root response to phosphate and iron deficiency, with three large hub-centred clusters coloured by condition."
  caption: "The inferred regulatory network of genes responsive to phosphate (−P) and iron (−Fe) deficiency in Arabidopsis roots. ARSK1 sits at the hub of the −P / +Fe module (Cho et al., Current Biology 2023, Fig. 1C)."
  fit: contain
thumb: /images/projects/arsk1-fig1c.png
summary: "Plants stop root growth within hours of running out of phosphate. Which genes orchestrate that response? A regulatory network inferred from transcriptomes under phosphate and iron deficiency placed a root-specific kinase, ARSK1, at the hub of the phosphate module — and the experimental follow-up showed that ARSK1 phosphorylates RAPTOR1B, feeding the nutrient signal straight into the energy-sensing TOR pathway."
role: "Computational biology: inference and analysis of the condition-specific gene regulatory network (phosphate × iron) that identified ARSK1 as the central hub, and the transcription-factor-to-target analysis around it. With Hatem Rouached and Sue Rhee's groups."
collaborators: ["Huikyong Cho and Hatem Rouached (Michigan State University)", "Seung Y. Rhee (Carnegie Institution for Science)", "Zaigham Shahzad", "Jelle Van Leene and Geert De Jaeger (VIB Ghent)", "Gabriel Krouk and Benoit Lacombe (Montpellier)", "Federica Brandizzi (MSU)"]
links:
  - label: "Paper · Current Biology 2023"
    url: https://doi.org/10.1016/j.cub.2023.03.005
  - label: "GRACE · the network-inference method behind the analysis"
    url: /projects/grace/
figures:
  - src: /images/projects/arsk1-fig1c.png
    alt: "The same network with the hub genes labelled: ARSK1 (AT5G65640), AT3G16280, AT1G15580, AT1G77200, AT5G54230 in the phosphate module; AT4G28790, AT4G35700, AT5G07700 in the iron module."
    caption: "Hub transcription factors (circles) and their targets (squares) coloured by the condition they respond to; ARSK1 marked as the triangle at the centre of the −P module."
---

## The biology

Phosphorus is one of the nutrients plants most often lack. Within hours of phosphate deprivation Arabidopsis roots stop elongating — a fast, early response that is distinct from the slower transcriptional reprogramming of starvation. How the root *perceives* phosphate limitation to trigger that early inhibition was not known.

## The network

To look for candidates without a prior hypothesis, we inferred a regulatory network of the genes responsive to phosphate (−P) and iron (−Fe) deficiency, alone and in combination, from root transcriptomes. The network above has three large modules, each organised around a few hub transcription factors. The −P / +Fe module — the response specific to phosphate limitation — is centred on a small set of hubs, and the root-specific kinase ARSK1 (*ARABIDOPSIS ROOT SPECIFIC KINASE 1*) sits in the middle of it, connected to the module's transcription factors.

## From hub to mechanism

That placement made ARSK1 the obvious thing to test. *ARSK1* expression is induced by −P; *arsk1* mutants are insensitive to the early root-growth inhibition, over-expressers are hypersensitive. Interactome and phosphoproteomics then showed that ARSK1 phosphorylates RAPTOR1B, a core component of the TOR complex 1, and that this phosphorylation is what prevents root growth inhibition under phosphate deficiency. The result is a signalling route that integrates nutrient sensing with the energy-sensing TOR pathway — a connection that had been missing.

## Why it matters to me

It is the clearest example in my work of network inference doing what it should: not a ranked list of a million edges, but a short list of hubs good enough to put a wet-lab programme behind. The method lineage runs through [GRACE](/projects/grace/), and the same "which regulators, in which context" question drives the [metabolic gene cluster](/projects/metacluster/) and [binding-variation](/projects/maize-bqtl/) work.
