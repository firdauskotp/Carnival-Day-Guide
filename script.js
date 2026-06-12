const booths = [
  {
    id: 'canteen',
    title: 'Canteen',
    subtitle: 'Food, drinks, matcha activity, Japanese station, and mini items',
    items: [
      'Matcha activity: make it yourself for RM2, or ask us to brew it for RM4',
      'Matcha latte',
      'Primary food stalls: waffles and ice cream, floats and sodas, oden, chocolate balls',
      'Japanese Food Station: sushi rolls, takoyaki, chocolate marshmallows, onigiri',
      'Dolls, blind box, 3D clips, books, and other small items'
    ],
    direction: 'Head to the Canteen area. Look for the food stalls, matcha area, and Japanese Food Station.'
  },
  {
    id: 'year4b',
    title: 'Year 4B',
    subtitle: 'Fashion Booth',
    items: ['Henna art', 'Bracelet making', 'Drawing booth'],
    direction: 'Go to the Year 4B classroom. This is the Fashion Booth area.'
  },
  {
    id: 'library',
    title: 'Library',
    subtitle: 'Treasure hunt and maze game',
    items: ['Treasure hunt', 'Maze game', 'Beginner and Advance treasure hunt levels available'],
    direction: 'Go to the Library. Ask the booth crew whether you want Beginner or Advance treasure hunt.'
  },
  {
    id: 'oldyear5',
    title: 'Old Year 5 Room',
    subtitle: 'Between French Room and Year 3B Room',
    items: ['3D Station: 3D keychain printing of your own name', 'Thrift shop', 'Dolls, blind boxes, 3D clips, books, and more items may be found here'],
    direction: 'Find the room between the French Room and Year 3B Room. That is the Old Year 5 Room.'
  },
  {
    id: 'mathroom',
    title: 'Math Room',
    subtitle: 'Talent show, game show, and Jankenpon',
    items: ['Talent show', 'Game show', 'Japanese Rock Paper Scissors: Jankenpon'],
    direction: 'Go to the Math Room for performances, game show activities, and the Jankenpon challenge.'
  },
  {
    id: 'court1',
    title: 'Court 1',
    subtitle: 'Sports game area',
    items: ['Basketball hoops'],
    direction: 'Go to Court 1 and look for the basketball hoops game station.'
  }
];

const games = [
  {
    id: 'basketball',
    title: 'Basketball Hoops',
    location: 'Court 1',
    description: 'Score from before the white line 3 times in a row to get a food discount and a badge.',
    badgeImage: 'badges/badge-basketball.png'
  },
  {
    id: 'matcha',
    title: 'Matcha Activity',
    location: 'Canteen',
    description: 'Make your own matcha for RM2, or ask us to brew it for RM4. Matcha latte is also available.'
  },
  {
    id: 'treasurehunt',
    title: 'Treasure Hunt',
    location: 'Library',
    description: 'Hunt for all the pictures. Choose Beginner for easier clues or Advance for better prize chances.',
    badgeImage: 'badges/badge-treasure-hunt.png'
  },
  {
    id: 'maze',
    title: 'Maze Game',
    location: 'Library',
    description: 'Try to escape the maze. Advance treasure hunt players should keep their eyes open for an extra photo clue.',
    badgeImage: 'badges/badge-maze.png'
  },
  {
    id: 'gameshow',
    title: 'Game Show',
    location: 'Math Room',
    description: 'Answer our trivia questions to win. Think fast and trust your knowledge!',
    badgeImage: 'badges/badge-game-show.png'
  },
  {
    id: 'jankenpon',
    title: 'Japanese Rock Paper Scissors: Jankenpon',
    location: 'Math Room',
    description: 'Beat our captain to win! Say “Jan-ken-pon!” and show rock, paper, or scissors. Rock beats scissors, scissors beats paper, and paper beats rock.',
    badgeImage: 'badges/badge-jankenpon.png'
  }
];

const activities = [
  {
    id: 'thriftshop',
    title: 'Thrift Shop',
    location: 'Old Year 5 Room',
    description: 'Get unique items for a fair price, including dolls, blind boxes, books, 3D clips, and more.'
  },
  {
    id: '3dprinting',
    title: '3D Printing Station',
    location: 'Old Year 5 Room',
    description: 'Learn about 3D printing and print a keychain with your own name on it.'
  },
  {
    id: 'drawing',
    title: 'Drawing Booth',
    location: 'Year 4B',
    description: 'Let our artists draw you in an anime style and make bookmarks for a fair price.'
  },
  {
    id: 'bracelet',
    title: 'Bracelet Making',
    location: 'Year 4B',
    description: 'Use beads to make friendship bracelets for yourself or your friends.'
  },
  {
    id: 'henna',
    title: 'Henna Art',
    location: 'Year 4B',
    description: 'Decorate your hands with beautiful henna designs at the Fashion Booth.'
  }
];

const crocodylusBadges = [
  {
    id: 'jankenpon',
    title: 'Jankenpon Badge',
    game: 'Japanese Rock Paper Scissors',
    location: 'Math Room',
    image: 'badges/badge-jankenpon.png'
  },
  {
    id: 'gameshow',
    title: 'Game Show Badge',
    game: 'Game Show',
    location: 'Math Room',
    image: 'badges/badge-game-show.png'
  },
  {
    id: 'basketball',
    title: 'Basketball Badge',
    game: 'Basketball Hoops',
    location: 'Court 1',
    image: 'badges/badge-basketball.png'
  },
  {
    id: 'treasurehunt',
    title: 'Treasure Hunt Badge',
    game: 'Treasure Hunt',
    location: 'Library',
    image: 'badges/badge-treasure-hunt.png'
  },
  {
    id: 'maze',
    title: 'Maze Badge',
    game: 'Maze Game',
    location: 'Library',
    image: 'badges/badge-maze.png'
  }
];

const badgeStations = crocodylusBadges.map(badge => badge.title);

function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active-section');
  });
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.section === sectionId);
  });

  document.getElementById(sectionId).classList.add('active-section');

  const sectionNames = {
    booths: 'Choose a booth and I will guide you there.',
    games: 'Game list loaded. Win them to collect badges and complete quests.',
    activities: 'Activity list loaded. Try something creative or visit the shops.',
    treasure: 'Treasure hunt mode activated. Beginner or Advance?',
    crocodylus: 'Crocodylus Quest activated. Collect the 5 required badges as fast as you can!',
    badges: 'Collect all 5 Crocodylus Quest badges. Fastest 3 complete collectors can win a bigger prize!',
    map: 'Select a destination and I will show directions.'
  };

  document.getElementById('speechBox').innerHTML = `I’m <strong>FIR-ALTER</strong>. ${sectionNames[sectionId]}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderBooths(list = booths) {
  const grid = document.getElementById('boothGrid');
  grid.innerHTML = '';

  list.forEach(booth => {
    const card = document.createElement('article');
    card.className = 'booth-card';
    card.innerHTML = `
      <span class="location-pill">${booth.title}</span>
      <h3>${booth.subtitle}</h3>
      <ul class="item-list">
        ${booth.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <button onclick="guideTo('${booth.id}')">Guide me here</button>
    `;
    grid.appendChild(card);
  });
}

function renderGames() {
  const grid = document.getElementById('gameGrid');
  grid.innerHTML = '';

  games.forEach(game => {
    const card = document.createElement('article');
    card.className = 'info-card game-card';
    const badgeImage = game.badgeImage ? `<img class="mini-badge" src="${game.badgeImage}" alt="${game.title} badge">` : '';
    card.innerHTML = `
      <div class="game-card-header">
        ${badgeImage}
        <div>
          <span class="location-pill">${game.location}</span>
          <h3>${game.title}</h3>
        </div>
      </div>
      <p>${game.description}</p>
      <button onclick="guideToLocation('${game.location}')">Guide me here</button>
    `;
    grid.appendChild(card);
  });
}

function renderActivities() {
  const grid = document.getElementById('activityGrid');
  grid.innerHTML = '';

  activities.forEach(activity => {
    const card = document.createElement('article');
    card.className = 'info-card activity-card';
    card.innerHTML = `
      <span class="location-pill">${activity.location}</span>
      <h3>${activity.title}</h3>
      <p>${activity.description}</p>
      <button onclick="guideToLocation('${activity.location}')">Guide me here</button>
    `;
    grid.appendChild(card);
  });
}

function renderCrocodylusBadges() {
  const grid = document.getElementById('crocodylusBadgeGrid');
  if (!grid) return;

  grid.innerHTML = crocodylusBadges.map(badge => `
    <article class="required-badge-card">
      <img src="${badge.image}" alt="${badge.title}">
      <h4>${badge.title}</h4>
      <p>${badge.game}</p>
      <span>${badge.location}</span>
    </article>
  `).join('');
}

function filterBooths() {
  const keyword = document.getElementById('boothSearch').value.toLowerCase().trim();
  const filtered = booths.filter(booth => {
    const text = `${booth.title} ${booth.subtitle} ${booth.items.join(' ')}`.toLowerCase();
    return text.includes(keyword);
  });
  renderBooths(filtered);
}

function guideTo(id) {
  const booth = booths.find(item => item.id === id);
  if (!booth) return;

  document.getElementById('speechBox').innerHTML = `<strong>${booth.title} selected.</strong> ${booth.direction}`;
  showSection('map');
  document.getElementById('destination').value = id;
  showDirections();
}

function guideToLocation(locationName) {
  const fallbackMap = {
    'Year 4B': 'year4b',
    'Old Year 5 Room': 'oldyear5',
    'Math Room': 'mathroom',
    'Court 1': 'court1',
    'Library': 'library',
    'Canteen': 'canteen'
  };

  if (fallbackMap[locationName]) {
    guideTo(fallbackMap[locationName]);
    return;
  }

  const booth = booths.find(item => locationName.toLowerCase().includes(item.title.toLowerCase()) || item.title.toLowerCase().includes(locationName.toLowerCase()));
  if (booth) guideTo(booth.id);
}

function populateDestinations() {
  const select = document.getElementById('destination');
  booths.forEach(booth => {
    const option = document.createElement('option');
    option.value = booth.id;
    option.textContent = booth.title;
    select.appendChild(option);
  });
}

function showDirections() {
  const id = document.getElementById('destination').value;
  const result = document.getElementById('directionResult');
  const booth = booths.find(item => item.id === id);

  if (!booth) {
    result.textContent = 'Choose a booth to view directions.';
    return;
  }

  result.innerHTML = `<strong>${booth.title}</strong><br>${booth.direction}`;
}

function startQuest(level) {
  const message = `${level} Treasure Hunt selected. Go to the Library to begin. Remember to collect badges from each game station too!`;
  localStorage.setItem('qosmoQuestLevel', level);
  document.getElementById('questStatus').textContent = message;
  document.getElementById('speechBox').innerHTML = `<strong>${level} Quest activated.</strong> ${message}`;
}

function loadQuest() {
  const level = localStorage.getItem('qosmoQuestLevel');
  if (level) {
    document.getElementById('questStatus').textContent = `${level} Treasure Hunt selected. Go to the Library to continue.`;
  }

  const crocodylusStarted = localStorage.getItem('crocodylusQuestStarted');
  if (crocodylusStarted === 'yes') {
    document.getElementById('crocodylusStatus').textContent = 'Crocodylus Quest started. Collect all 5 badges: Jankenpon, Game Show, Basketball, Treasure Hunt, and Maze.';
  }
}

function startCrocodylusQuest() {
  localStorage.setItem('crocodylusQuestStarted', 'yes');
  document.getElementById('crocodylusStatus').textContent = 'Crocodylus Quest started. Collect all 5 badges: Jankenpon, Game Show, Basketball, Treasure Hunt, and Maze!';
  document.getElementById('speechBox').innerHTML = '<strong>Crocodylus Quest started!</strong> Collect all 5 badges quickly. 3 winners will be chosen based on speed and completion.';
}

function renderBadges() {
  const panel = document.getElementById('badgePanel');
  panel.innerHTML = '';
  const collected = JSON.parse(localStorage.getItem('qosmoBadges') || '[]');

  crocodylusBadges.forEach(badge => {
    const isCollected = collected.includes(badge.title);
    const card = document.createElement('article');
    card.className = `badge-card visual-badge-card ${isCollected ? 'collected' : ''}`;
    card.innerHTML = `
      <img src="${badge.image}" alt="${badge.title}" class="badge-card-image">
      <div class="badge-copy">
        <strong>${badge.title}</strong><br>
        <small>${badge.game} - ${badge.location}</small><br>
        <span class="badge-status">${isCollected ? 'Collected' : 'Tap when collected'}</span>
      </div>
    `;
    card.onclick = () => toggleBadge(badge.title);
    panel.appendChild(card);
  });
}

function toggleBadge(station) {
  let collected = JSON.parse(localStorage.getItem('qosmoBadges') || '[]');

  if (collected.includes(station)) {
    collected = collected.filter(item => item !== station);
  } else {
    collected.push(station);
  }

  localStorage.setItem('qosmoBadges', JSON.stringify(collected));
  renderBadges();

  if (collected.length === badgeStations.length) {
    document.getElementById('speechBox').innerHTML = '<strong>Badge quest complete!</strong> Show this to the carnival crew. If you are among the fastest 3, you may win an even bigger prize!';
  }
}

function resetBadges() {
  localStorage.removeItem('qosmoBadges');
  renderBadges();
}

renderBooths();
renderGames();
renderActivities();
renderCrocodylusBadges();
populateDestinations();
renderBadges();
loadQuest();
