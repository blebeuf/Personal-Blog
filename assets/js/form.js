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