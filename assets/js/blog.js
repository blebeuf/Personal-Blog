// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }
const rootEl = $('#root');
const blogSubmission = JSON.parse(localStorage.getItem('blogSubmission'));

blogSubmission.forEach(blogSubmission => {
  // if it's wrapped in a single '', use "" to provide class or id **or vice versa**
    const blogCard = $('<li class="blog-li">')
    const blogContent = `
    <h3>${blogSubmission.subject}</h3>
    <p>${blogSubmission.thoughts}</p>
    <p>Posted by ${blogSubmission.username}</p>`;
    
    blogCard.html(blogContent);
    rootEl.append(blogCard);

});
// This part is pulling the object from local storage to create blog posts
// Logs the object from local storage to make sure it's working lol
localStorage.setItem('blogSubmission', JSON.stringify(blogSubmission));
// // Adds the content from blogPost to the page
// blogCard.html(`Username: ${blogSubmission.username}<br>Subject: ${blogSubmission.subject}<br>Content: ${blogSubmission.thoughts}`);

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
