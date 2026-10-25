---
title: "METACLUSTERplus — who regulates the cluster?"
subtitle: "Probabilistic inference and visualisation of context-specific transcriptional regulation of biosynthetic gene clusters"
start: 2021
end: 2022
era: generegulation
topics: [plant-metabolism, gene-regulation]
status: published
order: 32
hero:
  src: /images/projects/metacluster-hero.png
  alt: "Chord diagram linking transcription-factor families to experimental conditions and tissues for a metabolic gene cluster."
  caption: "Cluster-level view for the marneral cluster in Arabidopsis: transcription-factor families (bottom) linked to the conditions and tissues (top) in which they are predicted to regulate the cluster."
  fit: contain
summary: "METACLUSTER said when a gene cluster is active. METACLUSTERplus adds who switches it on: it integrates gene regulatory network architectures — for example from DAP-seq — with the expression contexts and cluster definitions, and infers which transcription-factor families drive each cluster's context-specific response. It also brings chord-diagram visualisations built for both exploration and publication."
role: "Sole author and developer; written at EducatedGuess.ai, my research vehicle between Carnegie and Perelyn."
collaborators: []
links:
  - label: "Preprint · bioRxiv 2022"
    url: https://doi.org/10.1101/2022.04.11.487835
  - label: "Code · MetaclusterPlus on GitHub"
    url: https://github.com/mbanf/MetaclusterPlus
---

## From expression to regulation

Co-regulation through shared promoter binding is the most direct way for clustered enzymes to respond together. Given a regulatory network — transcription factors and their inferred targets — METACLUSTERplus asks, for each cluster and each context, which regulator families are over-represented among the cluster's genes that respond in that context, using hypergeometric tests over context-count matrices and combining them with the earlier co-expression and signature-enzyme evidence through Fisher's method.

## Two views

The package produces two chord-diagram views per cluster: transcription-factor families × conditions and tissues at the **cluster** level, and transcription-factor families × individual **cluster genes** — so that a reader can go from "this cluster responds to drought in leaves, probably through WRKY and NAC factors" to the specific enzyme genes those factors are predicted to bind.

## Demonstration

Applied to the predicted clusters of *Arabidopsis thaliana* with a 6,057-sample expression compendium (435 treatments in 27 conditions and 9 tissues) and a DAP-seq-based regulatory network of 349 transcription factors and 1.8 million interactions, the preprint walks through the thalianol and marneral terpene clusters as worked examples.
