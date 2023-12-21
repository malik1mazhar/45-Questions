"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
//bigger dinner table.
let invite_1 = ["Ali", "Usman", "Haider"];
const invite_msg2 = ("You are cordially invited for dinner at my place tomorrow.");
invite_1.pop();
invite_1.push("Waqas");
console.log(`Dear ${invite_1[0]} ${invite_msg2}`);
console.log(`Dear ${invite_1[1]} ${invite_msg2}`);
console.log(`Dear ${invite_1[2]} ${invite_msg2}`);
console.log("Hey Guys, I have got a bigger dining table so we will be having more boys at the dinner");
//Add one new guest to the beginning of your array.
invite_1.unshift("Nouman");
//Add one new guest to the middle of your array. • 
invite_1.splice(2, 0, "Atif");
//Use append() to add one new guest to the end of your list. •
invite_1.push("Rashid");
// Print a new set of invitation messages, one for each person in your list.
console.log(`Dear ${invite_1[0]} ${invite_msg2}`);
console.log(`Dear ${invite_1[1]} ${invite_msg2}`);
console.log(`Dear ${invite_1[2]} ${invite_msg2}`);
console.log(`Dear ${invite_1[3]} ${invite_msg2}`);
console.log(`Dear ${invite_1[4]} ${invite_msg2}`);
console.log(`Dear ${invite_1[5]} ${invite_msg2}`);
