// Get the calculator display input box
let input = document.getElementById('inputBox');

// Select all the calculator buttons
let buttons = document.querySelectorAll('button');

// Store the current calculation as a string
let string = "";

// Convert the buttons NodeList into an array
let arr = Array.from(buttons);

// Add a click event to every calculator button
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{


        // Check if the "=" button is clicked
        // eval() calculates the mathematical expression
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

         // Check if the "AC" button is clicked
        // It clears the complete calculation
        else if(e.target.innerHTML =='AC'){
            string = "";
            input.value = string;
        }

          // Check if the "DEL" button is clicked
        // It removes the last entered character
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        
         // For numbers and operators
        // Add the clicked button value to the calculation
        else{

        string += e.target.innerHTML;
        input.value = string;
        }
    })
})