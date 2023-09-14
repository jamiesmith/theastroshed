---
title: "New camera and filter wheel"
author: jamiesmith
tags: [astrophotography, gear, camera, atik, zwo, astrodon]
classes: wide

header:
  teaser: /assets/images/posts/new-camera-and-filter-wheel/new-imaging-train-1.jpeg

gallery:
  - image_path: /assets/images/posts/new-camera-and-filter-wheel/new-imaging-train-1.jpeg
    title: closeup of the ZWO EFW and ASI6200 mono
  - image_path: /assets/images/posts/new-camera-and-filter-wheel/new-imaging-train-2.jpeg
    title: The whole setup. That pier looks a little tall...

---

Undersampling: that's what happens when the camera you use has pixels that are too
big for your focal length and seeing conditions. It's also something that can
cause soft images.

<!--more-->

{%
  include figure image_path="/assets/images/posts/new-camera-and-filter-wheel/new-imaging-train-1.jpeg"
  caption="ZWO!"
%}


That's what I was (unknowingly) fighting when I was using the ATIK-16200 with my
Tak FSQ-106EDXv4. The Atik has a pixel size of 6µm, and the Tak has a focal length 
of 106mm. The formula to calculate the resolution is (pixel size / focal length) * 206.3 
(I don't know _why_ 206.3, but that's what I found in a few places, such as 
[Highpoint Scientific](https://www.highpointscientific.com/astronomy-hub/post/astro-photography-guides/undersampling-and-oversampling-in-astrophotography))
That leaves me at 2.335 arc seconds per pixel (6/530*206.3). Our seeing isn't _great_,
but it's definitely not terrible, so I'm losing detail. So began the quest for a camera
that was better suited for the 530mm Tak.

Enter the [ZWO ASI6200MM Pro](https://astronomy-imaging-camera.com/product/asi6200mm-pro-mono/). 
The '6200 uses a Sony IMX455, a back-side-illuminated, full-frame
monochrome sensor -- the same sensor used in Sony's A7Rv, a 61mp beast. The pixels on that
sensor come in at 3.76µm (considerably smaller than the 6µm from the old Atik), yielding a 
much better suited 1.46 arcsecs/pixel (3.76/530*206.3).

I had planned to use my current 7-position, 2" Atik EFW3 filter wheel, but the
EFW3 apparently didn't like that plan. Shortly after swapping out the camera the
EFW3 decided that it really preferred just spinning, spinning, spinning on its
own, rather than simply going to the selected filter.  When Atik didn't bother to
respond to my support request to get it repaired I ended up swapping that out
for a similarly configured ZWO filter wheel (and the folks at ZWO responded to
my email within 24 hours). As a note, the quality and design of the [ZWO FW](https://astronomy-imaging-camera.com/product/zwo-efw-5-x-2″or-7-x-2″/) 
is fantastic. It doesn't require separate external power, is virtually silent, and can spin
in both directions. Nothing new on what's _inside_ the filter wheel. Still rockin' 
the 2" astrodons (5µm for the narrowbands)

As far as the camera, my advice is to not just blindly accept what the sales
"experts" suggest. This could have been a costly mistake, but I was able to
recoup most of the purchase price of the Atik to put towards the ZWO.

The extra storage space needed on my hard drives, however, is another story...

{% include gallery id="gallery" caption="couple pics" %}

