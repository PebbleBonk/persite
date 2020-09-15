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

After a bit of digging around, I found out that Lightroom, quite cleverly, stores the information in the EXIF metadata attached to the photo. What was even more stunning to me, was to find out that the EXIF data itself could be attached to the image itself, should the format support it. For example, `.jpg` and `.png` would support it, along with some raw types such as `.DNG` and `.RAW`. More information could be found [here](link/somewhere).

```

```
*Some good EXIF data, straight from the beginning of a jpeg file.*


## The Extraction!
Next, I needed a way to extract this information. I was feeling lazy and simply used the tool made specifically for it, along with its python wrapper to make my life a tad easier. I wanted to gather all the information from all of the photos that I had edited over the years. (Luckily I had just recently reinstalled my OS, and had significantly smaller library to test around than previously)

To access the EXIF data, I found [EXIFTool](www.exiftool.org). Installing a ready made python wrapper and presto, I could add my scripts on top. I had to use a special fork of the `pyexiftool` wrapper to fix a bug present in the official release.

By using these tools, they anturally had to be installed along with cloning the repository. Small iunconvenience for the user, but nothing that would be too much to ask.


### Not gonna need all those pixels
I decided to add a funcitonality to do a little preprocessing at the same time - namely resizing. As the cropping information, which I was mainly after, was defined as percentages of the image, and not pixels, I could resize them as I saw fit. Quite conveniently, this was easily done with `Pillow`. Now, the tool would spit out a `.csv` file containing the extracted edit information, as well as a folder of photos resized to fit certain dimensions and in congruent file type.


### Gotta go fast!
Also, to speed things up, I added an option to run things parallel. Why as an option, you might ask? Because Python multithreading is famously finicy in the world of parallel computing: some scripts which work on other operating systems or Python versions, might not work on others. [See this for more information](/link/to/somewhere)


### Con Configuration rationing!
Foreshadowing the next chapter, I added a configurations file for a bit easier access to different options the extractor would use. By eidting the `json` at the root of the tool folder, the user could define  the following options: `Extractables`: the EXIF information that will be exported should they be available for a photo, along with a default value if it does not have any defined; `Settings`: Different settings for the tool, including the destination folder, dimensions for resized images and compression quality; `Annotations_file`: file where the extracted information will be stored as csv.

An example configuration file would look like this:

```javascript{numberLines: true}
{
    "EXTRACTABLES": {
        "ImageWidth": ["EXIF:ImageWidth", null],
        "ImageHeight": ["EXIF:ImageHeight", null],
        "CropTop": ["XMP:CropTop", 0],
        "CropLeft": ["XMP:CropLeft", 0],
        "CropBottom": ["XMP:CropBottom", 1],
        "CropRight": ["XMP:CropRight", 1],
        "CropAngle": ["XMP:CropAngle", 0],
        "Orientation": ["EXIF:Orientation", 1],
        "Original": ["EXIF:OriginalRawFileName ", null],
        "ExifFileName": ["File:FileName", null],
        "RawFileName": ["XMP:RawFileName", null]
    },

    "SETTINGS": {
        "dest_dir": "resized/",
        "dim_max": 640,
        "height": 640,
        "width": 320,
        "quality": 80
    },

    "ANNOTATIONS_FILE": "annotations.json"
}
```
*AN example configuration file for the command line tool*


## From one dummy, to many dummies
So, how to extract the same information from a bunch of files in several folders? What if I needed more data and had to ask help from some friends, who might not be as familiar with programming? I had to streamline things a bit...

I ended up using the Google's magnificient `Fire` library to wrap my custom library into a convenient command line tool. From now on, one could, after installation, simply run: 

```bash
$ python annotator.py ./images
```

to analyse a single directory. Moreover should one need more information or options, they could simply run: 

```
$ python annotator.py --help

NAME
    annotator.py - Scan a directory for images with exif data on crops

SYNOPSIS
    annotator.py SOURCE_DIR <flags>

DESCRIPTION
    Resizes and saves those images to another folder.

POSITIONAL ARGUMENTS
    SOURCE_DIR

FLAGS
    --parallel=PARALLEL
    --save=SAVE
    --config_file=CONFIG_FILE

NOTES
    You can also use flags syntax for POSITIONAL ARGUMENTS
```



automatically generated by the `Fire`. 


