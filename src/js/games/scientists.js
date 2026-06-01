export const initScientistsGame = () => {
  const container = document.querySelector('.game-id_10');

  const html = `
   <h3 class="scientists-title">Обери вченого/их</h3>

     <ul class="scientists-cards">
       <li class="scientists-card-item"><div class="scientist-name">Albert Einstein 1879-1955</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Isaac Newton 1643-1727</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Galileo Galilei 1564-1642</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Marie Curie 1867-1934</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Nicolaus Copernicus 1473-1543</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Charles Darwin 1809-1882</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Stephen Hawking 1942-2018</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Carl Sagan 1934-1996</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Ada Lovelace 1815-1852</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Alan Turing 1912-1954</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Sofia Kovalevskaya 1850-1891</div></li>
       <li class="scientists-card-item"><div class="scientist-name">Michael Faraday 1791-1867</div></li>
     </ul>

     <ul class="scientists-tasks">
       <li class="scientists-item"><button id="btn-born19" class="scientists-btn">Які вчені народилися в 19 ст.</button></li>
       <li class="scientists-item"><button id="btn-sortAlphabet" class="scientists-btn">Відсортувати за алфавітом</button></li>
       <li class="scientists-item"><button id="btn-sortLifespan" class="scientists-btn">Відсортувати вчених за кількістю прожитих років</button></li>
       <li class="scientists-item"><button id="btn-latestBorn" class="scientists-btn">Знайти вченого, який народився найпізніше</button></li>
       <li class="scientists-item"><button id="btn-einstein" class="scientists-btn">Знайти рік народження Albert Einstein</button></li>
       <li class="scientists-item"><button id="btn-lastNameC" class="scientists-btn">Знайти вчених, прізвища яких починаються на “С”</button></li>
       <li class="scientists-item"><button id="btn-removeA" class="scientists-btn">Видалити всіх вчених, ім’я яких починається на “А”</button></li>
       <li class="scientists-item"><button id="btn-longShort" class="scientists-btn">Знайти вченого, який прожив найдовше і найменше</button></li>
       <li class="scientists-item"><button id="btn-sameInitials" class="scientists-btn">1. Знайти вчених, в яких співпадають перші літери імені і прізвища</button></li>
     </ul>
  `;

  container.innerHTML = html;

  const cardsContainer = container.querySelector('.scientists-cards');

  const getCards = () =>
    Array.from(cardsContainer.querySelectorAll('.scientists-card-item'));

  const getBirth = text => {
    const years = text.slice(text.length - 9);

    const year1 = years[0];
    const year2 = years[1];
    const year3 = years[2];
    const year4 = years[3];

    return (year1 + year2 + year3 + year4) * 1;
  };

  const getDeath = text => {
    const years = text.slice(text.length - 9);

    const death1 = years[5];
    const death2 = years[6];
    const death3 = years[7];
    const death4 = years[8];

    return (death1 + death2 + death3 + death4) * 1;
  };

  const getLife = text => getDeath(text) - getBirth(text);

  // =====================================================
  const btnBorn19 = container.querySelector('#btn-born19');

  const handleBorn19 = () => {
    const cards = getCards();

    const filtered = cards.filter(card => {
      const birth = getBirth(card.textContent);
      return birth >= 1801 && birth <= 1900;
    });

    cardsContainer.innerHTML = '';
    filtered.forEach(card => cardsContainer.appendChild(card));
  };

  btnBorn19.addEventListener('click', handleBorn19);

  // =====================================================
  const btnSortAlphabet = container.querySelector('#btn-sortAlphabet');

  const handleSortAlphabet = () => {
    const cards = getCards();
    const sorted = cards.sort((a, b) =>
      a.textContent.localeCompare(b.textContent)
    );
    cardsContainer.innerHTML = '';
    sorted.forEach(card => cardsContainer.appendChild(card));
  };

  btnSortAlphabet.addEventListener('click', handleSortAlphabet);

  // =====================================================
  const btnSortLifespan = container.querySelector('#btn-sortLifespan');

  const handleSortLifespan = () => {
    const cards = getCards();
    const sorted = cards.sort((a, b) => {
      return getLife(b.textContent) - getLife(a.textContent);
    });
    cardsContainer.innerHTML = '';
    sorted.forEach(card => cardsContainer.appendChild(card));
  };

  btnSortLifespan.addEventListener('click', handleSortLifespan);

  // =====================================================
  const btnLatestBorn = container.querySelector('#btn-latestBorn');

  const handleLatestBorn = () => {
    const cards = getCards();
    let latest = cards[0];

    cards.forEach(card => {
      if (getBirth(card.textContent) > getBirth(latest.textContent)) {
        latest = card;
      }
    });

    cardsContainer.innerHTML = '';
    cardsContainer.appendChild(latest);
  };

  btnLatestBorn.addEventListener('click', handleLatestBorn);

  // =====================================================
  const btnEinstein = container.querySelector('#btn-einstein');

  const handleEinstein = () => {
    const cards = getCards();
    let einsteinCard = null;

    cards.forEach(card => {
      if (card.textContent.indexOf('Albert Einstein') !== -1) {
        einsteinCard = card;
      }
    });

    if (einsteinCard !== null) {
      cardsContainer.innerHTML = '';
      cardsContainer.appendChild(einsteinCard);
    }
  };

  btnEinstein.addEventListener('click', handleEinstein);

  // =====================================================
  const btnLastNameC = container.querySelector('#btn-lastNameC');

  const handleLastNameC = () => {
    const cards = getCards();
    cards.forEach(card => {
      const parts = card.textContent.split(' ');
      const last = parts[1];
      if (last[0] !== 'C') card.remove();
    });
  };

  btnLastNameC.addEventListener('click', handleLastNameC);

  // =====================================================
  const btnRemoveA = container.querySelector('#btn-removeA');

  const handleRemoveA = () => {
    const cards = getCards();
    cards.forEach(card => {
      const first = card.textContent.split(' ')[0];
      if (first[0] === 'A') card.remove();
    });
  };

  btnRemoveA.addEventListener('click', handleRemoveA);

  // =====================================================
  const btnLongShort = container.querySelector('#btn-longShort');

  const handleLongShort = () => {
    const cards = getCards();

    let longest = cards[0];
    let shortest = cards[0];

    cards.forEach(card => {
      const life = getLife(card.textContent);
      if (life > getLife(longest.textContent)) longest = card;
      if (life < getLife(shortest.textContent)) shortest = card;
    });

    cardsContainer.innerHTML = '';
    cardsContainer.appendChild(longest);
    cardsContainer.appendChild(shortest);
  };

  btnLongShort.addEventListener('click', handleLongShort);

  // =====================================================
  const btnSameInitials = container.querySelector('#btn-sameInitials');

  const handleSameInitials = () => {
    const cards = getCards();
    cards.forEach(card => {
      const parts = card.textContent.split(' ');
      const first = parts[0][0];
      const last = parts[1][0];
      if (first !== last) card.remove();
    });
  };

  btnSameInitials.addEventListener('click', handleSameInitials);
};
