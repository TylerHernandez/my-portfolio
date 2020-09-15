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


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Coffees');
  data.addColumn('number', 'Count');
        data.addRows([
          ['Iced Lattes', 7],
          ['Cortados', 3],
          ['Americanos', 4]
        ]);

  const options = {
    'title': 'Coffees I drink per week',
    'width':500,
    'height':400
  };

  const chart = new google.visualization.PieChart(
      document.getElementById('chart-container'));
  chart.draw(data, options);
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

//fetch data from servlet
async function getData() {
  const response = await fetch('/data');
  const data = await response.text();
  document.getElementById('server-data-container').innerText = data;
}

function getJSON() {
    fetch('/text').then(response => response.json()).then((tasks) => {
        const taskEl = document.getElementById('server-data-container');
        tasks.forEach((task) => {
            taskEl.appendChild(createListElement(task));
        })
    });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text.comment;
  return liElement;
}

function getTextInput() {
  fetch('/text').then(response => response.json()).then((text) => {
    const totalEl = document.getElementById('text-input');

    // Build the list of history entries.
    const historyEl = document.getElementById('text-input');
    game.history.forEach((line) => {
      historyEl.appendChild(createListElement(line));
    });
  });
}
