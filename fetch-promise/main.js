'use strict';

const url1 = 'https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/teams.json';
const url2 = 'https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/hungary-players.json';

const playerContainer = document.querySelector('.player__container');
const dataContainer = document.querySelector('.data__container');

async function getData1() {
    const rawData = await fetch(url1);
    const data = await rawData.json();
    const finalData = data.sheets.Teams[21];

    const tag = (texts, ...values) => 
        texts.map((text, index) => 
        `<strong>${text}</strong>${values[index] ? `${values[index]}` : ''}`).join('');

    const template = tag ` Team: ${finalData.Team}
    <br>FIFA Ranking: ${finalData['FIFA ranking']}
    <br>Group: ${finalData.Group} 
    <br>Byline: ${finalData.Byline} 
    <br>Coach: ${finalData.Coach}
    <br>Bio: ${finalData.Bio}
    <br>Strengths: ${finalData.strengths}
    <br>Weaknesses: ${finalData.weaknesses}
    <br>Next Match: ${finalData['next match']}
    `;

    dataContainer.innerHTML = template;
};

function createTable(objectArray, fields, fieldTitles) {

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let thr = document.createElement('tr');

    fieldTitles.forEach((fieldTitle) => {
      let th = document.createElement('th');
      th.appendChild(document.createTextNode(fieldTitle));
      thr.appendChild(th);
    });

    thead.appendChild(thr);
    table.appendChild(thead);
  
    let tableBody = document.createElement('tbody');

    objectArray.forEach((object) => {
      let tr = document.createElement('tr');
      fields.forEach((field) => {
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(object[field]));
        tr.appendChild(td);
      });

      tableBody.appendChild(tr);    
    });

    table.appendChild(tableBody);
    playerContainer.appendChild(table);
    return table;

};

async function getData2() {
    const rawData = await fetch(url2);
    const data = await rawData.json();
    
    const players = data.sheets.Players;

    /*createTable(players, ['name', 'bio', 'photo done?', 
        'special player? (eg. key player, promising talent, etc)', 
        'position', 'number', 'caps', 'goals for country', 
        'club', 'league', 'date of birth'], 
        ['Name', 'Bio', 'Photo Done?', 
        'Special Player?', 
        'Position', 'Number', 'Caps', 'Goals for Country', 
        'Club', 'League', 'Date of Birth']);
    */

   createTable(players, 
    ['name', 'position', 'club', ], 
    ['Name', 'Position', 'Club']);

};

Promise.all([getData1(), getData2()]);
