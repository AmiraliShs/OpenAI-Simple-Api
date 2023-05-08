/*import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.openai.com/v1', 
    headers: {
        'Authorization': 'Bearer $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'
    }
})*/

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: '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'
});

const openai = new OpenAIApi(configuration);

export default async function sendRequest() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Translate this into Persian:\n\nHow are you\n\n1.",
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      console.log(response.data.choices[0].text);
}
