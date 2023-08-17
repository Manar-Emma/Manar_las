
const temoin = document.querySelectorAll('.temoin');
const prevyButton = document.querySelector('.prevy');
const nextyButton = document.querySelector('.nexty');
const indicatorsContainer = document.querySelector('.indicators');

let currentindex = 0;

function showtemoin(index) {
  temoin.forEach((card, i) => {
    if (i === index) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
    // Update active indicator
    const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });



  prevyButton.disabled = currentindex === 0;
  nextyButton.disabled = currentindex === temoin.length - 1;

}

function prevyCard() {
  currentindex = (currentindex - 1 + temoin.length) % temoin.length;
  showtemoin(currentindex);
}



function nextyCard() {
  currentindex = (currentindex + 1) % temoin.length;
  showtemoin(currentindex);
}


// Create indicators dynamically
for (let i = 0; i < temoin.length; i++) {
  const indicator = document.createElement('div');
  indicator.className = 'indicator';
  indicator.addEventListener('click', () => showCard(i));
  indicatorsContainer.appendChild(indicator);
}

prevyButton.addEventListener('click', prevyCard);
nextyButton.addEventListener('click', nextyCard);

// Show the initial card
showtemoin(currentindex);




        const cards = document.querySelectorAll('.card');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        
        let startIndex = 0;
        
        function showCards(start) {
          for (let i = 0; i < cards.length; i++) {
            if (i >= start && i < start + 3) {
              cards[i].style.display = 'flex';
            } else {
              cards[i].style.display = 'none';
            }
          }
          prevButton.disabled = startIndex === 0;
  nextButton.disabled = startIndex >= cards.length - 3;
        }
        
        function prevCards() {
          startIndex = Math.max(0, startIndex - 1);
          showCards(startIndex);
        }
        
        function nextCards() {
          startIndex = Math.min(cards.length - 3, startIndex + 1);
          showCards(startIndex);
        }
        
        prevButton.addEventListener('click', prevCards);
        nextButton.addEventListener('click', nextCards);
        
        // Show the initial set of cards
        showCards(startIndex);
        
  