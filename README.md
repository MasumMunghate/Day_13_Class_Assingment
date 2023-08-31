# Day_13_Class_Assingment

The moveRandomly function is defined to make the movableDiv move to random positions within the browser window.

maxX and maxY are calculated to determine the maximum allowable X and Y positions for the div to move. These values are calculated by subtracting the width and height of the movableDiv from the window's inner width and height. This ensures that the div doesn't move outside the visible area of the browser window.

Math.random() generates a random decimal number between 0 and 1. Multiplying it by maxX gives a random X position within the valid range. Similarly, multiplying it by maxY gives a random Y position within the valid range. Math.floor() is used to round down these random values to whole numbers.

The style.left property of movableDiv is set to randomX + "px". This moves the div horizontally to the new random X position, using pixels as the unit.

The style.top property of movableDiv is set to randomY + "px". This moves the div vertically to the new random Y position, again using pixels as the unit.

By calculating the maximum allowable X and Y positions based on the window's size and the div's dimensions, and then generating random X and Y positions within these limits, the code ensures that the movableDiv can move randomly within the visible area of the browser window. The div's position is updated using the style.left and style.top properties, resulting in a visually random movement effect.
