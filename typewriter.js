const sentence = "hello there from lighthouse labs";
let counter = 0; 
let length = sentence.length
let index = 2; 
for (const char of sentence) {
    setTimeout(() => {process.stdout.write(char)}, counter);
    counter += 50;
  }
