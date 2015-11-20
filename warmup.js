function decodeString(input) {
  var sum = 0;
  input = input.toLowerCase();
  
  for(var i = 0; i < input.length; i++) {
    var decodedChar = decodeChar(input[i]);
    var decodedNextChar = decodeChar(input[i+1]);

    if(decodedChar < decodedNextChar) {
      sum -= decodedChar;
    }
    else {
      sum += decodedChar;
    }
  }
  
  return sum;

};

function decodeChar(char) {

  if(char === 'i') {
    return 1;
  }

  if(char === 'v') {
    return 5;
  }

  if(char === 'x') {
    return 10;
  }

  if(char === 'l') {
    return 50;
  }

  if(char === 'c') {
    return 100;
  }
};


// the problem is this: what does the code I sent out do? 
// It is designed to take input of a specific format 
// in a string type and converts it to a number type
// What are the rules for this conversion?