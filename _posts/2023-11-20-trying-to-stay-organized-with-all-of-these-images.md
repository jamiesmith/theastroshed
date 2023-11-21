---
title: "How I keep my astro images organized"
author: jamiesmith
tags: []
classes: wide

header:
  teaser: /assets/images/posts/trying-to-stay-organized-with-all-of-these-images/tree.png

---

Astrophotography is a pretty data-heavy hobby. One night of imaging can result in 
dozens, hundreds, or even thousands of images. In this post I'll go over my plans 
to keep them organized, especially now that I'm starting to image remotely.

<!--more-->
{%
  include figure image_path="/assets/images/posts/trying-to-stay-organized-with-all-of-these-images/tree.png"
  caption="Basic Structure"
%}

To understand the hierarchy it might help if I outline the steps that I go through
at the end of an imaging session. I basically copy the data to the right folder structure
on my computer, run PixInsight's WBPP script, then take put the calibrate files in the respective project folders.

Step by step, that's:
- Import the previous night's images
- Optionally, store the master calibration frames with that night's data
- Run WBPP for each target
- Sanity check the new files
- Move the newly calibrated frames into the project folder for the target

Let's walk through an example. Saturday night (November 18, 2023) I imaged M45 and M42, in that order. I wrapped up M45 at 10:00pm, then shot M42 the rest of the night. An important note is that, since I went the rest of the night, I had images from both the 18th and the 19th. In this case, I like to keep the images from a "session" together, rather than by date. If I imaged again on the 19th, that would be a new session (and, possibly, different flats).

Let's walk through it to see things in context.

```
├── M42
│   ├── 2023-11-04
│   │   ├── LIGHTS
│   │   │   └── < LIGHTS GO HERE >
│   │   ├── WBPP
│   │   └── calibration
│   ├── 2023-11-18
│   │   ├── LIGHTS
│   │   │   └── < LIGHTS GO HERE >
│   │   ├── WBPP
│   │   └── calibration
│   └── M42-Project
│       ├── 2023-11-18-CALIBRATED
│       │   └── < CALIBRATED LIGHTS GO HERE >
│       └── WORK_AREA
├── M45
│   ├── 2023-11-18
│   │   ├── LIGHTS
│   │   │   └── < LIGHTS GO HERE >
│   │   ├── WBPP
│   │   └── calibration
│   └── M45-Project
│       ├── 2023-11-18-CALIBRATED
│       │   └── < CALIBRATED LIGHTS GO HERE >
│       └── WORK_AREA
└── RAW_CALIBRATION
    └── 2023-11-18
        └── FLATS
            └── < FLATS GO HERE >
```

## Copying the files 

After the night was through I had 158 images (some were flats). As mentioned in the intro, they take up a lot of space. In my case, they take up ~19.3 GB (yes, giga).

```
├── 2023-11-18
│   ├── M 42_600.00secs_LIGHT_Ha_1x1_-10.00c_231.29d_g100_0000.fits
│   ├── M 42_600.00secs_LIGHT_Ha_1x1_-10.00c_231.29d_g100_0001.fits
│   ├── ...
│   ├── M 45_120.00secs_LIGHT_Red_1x1_-9.80c_231.29d_g100_0014.fits
│   └── M 45_120.00secs_LIGHT_Red_1x1_-9.90c_231.29d_g100_0013.fits
└── 2023-11-19
    ├── FLATS
    │   ├── FLAT_Red_2.00secs_1x1_-9.80c_231.29d_g100_0014.fits
    │   ├── ...
    │   └── FLAT_Red_2.00secs_1x1_-9.90c_231.29d_g100_0012.fits
    ├── M 42_600.00secs_LIGHT_Ha_1x1_-10.00c_231.29d_g100_0003.fits
    ├── ...
    └── M 42_600.00secs_LIGHT_Sii_1x1_-9.90c_231.29d_g100_0012.fits
```

Above, you can see what I mean about the M42 spanning the two dates.

I actually use a [script](https://github.com/jamiesmith/astrophotography/blob/master/automation/importAstroPhotos.sh) to get things where I want them, but it can probably closely mimicked by using a folder hierarchy in your file name patterns. A script lets me keep it abstract.

Basically, I loop through the dates, treating the first one as the "session date". The first part of my image names is the target; in this case we see two, `M 42` and `M 45`. In the destination folder, I'd create (or reuse) target folders, stripping out any spaces. If we pretend I didn't already have data, the folder would look like this:
```
├── M42
└── M45
```

Then I add a directory for the session:
```
├── M42
│   └── 2023-11-18
└── M45
    └── 2023-11-18
```

and add a few placeholder/calibration directories, ending up here:

```
├── M42
│   ├── 2023-11-18
│   │   ├── LIGHTS
│   │   ├── WBPP
│   │   └── calibration
│   └── M42-Project
│       ├── 2023-11-18-CALIBRATED
│       └── WORK_AREA
├── M45
│   ├── 2023-11-18
│   │   ├── LIGHTS
│   │   ├── WBPP
│   │   └── calibration
│   └── M45-Project
│       ├── 2023-11-18-CALIBRATED
│       └── WORK_AREA
└── RAW_CALIBRATION
    └── 2023-11-18
        └── FLATS
```

Finally, I loop through all of the frames, putting them in their respective target/session folders 
```
├── M42
│   ├── 2023-11-18
│   │   ├── LIGHTS
│   │   │   └── < LIGHTS GO HERE >
│   │   ├── WBPP
│   │   └── calibration
│   └── M42-Project
│       ├── 2023-11-18-CALIBRATED
│       └── WORK_AREA
├── M45
│   ├── 2023-11-18
│   │   ├── LIGHTS
│   │   │   └── < LIGHTS GO HERE >
│   │   ├── WBPP
│   │   └── calibration
│   └── M45-Project
│       ├── 2023-11-18-CALIBRATED
│       └── WORK_AREA
└── RAW_CALIBRATION
    └── 2023-11-18
        └── FLATS
            └── < FLATS GO HERE >
```

## Run WBPP
The next step is to run WBPP, for each of the targets, making sure to pivot on things like `gain`. 
{%
  include figure image_path="/assets/images/posts/trying-to-stay-organized-with-all-of-these-images/wbpp.png"
  caption="Sample WBPP config" %}
Here I'm getting ready to process M42 from the session on the 18th, and I've got the output set to go into the `M42/2023-11-18/WBPP` folder. I usually do a `Blink` before WBPP to make sure that the images all look reasonable, as well.

## Sanity check
When WBPP finishes a target, I like to do a quick, down-and-dirty combination with the newly-generated master lights, just to see where I am and make sure there isn't any weirdness going on. If there is, I'll likely re-run WBPP. This process simply involves a quick LRGB combination, then an unlinked stretch. Sometimes I'll get a little more involved, and maybe be a little more careful with the individual frames, to see what is lurking, like with this `Ha` shot of M42:
{%
    include figure image_path="/assets/images/posts/trying-to-stay-organized-with-all-of-these-images/M42-Ha-Stretched.jpg"
    caption="M42 Ha (14 frames @ 600s each, so ~2.3 hours)"
%}

## Saving for later
Once I've processed everything through WBPP, and sanity checked the outputs, I archive the calibrated versions of the data- basically, all of the steps prior to registration and integration. In my case, that means all of the _cosmetized_ files (assuming that I *remember* to turn cosmetic correction _on_). In this case it means that I move all of the files from `M42/2023-11-18/WBPP/cosmetized/*` to `M42/M42-Project/2023-11-18-CALIBRATED/`. 

After moving the calibrated frames I usually delete data in the target/session folder that can be regenerated, so I'd nuke everything under `M42/2023-11-18/WBPP` (with all of the versions that WBPP makes along the way, what started out as 5.1GB of M42 data from Nov 18 ended up as **37.6** GB of data!)

When I get enough data, I can just integrate the stacks of data from my `M42/M42-Project/`, and use the `M42/M42-Project/WORK_AREA` as my WBPP output.

But that's another story :) 
