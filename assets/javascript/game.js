var randomNum = Math.floor(Math.random() * 101) + 19; // returns a number between 19 and 120
var buttonNum = Math.floor(Math.random() * 12) + 1;  //returns a number between 1 and 12
var score= 0; 
var wins= 0;
var losses = 0;
var button = buttonNum;
var newScore = score + buttonNum;
var num1 = Math.floor(Math.random()*11) + 1;
var num2 = Math.floor(Math.random()*11) + 1;
var num3 = Math.floor(Math.random()*11) + 1;
var num4 = Math.floor(Math.random()*11) + 1;

$("#randomNum").html(randomNum);

function winner(){
  $('#win-lose').text('YOU WIN!!!');
  wins++; 
  $('#wins').text(wins);
  setTimeout("location.reload(true);",3000);
  };

  function loser(){
  $('#win-lose').text('YOU LOSE!!!');
  losses++; 
  $('#losses').text(losses);
  setTimeout("location.reload(true);",3000);
  };

$( "#button1" ).on( "click", function() {
  $("#score").text(newScore = newScore + num1);
  $('#score').text(newScore); 
  if (newScore == randomNum){
    winner();
  }else if ( newScore > randomNum){
    loser();
  } 
  });

$( "#button2" ).on( "click", function() {
  $("#score").text(newScore = newScore + num2); 
  $('#score').text(newScore); 
  if (newScore == randomNum){
    winner();
  }else if ( newScore > randomNum){
    loser();
  } 
  });

$( "#button3" ).on( "click", function() {
  $("#score").text(newScore = newScore + num3); 
  $('#score').text(newScore); 
  if (newScore == randomNum){
    winner();
  }else if ( newScore > randomNum){
    loser();
  } 
  });

$( "#button4" ).on( "click", function() {
  $("#score").text(newScore = newScore + num4); 
  $('#score').text(newScore); 
  if (newScore == randomNum){
    winner();
  }else if ( newScore > randomNum){
    loser();
  } 
  });