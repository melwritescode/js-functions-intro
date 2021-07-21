# INTRO TO JAVASCRIPT FUNCTIONS

### Sequence
1. Hook
2. Inquiry
3. Predictions
4. Independent Practice
5. Intro to Scope
6. Independent Practice 
7. Debrief


### Hook – 5 min
Introduce context for this lesson through a brainstorming session, that leverages students pre-existing knowledge. Help students establish a framework for understanding the role of functions and the qualities that make them foundational components in Javascript,  by referencing analogies that highlight qualities of building blocks. 


#### *Brainstorm*
Ideate on analogies for functions as building blocks of Javascript. Show students pictures of composite structures and have students brainstorm their building components. 

What qualities do they have that make them good building blocks? Write them out on the board (emphasize reusability, predictability, granularity, customization/specificity).

Examples: 
* Atoms to molecules
* Bricks to buildings
* Letters to sentences
* Legos to Legos structures
* Cells to life on Earth (plants, animals, etc.)

### Inquiry – 10 min
Introduce a problem that the use of functions will eventually solve, in this case duplicating code. One of the benefits of functions is we can use them to package some functionality into reusable code. Re-using one block of code multiple times gives us a source of truth for our code, offers consistency, and can help decrease our opportunities to introduce errors into our code.

#### *Generate raffle tickets*
Challenge students to design a raffle and generate random raffle numbers for each of their classmates. Give them a few minutes to print x random numbers (between 1 and 50), one for every person in their class (may have to quickly walk them through the code for generating a random integer, if they do not already know it). 
* Many students will likely write multiple console.log statements to print out several different numbers
* *Think-Pair-Warm call*
    * While multiple console logs will do the trick, what are some downsides to this solution?
    * What if I wanted to change this and print a random number from 1 - 100 for each student?  
    * What would I have to do to do that? 
    * How does this highlight some shortcomings with this approach? (tedious, time-consuming, more places to make a mistake)
* Javascript offers us a way to package some behavior so that we can reuse it. Walk through re-writing this code as a JS function that we can then call as often as we need to.

### Prediction Exercises–  10-20 min
Get students comfortable with basic function syntax, how to define and call functions, and understanding that input can be used or manipulated to produce output. 

Type out/copy paste the examples in `predictions-exercises.js` one by one, and have students make predictions on each of them, first in a Think-pair-share format, then thumbs-up/warm-calling as they get more comfortable.

### Independent Practice –  30 min
###### *Hometown Greeting*
Write a function that takes in a name, and hometown and prints the greeting, `“Hello ${name}, from ${city}!”`

###### *Average Score*
Write a function that takes an array of game scores, and outputs the average of all the scores.

###### *Convert Temperature*
Write a function that will accept a temperature in fahrenheit and output it in celsius. 

###### *Anagram Checker*
Write a function that, given two strings, will output whether or not the two are anagrams of each other. 

###### *Invert Case*
Write a function that takes in a string and outputs that same string, with all uppercase letters turned to lowercase and lowercase letters turned to uppercase.

###### *Count the Vowels*
Write a function that takes in a string and outputs the total number of vowels.
Additional challenge: Output each vowel with its count.

### Intro to scope
Students should run the code below, calling each function to see what it does. 

*Think-Pair-Warm call*
* Why doesn't the code run?
* What error messages are we getting? Do they give us any clues?
* How can we get our count to stop resetting every time we run the function?
* What would we need to change to successfully update the follower count in either function?

Walk-through correcting the following code, while explaining scope (visibility) and why it matters.

```
function addFollower() {
    let followers = 0;
    followers += 1;
    return followers;
}
 
function removeFollower() {
    followers -= 1;
    return followers;
}
```

### Independent Practice

###### *Music Library*
Create a list of your favorite music artists. Write two functions, one that adds a new artist to the list, and one that removes an artist from the list.

###### *Currently Listening*
Create a variable `currentArtist` that stores the name of an artist. Write a function that takes in a single argument and outputs `You are currently listening to ${artist}.`. Your function should update the current artist if it is different from the input.

### Debrief – 10-15 min
Circle back to examples mentioned in hook. Discuss how functions are the building blocks of any Javascript program, and discuss examples we’ve seen of how functions possess similar qualities to some building blocks/foundational components we may already be familiar with. 

Open the floor for final questions, thoughts, etc. 



## SWBAT:
* Define a function that accepts parameters and returns an output
* Call a function
* Explain the role of functions in Javascript code

## Assumed Knowledge:
* Students have a strong grasp on basic the basic data types in the Javascript programming language (numbers, strings, booleans and conditional operators)
* Students have a solid understanding of variables: what purpose they serve, how to use them in writing a program
* Students have a basic understanding of conditionals (if/else statements)
* Students will have a basic knowledge of special data types in Javascript: objects and arrays
* Students understand the difference between objects and arrays, when each would be preferable to use, how to create both types, and how to access data in both types
Students will understand that arrays have properties built into Javascript that can manipulate or describe them (ie: split, splice, length)
