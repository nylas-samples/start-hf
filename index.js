import "dotenv/config";
import { HfInference } from "@huggingface/inference";

const hfInference = new HfInference(process.env.HUGGINGFACE_API_KEY);

const summarize = async function (prompt) {
  const response = await hfInference.textGeneration({
    model: "mistralai/Mistral-7B-Instruct-v0.2",
    inputs: prompt,
  });

  return response;
};

const prompt = "What's the best neighborhood in NYC?";

const llmResponse = await summarize(prompt);

console.log(llmResponse);
