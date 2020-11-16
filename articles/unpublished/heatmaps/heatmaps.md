---
title: "Heat maps of Europe"
date: "6.9.2020"
cover: ./heatmap_cover.jpg
thumbnail: ./heatmap.png
links: [
    https://www.github.com/PebbleBonk/HeatMaps
]
---


>(Previously a bit redundant, if you want more specific, maybe early last year, or towards the end of last year, etc.)Last year I collaborated with [shaderism](www.shaderism.com) on a project [UrbanGarden](www.urbangarden.com). The idea was to make an app for consumers to analyse the amount of sunlight in their yards over the year, as well as other relevant information about the environment. One important piece of information that we would like to estimate was the dates of frost and drought. Extracting these from the data that we had access to, however, was not as trivial as I had hoped.


## What did we have, then

Well, we had images. Plenty of images.
Images of maps, heat maps to be precise. The colours on these maps would indicate the relative frost dates. As our product relied on map data to access the information, they had to be converted to a format that would be accessible via generic coordinates; i.e. __how to map the pixels in the image into a corresponding area in a coordinate system__

### What goes in, what comes out

So, we had photos, heat maps to begin with. The app itself utilised google maps api to let users find or select their location on the map. The corresponding latitude and longitude were used to fetch information on the surrounding environment. All this information was stored as `geojson`,  so it made sense to aim for that as the output format.

#### COLOURS!

In the heat maps, the dates were colour coded. Naturally, we did not need any colour information in our implementation per se, only the information as **raw, plain numbers**! So, anticlimatically we just used a hard coded look-up table to check which colour corresponded to which dates. Furthermore, to simplify things, the colour image was first transformed into an array of integers, where each pixel would be presented by the index of the dates. This also allowed us to check for any anomalous or missing values.



## Projections of our future

The solution should be relatively simple, right. Simply select the extreme points of the country from the image, then the corresponding extreme geographical locations and map those together. All other pixels would then have a direct conversion rate to geographical areas. Adding a little bit of vectorisation and boom, we should have a set of nice polygons to map into `geojson` format.

But wait a second. All 2D maps have been projected from the spherical surface. How can we figure out the projection type used with no information...




## One done, only... 32 left...

It turned out that we could use the same system to provide information and hence the service for the entire Europe ares, provided that I'm able to convert a bunch of other countries as well. All of them to be precise.

### The wonders of scraped data

Oh how I love standards. They really do make life easier when stuffs comply to them. This was one of those cases where I was not blessed with such luxury. If we take a look at the names of the files for the heat maps for the countries we had, and the codes we used in the res of the system, the problem becomes quite evident

| name             | code |
| ---------------- | ---- |
| Ruotsalainen.png | SWE  |


## Time for an eurotrip

So, finally having extracted the information and plopped them into nice  `geojson`, it was time to wonder at the results! I used the convenient `<Geojson software>` for this purpose. Adding different dates as layers looked beautiful indeed.

[IMAGE]
**How beautiful the world is**

However, like any paradise, this also had its snake slithering within the borders. It seems that I had mistaken the boarders of the areas. As the selection was always exclusive, there was always an undefined row of pixels in the resulting vectors.

[IMAGE]
**Frost dates without borders is obviously an utopia**

Here is also where my devilish engineering brain steps in. I simply decided that the border areas would be far too improbable to be set as search result. A acceptable churn for our app. A known bug. Possible to be fixed within the next updates. You know the lingo.

Despite this little slither, the system seemed to work wonderfully! Our app was able to show the frost date data all around Europe now. In fact, go check it out, and maybe save some of your plants from freezing this fall!

