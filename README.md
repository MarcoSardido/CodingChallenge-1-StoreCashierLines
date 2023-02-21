<div id="header" align="center">
  <img src="https://media.giphy.com/media/lrUyOahdEIDxkZjZDr/giphy.gif" width="250"/>
</div>

<h1 align="center">
Coding Challenge#1 - Store Cashier Lines
</h1>

<p align="center" style="font-size: 1.2rem;">
Coded in mobile via codesandbox.io because my laptop is being repaired at the moment 🥲
</p>

<hr />

## The Problem
Create a react app that has an input for customer number of items and button to add them, below there are five (5) 
cashier counters. The added customer will be put at which cashier line has the least total amount of items. 
Every one (1) second the items at the cashier will decrement by one (1), and when the customers item is zero (0)
it will be removed from the line and the next customer items will decrease until there are no customers available. 

## The Solution
Use a set of React hooks for the customer item input and for the cashier items decrementing, 
and array for the checkout counter and customers. Loop through the Array and find which cashier has the least total items
and add them at the last of the line.
- Use the useState hook to get the customer item input and to store the checkout counter with its customer.
- Use the useEffect hook decrease the customer on the checkout counter when mounted.
- For the checkout counter and customer Array, I used 2D Array to keep track whose customers are in the checkout counter.
- To decrement each item by one (1) second use setInterval method.

The `README` on this page covers only the basic description for the challenge.
