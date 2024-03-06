// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }
const rootEl = $('#root');
const blogSubmission = JSON.parse(localStorage.getItem('blogSubmission'));

blogSubmission.forEach(blogSubmission => {
    const blogCard = $('<li>')
    const blogContent = `
    <h3>${blogSubmission.subject}</h3>
    <p>${blogSubmission.content}</p>
    <p>Posted by ${blogSubmission.username}</p>`;
    
    blogCard.html(blogContent);
    rootEl.append(blogCard);

});
// This part is pulling the object from local storage to create blog posts
// Logs the object from local storage to make sure it's working lol
localStorage.setItem('blogSubmission', JSON.stringify(blogSubmission));
// // Adds the content from blogPost to the page
// blogCard.html(`Username: ${blogSubmission.username}<br>Subject: ${blogSubmission.subject}<br>Content: ${blogSubmission.thoughts}`);

