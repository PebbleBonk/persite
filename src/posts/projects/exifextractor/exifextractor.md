---
title: "ExifExtractor - Find your edits"
date: "1.6.2020"
cover: ee.jpg
thumbnail: ee_logo.png
---


>On my spare time, I like to take photos among other things. As most others these days, I use a digital camera mos tof the time, and hence use a large amount of time not in a lightroom, but in some editing software - which, on second thought, can be Lightroom as well...
>
>I was curious of how well a neural network would perform some of the common adjustments. FOr this I had the [CropperHEad](/projects/cropperhead) project. However, to get the training data for the network, I had to extract some edit information from my library of photos. Hence, this little script here.

## Wherein does the information lie?
So, I primarily use Adobe Lightroom for my edits. As Lightroom, like many other proper photo editing softwares, edits the photos non-destructively, it had to save the information somewhere. But where?

After a bit of digging around, I found out that Lightroom, quite cleverly, stores the information in the EXIF metadata attached to the photo. What was even more stunning to me, was to find out that the EXIF data itself could be attached to the image itself, should the format support it. For example, `.jpg` and `.png` would support it, along with some raw types such as `.DNG` and `.raw`. More information could be found [here](link/somewhere).



## The Extraction!
Next, I needed a way to extract this information. I was feeling lazy and simply used the tool made specifically for it, along with its python wrapper to make my life a tad easier. I wanted to gather all the information from all of the photos that I had edited over the years. (Luckily I had just recently reinstalled my OS, and had significantly smaller library to test around than previously)


## From one dummy, to many dummies
So, how to extract the same information from a bunch of files in several folders? What if I needed more data and had to ask help from some friends, who might not be as familiar with programming? I had to streamline things a bit...




