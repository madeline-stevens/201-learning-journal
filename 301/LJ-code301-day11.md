# 301 Learning Journal: day 11 (July 24, 2017) (LJ-code301-day11.md)

Last week we focused a lot on HTTP methods.

HTTP methods:
get
put
post
delete

And the corresponding CRUD operations.

CRUD:
create- post
read- get
update- put
destroy- delete

Today, we learned revisited the MVC. And in our lab we learned how to change routes in a url for a static page that's using AJAX requests to show and hide different content. This is what I wrote in my reading response:

1. Model: A structure of objects. (Example: a database or html.)

View:  A visual representation of a model, objects or data. (Example: css.)

Controller: The link between user and system. (Example: a browser.)

2.  History API .pushState()- This method will change the web address as the user navigates from page to page. Because we are using ajax requests which updates a webpage in parts instead of changing the location entirely we need to make sure the url is also changing. This is handy for when the user navigates backwards and forwards (in the browser history); we can rest easy knowing the corresponding url with always be displayed.
