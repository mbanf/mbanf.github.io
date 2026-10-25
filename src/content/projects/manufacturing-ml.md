---
title: "Machine learning on the shop floor"
subtitle: "Low-cost retrofits, tool-wear prediction and model monitoring for special-purpose machinery"
start: 2019
end: 2022
era: fabforce
topics: [manufacturing-ml]
status: published
order: 60
hero:
  src: /images/projects/manufacturing-hero.svg
  alt: "An acceleration signal with a highlighted wear event feeding an on-edge classifier, and a monitoring strip showing drift and retraining."
  caption: "Vibration → features → on-edge classifier; and, underneath, an unsupervised monitor watching whether the classifier can still be trusted."
  fit: contain
summary: "Small and medium manufacturers own machines that are decades old and will run for decades more. At fabforce we built the Integrated System Solution around that reality: retrofit a cheap sensor, speak OPC UA, classify on the edge, keep the data on premises — and put a second, unsupervised model next to the first one to say when it should no longer be believed."
role: "Co-developed fabforce's Integrated System Solution approach and its machine-learning offering; lead or co-author on the papers."
collaborators: ["Gregor Steinhagen", "Mahmoud Kheir-Eddine (TU Dortmund)"]
links:
  - label: "Tool wear & defect prediction · arXiv 2202.03068"
    url: https://arxiv.org/abs/2202.03068
  - label: "Who supervises the supervisor? · arXiv 2201.06599"
    url: https://arxiv.org/abs/2201.06599
  - label: "Flexible On-Premises Datenanalyse für KMU · VDI Automation 2021"
    url: ""
---

## Tool wear from a €20 sensor

A round-seam milling machine prepares weld seams on large tubular structures. We mounted a low-cost acceleration sensor on it and asked whether blade wear and breakage, improper mounting and insufficient belt tension could be told apart from vibration alone. With limited data, support vector machines and random forests on wavelet-packet features did the job well enough to run as an on-edge classifier — which is the point: retrofitting old special-purpose machinery is cheap and immediately useful.

## Who supervises the supervisor?

A supervised classifier for workpiece inspection assumes the world looks like its training set. When a new kind of surface defect appears, the classifier keeps answering confidently and wrongly. We built an unsupervised framework that runs alongside the classifier and watches its *internal* deep feature embeddings: a shift in the distribution of those embeddings flags likely performance degradation in real time and signals that retraining is due — without needing new labels to do so.

## On-premises analytics for SMEs

The VDI paper describes the system side: flexible, on-premises data analysis for small and medium enterprises, with OPC UA as the lingua franca between retrofitted presses, machine controllers and the analytics stack. That integration problem is what later turned into the [MCP-in-manufacturing](/projects/graphrag/) question at Perelyn.
