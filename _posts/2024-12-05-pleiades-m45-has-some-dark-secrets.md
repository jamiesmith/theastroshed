---
title: "Pleiades (M45) has some dark secrets"
author: jamiesmith
tags: [ghro, NINA, RGB, nebula]
classes: wide

header:
  teaser: /assets/images/posts/pleiades-m45-has-some-dark-secrets/Pleiades_RGB_2000px.jpg

gallery:
  - image_path: /assets/images/posts/pleiades-m45-has-some-dark-secrets/Pleiades_RGB_2000px.jpg
    title: RGB version
  - image_path: /assets/images/posts/pleiades-m45-has-some-dark-secrets/Pleiades_RGB_starless_2000px.jpg
    title: Starless version

---

I was able to pull out some darker whispies as well as several 
galaxies hidden in the mist while imaging Pleiades, AKA M45 or 
"The Seven Sisters" (I count a lot more than seven!).

<!--more-->

This is 21 hours of RGB with pretty basic processing. There are also a bunch galaxies hiding in plain site

{%
  include figure image_path="/assets/images/posts/pleiades-m45-has-some-dark-secrets/Pleiades_RGB_2000px.jpg"
  caption="RGB with a bunch of whispies you don't normally see"
%}

The processing included (see the processing icons [here](https://github.com/jamiesmith/pixinsight-icons)):
- RGB combine via pixelmath
- Auto Linear Fit
- GradientCorrection
- BlurX (correct only)
- ImageSolver for SPCC
- SPCC, set up for my astrodon RGB filters and PhotonFlux
- BlurX Full
- NoiseX
- StarX
- Stretch stars via STF/Histogram Transformation
- GHS and a bit of curves to stretch the starless
- put the stars back
- final tweaking

{% include gallery id="gallery" caption="Click an image to see it bigger with some acquisition info" %}

### Image details on Astrobin
{% include astrobin_remote astrobin_id="oqkb7k" name="Pleiades RGB"%}


