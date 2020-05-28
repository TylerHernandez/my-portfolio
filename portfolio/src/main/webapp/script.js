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
