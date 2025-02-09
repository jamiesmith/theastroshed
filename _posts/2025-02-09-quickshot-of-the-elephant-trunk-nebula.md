---
title: "Quickshot: The Elephant Trunk Nebula (SHO with RGB stars)"
author: jamiesmith
tags: [ghro, NINA, TargetScheduler, nebula]
classes: wide

header:
  teaser: /assets/images/posts/quickshot-of-the-elephant-trunk-nebula/ElephantTrunk_2024_SHO_with_RGB_stars_2000px.jpg

gallery:
  - image_path: /assets/images/posts/quickshot-of-the-elephant-trunk-nebula/ElephantTrunk_2024_SHO_with_RGB_stars_2000px.jpg
    title: Finished version of the Elephant Trunk Nebula, SHO with the RGB stars
  - image_path: /assets/images/posts/quickshot-of-the-elephant-trunk-nebula/ElephantTrunk_2024_SHO_starless_2000px.jpg
    title: Starless version of the SHO Elephant Trunk Nebula

---

I realized that I never processed the Elephant Trunk Nebula that I started taking at the 
end of 2024. I had expected to go back and get more data but never did, and now it's too low. 

<!--more-->

{%
  include figure image_path="/assets/images/posts/quickshot-of-the-elephant-trunk-nebula/ElephantTrunk_2024_SHO_with_RGB_stars_2000px.jpg"
  caption="~12 hours of Elephant Trunkness"
%}

This was about 12.5 hours of RGB & SHO data (300s and 600s, respectively), with an SHO nebula
and RGB stars.

## Acquisition Details
- **Mount**: Astro-Physics Mach2GTO
- **Telescope**: Takahashi FSQ-106EDXv4
- **Camera**: ZWO ASI6200MM

The data for this was captured over several nights (December 12, 21, 22, 30, and 31, 2024
and January 1, 2025), gathering 102 unguided subs for a total of 12.42 hours. 

It's a single framing (not mosaic), based on what could nicely fit on the sensor.

Per-filter totals for the Elephant Trunk Nebula:
- Red:      2.08 hours (25 subs)
- Green:    1.25 hours (15 subs)
- Blue:     1.25 hours (15 subs)
- Sii:      3.17 hours (19 subs)
- Ha:       3.00 hours (18 subs)
- Oiii:     1.67 hours (10 subs)
- **total**:   12.42 hours (102 subs)

## Comparing SHO, with and without the stars

{%
    include image_comparison
    left_image_url="/assets/images/posts/quickshot-of-the-elephant-trunk-nebula/ElephantTrunk_2024_SHO_with_RGB_stars_2000px.jpg"
    left_image_description="SHO with RGB stars"
    right_image_url="/assets/images/posts/quickshot-of-the-elephant-trunk-nebula/ElephantTrunk_2024_SHO_starless_2000px.jpg"
    right_image_description="Starless"
    use_width="1010"
    use_height="666"
%}

## Processing details

All processing was done in PixInsight, using several plugins and scripts. These 
were basically the same steps I did for the [Flaming Star](/the-flaming-star-tadpoles-and-spider-nebulae/)
so I won't repeat them here.

{% include gallery id="gallery" caption="Click an image to see it bigger with some acquisition info" %}

### Image details on Astrobin
{% include astrobin_remote astrobin_id="xpxobp" name="Elephant Trunk on Astrobin"%}


