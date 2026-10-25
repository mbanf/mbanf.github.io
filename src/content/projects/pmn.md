---
title: "Plant Metabolic Network — enzymes, pathways and gene clusters for 22 genomes"
subtitle: "A computational pipeline that predicts a plant's metabolic enzymes and pathways from its genome, and finds the gene clusters among them"
start: 2015
end: 2017
era: carnegie
topics: [plant-metabolism]
status: published
order: 34
hero:
  src: /images/projects/pmn-hero.png
  alt: "The pipeline from protein sequences through E2P2, Pathway Tools and SAVI to validated pathways and PlantClusterFinder, next to F1 scores of enzyme prediction compared with KEGG, PlantSEED, Gramene and SGN."
  caption: "The PMN pipeline — E2P2 enzyme prediction, Pathway Tools, SAVI pathway validation, PlantClusterFinder — and its enzyme-annotation F1 against other resources in five species (Schläpfer et al., Plant Physiology 2017, Fig. 1)."
  fit: contain
thumb: /images/projects/pmn-clusters.png
summary: "To engineer or even understand plant metabolism you first need to know which enzymes and pathways a genome encodes. This pipeline produced metabolic pathway databases for 22 plant species and, with PlantClusterFinder, identified 11,969 metabolic gene clusters in 18 of them — the first genome-wide census of its kind, and the resource that METACLUSTER was built to interrogate."
role: "Co-author; contributed to the PlantClusterFinder gene-cluster analysis and the co-expression analysis of signature/tailoring-enzyme clusters."
collaborators: ["Pascal Schläpfer", "Peifen Zhang", "Chuan Wang", "Taehyong Kim", "Lee Chae", "Kate Dreher", "Seung Y. Rhee (Carnegie Institution for Science)", "and the Plant Metabolic Network team"]
links:
  - label: "Paper · Plant Physiology 2017"
    url: https://doi.org/10.1104/pp.16.01942
  - label: "Plant Metabolic Network"
    url: https://plantcyc.org
figures:
  - src: /images/projects/pmn-clusters.png
    alt: "Gene-cluster structures from several species: terpenoid, phenylpropanoid and alkaloid clusters with signature and tailoring enzymes colour-coded."
    caption: "Characterised and predicted clusters across species, with signature enzymes (terpene synthases, chalcone synthase, …) and tailoring enzymes (P450s, methyltransferases, …)."
  - src: /images/projects/pmn-heatmap.png
    alt: "Species-by-cluster-count bar charts, cluster physical sizes, and the metabolic domains enriched in clusters per species."
    caption: "The census: number and size of clusters per species, and which metabolic domains are over-represented in clustered genes."
---

## What the pipeline does

From a set of protein sequences, E2P2 predicts enzymes; Pathway Tools assembles them into candidate pathways; SAVI validates those pathways against curated knowledge; and PlantClusterFinder scans the genome for groups of metabolic genes that are physically clustered. Across 22 species the enzyme annotations outperform KEGG, PlantSEED, Gramene and SGN on F1 for the species where a comparison was possible.

## What it found

11,969 metabolic gene clusters across 18 species — far more than expected. More than 1,700 of them contain both a signature enzyme that could build a specialised-metabolite scaffold and tailoring enzymes that could modify it. In four species with enough expression data, 43 clusters were highly co-expressed and contained signature and tailoring enzymes, eight of which were already known functional pathways. Patterns of genome organisation implicate local gene duplication, and to a lesser extent single-gene transposition, in how plant clusters evolve.

## Why it matters

The cluster census is an entry point into undiscovered biosynthetic pathways, and the obvious next question — which of these ~12,000 clusters are real, and when are they active — is what [METACLUSTER](/projects/metacluster/) was built to answer.
