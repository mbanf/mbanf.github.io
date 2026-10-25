---
title: "Making the visual world audible"
subtitle: "A modular computer-vision sonification model for blind users, and the PictureSensation app"
start: 2009
end: 2016
era: siegen
topics: [vision-assistive]
status: legacy
order: 70
hero:
  src: /images/projects/sonification-hero.svg
  alt: "An image segmented into sky, ground and a building, with a touch point, mapped to three layers of sound."
  caption: "Touch a region of the image and hear it: colour and texture become timbre, edges become rhythm, recognised objects are announced."
  fit: contain
summary: "My doctoral work asked how a blind person could explore a photograph. The answer was a modular model that runs classical computer vision — segmentation, edge and orientation analysis, man-made-structure detection, object recognition — and maps each level to a layer of sound under the user's fingertip. It became a mobile app, PictureSensation, evaluated with blind users."
role: "Doctoral research with Volker Blanz at the University of Siegen; lead author on all papers; app developed with Ruben Mikalay and Baris Watzke."
collaborators: ["Volker Blanz", "Ruben Mikalay", "Baris Watzke"]
links:
  - label: "PictureSensation · J. Rehabil. Assist. Technol. Eng. 2016"
    url: https://doi.org/10.1177/2055668316674582
  - label: "Sonification of images using a multi-level approach · Augmented Human 2013"
    url: https://doi.org/10.1145/2459236.2459264
  - label: "Man-made structure detection and object recognition verification · MIRAGE 2013"
    url: ""
  - label: "A modular computer vision sonification model · ICAD 2012"
    url: ""
---

## The idea

Screen readers handle text. Images were, and mostly still are, a wall. Rather than describe a picture in words, the sonification model lets a user *touch* it on a tablet and hear what is under the finger: hue and saturation drive timbre and pitch, texture drives roughness, edge orientation drives rhythmic patterns, and higher-level modules — a man-made-structure detector, an object recogniser with a verification step — add spoken labels or earcons. Each module is independent and can be switched on as the user's skill grows.

## From thesis to app

The model was implemented as PictureSensation, a mobile application in which blind users explore photographs with touch and sound. The 2016 journal paper reports the design and the user evaluation. Where it mattered most was conditional random fields for image segmentation — the probabilistic modelling that later carried straight over to Markov random fields on [gene regulatory networks](/projects/grace/).

## Earlier graphics work

Before the thesis: example-based rendering of eye movements (*Computer Graphics Forum*, Eurographics 2009) and on-demand procedural city generation (2010).
