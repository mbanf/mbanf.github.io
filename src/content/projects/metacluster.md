---
title: "METACLUSTER — when do metabolic gene clusters switch on?"
subtitle: "A probabilistic framework for context-specific expression analysis of metabolic gene clusters"
start: 2017
end: 2019
era: carnegie
topics: [plant-metabolism, gene-regulation]
status: published
order: 30
hero:
  src: /images/projects/metacluster-heatmap.png
  alt: "Heatmap of predicted metabolic gene clusters against experimental conditions such as abscisic acid, auxin, drought, cold and heat."
  caption: "Context-specific co-expression of predicted gene clusters across conditions. METACLUSTER turns these patterns into calibrated per-cluster, per-context probabilities."
  fit: contain
summary: "Plants synthesise tens of thousands of specialised metabolites, and the enzymes for some of them sit next to each other on the chromosome. The Plant Metabolic Network pipeline predicted almost 12,000 such clusters — far more than anyone could test. METACLUSTER asks, for each cluster, in which tissues and under which conditions its enzymes are co-expressed, and returns a probability rather than a yes/no."
role: "Lead author and developer of the R package; designed the probabilistic framework with Kangmei Zhao and Sue Rhee."
collaborators: ["Kangmei Zhao", "Seung Y. Rhee (Carnegie Institution for Science)"]
links:
  - label: "Paper · Bioinformatics 2019"
    url: https://doi.org/10.1093/bioinformatics/btz021
  - label: "Code · METACLUSTER on GitHub"
    url: https://github.com/mbanf/METACLUSTER
  - label: "Talk · German Conference on Bioinformatics 2021"
    url: ""
---

## The question

A characterised biosynthetic gene cluster — the terpene clusters in *Arabidopsis* and *Lotus japonicus*, for instance — tends to show tissue- and condition-specific co-expression of its enzymes: the whole cluster responds together, and only in some contexts. General co-expression across a whole compendium misses this; what matters is co-expression *in the right context*.

## The framework

METACLUSTER takes three inputs: a large gene-expression compendium with condition and tissue annotations, a set of cluster definitions (for example from [PlantClusterFinder](/projects/pmn/)), and, optionally, the identity of signature and tailoring enzymes. For every cluster and context it tests for context-specific differential co-expression, combines the evidence probabilistically, and reports a score per cluster × context that can be ranked and visualised. The result is a map of *which* predicted clusters are plausibly functional pathways and *when* they are active — a shortlist for the wet lab, with uncertainty attached.

It shipped as an R package in *Bioinformatics* (2019). The follow-up, [METACLUSTERplus](/projects/metaclusterplus/), asks the next question: which transcription factors drive the context-specific response.
