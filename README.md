# Setup

1. gem install bundler jekyll
2. jekyll -v
3. bundle
4. jekyll serve


# Markup Notes

## H2
### H3
#### H4
##### H5
###### H6

----
****

A link to [Jekyll](https://jekyllrb.com/). 
A big ass literal link <https://jekyllrb.com//>

![an image alt text]({{ site.baseurl }}/images/xxxx.png "an image title")

* A bulletted list
- alternative syntax 1
+ alternative syntax 2
  - an indented list item

1. An
2. ordered
3. list

- *italic text*  
- _italic also_
- **bold text**  
- __bold also__
- `code()`
- ~~strike through~~
- ==highlight==
- \*escaped characters\*

> Blockquote text
>> Nested Blockquote text

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |


Code

    ```js
    function alert("hello");
    ```

Code

    `function alert("there")` 

~~~text~~~

- [x] AAA
- [ ] BBB
- [ ] CCC

👍🤓

Here's a sentence with a footnote reference. [^1]
[^1]: This is the footnote.

HTML

    <div markdown="span" class="alert alert-info" role="alert">
        <i class="fa fa-info-circle"></i> 
        <b>Note:</b> Remember to do this. If you have "quotes", you must escape them.
    </div>

    <p><iframe style="width:100%;" height="315" src="https://www.youtube.com/embed?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></p>


link to a post in Markdown as follows:

[Name of Link]({% post_url 2000-12-31-name-of-post %})

# TODO's

1. default placeholder images

2. upgrade bootstrap to v5

3. fav icon

4. Setup Google Analytics

5. Setup Formbricks account

6. Setup Google Ads