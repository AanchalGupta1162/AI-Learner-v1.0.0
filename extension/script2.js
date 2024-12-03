async function promptAPI() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  const url = tab.url;

  // Disable the button during processing
  const btn = document.getElementById("SummaryButton");
  btn.disabled = true;
  const msg = document.getElementById("message");
  msg.innerHTML = "Generating Summary... ";

  // Call the function to fetch the transcript from the backend
  fetchTranscriptAndSummarise(url, btn);
}

function fetchTranscriptAndSummarise(url, btn) {
  // Construct the URL with the YouTube video URL as a query parameter
  const requestUrl = `http://127.0.0.1:5000/receive_url?url=${encodeURIComponent(
    url
  )}`;

  // Use GET request to fetch the transcript
  fetch(requestUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching transcript: " + response.statusText);
      }
      return response.text(); // Parse plain text response
    })
    .then(async (transcript) => {
      // Display the transcript
      const { available, defaultTemperature, defaultTopK, maxTopK } =
        await ai.languageModel.capabilities();
      console.log(available);
      const trans = transcript;
      let result = "Default result";
      if (available !== "no") {
        const session = await ai.languageModel.create({
          systemPrompt: trans,
        });

        result = await session.prompt(
          `Summarize and give imp points about ${trans}`
        );
        console.log(result);
      }
      const summaryDiv = document.getElementById("message");
      summaryDiv.innerHTML = result;
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
    })
    .finally(() => {
      //Resizing The "message"
      const msg = document.getElementById("message");
      // Change the size by modifying rows and columns
      msg.rows = 30;

      // Re-enable the button after processing
      btn.disabled = false;
      btn.innerHTML = "Summary";
    });
}

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  const url = tab.url;

  // Disable the button during processing
  const btn = document.getElementById("TranscriptButton");
  btn.disabled = true;
  const msg = document.getElementById("message");
  msg.innerHTML = "Generating Transcript... ";

  // Call the function to fetch the transcript from the backend
  fetchTranscript(url, btn);
}

// Function to send GET request and fetch the transcript from the Flask backend
function fetchTranscript(url, btn) {
  // Construct the URL with the YouTube video URL as a query parameter
  const requestUrl = `http://127.0.0.1:5000/receive_url?url=${encodeURIComponent(
    url
  )}`;

  // Use GET request to fetch the transcript
  fetch(requestUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching transcript: " + response.statusText);
      }
      return response.text(); // Parse plain text response
    })
    .then((transcript) => {
      // Display the transcript
      const trans = transcript;
      const outputElement = document.getElementById("message");
      outputElement.innerHTML = trans;
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
    })
    .finally(() => {
      const msg = document.getElementById("message");
      // Change the size by modifying rows and columns
      msg.rows = 30;

      // Re-enable the button after processing
      btn.disabled = false;
      btn.innerHTML = "Fetch Transcript";
    });
}

async function getQues() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  const url = tab.url;

  // Disable the button during processing
  const btn = document.getElementById("QuestionButton");
  btn.disabled = true;
  const msg = document.getElementById("message");
  msg.innerHTML = "Generating Questions... ";

  // Call the function to fetch the transcript from the backend
  fetchTranscriptAndQuestionise(url, btn);
}

function fetchTranscriptAndQuestionise(url, btn) {
  // Construct the URL with the YouTube video URL as a query parameter
  const requestUrl = `http://127.0.0.1:5000/receive_url?url=${encodeURIComponent(
    url
  )}`;

  // Use GET request to fetch the transcript
  fetch(requestUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching transcript: " + response.statusText);
      }
      return response.text(); // Parse plain text response
    })
    .then(async (transcript) => {
      // Display the transcript
      const { available, defaultTemperature, defaultTopK, maxTopK } =
        await ai.languageModel.capabilities();
      console.log(available);
      const trans = transcript;
      let result = "Default result";
      if (available !== "no") {
        const session = await ai.languageModel.create({
          systemPrompt: trans,
        });

        result = await session.prompt(
          `I want to learn ${trans}. Explain me with the help of 10 questions and answers. The answers should be in long form so that questioons could be understood clearly.`
        );
        console.log(result);
      }
      const summaryDiv = document.getElementById("message");
      summaryDiv.innerHTML = result;
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
    })
    .finally(() => {
      //Resizing The "message"
      const msg = document.getElementById("message");
      // Change the size by modifying rows and columns
      msg.rows = 30;

      // Re-enable the button after processing
      btn.disabled = false;
      btn.innerHTML = "Get Questions";
    });
}

document.getElementById("SummaryButton").addEventListener("click", promptAPI);
document
  .getElementById("TranscriptButton")
  .addEventListener("click", getCurrentTab);
// Event listener for the YouTube video button
const button = document.getElementById("QuestionButton");
button.addEventListener("click", getQues);
