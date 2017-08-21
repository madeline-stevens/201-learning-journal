One of the first things we learn in Code 201 is the for loop. We use it a lot. It's what allows us to have a grouping of data, for example- a list of people or cities. A list of people that you want to search through or filter through and then ultimately do something else with it. We call this list an array. And then the "do something" part of the code is a function or a console log that simply adds text around the found item.

An example of what this code could look like in Atom:

var cities = ["melbourne", "Amman", "Helsinki", "Seattle", "Dallas", "NYC"];

for (var i=0; i < cities.length; i++) {
  console.log ("I would like to visit" + cities [i]);
}

This is looping through each city and applying the console.log concatenation string to each. But in order to do this simple task the for loop needs to iterate over each item in the array.

The .forEach will accomplish the same end goal but now the for loop is baked into the .forEach method.
