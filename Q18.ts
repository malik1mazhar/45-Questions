//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let my_places:string[] = ["Makkah", "Madina", "Dubai", "Baku", "Prague"]
let my_place:string[] = ["Makkah", "Madina", "Dubai", "Baku", "Prague"]

//• Print your array in its original order
console.log(my_places)

//• Print your array in alphabetical order without modifying the actual list.
my_places.sort()
console.log("Alphabetical Order:", my_places)

//• Show that your array is still in its original order by printing it.
console.log("Original Order", my_place)

//• Print your array in reverse alphabetical order without changing the order of the original list.
my_places.reverse();
console.log("Reverse Alphabetic Order:", my_places);

//• Show that your array is still in its original order by printing it again.
console.log("Original Order:", my_place)

//• Reverse the order of your list. Print the array to show that its order has changed.
my_place.reverse()
console.log("Reverse Order:", my_place)

// Reverse the order of your list again. Print the list to show it’s back to its original order.
my_place.reverse()
console.log("Original Order:", my_place)

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
my_place.sort();
console.log("Alphabetical Order:", my_place)

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
my_place.reverse()
console.log("Reverse Alphabetic Order:", my_place)
