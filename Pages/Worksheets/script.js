// Activity data
const ACTIVITIES = {
    letterTracing: {
        title: "Letter Tracing",
        generator: generateLetterTracing
    },
    numberTracing: {
        title: "Number Tracing",
        generator: generateNumberTracing
    },
    matchLetterToEmoji: {
        title: "Match Letters to Pictures",
        generator: generateLetterMatching
    },
    circleCorrectLetter: {
        title: "Circle the Correct Letter",
        generator: generateCircleCorrectLetter
    },
    countAndCircle: {
        title: "Count and Circle",
        generator: generateCountAndCircle
    },
    matchNumberToObjects: {
        title: "Match Number to Objects",
        generator: generateMatchNumberToObjects
    },
    sortByCategory: {
        title: "Sort by Category",
        generator: generateSortByCategory
    },
    oddOneOut: {
        title: "Find the Odd One Out",
        generator: generateOddOneOut
    },
    completePattern: {
        title: "Complete the Pattern",
        generator: generateCompletePattern
    },
    dotToDot: {
        title: "Connect the Dots",
        generator: generateDotToDot
    }
};

// Fun adjectives and emojis for worksheet header
const FUN_ADJECTIVES = [
    'Amazing', 'Awesome', 'Brilliant', 'Cool', 'Exciting', 
    'Fantastic', 'Great', 'Happy', 'Incredible', 'Jolly', 
    'Magical', 'Marvelous', 'Phenomenal', 'Super', 'Wonderful'
];

const FUN_EMOJIS = [
    '🌟', '🎉', '🚀', '🦄', '🌈', '🎨', '🧩', '🔍', '🧠',
    '✨', '🤩', '🎯', '🏆', '🎊', '🤓', '👍', '🌻', '🦋'
];

// Emojis by category for activities
const EMOJIS = {
    animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🦆', '🦉'],
    fruits: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥'],
    vehicles: ['🚗', '🚕', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚚', '🚛', '🚜', '🛴', '🚲', '✈️', '🚂', '🚤', '🚁'],
    shapes: ['⭐', '⚡', '☁️', '⛄', '🌈', '🔺', '⚪', '◼️', '🔶', '💫'],
    food: ['🍕', '🍔', '🍟', '🌭', '🍿', '🧁', '🍩', '🍪', '🍦', '🍫', '🍭', '🍡', '🥞', '🧇'],
    faces: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🙂', '😊', '😇', '🥰', '😍', '🤩', '😋', '😛', '😜', '🤪', '😝']
};

// Letter-emoji associations for matching activities
const LETTER_EMOJI_PAIRS = {
    'A': ['🍎', '🐜', '🦅', '👽'],
    'B': ['🐝', '🍌', '🧸', '📚'],
    'C': ['🐱', '🍪', '🧁', '🥕'],
    'D': ['🐶', '🦌', '🍩', '💎'],
    'E': ['🥚', '🐘', '👁️', '📧'],
    'F': ['🐟', '🦊', '🍟', '🔥'],
    'G': ['🦒', '🍇', '🦍', '🎮'],
    'H': ['🏠', '🐹', '🧢', '🔨'],
    'I': ['🍦', '🦔', '👁️', '🏝️'],
    'J': ['🤹', '🕹️', '🧃', '👖'],
    'K': ['🪁', '🔑', '🦘', '🧪'],
    'L': ['🦁', '🍋', '🦎', '🪵'],
    'M': ['🐵', '🌙', '🍈', '🎵'],
    'N': ['👃', '📰', '🥜', '📝'],
    'O': ['🐙', '🍊', '👌', '⭕'],
    'P': ['🐼', '🍐', '🖊️', '📱'],
    'Q': ['👸', '🥗', '❓', '🔍'],
    'R': ['🐇', '🌈', '🤖', '🌹'],
    'S': ['🐍', '⭐', '🍓', '☀️'],
    'T': ['🐯', '🌮', '🌲', '🎪'],
    'U': ['🦄', '☂️', '⬆️', '🧠'],
    'V': ['🦺', '🏐', '🌋', '🧛'],
    'W': ['🐺', '🌊', '🚶', '⌚'],
    'X': ['📦', '❌', '🎸', '🎮'],
    'Y': ['🧶', '🪀', '💴', '🧒'],
    'Z': ['🦓', '⚡', '🧟', '🦊']
};

// DOM Elements
const worksheetContainer = document.getElementById('activities-container');
const generateBtn = document.getElementById('generate-btn');
const downloadBtn = document.getElementById('download-btn');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    updateWorksheetHeader();
    generateWorksheet();
});
generateBtn.addEventListener('click', generateWorksheet);
downloadBtn.addEventListener('click', downloadWorksheet);

// Main Functions
function generateWorksheet() {
    // Clear previous worksheet
    worksheetContainer.innerHTML = '';
    
    // Update the header with random emoji and adjective
    updateWorksheetHeader();
    
    // Select 4-6 random activities
    const numActivities = getRandomInt(4, 6);
    const selectedActivities = selectRandomActivities(numActivities);
    
    // Generate each activity
    selectedActivities.forEach(activity => {
        const activityElement = createActivityElement(activity.title, activity.generator());
        worksheetContainer.appendChild(activityElement);
    });
}

function downloadWorksheet() {
    const element = document.getElementById('worksheet');
    const stickers = document.querySelector('.sticker-controls');
    
    // Temporarily hide stickers
    if (stickers) {
        stickers.style.display = 'none';
    }
    
    // Use html2canvas to capture the worksheet as an image
    html2canvas(element, { scale: 2 }).then(canvas => {
        // Create a PDF using jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        // Calculate aspect ratio to fit A4
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('fun-worksheet.pdf');
        
        // Restore stickers
        if (stickers) {
            stickers.style.display = 'flex';
        }
    });
}

// Function to update the worksheet header with random emoji and adjective
function updateWorksheetHeader() {
    const randomEmoji = FUN_EMOJIS[getRandomInt(0, FUN_EMOJIS.length - 1)];
    const randomAdjective = FUN_ADJECTIVES[getRandomInt(0, FUN_ADJECTIVES.length - 1)];
    
    const headerTitle = document.querySelector('.worksheet-header h1');
    if (headerTitle) {
        headerTitle.innerHTML = `${randomEmoji} ${randomAdjective} Schoolwork ${randomEmoji}`;
    }
}

// Helper Functions
function selectRandomActivities(count) {
    const activityKeys = Object.keys(ACTIVITIES);
    const shuffled = [...activityKeys].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    
    return selected.map(key => ({
        title: ACTIVITIES[key].title,
        generator: ACTIVITIES[key].generator
    }));
}

function createActivityElement(title, content) {
    const activityDiv = document.createElement('div');
    activityDiv.className = 'activity';
    
    const titleElement = document.createElement('h3');
    titleElement.className = 'activity-title';
    titleElement.textContent = title;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'activity-content';
    contentDiv.innerHTML = content;
    
    activityDiv.appendChild(titleElement);
    activityDiv.appendChild(contentDiv);
    
    return activityDiv;
}

// Activity Generators
function generateLetterTracing() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let selectedLetters = '';
    
    // Select 4-6 random letters
    for (let i = 0; i < getRandomInt(4, 6); i++) {
        selectedLetters += letters.charAt(getRandomInt(0, letters.length - 1));
    }
    
    return `<div class="letter-tracing">${selectedLetters}</div>
            <p>Trace the letters above</p>`;
}

function generateNumberTracing() {
    const numbers = '0123456789';
    let selectedNumbers = '';
    
    // Select 4-6 random numbers
    for (let i = 0; i < getRandomInt(4, 6); i++) {
        selectedNumbers += numbers.charAt(getRandomInt(0, numbers.length - 1));
    }
    
    return `<div class="number-tracing">${selectedNumbers}</div>
            <p>Trace the numbers above</p>`;
}

function generateLetterMatching() {
    // Get 3 random letters
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letters = [];
    
    while (letters.length < 3) {
        const letter = alphabet.charAt(getRandomInt(0, alphabet.length - 1));
        if (!letters.includes(letter)) {
            letters.push(letter);
        }
    }
    
    // Get corresponding emojis
    const emojis = [];
    letters.forEach(letter => {
        const emoji = LETTER_EMOJI_PAIRS[letter][getRandomInt(0, LETTER_EMOJI_PAIRS[letter].length - 1)];
        emojis.push(emoji);
    });
    
    // Shuffle the emojis
    const shuffledEmojis = [...emojis].sort(() => 0.5 - Math.random());
    
    let html = '<div class="matching-activity">';
    
    // Create left column (letters)
    html += '<div class="matching-column">';
    letters.forEach(letter => {
        html += `<div class="matching-item left-item">${letter}</div>`;
    });
    html += '</div>';
    
    // Create right column (shuffled emojis)
    html += '<div class="matching-column">';
    shuffledEmojis.forEach(emoji => {
        html += `<div class="matching-item right-item">${emoji}</div>`;
    });
    html += '</div>';
    
    html += '</div>';
    
    html += '<p>Draw a line to match each letter with its picture</p>';
    return html;
}

function generateCircleCorrectLetter() {
    // Select a random letter
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const targetLetter = alphabet.charAt(getRandomInt(0, alphabet.length - 1));
    
    // Create array of letters with multiple instances of the target letter
    const letters = [];
    for (let i = 0; i < 15; i++) {
        if (i % 3 === 0) {
            letters.push(targetLetter);
        } else {
            // Add a random letter that's not the target
            let randomLetter;
            do {
                randomLetter = alphabet.charAt(getRandomInt(0, alphabet.length - 1));
            } while (randomLetter === targetLetter);
            letters.push(randomLetter);
        }
    }
    
    // Shuffle the array
    const shuffledLetters = letters.sort(() => 0.5 - Math.random());
    
    let html = `<p>Circle all the letter "${targetLetter}"</p>`;
    html += '<div class="circle-items">';
    
    shuffledLetters.forEach(letter => {
        html += `<span class="big-emoji">${letter}</span>`;
    });
    
    html += '</div>';
    return html;
}

function generateCountAndCircle() {
    // Random number between 1-5
    const targetNumber = getRandomInt(1, 5);
    
    // Create sets of emojis
    const html = `
        <p>Circle the group(s) that has ${targetNumber} items</p>
        <div class="circle-items">
    `;
    
    const groups = [];
    // Create 4 groups with different counts
    for (let i = 1; i <= 5; i++) {
        if (i === targetNumber) {
            // We need two groups with the target number
            groups.push(createEmojiGroup(i));
            groups.push(createEmojiGroup(i));
        } else {
            groups.push(createEmojiGroup(i));
        }
    }
    
    return html + groups.sort(() => 0.5 - Math.random()).join('') + '</div>';
}

function createEmojiGroup(count) {
    const category = getRandomCategory();
    const emojis = [];
    
    for (let i = 0; i < count; i++) {
        const randomIndex = getRandomInt(0, EMOJIS[category].length - 1);
        emojis.push(EMOJIS[category][randomIndex]);
    }
    
    return `<div class="counting-item">${emojis.join('')}</div>`;
}

function generateMatchNumberToObjects() {
    const numbers = [1, 2, 3, 4, 5];
    const selectedNumbers = numbers.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    // Create the emoji groups
    const emojiGroups = [];
    selectedNumbers.forEach(number => {
        const category = getRandomCategory();
        const emojis = [];
        
        for (let i = 0; i < number; i++) {
            const randomIndex = getRandomInt(0, EMOJIS[category].length - 1);
            emojis.push(EMOJIS[category][randomIndex]);
        }
        
        emojiGroups.push(emojis.join(''));
    });
    
    // Shuffle the emoji groups
    const shuffledEmojiGroups = [...emojiGroups].sort(() => 0.5 - Math.random());
    
    let html = '<div class="matching-activity">';
    
    // Create left column (numbers)
    html += '<div class="matching-column">';
    selectedNumbers.forEach(number => {
        html += `<div class="matching-item left-item">${number}</div>`;
    });
    html += '</div>';
    
    // Create right column (shuffled emoji groups)
    html += '<div class="matching-column">';
    shuffledEmojiGroups.forEach(group => {
        html += `<div class="matching-item right-item emoji-group">${group}</div>`;
    });
    html += '</div>';
    
    html += '</div>';
    
    html += '<p>Match each number with the correct number of objects</p>';
    return html;
}

function generateSortByCategory() {
    // Select two random categories
    const categories = Object.keys(EMOJIS);
    const selectedCategories = categories.sort(() => 0.5 - Math.random()).slice(0, 2);
    
    const items = [];
    
    // Add 3 items from each category
    selectedCategories.forEach(category => {
        const categoryEmojis = EMOJIS[category].sort(() => 0.5 - Math.random()).slice(0, 3);
        categoryEmojis.forEach(emoji => items.push(emoji));
    });
    
    // Shuffle the items
    const shuffledItems = items.sort(() => 0.5 - Math.random());
    
    const categoryLabels = {
        'animals': 'Animals',
        'fruits': 'Fruits',
        'vehicles': 'Vehicles',
        'shapes': 'Shapes',
        'food': 'Food',
        'faces': 'Faces'
    };
    
    let html = `<p>Circle the ${categoryLabels[selectedCategories[0]]} and cross out the ${categoryLabels[selectedCategories[1]]}</p>`;
    html += '<div class="sorting-item">';
    
    shuffledItems.forEach(item => {
        html += `<span class="emoji">${item}</span>`;
    });
    
    html += '</div>';
    return html;
}

function generateOddOneOut() {
    // Select a random category
    const categories = Object.keys(EMOJIS);
    const mainCategory = categories[getRandomInt(0, categories.length - 1)];
    
    // Get a different category for the odd one out
    let oddCategory;
    do {
        oddCategory = categories[getRandomInt(0, categories.length - 1)];
    } while (oddCategory === mainCategory);
    
    // Get 3 items from the main category
    const mainItems = EMOJIS[mainCategory].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    // Get 1 item from the odd category
    const oddItem = EMOJIS[oddCategory][getRandomInt(0, EMOJIS[oddCategory].length - 1)];
    
    // Combine and shuffle
    const allItems = [...mainItems, oddItem].sort(() => 0.5 - Math.random());
    
    let html = '<p>Circle the one that does not belong in the group</p>';
    html += '<div class="sorting-item">';
    
    allItems.forEach(item => {
        html += `<span class="emoji">${item}</span>`;
    });
    
    html += '</div>';
    return html;
}

function generateCompletePattern() {
    // Create a simple pattern with emojis
    const category = getRandomCategory();
    const emojis = EMOJIS[category].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    let patternType = getRandomInt(1, 3);
    let pattern = '';
    
    if (patternType === 1) {
        // ABABAB pattern
        pattern = `${emojis[0]} ${emojis[1]} ${emojis[0]} ${emojis[1]} <div class="missing"></div>`;
    } else if (patternType === 2) {
        // ABCABC pattern
        pattern = `${emojis[0]} ${emojis[1]} ${emojis[2]} ${emojis[0]} <div class="missing"></div>`;
    } else {
        // AABAA pattern
        pattern = `${emojis[0]} ${emojis[0]} ${emojis[1]} ${emojis[0]} <div class="missing"></div>`;
    }
    
    return `
        <p>What comes next in the pattern?</p>
        <div class="pattern">
            ${pattern}
        </div>
    `;
}

function generateDotToDot() {
    // Define a few simple shapes that can be formed
    const shapes = [
        { name: "star", points: [
            {x: 50, y: 10}, {x: 20, y: 90}, {x: 90, y: 40}, 
            {x: 10, y: 40}, {x: 80, y: 90}, {x: 50, y: 10}
        ]},
        { name: "house", points: [
            {x: 10, y: 70}, {x: 50, y: 10}, {x: 90, y: 70}, 
            {x: 90, y: 90}, {x: 10, y: 90}, {x: 10, y: 70}
        ]},
        { name: "heart", points: [
            {x: 50, y: 20}, {x: 30, y: 10}, {x: 10, y: 30},
            {x: 20, y: 60}, {x: 50, y: 90}, {x: 80, y: 60},
            {x: 90, y: 30}, {x: 70, y: 10}, {x: 50, y: 20}
        ]},
        { name: "boat", points: [
            {x: 20, y: 70}, {x: 40, y: 90}, {x: 80, y: 90}, 
            {x: 90, y: 70}, {x: 70, y: 50}, {x: 70, y: 30}, 
            {x: 30, y: 30}, {x: 10, y: 50}, {x: 20, y: 70}
        ]}
    ];
    
    // Select a random shape
    const shape = shapes[getRandomInt(0, shapes.length - 1)];
    
    // Use all points but limit to 10 if needed
    const usedPoints = shape.points.slice(0, Math.min(10, shape.points.length));
    
    // Create a container with dots positioned absolutely
    let dotsHtml = `
        <div class="dot-to-dot-container" style="position: relative; width: 100%; height: 200px; background-color: rgba(0, 0, 0, 0.03); border: 2px solid var(--border-color); border-radius: 8px;">
    `;
    
    // Debug logging to HTML comment to check points
    dotsHtml += `<!-- Using ${usedPoints.length} points -->`;
    
    // Add each dot as a positioned div
    for (let i = 0; i < usedPoints.length; i++) {
        const point = usedPoints[i];
        dotsHtml += `
            <div class="dot-point" style="position: absolute; left: ${point.x}%; top: ${point.y}%; width: 26px; height: 26px; 
                      margin-left: -13px; margin-top: -13px; background-color: var(--secondary-color); 
                      border-radius: 50%; display: flex; justify-content: center; align-items: center; 
                      color: white; font-weight: bold; font-size: 13px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                      z-index: ${100 - i};">
                ${i + 1}
            </div>
        `;
    }
    
    dotsHtml += `</div>`;
    
    return `
        <p>Connect the dots in order from 1 to ${usedPoints.length} to discover the ${shape.name}!</p>
        ${dotsHtml}
    `;
}

// Utility Functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCategory() {
    const categories = Object.keys(EMOJIS);
    return categories[getRandomInt(0, categories.length - 1)];
}
