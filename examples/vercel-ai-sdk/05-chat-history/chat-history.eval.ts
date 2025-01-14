import { evalite } from "evalite";
import { generateManyExamples } from "./main.ts";

evalite("Generate Many Examples", {
  data: async () => [
    {
      input:
        "Write 5 tweets on the topic of painting landscapes.",
    },
  ],
  task: async (input) => {
    return generateManyExamples(input);
  },
  scorers: [],
});
