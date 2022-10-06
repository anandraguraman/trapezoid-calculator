game.splash("Let's calculate the area of a trapezoid")
let base_A = game.askForNumber("Enter a base length of the trapezoid (cm)")
let Base_B = game.askForNumber("Enter the other base length of the trapezoid (cm)")
let height = game.askForNumber("\"Enter height of trapezoid (cm)\"")
let AB = base_A + Base_B
let AB2 = AB + 2
let Area_of_trapezoid = AB2 * height
game.splash("I think")
game.splash("final answer" + ("" + Area_of_trapezoid), "cm")
