game.splash("Let's calculate the area of a trapezoid")
base_A = game.ask_for_number("Enter a base length of the trapezoid (cm)")
Base_B = game.ask_for_number("Enter the other base length of the trapezoid (cm)")
height = game.ask_for_number("\"Enter height of trapezoid (cm)\"")
AB = base_A + Base_B
AB2 = AB + 2
Area_of_trapezoid = AB2 * height
game.splash("I think")
game.splash("final answer" + str(Area_of_trapezoid), "cm")