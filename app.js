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

const countItems = document.querySelectorAll('.count-number');

const options = {
  rootMargin: '0px',
  threshold: 0.5
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const endValue = parseInt(target.dataset.end);
      let startValue = parseInt(target.dataset.start);
      const duration = 2000; // milliseconds
      const stepTime = Math.abs(Math.floor(duration / (endValue - startValue)));

      const countAnimation = setInterval(() => {
        startValue += 1;
        target.textContent = startValue;

        if (startValue >= endValue) {
          target.textContent = endValue;
          clearInterval(countAnimation);
        }
      }, stepTime);
    }
  })
}, options);

countItems.forEach(item => {
  observer.observe(item);
})



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