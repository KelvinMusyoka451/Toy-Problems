// Write a program that takes the speed of a car 

// as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above 
// the speed limit (70), it should give the driver one demerit point and print the total number of demerit 
// points.

// > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, 
// the function should print: “License suspended”.

function speedLimitCheck(speed) {
  var speed = parseInt(prompt("Enter speed: ")); 
   if (speed < 0 || typeof speed !== 'number') {
      speed = parseInt(prompt("Invalid input. Please enter a number greater than 0: "));
   } 
   let demeritPoints = 0; 
   let overSpeedLimit = speed - 70; 
   while (demeritPoints < 13 && overSpeedLimit > 0){
    demeritPoints++;
    overSpeedLimit -= 5;
   }
  }

    //demerit points
    if (demeritPoints === 0) {
   if (speed >= 70) {
      demeritPoints = Math.round(overSpeedLimit / 5);
      alert(`Points: ${demeritPoints}`);

   } else {
      alert("Ok");
   }

   //suspension check
   if (demeritPoints > 12) {
      alert("Licence suspended");
   }
  }

  speedLimitCheck(); 