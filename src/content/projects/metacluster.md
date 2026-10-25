---
title: "METACLUSTER — when do metabolic gene clusters switch on?"
subtitle: "Probabilistic, context-specific expression and regulation analysis of biosynthetic gene clusters in plants"
start: 2016
end: 2022
era: carnegie
topics: [plant-metabolism, gene-regulation]
status: published
order: 30
hero:
  src: /images/projects/metacluster-hero.png
  alt: "Chord diagram linking transcription-factor families to experimental conditions and tissues for a metabolic gene cluster."
  caption: "METACLUSTERplus: which transcription-factor families are predicted to regulate a gene cluster, under which conditions and in which tissues."
  fit: contain
summary: "Plants synthesise tens of thousands of specialised metabolites, and the enzymes for some of them sit next to each other on the chromosome. METACLUSTER asks, for each predicted cluster, in which tissues and under which conditions its enzymes are co-expressed — and METACLUSTERplus adds which transcription factors are likely doing the regulating."
role: "Lead author and sole developer of both R packages; co-author on the Plant Metabolic Network pipeline that predicted the clusters."
collaborators: ["Kangmei Zhao", "Seung Y. Rhee", "Pascal Schläpfer and the Plant Metabolic Network team"]
links:
  - label: "METACLUSTER · Bioinformatics 2019"
    url: https://doi.org/10.1093/bioinformatics/btz021
  - label: "METACLUSTERplus · bioRxiv 2022"
    url: https://doi.org/10.1101/2022.04.11.487835
  - label: "Plant Metabolic Network pipeline · Plant Physiology 2017"
    url: https://doi.org/10.1104/pp.16.01942
  - label: "Code · METACLUSTER on GitHub"
    url: https://github.com/mbanf/METACLUSTER
  - label: "Code · METACLUSTERplus on GitHub"
    url: https://github.com/mbanf/MetaclusterPlus
figures:
  - src: /images/projects/metacluster-heatmap.png
    alt: "Heatmap of gene clusters against experimental conditions."
    caption: "Context-specific co-expression of predicted clusters across conditions such as drought, cold, heat and hormone treatments."
---

## Background

In 2017 the Plant Metabolic Network team at Carnegie published a pipeline that predicts metabolic enzymes, pathways and chromosomal gene clusters from a sequenced genome, and ran it on 22 species. One result was 11,969 predicted clusters — far more than anyone could characterise experimentally. Which of them are real, functional pathways?

## METACLUSTER

A characterised cluster tends to show tissue- and condition-specific co-expression of its enzymes. METACLUSTER turns that observation into a probabilistic framework: it takes a large expression compendium with context annotations, tests each cluster for context-specific co-expression, and combines the evidence (including the presence of signature and tailoring enzymes) into a calibrated score per cluster and context. It shipped as an R package in *Bioinformatics* (2019).

## METACLUSTERplus

The follow-up redefines and augments the framework to ask *who regulates the cluster*: it integrates gene regulatory network architectures (e.g. from DAP-seq) with the expression contexts and the cluster definitions, and infers transcription-factor families likely to drive the context-specific response. It also adds the chord-diagram visualisations above, at the level of TF families × contexts and TF families × individual cluster genes — built for both exploration and publication figures.

## Why it still matters

Clusters are a tractable entry point into the regulatory logic of specialised metabolism. The same question — which regulators, under which conditions — is what the [gene-regulation](/#topics) and [binding-variation](/projects/maize-bqtl/) work asks at genome scale.
