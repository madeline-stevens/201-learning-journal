Publish Your Technical Blog Post (Links to an external site.)Links to an external site.
In this series of assignments, you will be writing a blog post to share something you have learned with those who may be interested in following a similar path.

You began by creating a Medium account and generating some ideas. Then you picked an idea and generated an outline. Now you will finalize and publish your post.

*** Tasks (Links to an external site.)Links to an external site.
Using your outline, write at least 500 words about your chosen topic. If you reference something else (documentation, other blog posts), include those references in text. Somewhere within your blog post, have a code snippet that we can read through that pertains to the topic you've picked.
***

Get some peer-feedback by asking your classmates and others to review your post. Polish up your blog post for final publishing. Double-check for grammar and spelling errors. Ensure code examples are nicely syntax-highlighted. Read it out loud at least once.
_____


I am choosing to focus on something I discussed in my first assignment for this tech blog series- screen readers and accessibility. This research will be ongoing but below is a record of my journey to discovering more about this topic.

I focused on researching accessibility of rich internet applications or ARIA. I first saw an ARIA property when I used Font Awesome for social media buttons. Font Awesome has you copy everything in between the italic tags.

 An example of a complete GitHub social media button from Font Awesome:

<li><a href="https://github.com/madhubs" target="_blank"<i class="fa fa-github-square" aria-hidden="true"></i></a></li>

This will instruct a screen reader to skip over that social media button while the user clicks the arrow buttons to move through the screen. So if I were to change aria-hidden to “false” the screen reader voice would read something like “link github” or “link ___name of person___.”

I would practice using VoiceOver with people at the Apple store using the New York times website. We would have to wait patiently while we clicked through each social media button. “Link- tweet….link- share….link- email…” until we finally got to the meat of the page, the main article! But what if you did want to be able to share the article? So I’m not sure what the thinking is behind the Font Awesome default of aria-hidden=“true”?

ARIA specifications help the user navigate through a webpage buy offering up what are called roles or Document Landmark Roles. I found a great resource that talks about these roles in depth at Web Accessibility In Mind- http://webaim.org/techniques/aria/.

How to increase the semantics of a webpage using divs and roles:

1. banner
Site-orientated content, such as the name of the web site, title of the page, and/or the logo.

2. navigation
The area that contains the navigation links for the document or web site.
example: <ul role=“navigation">

3. main
The main or central content of the document.
example: <div role="main">

4. search
This section contains the search functionality for the site.
example: <form role=search>

5. article
Stand-alone content that makes sense out of context from the rest of the document. Examples might be a blog posting, a comment on a blog, a forum post, etc. Specifically, a blog posting might be identified as an article and individual blog comments might also be marked up with a role of article within that blog posting.

6. complementary
Supporting content for the main content


7. contentinfo
Informational child content, such as footnotes, copyrights, links to privacy statement, links to preferences, and so on.


Breaking apart each section of the page will allow the user to pick and choose what they want to dial in on, and then go deeper into the navigation and hear what each nav element is, for instance.
