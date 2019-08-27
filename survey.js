const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", answer1 => {
  rl.question("What do you think of Node.js? ", answer2 => {
    rl.question("What do you listen to while doing that?", answer3 => {
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        answer4 => {
          rl.question(
            "What's your favourite thing to eat for that meal?",
            answer5 => {
              rl.question(
                "Which sport is your absolute favourite?",
                answer6 => {
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at!",
                    answer7 => {
                      console.log(
                        `Thank you for your valuable feedback: ${answer1}, you think node.js is ${answer2},you listen to ${answer3} whild you are doing ${answer2}, your favourite meal is ${answer4}, our absolute favourite sport is ${answer6}, your favourite thing to eat for that meal is ${answer5} your superpower is ${answer7}`
                      );
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
