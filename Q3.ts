//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let name_var = "joHn Doe"
console.log("Lowercase:", name_var.toLowerCase())
console.log("Uppercase:", name_var.toUpperCase())
let xy = name_var.slice(0,1).toUpperCase()
let xxy = name_var.slice(1,4).toLowerCase()
let xxyy = name_var.slice(5,9)
console.log(xy + xxy, xxyy)