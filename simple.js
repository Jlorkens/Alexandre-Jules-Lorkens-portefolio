
// const burger = document.querySelector('.burger');
// const navLinks = document.querySelector('.nav-links');

// burger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });


// const darkToggle = document.getElementById('darkModeToggle');

// if (localStorage.getItem('darkMode') === 'enabled') {
//   document.body.classList.add('dark-mode');
//   if (darkToggle) darkToggle.textContent = '☀️';
// }

// darkToggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
//   const isDark = document.body.classList.contains('dark-mode');

  
//   darkToggle.textContent = isDark ? '☀️' : '🌙';

  
//   localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
// });


// const sliderTrack = document.querySelector('.slider-track');
// const prevBtn = document.querySelector('.slider-btn.prev');
// const nextBtn = document.querySelector('.slider-btn.next');

// const slideWidth = 240; 

// if (sliderTrack && prevBtn && nextBtn) {
//   prevBtn.addEventListener('click', () => {
//     sliderTrack.scrollBy({
//       left: -slideWidth,
//       behavior: 'smooth'
//     });
//   });

//   nextBtn.addEventListener('click', () => {
//     sliderTrack.scrollBy({
//       left: slideWidth,
//       behavior: 'smooth'
//     });
//   });
// }




const clock = document.getElementById('digital-clock');

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Appel initial

function updateClock() {
  const now = new Date();

  // Formatage de l'heure (HH:MM:SS)
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Affichage
  document.getElementById('live-clock').textContent =
    `${hours}:${minutes}:${seconds}`;

  // Changement de couleur toutes les secondes (optionnel)
  const clockElement = document.getElementById('live-clock');
  clockElement.style.color = `hsl(${now.getSeconds() * 6}, 100%, 70%)`;
}

// Mise à jour immédiate puis toutes les secondes
updateClock();
setInterval(updateClock, 1000);

function updateClock() {
  const now = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const dateString = now.toLocaleDateString('fr-FR', options);
  const timeString = now.toLocaleTimeString('fr-FR');

  document.getElementById('live-clock').innerHTML = `
    <div>${dateString}</div>
    <div>${timeString}</div>
  `;
}






const quoteText = document.getElementById('quote-text');
const newQuoteBtn = document.getElementById('new-quote-btn');

async function fetchQuote() {
  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    quoteText.textContent = `"${data.quote}" — ${data.author}`;
  } catch (error) {
    quoteText.textContent = '"La créativité est contagieuse, faites-la tourner." — Albert Einstein';
  }
}

newQuoteBtn.addEventListener('click', fetchQuote);

// Charger une citation au démarrage
fetchQuote();






function mettreAJourHorloge() {
  const clockElement = document.getElementById("clock");
  const maintenant = new Date();

  const heures = String(maintenant.getHours()).padStart(2, "0");
  const minutes = String(maintenant.getMinutes()).padStart(2, "0");
  const secondes = String(maintenant.getSeconds()).padStart(2, "0");

  const heureActuelle = `${heures}:${minutes}:${secondes}`;
  clockElement.textContent = heureActuelle;
}

// Mettre à jour chaque seconde
setInterval(mettreAJourHorloge, 1000);

// Initialiser dès le chargement
mettreAJourHorloge();

const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;
const totalImages = 10; // nombre d’images à faire défiler

function chargerImage() {
  const url = `https://picsum.photos/seed/${index}/500/300`;
  sliderImage.src = url;
}

function imageSuivante() {
  index = (index + 1) % totalImages;
  chargerImage();
}

function imagePrecedente() {
  index = (index - 1 + totalImages) % totalImages;
  chargerImage();
}

nextBtn.addEventListener("click", imageSuivante);
prevBtn.addEventListener("click", imagePrecedente);

// Changement automatique toutes les 5 secondes
setInterval(imageSuivante, 5000);

// Charger la première image
chargerImage();

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function chargerCitation() {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();

  quoteEl.textContent = `"${data.quote}"`;
  authorEl.textContent = `— ${data.author}`;
}

newQuoteBtn.addEventListener("click", chargerCitation);

// Charger une première citation au démarrage
chargerCitation();




const slider = document.getElementById('image-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;
const images = [50];

function chargerImage() {
  const url = `https://picsum.photos/seed/${index}/500/300`;
  sliderImage.src = url;
}

function imageSuivante() {
  index = (index + 1) % totalImages;
  chargerImage();
}

function imagePrecedente() {
  index = (index - 1 + totalImages) % totalImages;
  chargerImage();
}

nextBtn.addEventListener("click", imageSuivante);
prevBtn.addEventListener("click", imagePrecedente);
setInterval(imageSuivante, 5000);



// Initialisation
loadImages();




const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Charger les tâches depuis localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToDOM(task));
}

// Ajouter une tâche
function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText) {
    addTaskToDOM(taskText);
    saveTasks();
    todoInput.value = '';
  }
}

function addTaskToDOM(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button class="delete-btn">×</button>
  `;
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
    saveTasks();
  });
  todoList.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#todo-list li').forEach(li => {
    tasks.push(li.childNodes[0].textContent.trim());
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTodoBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

// Initialisation
loadTasks();





const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function chargerCitation() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    quoteEl.textContent = `"${data.quote}"`;
    authorEl.textContent = `— ${data.author}`;
  } catch (error) {
    quoteEl.textContent = "Erreur de chargement 😢";
    authorEl.textContent = "";
  }
}

newQuoteBtn.addEventListener("click", chargerCitation);
  
// Charger une citation au démarrage
chargerCitation();