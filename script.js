const booths = [
  {
    id: 'canteen',
    title: 'Canteen',
    subtitle: 'Food, drinks, matcha activity, Japanese station, and mini games',
    items: [
      'Matcha activity: make it yourself for RM2, or ask us to brew it for RM4',
      'Matcha latte',
      'Primary food stalls: waffles and ice cream, floats and sodas, oden, chocolate balls',
      'Japanese Food Station: sushi rolls, takoyaki, chocolate marshmallows, onigiri',
      'Dolls, blind box, 3D clips, books, and other items',
      'Japanese rock paper scissors'
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
    subtitle: 'Talent and game shows',
    items: ['Talent show', 'Game show'],
    direction: 'Go to the Math Room for performances and game show activities.'
  },
  {
    id: 'court1',
    title: 'Court 1',
    subtitle: 'Sports game area',
    items: ['Basketball hoops'],
    direction: 'Go to Court 1 and look for the basketball hoops game station.'
  }
];

const badgeStations = [
  'Canteen',
  'Year 4B Fashion Booth',
  'Library',
  'Old Year 5 Room',
  'Math Room',
  'Court 1'
];

let html5QrCode;

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
    treasure: 'Treasure hunt mode activated. Beginner or Advance?',
    badges: 'Collect badges from every game station. Fastest 3 complete collectors can win a bigger prize!',
    scanner: 'QR and photo tools are ready. Please allow camera access only when needed.',
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
}

function renderBadges() {
  const panel = document.getElementById('badgePanel');
  panel.innerHTML = '';
  const collected = JSON.parse(localStorage.getItem('qosmoBadges') || '[]');

  badgeStations.forEach(station => {
    const isCollected = collected.includes(station);
    const card = document.createElement('article');
    card.className = `badge-card ${isCollected ? 'collected' : ''}`;
    card.innerHTML = `
      <div class="badge-icon">${isCollected ? '✓' : '☆'}</div>
      <div>
        <strong>${station}</strong><br>
        <small>${isCollected ? 'Collected' : 'Tap when collected'}</small>
      </div>
    `;
    card.onclick = () => toggleBadge(station);
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

function startScanner() {
  const qrResult = document.getElementById('qrResult');

  if (!window.Html5Qrcode) {
    qrResult.textContent = 'QR scanner library is not loaded. Please connect to the internet or use the non-scanner version.';
    return;
  }

  if (!html5QrCode) {
    html5QrCode = new Html5Qrcode('reader');
  }

  html5QrCode.start(
    { facingMode: 'environment' },
    { fps: 10, qrbox: { width: 220, height: 220 } },
    decodedText => {
      qrResult.textContent = `QR scanned: ${decodedText}`;
      document.getElementById('speechBox').innerHTML = `<strong>QR scanned!</strong> ${decodedText}`;
    },
    () => {}
  ).catch(error => {
    qrResult.textContent = `Unable to start camera: ${error}`;
  });
}

function stopScanner() {
  if (html5QrCode) {
    html5QrCode.stop().catch(() => {});
  }
}

function previewPhoto(event) {
  const file = event.target.files[0];
  const preview = document.getElementById('photoPreview');

  if (!file) return;

  const url = URL.createObjectURL(file);
  preview.src = url;
  preview.style.display = 'block';
  document.getElementById('speechBox').innerHTML = '<strong>Photo ready!</strong> Show your photo to the booth staff to complete the challenge.';
}

renderBooths();
populateDestinations();
renderBadges();
loadQuest();
