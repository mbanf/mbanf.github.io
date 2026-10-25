---
title: "bQTL-Predict — sequence models for binding variation"
subtitle: "Predict, explain and design transcription-factor binding variation in maize with plant genomic foundation models"
start: 2024
end: null
era: generegulation
topics: [genomic-fm, binding-variation, gene-regulation]
status: ongoing
order: 5
hero:
  src: /images/projects/bqtl-predict-hero.png
  alt: "Agentic workflow from a phenotype goal through expression data, gene discovery and promoter analysis to a design loop."
  caption: "From a phenotype goal to a designed regulatory element: the MaizeDesigner agent workflow."
  fit: contain
summary: "Given 1,001 bp of maize sequence, can a model say whether the central position is a binding QTL — and which bases make it one? Random forests on 6-mers, a small attention CNN, and a LoRA-tuned 1B-parameter plant nucleotide transformer all get there in random cross-validation. The ongoing work is about making that hold out of distribution, on held-out chromosomes, with plant DNA language models and the causal bQTL atlas as the ground truth."
role: "Lead; model development, the evaluation redesign and the agentic design platform. With Thomas Hartwig."
collaborators: ["Thomas Hartwig", "Julia Engelhorn"]
links:
  - label: "Nature Genetics 2025 · the bQTL atlas this builds on"
    url: https://doi.org/10.1038/s41588-025-02246-7
  - label: "Frontiers in Plant Science 2023 · modern ML for gene regulation"
    url: https://doi.org/10.3389/fpls.2023.1330793
figures:
  - src: /images/projects/bqtl-predict-agent.png
    alt: "Full agent-workflow figure with the design-loop architecture and an example design trajectory."
    caption: "The design loop: CNN attribution selects positions, a masked language model proposes variants, the LoRA model scores them, and the best are kept. Example: the top drought-induced NADP-malic enzyme promoter, +28% predicted bQTL score after three rounds."
  - src: /images/projects/bqtl-predict-attribution.png
    alt: "Attribution tracks at chr2:141071810 — attention rollout, integrated gradients on the LoRA model and per-base CNN integrated gradients."
    caption: "Per-base attribution at a bQTL on chromosome 2 from three views of the same sequence."
---

## Where it stands

The first version — the `bqtl_predict` platform — trains three model families on the bQTL atlas from the [maize pan-cistrome](/projects/maize-bqtl/): a random forest on 6-mer frequencies, BQTLNet (a multi-scale convolutional network with attention pooling for spatial attribution), and the 1B-parameter Agro-NT plant nucleotide transformer fine-tuned with LoRA adapters. Integrated gradients give per-base attributions, a motif database maps them to transcription-factor families, and a cross-condition check on heat-shock-factor genes tests whether the models transfer. On top sits the MaizeDesigner agent: an interactive loop that proposes and scores promoter edits toward a target.

## What the audit showed

The honest number is the one on held-out chromosomes. In random cross-validation the LoRA model reaches AUROC ≈ 0.87; with chromosomes 9–10 held out it drops to ≈ 0.60, close to a 6-mer baseline. Part of this is leakage between nearby windows; part is that the original negatives are only partly comparable to the positives (many sit outside accessible chromatin, so the task mixes "is this bound?" with "does binding differ between alleles?"). The current work therefore rebuilds the task:

- **Event-level labels** — a bQTL is a clumped event, not a single SNP; negatives are powered, allele-balanced tested sites matched on peak strength, read depth and number of hybrids.
- **Three formulations** — site propensity from one sequence; allele-paired variant effect Δ = g(alt) − g(ref); and sequence → MOA-seq profile with a BPNet-style head.
- **Model landscape** — GPN, Nucleotide Transformer v3, BOTANIC-1 and Agro-NT compared as frozen embeddings, probes and zero-shot log-likelihood ratios, all against covariate and 6-mer floors with bootstrap confidence intervals.
- **Interpretation** — in-silico saturation mutagenesis against the causal bQTL atlas (motif creation vs. disruption), and sparse autoencoders on the language-model residual stream.

This page will grow as results land. Code and data are shared with collaborators; a public release follows the paper.
