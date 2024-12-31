import { evalite } from "evalite";
import { answerMyQuestion } from "./generate-text";

evalite("Answer A Question", {
  data: async () => [
    {
      input:
        "What's the colour of Octarine, the colour emanated by magic in the Discworld?",
    },
    {
      input: "What is the chemical formula for dihydrogen monoxide?",
    },
  ],
  task: async (input) => {
    return answerMyQuestion(input);
  },
  scorers: [],
});
