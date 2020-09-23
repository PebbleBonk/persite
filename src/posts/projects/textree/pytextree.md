---
title: "PyTexTree - LaTeX Trees!"
date: "1.1.2020"
cover: ./tree.jpg
thumbnail: ./logo.png
githubLink: https://www.github.com/PebbleBonk/pytextree
website: https://pypi.org/project/pytextree/
---

>As explained in the [TexMindMapper post](/projects/texmindmapper), I wanted to visualise my thesis as a mind map, or any other logical structure for that matter. Naturally, to achieve visualisation, one needs a clearly defined structure, which hopefully also is logical and easily accessible. In other words, I needed a way to convert the text in my thesis into something a bit more data-analysis friendly.


## There most likely already exists something, right? 
As I was writing my thesis in LaTeX, I had hoped that some fellow nerd had solved the problem of parsing the raw text into some nice data structure - preferrably into some tree, which would be easy to visualise. This, however, was not exactly the case. I did indeed find several libraries for editing LaTeX files with python, compiling them, but not exactly anything that I could use for my purposes. The one closest to what I had in mind was () but unfortunately, it felt far too cumbersome and a bit buggy for my taste; I would had used more time trying to learn it than whipping up my own.

Therefore I decided to implement a simple library for converting the LaTeX files into tree structure.


## What did I need, exactly?
I was lucky, considering the planning phase, that I had such a clear idea for what I needed as an output from the library: a list of the nodes, and edges between them. So basically a graph more than a tree, but these two are often rather interchangeable, at least for an engineer... Additinoally, I hoped to present some informative statistics, such as word count or number of images, tables and citations, on the chapters in my mindmap. Parsing the text was a natural place to perform such analysis as well.

The structure of any work of literature can be considered as a tree, where the chapters work as nodes, subchapters as their children, subsubchapters as grandchildren etc.. These nodes can then have properties, such as word count, themes and images. However, the line of which content belonged to which node was not obvious for me straight away: was the text in a subchapter also be included into the encapsulating chapter? In the end I decided to go against it, as it would provide more clear result. Moreover, the content could then be cumulated over the entire chapter to present the entire content of the node and its children as a whole.



## Time to make it do what I want it to do
I used `anytree` as a base for the tree structure to avoid reinventing the wheel. This wonderful library saved a ton of time for me. using their `NodeMixIn` class as a base for my nodes helped me to simply add the needed functionality for my implementation.

The LaTeX format was generally simple to work with, but also provided its own challenges. The vast options on how to present some information seemed overwhelming at first to analyse reliably yet effectively. For example the optinos in the beginning, the multitude of packages and different styles. I decided to go with the simplest path and add more features later.

```tex 
 some tex here
```

Then there was also the part where my meticulous nature took the best of me (I had the time to procrastinate on the other stuff, right). As, you see, the text documents genrally would never be an issue for the performance. However, I wanted to make the algorithm for traversing the text at least looking nice. I did not want nasty performance hogs, such as multiple scans of the document or recursion. So I spent a bit too much time tinkering with the parsing than I initially had planned.


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

I had worked with Gephi before to analyse graphs and had found it very useful. I therefore also added a simple export script for generating csv files that can be directly imported to Gephi, so you can easily analyse your graph with  relative ease.




## Share the goodies for others as well, kid


## Windows grr



---

## 1. Features
This project was done to provide a way to handle / analyse LaTeX projects more easily.
Feature highlights:
- Support opening LaTeX projects consisting of multiple files (using `\include`)
- Extract several, maybe useful, stats on the file
- Create a traversable tree from the LaTeX project
    - Built upon the awesome `NodeMixin` of [`anytree`](https://github.com/c0fec0de/anytree)
- Export to a graph to support visualisation
    - A `dict` with __edges__ and __nodes__
    - Creates edges between references within the project
    - Specifically export to `.csv` files supported by [__Gephi__](https://gephi.org/)


## 2. Installation
Using pip:
```
$ pip install pytextree
```



## 3. Usage
Basic workflow with the `PyTexTree` consists of two steps:
1. Load the tex file into text
2. Parse the text into a tree

**NOTE:**
>For testing, you can use the provided .tex [example](https://github.com/PebbleBonk/pytextree/blob/master/examples/lorem.tex).

### 3.1. Loading a LaTeX project into a tree
You can use the `textree.open_tex_project()` to load your LaTeX project into a string
```py
import pytextree as tt
txt = tt.open_tex_project('examples/lorem.tex')
```

Then you can simply parse the text into a tree:
```py
tree = tt.parse_tex_to_tree(txt) # >>> <TNode [Root]: Root (0, 5502)>
```
The function returns the root node of the created tree. You can traverse it with `.children` and `.parent` attributes.


#### 3.1.1. Tree node attributes
The node, describing a section or an evironment in the LaTeX project, contains some information about the containing text:

Attribute | Description | Example
----------|-------------|--------
`.commands` | List of found LaTeX commands in this node | ["\textbf", "\ref{fig:my_fig}"]
`.comments` | List of comments in this node | ["% A comment"]
`.word_count` | Number of words, excluding comments and commands | 527
`.label` | LaTeX label of the node if one exists | "fig:my_graph"
`.citations` | Cited labels | ["Lamport1984", "Rossum1991"]
`.texts` | Text contents | ["This is a paragraph.", "And another."]



### 3.2. Printing the tree
You can also pretty print the created tree for more information:
```py
tree.pretty_print()
```
Output:
>```
><TNode [Root]: Root (0, 5502)>
>└── <TEnv [document]>: None (114, 5500)
>    ├── <TNode [section]: S1 (144, 1129)>
>    │   ├── <TNode [subsection]: S1.S1 (619, 869)>
>    │   └── <TNode [subsection]: S1.S2 (870, 1129)>
>    ├── <TNode [section]: S2 (1130, 2542)>
>    │   └── <TNode [subsection]: S2.S1 (1460, 2542)>
>    │       ├── <TEnv [itemize]>: list:mylist (1606, 1867)
>    │       │   ├── <TEnv [itemize]>: None (1695, 1771)
>    │       │   └── <TEnv [itemize]>: None (1776, 1853)
>    │       ├── <TEnv [itemize]>: list:mylist (1869, 1959)
>    │       ├── <TEnv [tabular]>: table:synonyms (2032, 2136)
>    │       ├── <TNode [subsubsection]: S2.S1.S1 (2140, 2230)>
>    │       └── <TNode [subsubsection]: S2.S1.S2 (2231, 2542)>
>    ├── <TNode [section]: S3 (2543, 5485)>
>    │   ├── <TNode [paragraph]: This is a paragraph (3417, 4368)>
>    │   ├── <TNode [paragraph]: And have another paragraph (4369, 5299)>
>    │   └── <TNode [subsection]: S3.S1  (5300, 5484)>
>    └── <TEnv [appendices]>: None (5435, 5485)
>```

### 3.3. Exporting
To visualise your project as a network / graph with some external software you can export the project as a `dict` containing nodes and edges.
```py
graph = tree.to_graph()
print(graph['nodes'][0])
print(graph['edges'][0])
```

Output:
>```js
>{
>    'id': '$',
>    'name': 'Root',
>    'tag': 'Root',
>    'texlabel': None,
>    'word count': 0,
>    'n comments': 0,
>    'n commands': 5,
>    'n references': 0,
>    'n citations': 0,
>    'value': 0,
>    'label': '[Root]: Root',
>    'group': -1,
>    'title': 'words: 0'}
>{
>    'id': 'p1',
>    'from': '$',
>    'to': 'n0',
>    'weight': 1,
>    'type': 'undirected',
>    'value': 1,
>    'source': '$',
>    'target': 'n0'
>}
>```

Alternativaly, you can export to a `.csv` files combatible with [__Gephi__](https://gephi.org/):
```
tree.to_gephi_csv()
```
This will create two files, one containing the nodes and one containing the edges.

## 4. Notes
Some limitations of the project:
1. If you are laoding a project with includes, make sure the main file ends with `main.tex`
    - e.g. `my_latex_project_main.tex`
    - The files this includes, should be in the same directory
2. Required package version compatablity not checked
    - Earlier versions might be fine as well
3. `TNode.pretty_print()` does not work on Windows console due characters