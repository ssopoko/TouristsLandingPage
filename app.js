// JavaScript code
const cardsContainer = document.querySelector('.cards-container');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const closeBtn = document.querySelector('.close');

// Array of data for the cards
const data = [
  {
    title: 'FLIGHT BOOKING',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    imgUrl: './images/john-mcarthur-703645-unsplash.png'
  },
  {
    title: 'HOTER & RESORT BOOKING',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    imgUrl: './images/shawn-lee-785068-unsplash.png'
  },
  {
    title: 'FAMILY TRIP PLANNER',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    imgUrl: './images/natalya-zaritskaya-144626-unsplash.png'
  },
  {
    title: 'CRUISE TOUR',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    imgUrl: './images/vidar-nordli-mathisen-559120-unsplash.png'
  },
  {
    title: 'FIRE CAMP',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    imgUrl: './images/robson-hatsukami-morgan-178532-unsplash.png'
  },
  {
    title: 'CORPORATE HOLIDAYS',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    imgUrl: './images/mimi-thian-737711-unsplash.png'
  }
];

// Generate the cards from the data array
data.forEach(card => {
  const cardHtml = `
    <div class="card">
      <img class="card-img" src="${card.imgUrl}" alt="${card.title}">
      <h2 class="card-title">${card.title}</h2>
      <p class="card-description">${card.description}</p>
    </div>
    
  `;
  cardsContainer.insertAdjacentHTML('beforeend', cardHtml);
});

const count1 = document.getElementById('count1');
const count2 = document.getElementById('count2');
const count3 = document.getElementById('count3');
const count4 = document.getElementById('count4');

const target1 = 1200; 
const target2 = 2594; 
const target3 = 854;
const target4 = 978; 

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

setInterval(() => {
  if (counter1 < target1) {
    counter1++;
    count1.innerText = counter1;
  }
  if (counter2 < target2) {
    counter2++;
    count2.innerText = counter2;
  }
  if (counter3 < target3) {
    counter3++;
    count3.innerText = counter3;
  }
  if (counter4 < target4) {
    counter4++;
    count4.innerText = counter4;
  }
}, 1);
// // Open the modal when a card is clicked
// cardsContainer.addEventListener('click', e => {
//   if (e.target.classList.contains('card')) {
//     const card = e.target;
//     const cardImgUrl = card.querySelector('.card-img').getAttribute('src');
//     const cardTitle = card.querySelector('.card-title').textContent;
//     const cardDescription = card.querySelector('.card-description').textContent;
    
//     modalImg.setAttribute('src', cardImgUrl);
//     modalTitle.textContent = cardTitle;
//     modalDescription.textContent = cardDescription;
//     modal.style.display = 'block';
//   }
// });

// // Close the modal when the close button is clicked
// closeBtn.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// // Close the modal when the user clicks outside of it
// window.addEventListener('click', e => {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// });