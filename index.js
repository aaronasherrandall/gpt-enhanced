const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-xmTUEh3MGGzCb64tIioDeMdI",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

async function callApi(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response.data.choices[0].text)
}

callApi()