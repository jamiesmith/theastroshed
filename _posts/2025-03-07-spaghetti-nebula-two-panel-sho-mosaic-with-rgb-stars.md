---
title: "Spaghetti Nebula, two-panel SHO mosaic with RGB stars"
author: jamiesmith
tags: [ghro, NINA, TargetScheduler, nebula, supernova, snr, mosaic]
classes: wide

header:
  teaser: /assets/images/posts/spaghetti-nebula-two-panel-sho-mosaic-with-rgb-stars/SpaghettiNebula_SHO_2_panel_mosaic_2000px.jpg

gallery:
  - image_path: /assets/images/posts/spaghetti-nebula-two-panel-sho-mosaic-with-rgb-stars/SpaghettiNebula_SHO_2_panel_mosaic_2000px.jpg
    title: Spaghetti Nebula with RGB stars
  - image_path: /assets/images/posts/spaghetti-nebula-two-panel-sho-mosaic-with-rgb-stars/SpaghettiNebula_SHO_2_panel_mosaic_starless_2000px.jpg
    title: Spaghetti Nebula (starless)

---

This is a two-panel mosaic of Siemeis 147, AKA Sharpless 2-240, affectionately
known as the "Spaghetti Nebula".  The Spaghetti Nebula is a striking
astronomical object located in the constellation of Taurus. This ethereal cloud
of gas and dust appears as a delicate, curved nebula with intricate filaments
that evoke the image of twisted pasta.

<!--more-->

When viewed through a telescope or binoculars, the Spaghetti Nebula measures
approximately 4' x 1', making it a relatively compact object in the night
sky. Its distance from Earth is estimated to be around 3,000 light-years away,
providing astronomers with a unique opportunity to study its composition and
evolution.  One of the most intriguing aspects of this nebula is its complex
structure, which suggests that it may have originated as a supernova remnant
(SNR), resulting from the collapse of a massive star or the interaction between
multiple stars. The Spaghetti Nebula's delicate filaments appear to be in the
process of dissolving, a phenomenon known as "dissipation," where the gas and
dust are being eroded away by the intense radiation and strong stellar winds
emanating from nearby stars.

{%
  include figure image_path="/assets/images/posts/spaghetti-nebula-two-panel-sho-mosaic-with-rgb-stars/SpaghettiNebula_SHO_2_panel_mosaic_2000px.jpg"
  caption="Two-panel SHO mosaic of the Spaghetti Nebula"
%}

## Acquisition Details
- **Mount**: Astro-Physics Mach2GTO
- **Telescope**: Takahashi FSQ-106EDXv4
- **Camera**: ZWO ASI6200MM

The data for this was captured over eleven different nights in January, February, and March, 2025,
for a total of 42 hours of data for both panels.

Per-filter totals:
- Panel 1, the lower half
    - Red:      2.42 hours (29 subs)
    - Green:    2.42 hours (29 subs)
    - Blue:     2.42 hours (29 subs)
    - Sii:      3.67 hours (22 subs)
    - Ha:       4.00 hours (24 subs)
    - Oiii:     4.17 hours (25 subs)
    - subtotal:   19.08 hours (158 subs)
- Panel 2, the upper half
    - Red:      3.08 hours (37 subs)
    - Green:    3.08 hours (37 subs)
    - Blue:     3.08 hours (37 subs)
    - Sii:      4.67 hours (28 subs)
    - Ha:       4.50 hours (27 subs)
    - Oiii:     4.50 hours (27 subs)
    - subtotal:   22.92 hours (193 subs)
- total:   40 hours (451 subs)

## Processing Overview

All processing was done in PixInsight, using several plugins and scripts.

### RGB filters
The processing included (see the updated processing icons [here](https://github.com/jamiesmith/pixinsight-icons)):
(this process was repeated for each panel)
- For each of the RGB channels:
  - Dynamic Crop
  - GradientCorrecton
  - BlurXTerminator (correct only)
- RGB combination via PixelMath
- Auto Linear Fit
- ImageSolver
- SpectrophotometricColorCalibration (PhotonFlux)
- BlurXTerminator (full)
- NoiseXTerminator

### Narrowband Filters
(this process was also repeated for each panel)
- For each of the individual Ha, Oiii, and Sii master images:
- BlurXTerminator (full)
- GradientCorrection
- NoiseXTerminator

### Combination
At this point I had two different sets of four linear images to combine (one set for each panel): 
- RGB
- Sii
- Ha
- Oiii

### Building the mosaics
To build the mosaics, I needed to use the `MosaicByCoordinates` script. First,
however, I had to plate solve the images. Because I was careful, each set of
frames for the respective panel were the same, so I just plate solved the RGB
image then applied the astrometric solution to the corresponding narrowband
frames by entering this in the process console's command bar:

```
cpast -s=RGB Sii Ha Oiii
```

I performed the `MosaicByCoordinates` against each panel's frames (RGB 1 & 2, etc), and ended up with:
- RGB_panel_1_ra.xisf
- RGB_panel_2_ra.xisf
- Sii_panel_1_ra.xisf
- Sii_panel_2_ra.xisf
- Ha_panel_1_ra.xisf
- Ha_panel_2_ra.xisf
- Oiii_panel_1_ra.xisf
- Oiii_panel_2_ra.xisf

These aligned frames _themselves_ were about 4GB of data.

Once that was done I used `GradientMergeMosaic` for each pair, then continued on with post processing.

### Post Processing
- StarXTerminator on each of the four frames, needing only the narrowband starless frames and the RGB stars
- Manually used GHS to stretch the individual narrowband frames
- SHO combination with PixelMath
- AutoLinearFit on the SHO
- Several hours of masks, GHS, curves, and HistogramTransformation to get something I liked
- Stretched the RGB stars via SetiAstro's "Star Stretch" (stretch: 6, color boost: 0)
- SetiAstro's Stretched
- PixelMath to screen the RGB stars back on the SHO
- A couple iterations of `DarkStructureEnhance` to get it to pop
- And, of course, more time with GHS, Curves, and friends

In the end this was a 9131x8615 image (downsized here), and the processing
really taxed my machine. The final XISF itself was almost 1gb.

{% include gallery id="gallery" caption="Click an image to see it bigger with some acquisition info" %}

### Image details on Astrobin
{% include astrobin_remote astrobin_id="br2bnx" name="Spaghetti Nebula"%}


