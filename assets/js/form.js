const usernameInput = document.querySelector('#username-input');
const subjectInput = document.querySelector('#subject-input');
const thoughtsInput = document.querySelector('#thoughts-input');
const submitInput = document.querySelector('#submit')

let blogSubmission = JSON.parse(localStorage.getItem('blogSubmission')) || [];

submitInput.addEventListener('click', function (event) {
 event.preventDefault();

const newSubmission = {
    username: usernameInput.value,
    subject: subjectInput.value,
    thoughts: thoughtsInput.value
  };
  // Assuming you might have multiple submissions, fetch any existing ones 
  if (!newSubmission.username.trim() || !newSubmission.subject.trim() || !newSubmission.thoughts.trim()) {
    alert('Please fill in all fields before submitting.');
    return; // Stop the function from proceeding 
  }

  blogSubmission.push(newSubmission);

  localStorage.setItem('blogSubmission', JSON.stringify(blogSubmission)); // Store updated submissions list
  
  
  window.location.href = 'blog.html';  

  usernameInput.value = '';
  subjectInput.value = '';
  thoughtsInput.value = '';

});

// Dark mode / light mode togggle
// below is a very helpful thread on succefully doing this:
// https://stackoverflow.com/questions/73693983/add-button-to-switch-between-light-and-dark-mode-using-two-prefers-color-scheme

const toggleCheckbox = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme');

// Set the initial theme based on local storage
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleCheckbox.checked = true; // Reflects the toggle position for dark mode
} else {
  toggleCheckbox.checked = false; // Reflects the toggle position for light mode
}

toggleCheckbox.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleCheckbox.checked = true; // Update a label or visually indicate dark mode is active
  } else {
    localStorage.setItem('theme', 'light');
    toggleCheckbox.checked = false; // Update a label or visually indicate light mode is active
  }
});
