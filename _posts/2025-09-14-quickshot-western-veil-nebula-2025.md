---
title: "Quickshot: the Western Veil Nebula (NGC6960)"
author: jamiesmith
tags: [ghro, NINA, TargetScheduler, nebula, RGB]
classes: wide

header:
  teaser: /assets/images/posts/quickshot-western-veil-nebula-2025/WesternVeilNebula_2000px.jpg

gallery:
  - image_path: /assets/images/posts/quickshot-western-veil-nebula-2025/WesternVeilNebula_2000px.jpg
    title: Western Veil Nebula (with stars)
  - image_path: /assets/images/posts/quickshot-western-veil-nebula-2025/WesternVeilNebula_starless_2000px.jpg
    title: Western Veil Nebula (starless)

---

I haven't been able to image lately for a number of reasons, some just personal crap,
but also because the weather here the past few months has just sucked.

<!--more-->

{%
  include figure image_path="/assets/images/posts/quickshot-western-veil-nebula-2025/WesternVeilNebula_2000px.jpg"
  caption="Western Veil Nebula"
%}

This is the Western Veil Nebula, AKA NGC 6960. The framing isn't great but I don't trust the rotator when running unattended. It was more intended to get my sea legs back, and my processing is again rusty. 

When I look at this the stark red and blue striations always makes me think I should be wearing 3d glasses :sunglasses:

## Acquisition Details
- **Mount**: Astro-Physics Mach2GTO
- **Telescope**: Takahashi FSQ-106EDXv4
- **Camera**: ZWO ASI6200MM

The data for this was captured over two nights (September 12 & 13, 2025) gathering 99 unguided subs for a total of a little over eight hours. 

Per-filter totals for NGC6960:
- Red:      2.92 hours (35 subs)
- Green:    2.75 hours (33 subs)
- Blue:     2.58 hours (31 subs)
- **total**:    8.25 hours (99 subs)

{% include gallery id="gallery" caption="Click the image to see it bigger, or visit Astrobin for a full-size version" %}

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
- Stretched the stars via SetiAstro's "Star Stretch"
- GHS and a bit of curves to stretch the starless
- Sprinkled the stars back onto the starless image with PixelMath (`combine($T,RGB_stars,op_screen())`)


## Comparing RGB with and without stars
{%
    include image_comparison
    left_image_url="/assets/images/posts/quickshot-western-veil-nebula-2025/WesternVeilNebula_2000px.jpg"
    left_image_description="SHO with RGB stars"
    right_image_url="/assets/images/posts/quickshot-western-veil-nebula-2025/WesternVeilNebula_starless_2000px.jpg"
    right_image_description="Starless"
    use_width="1010"
    use_height="666"
%}

### Image details on Astrobin
{% include astrobin_remote astrobin_id="2kd0z2" name="Western Veil Nebula"%}
