---
title: "The Flaming Star, Tadpoles, and Spider Nebulae"
author: jamiesmith
tags: [ghro, NINA, TargetScheduler, nebula]
classes: wide

header:
  teaser: /assets/images/posts/the-flaming-star-tadpoles-and-spider-nebulae/Tadpoles_FlamingStar_Spider_NB_RGB_stars_2000px.jpg

gallery:
  - image_path: /assets/images/posts/the-flaming-star-tadpoles-and-spider-nebulae/Tadpoles_FlamingStar_Spider_NB_RGB_stars_2000px.jpg
    title: The Flaming Star, Tadpoles, and Spider Nebulae, Narrowband with RGB stars
  - image_path: /assets/images/posts/the-flaming-star-tadpoles-and-spider-nebulae/Tadpoles_FlamingStar_Spider_NB_starless.jpg
    title: Narrowband Starless
  - image_path: /assets/images/posts/the-flaming-star-tadpoles-and-spider-nebulae/Tadpoles_FlamingStar_Spider_RGB_2000px.jpg
    title: The Flaming Star, Tadpoles, and Spider Nebulae in RGB
  - image_path: /assets/images/posts/the-flaming-star-tadpoles-and-spider-nebulae/Tadpoles_FlamingStar_Spider_RGB_starless.jpg
    title: RGB Starless
---

I gathered about 40 hours of narrowband and broadband data for this rendition of the Flaming Star, 
Tadpoles, and Spider Nebulae over a ten-day session in late 2024/early 2025.

<!--more-->

{%
    include image_comparison
    left_image_url="/assets/images/posts/the-flaming-star-tadpoles-and-spider-nebulae/Tadpoles_FlamingStar_Spider_NB_RGB_stars_2000px.jpg"
    left_image_description="SHO with RGB stars"
    right_image_url="/assets/images/posts/the-flaming-star-tadpoles-and-spider-nebulae/Tadpoles_FlamingStar_Spider_RGB_2000px.jpg"
    right_image_description="RGB"
    use_width="1000"
    use_height="661"
%}


## Region overview
_(region overview is AI Generated, prompt and details at the end)_

IC 405, IC 410, and IC 417 are three emission nebulae located in the constellation Auriga. While they share some similarities, each nebula has its unique characteristics.

IC 405, the Flaming Star Nebula is a small, irregular nebula with wispy tendrils of gas and dust stretching about 1 degree across. Located approximately 6,800 light-years away from Earth, it is thought to be the remnant of a supernova explosion that occurred around 2,000 years ago. The vibrant colors of IC 405 are due to the presence of ionized hydrogen and helium, reflecting the intense radiation from nearby stars.

IC 410 (AKA the Tadpoles Nebula), on the other hand, is a large molecular cloud with bright blue-green hues and dark lanes of interstellar gas and dust stretching about 30 arcminutes across. At approximately 20,000 light-years away, IC 410 harbors numerous young stars and protostars, making it an ideal target for studying star formation.

The Spider Nebula, IC 417 is also an emission nebula, located around 20,000 light-years from Earth. It appears as a small cloud with bright pinkish-red hues and dark lanes of gas and dust stretching about 2 degrees across. The nebula's striking appearance is due to its high concentration of ionized gas and intense radiation from nearby hot stars.

All three nebulae are popular targets for amateur astronomers and astrophotographers, offering a glimpse into the dynamic process of star formation and the explosive power of supernovae.


## Acquisition Details
- **Mount**: Astro-Physics Mach2GTO
- **Telescope**: Takahashi FSQ-106EDXv4
- **Camera**: ZWO ASI6200MM

The data for this was captured over several nights (December 30 & 31, 2024, 
and January 1, 4, 7, and 8, 2025), gathering 290 unguided subs for a total of 39.67 hours. 

It's a single framing (not mosaic), based on what could nicely fit on the sensor.

Per-filter totals:
- Red:      2.67 hours (32 subs)
- Green:    2.83 hours (34 subs)
- Blue:     3.17 hours (38 subs)
- Sii:     11.83 hours (71 subs)
- Ha:      11.00 hours (66 subs)
- Oiii:     8.17 hours (49 subs)
- total:   39.67 hours (290 subs)

## Processing details

All processing was done in PixInsight, using several plugins and scripts.

### RGB filters
The processing included (see the updated processing icons [here](https://github.com/jamiesmith/pixinsight-icons)):
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
- StarXTerminator
- Stretched the stars via SetiAstro's "Star Stretch"
- GHS and a bit of curves to stretch the starless
  - several iterations with masks to get rid of some leftover star halos

### Narrowband Filters
- For each of the individual Ha, Oiii, and Sii master images:
- BlurXTerminator (full)
- GradientCorrection
- NoiseXTerminator
- StarXTerminator (I didn't use the stars from these)
- Preliminary stretch with SetiAstro's StatisticalStretch
- GHS and a bit of curves to stretch each starless image and set the black point

### Combination
At this point I had 5 stretched (AKA "non-linear") images to combine: 
- RGB Starless
- RGB Stars
- Sii Starless
- Ha Starless
- Oiii Starless

Time to start combining!
- Combined HOO with PixelMath
- NarrowbandNormalization for HOO with blend set to zero
- Used the NBColourMapper to convert the Sii image to a color image, hue==45

I then screened the colorized Sii image on to the bi-color HOO 
image using the ImageBlend script. I spent a lot of time with 
iterating between curves and GHS to get the image where I liked 
it, trying very hard to not lose the Tadpoles in the process. I also 
used a mask to reduce some extra halos left between the Flaming Star 
and Tadpoles

Finally, I used a PixelMath script to sprinkle the RGB stars back in. For 
fun (and comparison) I also made an RGB-only version

If you click on one of the gallery images  you can use the arrow keys to 
flip between them to see the differences between the narrowband, RGB, and starless 
narrowband version

{% include gallery id="gallery" caption="Click an image to see it bigger with some acquisition info" %}

### Image details on Astrobin
{% include astrobin_remote astrobin_id="opswuo" name="AstroBin"%}

overview written by AI, using the `llama3.2:latest` model, with this prompt: 
```
write a 250 word description of IC405, IC410, and IC417, including 
apparent size, distance from earth, and interesting details.
Don't plagiarize
```

