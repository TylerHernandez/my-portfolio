// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
//adds a random fact to the page
function addRandomFact(){
    const randomFacts=
        ['I live in Manhattan, New York', 'I have the world\'s sleepiest dog', 'I absolutely drank too much coffee today'];

    //Pick a random fact
    const randomFact=randomFacts[Math.floor(Math.random() * randomFacts.length)];

    //Add it to the page
    const factContainer = document.getElementById('fact-container');
    factContainer.innerText=randomFact;
}

function getRandomQuote() {
  console.log('Fetching a random quote.');

  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/data');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}

/**
 * Handles response by converting it to text and passing the result to
 * addQuoteToDom().
 */
function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addQuoteToDom() function.
  textPromise.then(addQuoteToDom);
}

/** Adds a random quote to the DOM. */
function addQuoteToDom(quote) {
  console.log('Adding quote to dom: ' + quote);

  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}
//fetch data from servlet
async function getData() {
  const response = await fetch('/data');
  const data = await response.text();
  document.getElementById('server-data-container').innerText = data;
}

function getJSON() {
  fetch('/data').then(response => response.json()).then((data) => {
    // data is an object, not a string, so we have to
    // reference its fields to create HTML content
    console.log(data);
    const dataListElement = document.getElementById('server-data-container');
    dataListElement.innerHTML = '';
    dataListElement.appendChild(
        createListElement('first: ' + data.a1));
    dataListElement.appendChild(
        createListElement('second: ' + data.a2));
    dataListElement.appendChild(
        createListElement('third: ' + data.a3));
        console.log("hit");
        console.log(data);
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
