 import { dates } from "./data.js";
 
 const timeline = document.querySelector(".timeline");
 console.log(timeline)

 const button = document.createElement("button");
 const text = document.createTextNode("Show more");
 button.appendChild(text);
 button.classList.add("demo-button");
 timeline.appendChild(button);

 const description = document.createElement("p")
 description.textContent="I like chocolate"
 timeline.appendChild(description);
 
 const card = document.createElement("div")
 card.classList.add("card");
 const cardMarkup=`
 <h1>Bakery Timeline</h1>
 <h2>We sell bread</h2>
 `;
 card.innerHTML=cardMarkup;
 timeline.appendChild(card);
 
