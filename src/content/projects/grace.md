---
title: "GRACE — trustworthy gene regulatory networks"
subtitle: "Markov random fields that integrate heterogeneous evidence to refine inferred regulatory networks"
start: 2015
end: 2023
era: carnegie
topics: [gene-regulation]
status: published
order: 20
hero:
  src: /images/projects/grace-hero.png
  alt: "Overview of the GRACE algorithm: an initial network from expression data is refined by an ensemble of Markov random fields over a meta-network of regulatory links."
  caption: "GRACE: initial network → meta-network of regulatory links → ensemble of Markov random fields (Banf & Rhee, Sci Rep 2017)."
  fit: contain
summary: "Expression-based network inference is noisy, especially in eukaryotes with sparse gold standards. GRACE treats candidate regulatory links as nodes of a meta-network and learns, semi-supervised, which of them are likely real by integrating motifs, conserved promoter sequences, co-functionality and gene ontology — with Markov random fields doing the integration."
role: "Lead author; conceived the method, implemented it in R/C++, ran the Drosophila and Arabidopsis studies."
collaborators: ["Seung Y. Rhee (Carnegie Institution for Science)", "Kangmei Zhao", "Thomas Hartwig"]
links:
  - label: "Paper · Scientific Reports 2017"
    url: https://doi.org/10.1038/srep41174
  - label: "Review · BBA Gene Regulatory Mechanisms 2017"
    url: https://doi.org/10.1016/j.bbagrm.2016.09.003
  - label: "Follow-up · Computation 2021 (randomness & scale)"
    url: https://doi.org/10.3390/computation9120146
  - label: "Review · Frontiers in Plant Science 2023 (modern ML for gene regulation)"
    url: https://doi.org/10.3389/fpls.2023.1330793
  - label: "Code · GitHub"
    url: https://github.com/mbanf/GRACE
figures:
  - src: /images/projects/grace-fig1.png
    alt: "Full Figure 1 of the GRACE paper."
    caption: "(A) Top-link selection and motif filtering give an initial network. (B) Candidate links become nodes of a meta-network built from co-functionality data; tightly connected modules are extracted. (C) An ensemble of Markov random fields, trained on sparse gold-standard links, scores each candidate."
---

## Why

A gene regulatory network is a map of which transcription factors control which genes. Inferring it from expression data alone works reasonably in yeast and *E. coli* and badly almost everywhere else: eukaryotic regulation is combinatorial, the gold standards are tiny, and the top-ranked edges of a random-forest or mutual-information network are full of indirect effects.

## What GRACE does

GRACE (Gene Regulatory network inference ACcuracy Enhancement) starts from any expression-based network and asks a different question: *given everything else we know, which of these candidate links are plausible?* Each candidate link becomes a node in a meta-network whose edges come from co-functionality evidence — protein interactions, phylogenetic profiles, shared GO annotations. An ensemble of Markov random fields is trained semi-supervised on the few known interactions, and a novel optimisation scheme balances regulatory evidence against biological relevance. The output is a high-confidence network sized for experimental follow-up rather than a ranked list of a million edges.

On *Drosophila melanogaster* and *Arabidopsis thaliana* data GRACE outperformed the state of the art of the time, and in an Arabidopsis developmental network it recovered known cell-cycle control and proposed a regulatory mechanism linking cell proliferation to vascular patterning.

## What came after

The [BBA review](https://doi.org/10.1016/j.bbagrm.2016.09.003) with Sue Rhee surveys the field's approaches and their limits; the 2021 *Computation* paper with Thomas Hartwig revisits scalable, randomised integrative inference; and the [2023 Frontiers review](https://doi.org/10.3389/fpls.2023.1330793) connects the classical network-inference view to modern sequence-to-function models — the bridge to the [bQTL work](/projects/maize-bqtl/) and to [genomic foundation models](/projects/bqtl-predict/).

GRACE-style integration also fed into collaborative biology: the [ARSK1 study](/projects/arsk1-phosphate/) in *Current Biology* (2023) used it to position ARSK1 as a hub of the phosphate-deficiency regulatory network in Arabidopsis.
