import { dates } from "./data.js";
 
const timeline = document.querySelector(".timeline");
const card = document.createElement("div");
card.classList.add("timeline-item");

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

    button.addEventListener("click", onClickButton);

    function onClickButton() {
        createDialog(date);
    };      
}));


    function createDialog(data) {
        const container = document.createElement('div');
        container.classList.add('modal-container');
        const title = document.createElement('h1');
        title.textcontent = data.title
        container.appendChild(title);
        
        const description = document.createElement('p');
        description.textContent = data.fullDescription
        container.appendChild(description);
        
        const closeDialog = document.createElement('button');
        closeDialog.textContent = 'close'
        container.appendChild(closeDialog);
    
        document.querySelector(".dialog").innerHTML=container.outerHTML
        
 };
