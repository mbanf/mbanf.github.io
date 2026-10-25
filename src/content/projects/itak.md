---
title: "iTAK — a census of plant regulatory proteins"
subtitle: "Genome-wide prediction and classification of plant transcription factors, transcriptional regulators and protein kinases"
start: 2015
end: 2016
era: carnegie
topics: [gene-regulation]
status: published
order: 36
hero:
  src: /images/projects/itak-hero.png
  alt: "Venn diagram of transcription factors identified by iTAK, PlnTFDB and PlantTFDB: 1,602 shared by all three, with iTAK-specific, PlnTFDB-specific and PlantTFDB-specific sets."
  caption: "Transcription factors called by iTAK, PlnTFDB and PlantTFDB in a reference genome (Zheng et al., Molecular Plant 2016)."
  fit: contain
summary: "Transcription factors, transcriptional regulators and protein kinases are the three classes of protein that run a plant's regulatory programmes, yet their family annotations were inconsistent across databases. iTAK is a program — and a web resource — that identifies and classifies all three from a sequenced genome with consistent, curated family rules. With more than a thousand citations it has become a standard first step in plant regulatory genomics."
role: "Co-author; contributed data analysis and gene-family curation for the transcription-factor and regulator families."
collaborators: ["Yi Zheng and Zhangjun Fei (Boyce Thompson Institute)", "Seung Y. Rhee (Carnegie Institution for Science)", "and co-authors"]
links:
  - label: "Paper · Molecular Plant 2016"
    url: https://doi.org/10.1016/j.molp.2016.09.014
  - label: "iTAK online"
    url: http://itak.feilab.net/
---

## The problem

Over a hundred plant genomes had been sequenced by 2016, and regulatory proteins had been catalogued for several of them — but PlnTFDB and PlantTFDB disagreed on which families exist, which domains define them and which "forbidden" domains exclude a protein from a family. A transcriptional regulator in one database was a transcription factor in another, or absent altogether.

## What iTAK does

iTAK combines curated family classification rules for transcription factors, transcriptional regulators and protein kinases — domain signatures, required and forbidden domains — into one program with a command-line and a web version. Applied to a genome it returns the complete, consistently classified set of regulatory proteins. The Venn diagram above shows the degree of agreement with the two existing databases and where each is unique.

## Why it mattered to my work

Every regulatory-network inference starts from a list of candidate regulators. iTAK's family annotations are what the [ARSK1 network](/projects/arsk1-phosphate/) and the [METACLUSTERplus](/projects/metaclusterplus/) analyses used to decide which genes count as transcription factors.
