---
title: "TexMindMapper - visualise your thesis"
date: "1.7.2020"
cover: ./tmm_cover.jpeg
thumbnail: ./tmm_logo.png
githubLink: https://www.github.com/PebbleBonk/TexMindMapper
website: tex-mind-mapper.herokuapp.com
---

>Writing your thesis. Ah what an arduous task! Like probably many of us, I also encountered a point where comprehending the entire scope of the thesis was overflowing to every umaginable direction. I wanted - no, needed - a way to visualise what I was doing, for example a simple mind map. However, being as lazy as I am, I did not want to have a mindmap that I had to manually update every time I made changes to the thesis structure. It simply **had** to be automated.



## A map for your thoughts
I started playing around with the excellent mindmap tool I found online, which allowed creating mindmaps using tabbed text. This was something I could definitely use as a base for my implementation. But I wanted more. I wanted a process fully integrated to my workflow. By bare minimum, I wanted to have a system that would update the mind map every time I updated my thesis. Additionally, having a list of previous versions would be nice as well: one could observe what had been changed over time.



## Seeing the tree from the woods
Information-wise, I naturally wanted to present as much as I could. When parsing the text in my thesis, I might as well analyse some information of it. This process of parsing and information extraction can be seen in more detail at the [pytextree](/projects/pytextree) post. The most prominent information that would be presented is:

  1. Child-parent relations of chapters and subchapters as edges
  2. Word count in the sections as the node sizes
  3. References presented as dotted line edges
     - Line colour describing the source
  4. Elements presented as nodes
  	 - Different colours for different types of Elements

```
Example of the pytextree export
```
*Example tree structure of a document, produced with the pytextree*

Also, as I used comments in the document extensively as a way to structure and draft my writing, I wanted a way to add these to the graph as well. This way I could plan and see what I had planned, but not implemented yet, in my thesis.

- image of usage of the tags



## Putting it all together
Using by prior knowledge on a couple of projects, I decided to host the parsing service along with the web UI backend as a single Flask app. Some routes would work as an `restAPI` endpoints to parse documents into format which would be ready to visualise using the front-end. 

### Reverse traverse the tree!
For the front-end, I managed to find a non-minimized version of the previously mentioned mind map tool. By staring at the code long enough and poking around it, I managed to reverse engineer its functionality up to the point which allowed me to use it for my own, seemingly nefarious, purposes.



### Git gud
I was mainly writing my thesis using Overleaf. Especially with the professional tier features obtaine through the university license, I found it expremely useful. Moreover, it had a github integration which I found intriguing. Having messed around with some git hooks on previous projects, I was considering a functionality, which would automatically update the map whenever I would update my thesis: Having a history of what I had done would allow me to check my progress over time.

- Image of the old UI and version history



### Too much features, too little functionality
- Using old code
- A lot of effort to reverse engineering & fixing stuff
- A hell to upkeep as everything is in one file
- 

## Fresh start
- vis.js
- ddd js
- animations, styles, usability
- a few features, properly!
- Noticing that the version was not that useful (as no comparison on two)
![My thesis!](./tmm.png)  
*My thesis!*


### CORS you!


## Shiny!
