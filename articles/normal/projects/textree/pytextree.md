---
title: "PyTexTree - LaTeX Trees!"
date: "1.1.2020"
cover: ./tree.jpg
thumbnail: ./logo.png
links: [
	https://www.github.com/PebbleBonk/pytextree,
	https://pypi.org/project/pytextree/
]
---

>As explained in the [TexMindMapper post](/projects/texmindmapper), I wanted to visualise my thesis as a mind map, or any other logical structure for that matter. Naturally, to achieve visualisation, one needs a clearly defined structure, which hopefully also is logical and easily accessible. In other words, I needed a way to convert the text in my thesis written in LaTeX, into something a bit more data-analysis friendly.


## There most likely already exists something, right? 
As I was writing my thesis in LaTeX, I had hoped that some fellow nerd had solved the problem of parsing the raw text into some nice data structure - preferably into some tree, which would be easy to visualise. This, however, was not exactly the case. I did indeed find several libraries for editing LaTeX files with python and compiling them, but not exactly anything that I could use for my purposes. The one closest to what I had in mind was [tex2py](https://github.com/alvinwan/tex2py) but unfortunately, it felt far too cumbersome and a bit buggy for my taste; I would had used more time trying to learn it than whipping up my own.

Therefore I decided to implement a simple library for converting the LaTeX files into tree structure.


## What did I need, exactly?
I was lucky, considering the planning phase, that I had such a clear idea for what I needed as an output from the script: a list of the nodes, and edges between them. So basically more a graph than a tree, but these two are often rather interchangeable, at least for an engineer... Additionally, I hoped to present some informative statistics, such as word count or number of images, tables and citations, on the chapters in my mind-map. Parsing the text was a natural place to perform such analysis as well.

```tex
\documentclass{article}
\begin{document}
   \section{S1}\label{sec:S1}
   Lorem ipsum dolor sit amet. Culpa laboris ut tempor deserunt magna fugiat aliqua.

   \subsection{S1.S1}\label{sec:S1S1}
   At vero eos et accusamus. Lorem: \ref{sec:S1}. Quis minim est fugiat minim.

   \section{S2}\label{sec:S2}
   Ipsum consectetur occaecat ullamco duis mollit nostrud cillum.


\end{document}
```
*Example LaTeX document.*


```
Document
├── Section: S1
|   └── Subsection: S1.S1
└── Section: S2
```
*The LaTeX document above, presented in a tree form*

The structure of any work of literature can be considered as a tree, where the sections work as nodes, subsections as their children, sub-subsections as grandchildren etc.. These nodes can then have properties, such as word count, themes and images. However, the line of which content belonged to which node was not obvious for me straight away: was the text in a subsection also to be included into the encapsulating section? In the end I decided to go against it, as it would provide more clear result. Moreover, the content could then be accumulated over the entire chapter to present the entire content of the node and its children as a whole.



## Time to make it do what I want it to do
I used [anytree](https://anytree.readthedocs.io/en/latest/) as a base for the tree structure to avoid reinventing the wheel. This wonderful library saved a ton of my time. Using their `NodeMixIn` class as a base for my nodes helped me to simply add the needed functionality for my implementation.

The LaTeX format was generally simple to work with, but also provided its own challenges. The vast options on how to present some information seemed overwhelming at first to analyse reliably yet effectively. For example, the options in the beginning, the multitude of packages and different styles caused some headaches when writing the regular expression to extract the needed information. I decided to go with the simplest path and add more features later.

```
\environment{<name>}{<begin-code>}{<end-code>}
```


```
\environment{<name>}[<n>]{<begin-code>}{<end-code>}
```

```
\environment{<name>}[<n>][<default>]{<begin-code>}{<end-code>}
```

*Three different ways to define an environment in LaTeX, with and without options*


Then there was also the part where my meticulous nature took the best of me (I had the time to procrastinate on the other stuff, right). As, you see, the text documents generally would never be an issue for the performance. However, I wanted to make the algorithm for traversing the text at least looking nice. I did not want nasty performance hogs, such as multiple scans of the document or recursion. So I spent a bit too much time tinkering with the parsing than I initially had planned.

The content within the environments and sections would also be analysed in a very simple manner. Each of the following were extracted for each generated node (environment, section or similar) if they existed:


Description | Example
------------|--------
List of found LaTeX commands | [`\textbf`, `\ref{fig:my_fig}`]
List of comments| ["% A comment"]
Number of words, excluding comments and commands  | 527
LaTeX label of the node if one exists | "fig:my_graph"
Cited labels | ["Lamport1984", "Rossum1991"]
Text contents | ["This is a paragraph.", "And another."]


## What came of it?
But it worked! I managed to cram in the needed functionality too! Now I could simply import the library in normal python manner and get analysing. Here are some of the most interesting features:

1. Parse multiple files ( nice for large LaTeX projects)
2. Traverse document like a tree
3. Figures, Tables, Lists and other elements as their separate nodes
4. Information on the nodes based on the content
	1. Texts stored in the nodes
	2. Citations as labels
	3. Comments also stored within th enodes
	4. Commands as well! (Makes references available)
	5. Word count within the element
5. Pretty print function to make the devs' life better ;)
6. Export into a graph
	- Turns nodes into, well, nodes
	- Turns child relations into edges
	- Includes sensible information form the node (not full texts, comments etc large text content)
	- Option to export into `.csv` file

I had worked with [*Gephi*](https://gephi.org/) before to analyse graphs and had found it very useful. I therefore also added a simple export script for generating `.csv` files that can be directly imported to *Gephi*, so you could analyse your graph with relative ease.


## Share the goodies for others as well, kid
By the time I had finished a version of this script, I was rather happy with it - both quality and usefulness -wise. I thought that perhaps by sharing this to the ever expanding space of [PyPi](https://pypi.org/) I hopefully could reduce the effort of some poor fellow battling with similar problems in the future (and also to install the package conveniently should I need it later in other projects).  Therefore, now anyone could install the package with simply using pip:

```bash
pip install pytextree
```

Excellent! I had just developed a nice coherent module for a bigger project, and managed to share it with the world - hopefully to bring a little sunshine to someone's cloudy day! If you are interested in doing something similar, they have some [excellent instructions](https://packaging.python.org/tutorials/packaging-projects/) available!


---

