// Load the week data
async function loadWeekData() {
    try {
        const response = await fetch('week1.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading week data:', error);
        return null;
    }
}

// Create a day card
function createDayCard(day) {
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';

    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    dayHeader.innerHTML = `
        <h2 class="day-name">${day.day} ${day.emoji}</h2>
        <div class="day-theme">${day.theme}</div>
    `;

    const activityList = document.createElement('ul');
    activityList.className = 'activity-list';

    day.activities.forEach(activity => {
        const activityItem = document.createElement('li');
        activityItem.className = 'activity-item';
        activityItem.setAttribute('data-id', activity.id);
        if (activity.completed) {
            activityItem.classList.add('completed');
        }

        activityItem.innerHTML = `
            <div class="activity-title">${activity.title} ${activity.emoji || ''}</div>
            <div class="activity-description">${activity.description}</div>
        `;

        activityItem.addEventListener('click', () => toggleActivity(activity.id));
        activityList.appendChild(activityItem);
    });

    dayCard.appendChild(dayHeader);
    dayCard.appendChild(activityList);
    return dayCard;
}

// Toggle activity completion
function toggleActivity(activityId) {
    const activityElement = document.querySelector(`[data-id="${activityId}"]`);
    if (activityElement) {
        activityElement.classList.toggle('completed');
        updateProgress();
        saveProgress();
    }
}

// Update progress bar
function updateProgress() {
    const totalActivities = document.querySelectorAll('.activity-item').length;
    const completedActivities = document.querySelectorAll('.activity-item.completed').length;
    const progressPercentage = (completedActivities / totalActivities) * 100;

    const progressBar = document.getElementById('weekProgress');
    const progressText = document.getElementById('progressPercentage');

    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `${Math.round(progressPercentage)}%`;
}

// Save progress to localStorage
function saveProgress() {
    const progress = {};
    document.querySelectorAll('.activity-item').forEach(item => {
        progress[item.getAttribute('data-id')] = item.classList.contains('completed');
    });
    localStorage.setItem('kaliaProgress', JSON.stringify(progress));
}

// Load progress from localStorage
function loadProgress() {
    const progress = JSON.parse(localStorage.getItem('kaliaProgress')) || {};
    Object.entries(progress).forEach(([id, completed]) => {
        const activityElement = document.querySelector(`[data-id="${id}"]`);
        if (activityElement && completed) {
            activityElement.classList.add('completed');
        }
    });
    updateProgress();
}

// Populate book lists
function populateBooks(books) {
    const englishList = document.getElementById('englishBooks');
    const spanishList = document.getElementById('spanishBooks');

    function createBookElement(book) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="book-title">${book.title}</div>
            <div class="book-description">${book.description}</div>
        `;
        return li;
    }

    books.english.forEach(book => {
        englishList.appendChild(createBookElement(book));
    });

    books.spanish.forEach(book => {
        spanishList.appendChild(createBookElement(book));
    });
}

// Initialize the application
async function initializeApp() {
    const weekData = await loadWeekData();
    if (weekData) {
        const daysContainer = document.getElementById('daysContainer');
        weekData.days.forEach(day => {
            daysContainer.appendChild(createDayCard(day));
        });
        populateBooks(weekData.recommendedBooks);
        loadProgress();
    }
}

// Start the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp); 