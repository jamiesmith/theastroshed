---
title: "M81 and M82 in RGB blended with narrowband continuum"
author: jamiesmith
tags: [ghro, NINA, TargetScheduler, galaxy, north]
classes: wide

header:
  teaser: /assets/images/posts/m81-and-m82-in-rgb-blended-with-narrowband-continuum/m81_m82_RGB_plus_continuum_2000px.jpg

gallery:
  - image_path: /assets/images/posts/m81-and-m82-in-rgb-blended-with-narrowband-continuum/m81_m82_RGB_plus_continuum_2000px.jpg
    title: M81 and M82 in RGB blended with narrowband continuum

---

This is a quick post on the M81/M82 region, also known as Bode's Galaxy and the Cigar Galaxy, respectively.

<!--more-->

{%
  include figure image_path="/assets/images/posts/m81-and-m82-in-rgb-blended-with-narrowband-continuum/m81_m82_RGB_plus_continuum_2000px.jpg"
  caption="M81 and M82 in RGB blended with narrowband continuum"
%}

This is about 53 hours of broadband and narrowband data taken over 11 different sessions from January to March, 2025.

I preprocessed, combined, and stretched RGB, then preprocessed the NB frames. I then performed continuum subtraction for Sii, Oiii, and Ha.

I then used the CombineRGBAndNarrowband script to add the SOO continuum to the RGB, then added the Ha continuum, also as red. There were MANY iterations of stretching, curves, and masks (the GAME "brightness mask" was __extremely__ helpful).

Let me know if more detailed information on the processing flow would be helpful.

If I had to do it over I wouldn't have spent so much time on the Sii and Oiii, and instead focused on more Ha and RGB

{% include gallery id="gallery" caption="Click the image to see it bigger, or visit Astrobin for a full-size version" %}

### Image details on Astrobin
(the image on Astrobin is also a much higher resolution)

{% include astrobin_remote astrobin_id="67n00t" name="M81/M82"%}


