document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const activityTypeSelect = document.getElementById('activity-type');
    const activityOptionsDiv = document.getElementById('activity-options');
    const activityList = document.getElementById('activity-list');
    const activityPlaceholder = document.getElementById('activity-placeholder');
    const addActivityBtn = document.getElementById('add-activity-btn');
    const generateButton = document.getElementById('generate-btn');
    const worksheetTitle = document.getElementById('worksheet-title');
    const worksheetContent = document.getElementById('worksheet-content');
    const printButton = document.getElementById('print-btn');
    const newButton = document.getElementById('new-btn');

    // Store activities for the worksheet
    let worksheetActivities = [];

    // Emoji mappings for letter matching
    const letterEmojiMap = {
        'A': ['🍎', 'Apple'],
        'B': ['🍌', 'Banana'],
        'C': ['🍪', 'Cookie'],
        'D': ['🦮', 'Dog'],
        'E': ['🥚', 'Egg'],
        'F': ['🐟', 'Fish'],
        'G': ['🍇', 'Grapes'],
        'H': ['🏠', 'House'],
        'I': ['🍦', 'Ice cream'],
        'J': ['🧃', 'Juice'],
        'K': ['🪁', 'Kite'],
        'L': ['🦁', 'Lion'],
        'M': ['🌙', 'Moon'],
        'N': ['📰', 'Newspaper'],
        'O': ['🦉', 'Owl'],
        'P': ['🥞', 'Pancakes'],
        'Q': ['👸', 'Queen'],
        'R': ['🌈', 'Rainbow'],
        'S': ['🌞', 'Sun'],
        'T': ['🐯', 'Tiger'],
        'U': ['☂️', 'Umbrella'],
        'V': ['🚐', 'Van'],
        'W': ['🐺', 'Wolf'],
        'X': ['🎸', 'Xylophone'],
        'Y': ['🪀', 'Yo-yo'],
        'Z': ['🦓', 'Zebra']
    };

    // Initial setup
    updateActivityOptions();

    // Event listeners
    activityTypeSelect.addEventListener('change', updateActivityOptions);
    addActivityBtn.addEventListener('click', addActivityToWorksheet);
    generateButton.addEventListener('click', generateWorksheet);
    printButton.addEventListener('click', printWorksheet);
    newButton.addEventListener('click', resetWorksheet);

    // Update options based on selected activity
    function updateActivityOptions() {
        const selectedActivity = activityTypeSelect.value;
        activityOptionsDiv.innerHTML = '';

        switch (selectedActivity) {
            case 'letter-tracing':
                activityOptionsDiv.innerHTML = `
                    <div class="form-group">
                        <label for="letters">Letters to trace:</label>
                        <select id="letters">
                            <option value="uppercase">Uppercase (A-Z)</option>
                            <option value="lowercase">Lowercase (a-z)</option>
                            <option value="vowels">Vowels (A, E, I, O, U)</option>
                            <option value="consonants">Consonants (B, C, D, F, ...)</option>
                            <option value="custom">Custom selection</option>
                        </select>
                    </div>
                    <div class="form-group" id="custom-letters-container" style="display: none;">
                        <label for="custom-letters">Enter letters (e.g., A B C):</label>
                        <input type="text" id="custom-letters" placeholder="A B C D E">
                    </div>
                `;

                const lettersSelect = document.getElementById('letters');
                const customLettersContainer = document.getElementById('custom-letters-container');
                
                lettersSelect.addEventListener('change', () => {
                    if (lettersSelect.value === 'custom') {
                        customLettersContainer.style.display = 'block';
                    } else {
                        customLettersContainer.style.display = 'none';
                    }
                });
                break;

            case 'number-tracing':
                activityOptionsDiv.innerHTML = `
                    <div class="form-group">
                        <label for="numbers">Numbers to trace:</label>
                        <select id="numbers">
                            <option value="1-10">1 to 10</option>
                            <option value="1-20">1 to 20</option>
                            <option value="custom">Custom selection</option>
                        </select>
                    </div>
                    <div class="form-group" id="custom-numbers-container" style="display: none;">
                        <label for="custom-numbers">Enter numbers (e.g., 1 2 3):</label>
                        <input type="text" id="custom-numbers" placeholder="1 2 3 4 5">
                    </div>
                `;

                const numbersSelect = document.getElementById('numbers');
                const customNumbersContainer = document.getElementById('custom-numbers-container');
                
                numbersSelect.addEventListener('change', () => {
                    if (numbersSelect.value === 'custom') {
                        customNumbersContainer.style.display = 'block';
                    } else {
                        customNumbersContainer.style.display = 'none';
                    }
                });
                break;

            case 'letter-emoji-matching':
                activityOptionsDiv.innerHTML = `
                    <div class="form-group">
                        <label for="matching-option">Letters to match:</label>
                        <select id="matching-option">
                            <option value="first-half">First half (A-M)</option>
                            <option value="second-half">Second half (N-Z)</option>
                            <option value="vowels">Vowels only</option>
                            <option value="custom">Custom selection</option>
                        </select>
                    </div>
                    <div class="form-group" id="custom-matching-container" style="display: none;">
                        <label for="custom-matching">Enter letters (e.g., A B C):</label>
                        <input type="text" id="custom-matching" placeholder="A B C D E">
                    </div>
                `;

                const matchingSelect = document.getElementById('matching-option');
                const customMatchingContainer = document.getElementById('custom-matching-container');
                
                matchingSelect.addEventListener('change', () => {
                    if (matchingSelect.value === 'custom') {
                        customMatchingContainer.style.display = 'block';
                    } else {
                        customMatchingContainer.style.display = 'none';
                    }
                });
                break;
        }
    }

    // Add the current activity configuration to the worksheet
    function addActivityToWorksheet() {
        const activityType = activityTypeSelect.value;
        let activityConfig = {
            type: activityType,
            options: {}
        };

        // Collect options based on activity type
        switch (activityType) {
            case 'letter-tracing':
                const lettersOption = document.getElementById('letters').value;
                activityConfig.options.lettersOption = lettersOption;
                
                if (lettersOption === 'custom') {
                    activityConfig.options.customLetters = document.getElementById('custom-letters').value.trim();
                }
                
                activityConfig.title = 'Letter Tracing';
                activityConfig.description = getActivityDescription(activityType, activityConfig.options);
                break;
                
            case 'number-tracing':
                const numbersOption = document.getElementById('numbers').value;
                activityConfig.options.numbersOption = numbersOption;
                
                if (numbersOption === 'custom') {
                    activityConfig.options.customNumbers = document.getElementById('custom-numbers').value.trim();
                }
                
                activityConfig.title = 'Number Tracing';
                activityConfig.description = getActivityDescription(activityType, activityConfig.options);
                break;
                
            case 'letter-emoji-matching':
                const matchingOption = document.getElementById('matching-option').value;
                activityConfig.options.matchingOption = matchingOption;
                
                if (matchingOption === 'custom') {
                    activityConfig.options.customMatching = document.getElementById('custom-matching').value.trim();
                }
                
                activityConfig.title = 'Match Letter to Picture';
                activityConfig.description = getActivityDescription(activityType, activityConfig.options);
                break;
        }

        // Add to activities array
        worksheetActivities.push(activityConfig);
        
        // Update activity list UI
        updateActivityListUI();
    }

    // Get a human-readable description of the activity
    function getActivityDescription(type, options) {
        switch (type) {
            case 'letter-tracing':
                switch (options.lettersOption) {
                    case 'uppercase': return 'Uppercase letters (A-Z)';
                    case 'lowercase': return 'Lowercase letters (a-z)';
                    case 'vowels': return 'Vowels (A, E, I, O, U)';
                    case 'consonants': return 'Consonants (B, C, D, F, ...)';
                    case 'custom': return `Custom letters: ${options.customLetters || 'A B C'}`;
                }
                break;
                
            case 'number-tracing':
                switch (options.numbersOption) {
                    case '1-10': return 'Numbers 1 to 10';
                    case '1-20': return 'Numbers 1 to 20';
                    case 'custom': return `Custom numbers: ${options.customNumbers || '1 2 3 4 5'}`;
                }
                break;
                
            case 'letter-emoji-matching':
                switch (options.matchingOption) {
                    case 'first-half': return 'Match letters A-M with pictures';
                    case 'second-half': return 'Match letters N-Z with pictures';
                    case 'vowels': return 'Match vowels with pictures';
                    case 'custom': return `Match custom letters: ${options.customMatching || 'A B C D E'}`;
                }
                break;
        }
        
        return 'Activity';
    }

    // Update the activity list UI
    function updateActivityListUI() {
        if (worksheetActivities.length === 0) {
            activityPlaceholder.style.display = 'block';
            activityList.innerHTML = '';
            activityList.appendChild(activityPlaceholder);
            return;
        }
        
        activityPlaceholder.style.display = 'none';
        activityList.innerHTML = '';
        
        worksheetActivities.forEach((activity, index) => {
            const activityItem = document.createElement('div');
            activityItem.className = 'activity-item';
            activityItem.innerHTML = `
                <div class="activity-info">
                    <strong>${activity.title}</strong>: ${activity.description}
                </div>
                <div class="activity-controls">
                    ${index > 0 ? `<button class="move-up-btn" data-index="${index}">↑</button>` : ''}
                    ${index < worksheetActivities.length - 1 ? `<button class="move-down-btn" data-index="${index}">↓</button>` : ''}
                    <button class="remove-btn" data-index="${index}">✕</button>
                </div>
            `;
            
            activityList.appendChild(activityItem);
        });
        
        // Add event listeners for activity controls
        document.querySelectorAll('.move-up-btn').forEach(btn => {
            btn.addEventListener('click', moveActivityUp);
        });
        
        document.querySelectorAll('.move-down-btn').forEach(btn => {
            btn.addEventListener('click', moveActivityDown);
        });
        
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', removeActivity);
        });
    }

    // Move activity up in the list
    function moveActivityUp(e) {
        const index = parseInt(e.target.dataset.index);
        if (index > 0) {
            // Swap with previous activity
            [worksheetActivities[index], worksheetActivities[index - 1]] = 
            [worksheetActivities[index - 1], worksheetActivities[index]];
            updateActivityListUI();
        }
    }

    // Move activity down in the list
    function moveActivityDown(e) {
        const index = parseInt(e.target.dataset.index);
        if (index < worksheetActivities.length - 1) {
            // Swap with next activity
            [worksheetActivities[index], worksheetActivities[index + 1]] = 
            [worksheetActivities[index + 1], worksheetActivities[index]];
            updateActivityListUI();
        }
    }

    // Remove activity from the list
    function removeActivity(e) {
        const index = parseInt(e.target.dataset.index);
        worksheetActivities.splice(index, 1);
        updateActivityListUI();
    }

    // Generate worksheet with all activities
    function generateWorksheet() {
        if (worksheetActivities.length === 0) {
            alert('Please add at least one activity to the worksheet!');
            return;
        }
        
        // Clear current content
        worksheetContent.innerHTML = '';
        
        // Generate each activity
        worksheetActivities.forEach((activity, index) => {
            const activitySection = document.createElement('div');
            activitySection.className = 'activity-section';
            
            // Add activity title with print-friendly class
            const activityTitle = document.createElement('h3');
            activityTitle.className = 'print-activity-title';
            activityTitle.textContent = `Activity ${index + 1}: ${activity.title}`;
            activitySection.appendChild(activityTitle);
            
            // Add a brief description/instruction for the activity
            const activityDescription = document.createElement('p');
            activityDescription.className = 'print-activity-description';
            activityDescription.textContent = activity.description;
            activitySection.appendChild(activityDescription);
            
            // Generate activity content based on type
            let activityContent;
            switch (activity.type) {
                case 'letter-tracing':
                    activityContent = generateLetterTracingContent(activity.options);
                    break;
                case 'number-tracing':
                    activityContent = generateNumberTracingContent(activity.options);
                    break;
                case 'letter-emoji-matching':
                    activityContent = generateLetterEmojiMatchingContent(activity.options);
                    break;
            }
            
            activitySection.appendChild(activityContent);
            worksheetContent.appendChild(activitySection);
        });
    }

    // Generate letter tracing content
    function generateLetterTracingContent(options) {
        let letters = [];
        
        switch (options.lettersOption) {
            case 'uppercase':
                letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
                break;
            case 'lowercase':
                letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
                break;
            case 'vowels':
                letters = 'AEIOU'.split('');
                break;
            case 'consonants':
                letters = 'BCDFGHJKLMNPQRSTVWXYZ'.split('');
                break;
            case 'custom':
                if (options.customLetters) {
                    // Split by spaces or commas
                    letters = options.customLetters.split(/[\s,]+/);
                } else {
                    letters = 'ABC'.split('');
                }
                break;
        }
        
        // Limit to a reasonable number for a grid layout
        if (letters.length > 15) {
            letters = letters.slice(0, 15);
        }
        
        const container = document.createElement('div');
        container.className = 'activity-content';
        
        // Add instructions
        const instructions = document.createElement('div');
        instructions.className = 'worksheet-instructions print-visible';
        instructions.innerHTML = '<p>Trace over each letter with your pencil. Follow the dotted outlines!</p>';
        container.appendChild(instructions);
        
        // Add tracing items
        const tracingContainer = document.createElement('div');
        tracingContainer.className = 'tracing-container';
        
        letters.forEach(letter => {
            const tracingItem = document.createElement('div');
            tracingItem.className = 'tracing-item';
            
            const tracingLetter = document.createElement('div');
            tracingLetter.className = 'tracing-letter';
            tracingLetter.textContent = letter;
            tracingLetter.setAttribute('data-letter', letter); // Used for the outlined version
            
            tracingItem.appendChild(tracingLetter);
            tracingContainer.appendChild(tracingItem);
        });
        
        container.appendChild(tracingContainer);
        return container;
    }
    
    // Generate number tracing content
    function generateNumberTracingContent(options) {
        let numbers = [];
        
        switch (options.numbersOption) {
            case '1-10':
                numbers = Array.from({length: 10}, (_, i) => i + 1);
                break;
            case '1-20':
                numbers = Array.from({length: 20}, (_, i) => i + 1);
                break;
            case 'custom':
                if (options.customNumbers) {
                    // Split by spaces or commas and convert to numbers
                    numbers = options.customNumbers.split(/[\s,]+/)
                              .map(n => parseInt(n))
                              .filter(n => !isNaN(n));
                } else {
                    numbers = [1, 2, 3, 4, 5];
                }
                break;
        }
        
        // Limit to a reasonable number for a grid layout
        if (numbers.length > 15) {
            numbers = numbers.slice(0, 15);
        }
        
        const container = document.createElement('div');
        container.className = 'activity-content';
        
        // Add instructions
        const instructions = document.createElement('div');
        instructions.className = 'worksheet-instructions print-visible';
        instructions.innerHTML = '<p>Trace over each number with your pencil. Follow the dotted outlines!</p>';
        container.appendChild(instructions);
        
        // Add tracing items
        const tracingContainer = document.createElement('div');
        tracingContainer.className = 'tracing-container';
        
        numbers.forEach(number => {
            const tracingItem = document.createElement('div');
            tracingItem.className = 'tracing-item';
            
            const tracingNumber = document.createElement('div');
            tracingNumber.className = 'tracing-number';
            tracingNumber.textContent = number;
            tracingNumber.setAttribute('data-letter', number); // Used for the outlined version
            
            tracingItem.appendChild(tracingNumber);
            tracingContainer.appendChild(tracingItem);
        });
        
        container.appendChild(tracingContainer);
        return container;
    }
    
    // Generate letter-emoji matching content
    function generateLetterEmojiMatchingContent(options) {
        let letters = [];
        
        switch (options.matchingOption) {
            case 'first-half':
                letters = 'ABCDEFGHIJKLM'.split('');
                break;
            case 'second-half':
                letters = 'NOPQRSTUVWXYZ'.split('');
                break;
            case 'vowels':
                letters = 'AEIOU'.split('');
                break;
            case 'custom':
                if (options.customMatching) {
                    // Split by spaces or commas and convert to uppercase
                    letters = options.customMatching.split(/[\s,]+/).map(l => l.toUpperCase());
                } else {
                    letters = 'ABCDE'.split('');
                }
                break;
        }
        
        // Limit to a reasonable number per activity
        if (letters.length > 6) {
            letters = letters.slice(0, 6);
        }
        
        // Filter letters to only include those with emoji mappings
        letters = letters.filter(letter => letterEmojiMap[letter]);
        
        const container = document.createElement('div');
        container.className = 'activity-content';
        
        // Add instructions
        const instructions = document.createElement('div');
        instructions.className = 'worksheet-instructions print-visible';
        instructions.innerHTML = '<p>Draw a line to match each letter with the correct picture:</p>';
        container.appendChild(instructions);
        
        // Add matching items
        const matchingContainer = document.createElement('div');
        matchingContainer.className = 'matching-container';
        
        letters.forEach(letter => {
            const matchingItem = document.createElement('div');
            matchingItem.className = 'matching-item';
            
            const matchingLetter = document.createElement('div');
            matchingLetter.className = 'matching-letter';
            matchingLetter.textContent = letter;
            
            const matchingConnector = document.createElement('div');
            matchingConnector.className = 'matching-connector';
            
            const matchingEmoji = document.createElement('div');
            matchingEmoji.className = 'matching-emoji';
            matchingEmoji.title = letterEmojiMap[letter][1];
            matchingEmoji.textContent = letterEmojiMap[letter][0];
            
            matchingItem.appendChild(matchingLetter);
            matchingItem.appendChild(matchingConnector);
            matchingItem.appendChild(matchingEmoji);
            matchingContainer.appendChild(matchingItem);
        });
        
        container.appendChild(matchingContainer);
        return container;
    }

    // Helper function to generate tracing lines - no longer needed but keeping for compatibility
    function generateTracingLines(count) {
        return '';
    }

    // Print the worksheet
    function printWorksheet() {
        // Make sure all print-specific elements are visible
        document.querySelectorAll('.print-activity-title, .print-activity-description, .print-visible').forEach(el => {
            el.style.display = 'block';
        });
        
        window.print();
    }

    // Reset the worksheet and activities
    function resetWorksheet() {
        worksheetActivities = [];
        updateActivityListUI();
        
        worksheetContent.innerHTML = `
            <div class="placeholder-message">
                Select activities and generate a worksheet to see preview
            </div>
        `;
    }
}); 