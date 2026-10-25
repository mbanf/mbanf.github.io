---
title: "miP3 — predicting microProteins"
subtitle: "Software for predicting microProteins and the transcription factors they interfere with, from a sequenced genome"
start: 2014
end: 2015
era: carnegie
topics: [gene-regulation]
status: published
order: 38
hero:
  src: /images/projects/mip3-hero.png
  alt: "Flowchart of miP3: BLASTP searches from transcription factors to small proteins without DNA-binding domains, InterProScan filtering, and the final list of putative microProteins."
  caption: "The miP3 search: find small proteins that share a protein-interaction domain with a transcription factor but lack its DNA-binding domain (de Klein et al., Int. J. Genomics 2015, Fig. 1)."
  fit: contain
summary: "microProteins are truncated transcription factors: they keep the domain that lets them join a transcription-factor complex but lack the DNA-binding domain, so they act as dominant-negative regulators. A handful were known; how common they are was not. miP3 is a Python program that predicts microProteins and their target transcription factors from any sequenced genome."
role: "Co-author; contributed to the algorithm design and the computational analysis of the Arabidopsis predictions."
collaborators: ["Niek de Klein", "Enrico Magnani (INRA Versailles)", "Seung Y. Rhee (Carnegie Institution for Science)"]
links:
  - label: "Paper · International Journal of Genomics 2015"
    url: https://doi.org/10.1155/2015/734147
---

## The idea

A microProtein (miP) is, in effect, a transcription factor with its DNA-binding part cut off. It can still bind its partners and so sequesters them into non-functional complexes — a compact, evolvable way to add negative feedback to a regulatory circuit. The LITTLE ZIPPER proteins that antagonise HD-ZIPIII factors in *Arabidopsis* are the textbook case.

## The algorithm

miP3 starts from the transcription factors of a genome, searches for small proteins (< 550 aa) that share a protein–protein interaction domain with them, requires that the candidates lack a DNA-binding domain, and then uses a second round of searches to make sure the candidates are not simply fragments of unrelated families. The result is a list of putative microProteins paired with the transcription factors they are predicted to target. Beyond miPs, the same logic can find other classes of truncated proteins that act by interference.
