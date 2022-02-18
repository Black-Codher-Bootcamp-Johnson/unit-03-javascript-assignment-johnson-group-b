import { dates } from "./data.js";
 
const timeline = document.querySelector(".timeline");
const card = document.createElement("div");
card.classList.add("timeline-item");

timeline.appendChild(card);

 dates.map((date => {
    const card = document.createElement("div");
    const cardMarkup=`
    <h3>${date.title}</h3>
    <p>${date.date}</p>
    <p>${date.summary}</p>`;
    card.innerHTML=cardMarkup;
    card.classList.add("timeline-item");
    timeline.appendChild(card);

    const button = document.createElement("button");
    const text = document.createTextNode("Tell me more!");
    button.appendChild(text);
    button.classList.add("timeline-item-more-info");
    card.appendChild(button);
}));




 