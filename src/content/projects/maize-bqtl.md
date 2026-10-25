---
title: "The maize pan-cistrome and binding QTL"
subtitle: "Where genetic variation changes transcription-factor occupancy — and how much of trait heritability that explains"
start: 2020
end: 2025
era: generegulation
topics: [binding-variation, gene-regulation]
status: published
order: 10
hero:
  src: /images/projects/maize-bqtl-thumb.png
  alt: "Schematic of haplotype-specific MOA-seq in B73 × diverse F1 hybrids next to a scatter plot of allelic bias in F1 versus inbred lines."
  caption: "Haplotype-specific TF footprints in B73 × diverse F1 hybrids, and allelic bias in hybrids versus inbreds (Engelhorn et al., Nature Genetics 2025, Fig. 1)."
  fit: contain
thumb: /images/projects/maize-bqtl-thumb.png
summary: "Across a pan-genome of 25 maize hybrids under well-watered and drought conditions, we quantified haplotype-specific transcription-factor footprints and mapped over 200,000 binding QTL — variants, genetic or epigenetic, linked to cis-element occupancy. bQTL coincide with known causal loci, agree with ChIP-seq, and capture the majority of heritable variation for about 72% of 143 phenotypes."
role: "Computational analysis: allele-specific binding statistics, bQTL calling and the modelling that connects binding variation to traits; co-author on both papers."
collaborators: ["Thomas Hartwig (HHU Düsseldorf / MPIPZ)", "Julia Engelhorn", "Zhi-Yong Wang (Carnegie)", "Jeffrey Ross-Ibarra (UC Davis)", "and the full author lists"]
links:
  - label: "Nature Genetics 2025 · pan-cistrome & bQTL"
    url: https://doi.org/10.1038/s41588-025-02246-7
  - label: "Genome Biology 2023 · hybrid allele-specific ChIP-seq"
    url: https://doi.org/10.1186/s13059-023-02909-w
  - label: "Preprint · bioRxiv 2023"
    url: https://doi.org/10.1101/2023.08.08.551183
figures:
  - src: /images/projects/maize-bqtl-fig1.png
    alt: "Figure 1 of the Nature Genetics paper: haplotype-specific MOA-seq schematic, allelic bias scatter and pie charts of bQTL classes."
    caption: "Quantitative cis-element occupancy in F1 hybrids: allelic bias in hybrids versus inbreds, and the share of bQTL that are shared, haplotype-specific or opposite in direction."
---

## The question

Roughly half of the additive genetic variance behind complex traits in crops sits in non-coding sequence. Much of it presumably acts by changing where and how strongly transcription factors bind. GWAS can point at a region; it cannot say *which* variant changes binding, or whether an epigenetic difference rather than a sequence difference is responsible.

## Hybrid allele-specific binding

The trick is to measure binding in F1 hybrids. Both parental haplotypes sit in the same nucleus, exposed to the same transcription factors, so a difference in occupancy between the two alleles is a *cis* effect by construction — trans factors and environment cancel out. The 2023 *Genome Biology* paper did this with ChIP-seq for the brassinosteroid-responsive factor BZR1 in B73 × Mo17, and linked variation in BZR1 binding to traits.

## Scaling to a pan-cistrome

The *Nature Genetics* paper replaces ChIP of one factor with MOA-seq, which footprints all occupied cis-elements at once, and scales from one hybrid to 25 — B73 crossed to the NAM founders — under well-watered and drought conditions. That yields haplotype-specific footprints across a pan-genome and more than 200,000 binding QTL. Three lines of evidence support them: coincidence with causal loci such as *vgt1*, *ZmTRE1* and the MITE near *ZmNAC111*; allelic bias that is shared with the inbred parents and matches ChIP-seq; and variance partitioning showing that bQTL regions capture most heritable variation for ~72% of 143 phenotypes.

## What I worked on

The statistics of allele-specific occupancy — calling bias against the inbred and ChIP references, separating genetic from methylation-driven bQTL — and the modelling that connects bQTL to traits. That atlas is the training signal for the next project: [predicting, explaining and designing binding variation from sequence](/projects/bqtl-predict/).
