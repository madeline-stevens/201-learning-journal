https://www.lynda.com/Node-js-tutorials/Populations/604259/620679-4.html

- populate()- lets you reference documents in other collections.

- Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s).

The example in the docs:

After creating a Person and a Story from the Person model and the Story model. Now we can take a look at populating our story's author using the query builder:

Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
  });
