const suits = ['♥', '♦', '♣', '♠'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function getRandomCard(deck) {
  const index = Math.floor(Math.random() * deck.length);
  return deck.splice(index, 1)[0];
}

function dealCards() {
  const deck = [];
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push(`${rank}${suit}`);
    }
  }

  const cards1 = [];
  const cards2 = [];

  for (let i = 0; i < 6; i++) {
    cards1.push(getRandomCard(deck));
    cards2.push(getRandomCard(deck));
  }

  renderCards('cards1', cards1);
  renderCards('cards2', cards2);
}

function renderCards(containerId, cards) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (const card of cards) {
    const div = document.createElement('div');
    div.className = 'card';
    div.textContent = card;
    container.appendChild(div);
  }
}
