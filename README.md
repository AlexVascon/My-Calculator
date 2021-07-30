# My-Calculator

I created this basic calculator for practicing javascript.

you can:
- '+' - ADD
- '*' - MULTIPLY
- '÷' - DIVIDE
- '-' - SUBTRACT
- 'DEL' - DELETE (delete last input digit)
- 'AC' - ALL CLEAR (clear the whole screen)
- '=' - ENTER (perform calculation)

I tried to make it function like a real calculator meaning it wont perform certain actions if they dont make sense. 
For example if the screen is empty, you cant start a calculation with an operation. You first need to type in a number.
The top screen displays the previous calculation, while the bottom screen displays user input. 
You can perform calculations with whole numbers and decimals. 

Tips:

- When you press enter to perform a calculation, the result will appear on the top screen. You wont be able to type any new numbers unless 
you clear the screen (AC), OR select an operator which will calculate the previous result with new input. 

- I am still learning CSS. I was experimenting with flex-box but please keep in mind not to use large numbers as they will disappear off screen! 
I will try to fix this when I learn more about it.


Note:

My main goal was to get the logic to work and fix edge cases so it wont break. I also needed to experiment with DOM manipulation. So it probably is not the most
efficient code but its mine. 

