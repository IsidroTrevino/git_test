const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content); // Append content to container

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = 'red';
container.appendChild(para); // Append para to container

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';
container.appendChild(h3); // Append h3 to container

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';
container.appendChild(div); // Append div to container

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1); // Append h1 to div

const p = document.createElement('p');
p.textContent = "ME TOO!";
div.appendChild(p); // Append p to div
