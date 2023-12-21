"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space
//for only two guests.
let invite_2 = ["Ali", "Usman", "Haider"];
const invite_msg3 = ("You are cordially invited for dinner at my place tomorrow.");
invite_2.pop();
invite_2.push("Waqas");
//console.log(`Dear ${invite_2[0]} ${invite_msg3}`)
//console.log(`Dear ${invite_2[1]} ${invite_msg3}`)
//console.log(`Dear ${invite_2[2]} ${invite_msg3}`)
//console.log("Hey Guys, I have got a bigger dining table so we will be having more boys at the dinner")
invite_2.unshift("Nouman");
invite_2.splice(2, 0, "Atif");
invite_2.push("Rashid");
//console.log(`Dear ${invite_2[0]} ${invite_msg3}`)
//console.log(`Dear ${invite_2[1]} ${invite_msg3}`)
//console.log(`Dear ${invite_2[2]} ${invite_msg3}`)
//console.log(`Dear ${invite_2[3]} ${invite_msg3}`)
//console.log(`Dear ${invite_2[4]} ${invite_msg3}`)
//console.log(`Dear ${invite_2[5]} ${invite_msg3}`)
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Due to some issues i will be able to invite two people only");
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
invite_2.shift();
console.log("Sorry Nouman, I can't invite you");
invite_2.pop();
console.log("Sorry Rashid, I can't invite you");
invite_2.shift();
console.log("Sorry Ali, I can't invite you");
invite_2.shift();
console.log("Sorry Atif, I can't invite you");
console.log(`${invite_2}`);
//Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`Dear ${invite_2[0]} ${invite_msg3}`);
console.log(`Dear ${invite_2[1]} ${invite_msg3}`);
//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.
invite_2.pop();
invite_2.shift();
console.log(invite_2);
