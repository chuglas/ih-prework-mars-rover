var myRover = {
  position: [0,0],
  direction: 'N',
  grid: [10,10]
};

var commands = prompt("Where should the rover go?").toLowerCase();

function move(rover) {
  for (var i = 0; i < commands.length; i++) {
      var command = commands[i];
      if (command === 'f') {
        switch(rover.direction) {
          case 'N':
            rover.position[0]++;
            break;
          case 'E':
            rover.position[1]++;
            break;
          case 'S':
            rover.position[0]--;
            break;
          case 'W':
            rover.position[1]--;
            break;
        }
      }
      else if (command === 'b') {
        switch(rover.direction) {
          case 'N':
            rover.position[0]--;
            break;
          case 'E':
            rover.position[1]--;
            break;
          case 'S':
            rover.position[0]++;
            break;
          case 'W':
            rover.position[1]++;
            break;
        }
      }
      else if (command === 'l') {
        switch(rover.direction) {
          case 'N':
            rover.direction = 'W';
            break;
          case 'E':
            rover.direction = 'N';
            break;
          case 'S':
            rover.direction = 'E';
            break;
          case 'W':
            rover.direction = 'S';
            break;
        }
      }
      else if (command === 'r') {
        switch(rover.direction) {
          case 'N':
            rover.direction = 'E';
            break;
          case 'E':
            rover.direction = 'S';
            break;
          case 'S':
            rover.direction = 'W';
            break;
          case 'W':
            rover.direction = 'N';
            break;
        }
      }
      else {
        //do nothing
      }
  }
  rover.position[0] = (rover.position[0] + rover.grid[0]) % rover.grid[0];
  rover.position[1] = (rover.position[1] + rover.grid[1]) % rover.grid[1];
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");

}

move(myRover);


// function goForward(rover) {
//   switch(rover.direction) {
//     case 'N':
//       rover.position[0]++;
//       break;
//     case 'E':
//       rover.position[1]++;
//       break;
//     case 'S':
//       rover.position[0]--;
//       break;
//     case 'W':
//       rover.position[1]--;
//       break;
//   }
// }

// function goBackward(rover) {
//   switch(rover.direction) {
//     case 'N':
//       rover.position[0]--;
//       break;
//     case 'E':
//       rover.position[1]--;
//       break;
//     case 'S':
//       rover.position[0]++;
//       break;
//     case 'W':
//       rover.position[1]++;
//       break;
//   }
// }
//
// function turnLeft(rover) {
//   switch(rover.direction) {
//     case 'N':
//       //make direction W
//     case 'E':
//       // make direction N
//     case 'S':
//       // make direction E
//     case 'W':
//       // make direction S
//   }
// }
//
// function turnRight(rover) {
//   switch(rover.direction) {
//     case 'N':
//       //make direction E
//     case 'E':
//       // make direction S
//     case 'S':
//       // make direction W
//     case 'W':
//       // make direction N
//   }
// }
