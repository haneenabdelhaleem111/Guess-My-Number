'use strict';

//selecting elements in java script, as css . for class and # for id 

//   console.log(document.querySelector('.message').textContent);
//selecting the element and then read the textcontent property 
//DOM Manipulation -> js interact with Web page , allows js to access html elements (Document Object Model)

//     document.querySelector('.message').textContent = 'Correct Number!';
//changes the text to the second text - Correct Number
// to let it appear in the console just add console.log before all the 

//      document.querySelector('.number').textContent = 13;
//number class's name which is under guess my name 
//      document.querySelector('.score').textContent = 10;
// score space

//      document.querySelector('.guess').value = 23;
// js can enter values for the imput tag in html
// for the input tag we use .value
//      console.log(document.querySelector('.guess').value);
//if we wrote it before the above statement it will print an empty line

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//trunc to get whole number //random to get a number with range from 0 to 19 -> +1 to make the range till 20

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


//when our code reacts to smthng that happens in the DOM - button, mouse click or mouse moving which all needs an eventlistener
//name of the event is click 
document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    // when I click on check after entering any number it will appear in the console **if it had console.log before the statement
    console.log(guess);  //anything that comes from the user is always a string

    //when there is no input 
    if (!guess){
      //document.querySelector('.message').textContent = 'No Number!';
      // in order to make it more dry and short
      displayMessage('No number!');
    }

    //when player wins
    else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        //manipulating css: select the element .style (indicating css).(selected item that you want to change)
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //When the guess is different
    else if(guess !== secretNumber){
        if (score > 1){
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score; //prints the score after each click on check
        }
        else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
        
    }
});
    
    
    /*when guess is higher
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score --;
            document.querySelector('.score').textContent = score; //prints the score after each click on check
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }

   //when guess is lower
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score --;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});*/


//Again button
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //function for the message 
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
        

});
