
let invite:string[] = ["Ali", "Usman", "Haider"]
const invite_msg:string = ("You are cordially invited for dinner at my place tomorrow.")
console.log(`Dear ${invite[0]}! ${invite_msg}`)
console.log(`Dear ${invite[1]}! ${invite_msg}`)
console.log(`Dear ${invite[2]}! ${invite_msg}`)

//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.  Start with your program from Exercise 14. Add a print statement
// at the end of your program stating the name of the guest who can’t make it.

console.log(`${invite[2]} can't make it due to a very important business meeting.`)

//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
invite.pop();
invite.push("Waqas");


// Print a second set of invitation messages, one for each person who is still in your list.
console.log(`Dear ${invite[0]}! ${invite_msg}`)
console.log(`Dear ${invite[1]}! ${invite_msg}`)
console.log(`Dear ${invite[2]}! ${invite_msg}`)