---
title: "The Horsehead and Flame Nebulas, in RGB plus Narrowband"
author: jamiesmith
tags: [ghro, NINA, TargetScheduler, SHO, nebula, RGB]
classes: wide

header:
  teaser: /assets/images/posts/the-horsehead-nebula-in-rgb-plus-narrowband/Horsehead_Nebula_RGB_Plus_NB_cropped.jpg

gallery:
  - image_path: /assets/images/posts/the-horsehead-nebula-in-rgb-plus-narrowband/Horsehead_Nebula_RGB_Plus_NB_2000px.jpg
    title: Horsehead Nebula (with stars)
  - image_path: /assets/images/posts/the-horsehead-nebula-in-rgb-plus-narrowband/Horsehead_Nebula_RGB_Plus_NB_starless_2000px.jpg
    title: Horsehead Nebula (starless)

---

This is my late-2024 take on the Horsehead and Flame Nebulas in a fairly wide view from my 
530mm f/5 refractor. This view, taken over ten different nights, is cropped but if you 
click through you can see a bigger view along with processing details.

<!--more-->

{%
  include figure image_path="/assets/images/posts/the-horsehead-nebula-in-rgb-plus-narrowband/Horsehead_Nebula_RGB_Plus_NB_2000px.jpg"
  caption="Wider view of the nebulas"
%}

My favorite part is the part that looks like a giant comet with a tail flying through from the left about a third of the way down. 

## Acquisition details

Per-filter totals for this image:
- Sii   :  11.00 hours (66 subs)
- Ha    :   8.83 hours (53 subs)
- Oiii  :   5.83 hours (35 subs)
- Red   :   3.67 hours (44 subs)
- Green :   3.42 hours (41 subs)
- Blue  :   3.33 hours (40 subs)
- total :  36.08 hours (279 subs)

## Processing details

All processing was done in PixInsight, using several plugins and scripts.

### RGB filters
The processing included (see the processing icons [here](https://github.com/jamiesmith/pixinsight-icons)):
- RGB combination via ChannelCombination
- Auto Linear Fit
- GradientCorrection
- SPCC, set up for my astrodon RGB filters and PhotonFlux
- BlurX Full
- NoiseX
- StarX
- Stretched the stars via SetiAstro's "Star Stretch" ()
- GHS and a bit of curves to stretch the starless

### Narrowband Filters
I performed these steps on the individual Ha, Oiii, and Sii master images:
- BlurX
- GradientCorrection
- NoiseX
- StarX (I didn't use the stars from these)
- GHS and a bit of curves to stretch each starless image

### Combination
At this point I had 5 stretched (AKA "non-linear") images to combine: 
- RGB Starless
- RGB Stars
- Sii Starless
- Ha Starless
- Oiii Starless

Using the "CombineRGBAndNarrowband" script, I added HOO to the RGB starless image, 
then folded the Sii into that combined image as red via the ImageBlend script.

Finally, I used a PixelMath script to sprinkle the RGB stars back in.

{% include gallery id="gallery" caption="Click an image to see it bigger with some acquisition info" %}

### Image details on Astrobin
{% include astrobin_remote astrobin_id="k3txzx" name="Horsehead and Flame Nebulas"%}


