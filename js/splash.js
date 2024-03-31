// selecting and creating variables
let project = document.querySelector('.project');
let mission = document.querySelector('.mission');
let Team = document.querySelector('.team');
let names = document.querySelector('.name');

// Initially hide mission and team elements

Team.style.display = 'none';

// Function to show elements with a delay
function showElementWithDelay(element, delay) {
    setTimeout(function() {
        element.style.display = 'flex';
    }, delay);
}

// Show project immediately
project.style.display = 'block';
mission.style.display = 'block';



showElementWithDelay(Team, 3000);

