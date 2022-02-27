import { dates } from "./data.js";
 
const timeline = document.querySelector(".timeline");
const card = document.createElement("div");

const intro = document.createElement("div");
const cardMarkup=`
<h3>Mayme's Bakery</h3>
<p>Find out the history of each ingredient that when combined with our family recipes and talented staff, becomes
the delicious food that has been in our family for generations, made with love for our customers!</p>`;
intro.innerHTML=cardMarkup;
intro.classList.add("intro");
document.body.prepend(intro);

const dialog = document.createElement("div");
dialog.classList.add("dialog");
document.body.appendChild(dialog);

 dates.map((date => {
    const card = document.createElement("div");
    const cardMarkup=`
    <h2>${date.title}</h2>
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
        container.setAttribute('id','modal-container');

        const title = document.createElement('h1');
        title.textContent = data.title
        container.appendChild(title);
        title.setAttribute('id','modal-title');

        const date = document.createElement('h2');
        date.textContent = data.date
        container.appendChild(date);
        date.setAttribute('id','modal-date');
       
        const description = document.createElement('p');
        description.textContent = data.fullDescription
        container.appendChild(description);
        description.setAttribute('id','modal-full-description');

        const image = document.createElement('img');
        image.src = data.image
        container.appendChild(image);
        image.setAttribute('id','modal-image');
        
        const closeDialog = document.createElement('button');
        closeDialog.textContent = 'Back to the main page'
        closeDialog.textContent = 'close'
        container.appendChild(closeDialog);
        closeDialog.setAttribute('id','modal-close-button');


        closeDialog.addEventListener("click", offClickButton);
         
        const dialog = document.querySelector(".dialog");
        dialog.classList.remove('hide');
        dialog.innerHTML="";
        dialog.appendChild(container);
        
 };

 function offClickButton() {
    const dialog = document.querySelector(".dialog");
    dialog.classList.add('hide');
 };
 