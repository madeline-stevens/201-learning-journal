# 301 Learning Journal: day 3 (July 12, 2017) (LJ-code301-day3.md)

Thank you so much, Scott, for being okay with student pairs for code review. I was able to ask Katherine for feedback on how I was understanding and explaining my code. I think it's a great way to ease into doing it as a class and having you correct us.

I felt like I had a good handle on the .hide and .show methods within the event handlers. But what a lot of us did not understand or get without TA help was the...

articleView.handleAuthorFilter = function() {

...and how we were tasked with doing this with it...

If the select box was changed to an option that has a value, we need to hide all the articles,
//and then show just the ones that match for the author that was selected.
//Use an "attribute selector" to find those articles, and fade them in for the reader.

Answer:

$('article').hide();
$('article[data-author="' + $(this).val() + '"]').show();
console.log($(this).val())

} else {

That concatenation in the 'if' statement was what threw us. None of us would have gotten that.
