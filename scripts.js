/*
    a <p> with red text that says “Hey I’m red!”
    an <h3> with blue text that says “I’m a blue h3!”
    a <div> with a black border and pink background color with the following elements inside of it:
        another <h1> that says “I’m in a div”
        a <p> that says “ME TOO!”
        Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
 */

//Define constants to be reused       
const container = document.querySelector('#body-container');
const paragraph = document.createElement('p');
const paragraphDescription = document.createElement('p');
const thirdHeader = document.createElement('h3');
const divCreate = document.createElement('div');
const firstHeaderCreate = document.createElement('h1');

//Adds red text
paragraph.classList.add('red-text');
paragraph.textContent = "Hey I'm red!!!";
paragraph.style.color = 'red';
container.appendChild(paragraph);

//Add <h3> with blue text
thirdHeader.classList.add('blue-header');
thirdHeader.textContent = "I'm a blue H3!";
thirdHeader.style.color = 'blue';
container.appendChild(thirdHeader);

//Add div with a border and background
divCreate.classList.add('cta-container');
divCreate.setAttribute('style', 'border: solid 2px black; background-color: pink;');

//Add subdivisions to cta-container
firstHeaderCreate.classList.add('cta-header');
firstHeaderCreate.textContent = "I'm in a div";

paragraphDescription.classList.add('cta-description');
paragraphDescription.textContent = "ME TOO!"

//Append to DOM
divCreate.appendChild(firstHeaderCreate);
divCreate.appendChild(paragraphDescription);
container.appendChild(divCreate);
