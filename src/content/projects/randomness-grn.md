---
title: "The reasonable effectiveness of randomness"
subtitle: "A survey of randomised algorithms for scalable, integrative gene regulatory network inference — from Kolmogorov to random forests"
start: 2020
end: 2021
era: generegulation
topics: [gene-regulation]
status: published
order: 22
hero:
  src: /images/projects/randomness-hero.png
  alt: "Random-forest regression for network inference: each gene is predicted from all others with tree ensembles, importance weights are collected into an importance matrix and read as a weighted gene regulatory network."
  caption: "The generalised random-forest view of network inference: predict each gene's expression from all others, read feature importances as regulatory weights (Banf & Hartwig, Computation 2021, Fig. 3)."
  fit: contain
summary: "Why does a method built on coin flips keep winning network-inference challenges? This long-form survey with Thomas Hartwig makes the case for randomness as a design principle in computational biology: a primer on what randomness even is mathematically, then the tools — MCMC sampling for network structure, random-forest regression, random walks for module detection, randomised matrix factorisation and random projection — and where each has earned its place in gene regulation."
role: "Lead author; wrote the mathematical primer and the methods sections, and drew the figures."
collaborators: ["Thomas Hartwig (Max Planck Institute for Plant Breeding Research)"]
links:
  - label: "Paper · Computation 2021 (open access)"
    url: https://doi.org/10.3390/computation9120146
figures:
  - src: /images/projects/randomness-mcmc.png
    alt: "Metropolis–Hastings sampling: proposals accepted or rejected against the likelihood, moving from a prior to a posterior distribution over parameters."
    caption: "MCMC for network-structure selection: a Markov chain explores the geometry of the posterior, accepting and rejecting proposals (Fig. 2)."
  - src: /images/projects/randomness-rsvd.png
    alt: "A randomised low-rank approximation of a data matrix followed by a deterministic decomposition recovers near-optimal factors."
    caption: "Randomised matrix factorisation: compress first with randomness, decompose deterministically, recover near-optimal factors (Fig. 4)."
  - src: /images/projects/randomness-rp.png
    alt: "Random projection from a high-dimensional space to a lower-dimensional one approximately preserves pairwise distances."
    caption: "Random projection and the Johnson–Lindenstrauss lemma: distances survive the drop in dimension (Fig. 5)."
  - src: /images/projects/randomness-regulation.png
    alt: "Cartoon of transcriptional regulation: enhancers, activators, transcription factors and co-factors at a promoter, RNA polymerase, DNA methylation and a chromatin loop."
    caption: "The biology the methods have to cope with: a crowded, dynamic transcriptional apparatus (Fig. 1)."
---

## Why randomness

Gene regulation is orchestrated by thousands of molecules — transcription factors and co-factors, chromatin regulators, epigenetic marks — and the datasets that probe it are now large, high-resolution and heterogeneous. Deterministic inference methods scale badly with that, and ground truth for training or testing is usually scarce. Randomised methods are the pragmatic alternative, and not only for speed: one of the top performers in the DREAM network-inference challenge, GENIE3, is a random-forest regression model. The paper's title riffs on Wigner's "unreasonable effectiveness of mathematics"; the point is that here the effectiveness is entirely reasonable once you see what randomness buys.

## What the paper covers

1. **A primer on randomness** — from von Mises, Church, Kolmogorov and Martin-Löf to the complexity-theoretic view: what it means for a sequence to be random, and why randomised algorithms (Monte Carlo, Las Vegas) are a different thing from "noisy" ones.
2. **MCMC sampling for network-structure selection** — Bayesian network learning with Metropolis–Hastings over graph structures, priors that encode biological knowledge, and the trade-offs in mixing.
3. **Random-forest regression** — the GENIE3 family, generalised to integrate heterogeneous data, and why tree ensembles handle interactions and give an inherent cross-validation.
4. **Random walks for module detection** — diffusion and random-walk-based community detection on biological networks, including the ideas behind the DREAM module-identification challenge.
5. **Randomised matrix factorisations** — randomised SVD, random projection and randomised PCA for compressing large omics matrices before deterministic decomposition.
6. **A note on deep learning** for computational biology, and where randomness enters there too.

## Who it is for

It is written for both computational and biological scientists as a starting point for a conversation about the concepts, benefits and caveats of the randomised toolbox — the kind of paper I wish had existed when I started with [GRACE](/projects/grace/).
