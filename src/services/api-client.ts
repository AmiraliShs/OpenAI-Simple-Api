/*import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.openai.com/v1', 
    headers: {
        'Authorization': 'Bearer $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
    }
})*/

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: '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'
});

const openai = new OpenAIApi(configuration);

export default async function sendRequest(value : string) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: value,
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      
      
      return response.data.choices[0].text || "Sorry";
}
