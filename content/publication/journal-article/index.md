---
title: "FSDA-DG: Improving cross-domain generalizability of medical image segmentation with few source domain annotations"
authors:
- admin
- 叶赞挺
date: "2025-07-05T00:00:00Z"
doi: "https://doi.org/10.1016/j.media.2025.103704"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-07-05T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["Medical Image Analysis"]

# Publication name and optional abbreviated publication name.
publication: "*Medical Image Analysis, 105*(1)"
publication_short: ""

abstract: Deep learning-based medical image segmentation faces significant challenges arising from limited labeled data and domain shifts. While prior approaches have primarily addressed these issues independently, their simultaneous occurrence is common in medical imaging. A method that generalizes to unseen domains using only minimal annotations offers significant practical value due to reduced data annotation and development costs. In pursuit of this goal, we propose FSDA-DG, a novel solution to improve cross-domain generalizability of medical image segmentation with few single-source domain annotations. Specifically, our approach introduces semantics-guided semi-supervised data augmentation. This method divides images into global broad regions and semantics-guided local regions, and applies distinct augmentation strategies to enrich data distribution. Within this framework, both labeled and unlabeled data are transformed into extensive domain knowledge while preserving domain-invariant semantic information. Additionally, FSDA-DG employs a multi-decoder U-Net pipeline semi-supervised learning (SSL) network to improve domain-invariant representation learning through consistent prior assumption across multiple perturbations. By integrating data-level and model-level designs, FSDA-DG achieves superior performance compared to state-of-the-art methods in two challenging single domain generalization (SDG) tasks with limited annotations. The code is publicly available at https://github.com/yezanting/FSDA-DG

# Summary. An optional shortened abstract.
summary: FSDA-DG addresses domain shift and annotation scarcity in medical imaging.

tags:
- Source Themes
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://www.sciencedirect.com/science/article/pii/S1361841525002518?casa_token=qtVI0wZQNvYAAAAA:senbS0QFP6jOF63Sr-ZyeTTwN8eOcJ2XBcwiD2VCUMR269YvXvZFUjqKjR74WiRFIygHlEnikg
url_code: 'https://github.com/yezanting/FSDA-DG'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
