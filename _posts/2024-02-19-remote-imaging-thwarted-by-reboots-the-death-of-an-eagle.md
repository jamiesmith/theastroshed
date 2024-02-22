---
title: "Remote imaging thwarted by reboots: The death of an Eagle"
author: jamiesmith
tags: []
classes: wide

header:
  teaser: /assets/images/posts/remote-imaging-thwarted-by-reboots/dead-eagle-rip.jpeg

gallery:
  - image_path: /assets/images/posts/remote-imaging-thwarted-by-reboots/dead-eagle_1.png
    title: <image 1 title>
  - image_path: /assets/images/posts/remote-imaging-thwarted-by-reboots/dead-eagle_2.png
    title: <image 2 title>

---

I've been (very) slowly getting my imaging rig and shed up to snuff for some
remote imaging. I've got various stages of automation underway, including Slack
notifications for when my control computer (a PrimaluceLab Eagle) reboots or if
the retrieval of weather data from the club's sensor fails. Early December I
noticed an uptick in reboots but didn't think anything of it, but it turns out
that it was the beginning of the end, signaling the death of an Eagle.

<!--more-->

{%
  include figure image_path="/assets/images/posts/remote-imaging-thwarted-by-reboots/dead-eagle-rip.jpeg"
  caption="Rest in peace, Eagle..."
%}

## Déjà vu
This isn't the first time this happened. This Eagle, a gen 3 pro model, has had
its share of issues (including random reboots) so it didn't take long to
diagnose the problem this time around. Of course, I at first attributed the
reboots to Windows updates, since they weren't overly frequent, but when they
started happening more often I started digging.

{%
  include figure image_path="/assets/images/posts/remote-imaging-thwarted-by-reboots/dead-eagle_1.png"
  caption="Opening the event viewer in Windows"
%}

## Troubleshooting
To troubleshooting the reboots I started with the event viewer in Windows (Just
search for "event") as seen above. Once that's open you'll see a bunch of
folders on the side- navigate to the Windows Logs/System set. To make it easier
to find we can do some ad hoc filtering. Select the "Filter Current Log...", and
enter these Event IDs: `1074, 6005, 6006, 7001, 7002, 6008, 41`, which should
give you an idea of why the system restarts.

{%
  include figure image_path="/assets/images/posts/remote-imaging-thwarted-by-reboots/dead-eagle_2.png"
  caption="Looking for clues at the scene of the crime"
%}


In my case, the important one was actually EventID `41`:

```
The system has rebooted without cleanly shutting down first.
This error could be caused if the system stopped responding,
crashed, or lost power unexpectedly.
```

The first time around I went through _months_ of diagnosis, because it was
completely random. First, I thought it might be temperature related with the
power supply, so I put that in a cooler to keep it warm (ironic). Nope. I bought
a UPS, blaming unstable power. Nope. I bought two different power
supplies. Still nope. I bought a new power cord (and those aren't
cheap). NOPE. Having exhausted all that I could think of I finally opened a
support ticket, and of course was about a month outside my warranty
period. Thomas from PrimaluceLab still did help a bit and let me send it in for
diagnosis: *failed motherboard* :frowning_face:. I had to fix it on my dime because it was out of
warranty, but I was able to score a replacement on ebay, so other than my time
and ~$100 it wasn't _too_ bad.

Fast-forward to now: the exact same scenario, except this time I can't find a
replacement mobo for a >4 year old nuc, so I ordered a fifth-gen
eagle. Hopefully it fares better, and once I'm over COVID I can get it
installed.

If you think you might be running into the same issue you can save the filter as
a "custom view" by selecting "Create Custom View" in the sidebar. Good luck! 

{% if site.author.instagram %}
Feel free to reach out on <a href="https://www.instagram.com/{{ site.author.instagram }}">Instagram<i class="fab fa-fw fa-instagram" aria-hidden="true"></i></a> with questions!
{% endif %}

{% include gallery id="gallery" caption="Click for larger versions" %}

