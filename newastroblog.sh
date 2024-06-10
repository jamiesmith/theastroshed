#!/bin/bash

# cd $GIT_ROOT/theastroshedastro/
POST_ROOT=$GIT_ROOT/theastroshed/_posts
POST_IMAGE_ROOT=$GIT_ROOT/theastroshed/assets

tags=""
while getopts "it:" option
do
    case $option in
        t)
            [ -n "$tags" ] && tags="${tags},"
            tags="${tags} $OPTARG"
                ;;
    esac
done

shift $((${OPTIND} - 1))

if [ $# -eq 0 ]
then
    echo "Title is required"
    exit 9
fi

now=$(date +"%Y-%m-%d %H:%M:00")
today=$(date +"%Y-%m-%d")
title="$*"
strippedTitle=$(echo $title | tr '[:upper:]' '[:lower:]' | tr -s '[:blank:]' '-' | tr -cd '[[:alnum:]]._-')
postPath=${POST_ROOT}/$today-${strippedTitle}.md
imageRoot=${POST_IMAGE_ROOT}/images/posts/${strippedTitle}
mkdir -p ${imageRoot}

cat >${postPath} <<EOF
---
title: "$title"
author: jamiesmith
tags: [$tags]
classes: wide

header:
  teaser: /assets/images/posts/${strippedTitle}/teaser.jpg

gallery:
  - image_path: /assets/images/posts/${strippedTitle}/<image-one>
    title: <image 1 title>
  - image_path: /assets/images/posts/${strippedTitle}/<image-two>
    title: <image 2 title>

---

$(lorem --lines 2)

<!--more-->

{%
  include figure image_path="/assets/images/posts/${strippedTitle}/teaser.jpg"
  caption="Witty caption"
%}

$(lorem --lines 10)

{% include gallery id="gallery" caption="Click an image to see it bigger with some acquisition info" %}

### Image details on Astrobin
{% include astrobin_remote astrobin_id="XXXXX" name="ShortName"%}


EOF

mate ${postPath}
