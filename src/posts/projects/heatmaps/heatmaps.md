---
title: "Heat maps of the Europe"
date: "6.9.2020"
cover: ./heatmap_cover.jpg
thumbnail: ./heatmap.png
---


>Previously last year I collaborated with [shaderism](www.shaderism.com) on a project [UrbanGarden](www.urbangarden.com). The idea was to make an app for consumers to analyse the sunlight amount in their yards over the year,  as well as to provide relevant information about the environment. One piece of information were to be the dates of frost and drought. Extracting these from the data we had access to, however, was not as trivial as I had hoped.


## What did we have, then
Well, we had images. Plenty of images.
Images of maps; of heat maps to be precise. The colours on these maps would indicate the relative frost dates. As our product relied on map data to access the information, they had to be converted to some format which would be accessible via generic coordinates. I.e. __how to map the pixels in the image into a corresponding area in coordinate system__

### What goes in, what comes out
So, we had photos,heat maps to begin with. The app itself used google maps api to let user find or select their location on the map and the corresponding latitude and longitude to fetch information on the surrounding environment. All this information was stored as `geojson`,  so it made sense to aim for that as the output format.

#### COLOURS!
In the heat maps, the dates were colour coded. Naturally, we did not need any colour information in our implementation per se, rather the information as **raw, plain numbers**! So, anticlimatically we just used a hard coded lookup table to check which colour corresponded to which dates. Also,to make things easier, the colour image was first transformed to an array of integers, where each pixel would be presented. By the index of the dates. this also allowed us to check for any anomalous and missing values.



## Projections of our future
The solution should be relatively simple, right. Simply select the extreme points of the country from the image, the corresponding extreme geographical locations from the country and map those together. All the other pixels would then have a direct conversion rate to geographical areas. Add a little bit of vectorisation and boom, we should have a set of nice polygons to map into `geojson` format.

But wait a second. All 2D maps have been projected from the spherical surface. How can we figure out the projection type used with no information...




## One done, only... 32 left...
It turned out that we could use the same system to provide information and hence the service,for the entire Europe area should I be able to convert a bunch of other countries as well. All of them to be precise.

### The wonders of scraped data
Oh how I love standards. They really do make life easier when stuff complies to them. This was one of the cases where I was not blessed with such luxury. If we take a look at the names of the files for the heat maps for the countries we had, and the codes we used in the res of the system, the problem becomes quite evident

name | code 
--- | ---
Ruotsalainen.png | SWE


## Time for an eurotrip
So, finally having extracted the information and plopped them into nice geosjon, it was time to wonder the results! I used the convenient `Geojson software` for this purpose. Adding different dates as layers looked beautiful indeed.

[IMAGE]
**How beautiful the world is**

However, like any paradise, this also had its snake slithered within the borders. It seems that I had mistaken the boarders of the areas; as the selection was always exclusive, a row of pixels was always undefined in the resulting vectors.

[IMAGE]
**Frost dates without borders is obviously an utopy**

Here is also where my devilish engineering brain steps in. I simply decided that the border areas would be far too improbable to be set as search result. A acceptable churn for our app. A known bug. Possible to be fixed within next updates. You know the lingo.

Despite this little slithering bug, the system seemed to work wonderfully! Our app was able to show the frost date data all around Europe now. In fact, go check it out, and maybe save some of your plants from a freezing destiny this fall!


