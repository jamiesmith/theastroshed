---
layout: splash
permalink: /
header:
  overlay_color_off: "#5e616c"
  overlay_image: /assets/images/homepage/Horizontal-mw-banner.jpg
  caption:
excerpt: 'Astrophotographers do it in the dark.<br/>'

feature_row:
  - image_path: /assets/images/homepage/horizontal-mw-teaser.jpg
    alt: "Astrophotography"
    title: "Astrophotography"
    excerpt: "Whether from my yard or our club's dark-sky site in Taxahaw, SC, here's where they go.  I'll get better."
    url: "/tags/astrophotography"
    btn_class: "btn--primary"
    btn_label: "Astrophotography"
  - image_path: /assets/images/homepage/elephants-trunk-thumb.jpg
    alt: "Music & More"
    title: "Music & More"
    excerpt: "A night under the stars goes well with some music.  Here you will find some of our favorites, including links when possible."
    url: "/tags/music"
    btn_class: "btn--primary"
    btn_label: "Music"

# intro:
#  - excerpt: Welcome to the new site!

---

{% include feature_row id="intro" type="center" %}

{%- for post in site.posts limit:5 -%}
  {% include archive-single.html %}
{%- endfor -%}

