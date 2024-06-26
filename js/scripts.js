document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted! Thank you for contacting us.');
});

// Function to redirect to YouTube channel
function subscribeToYouTube() {
  window.location.href = 'https://www.youtube.com/channel/CHANNEL_1'; // Replace with actual channel link
}

// Function to open enrollment form
function enrollCourse() {
  window.open('https://docs.google.com/forms/d/154HO44NSeQhI-45D2Ys_5ZQlV9j_Fesa5KrPD5q3FDE/edit', '_blank'); // Replace with your Google Form link
}

// Function to handle book purchase
function buyBook(bookId) {
  switch(bookId) {
    case 'book1':
      window.location.href = 'https://www.amazon.in/dp/B0D77184NM'; // Replace with your payment gateway link for Book 1
      break;
    case 'book2':
      window.location.href = 'https://www.amazon.com/Foundations-Self-Love-Building-Journey-ebook/dp/B0CZGYXW4L'; // Replace with your payment gateway link for Book 2
      break;
    case 'book3':
      window.location.href = 'https://www.yourwebsite.com/buy/book3'; // Replace with your payment gateway link for Book 3
      break;
    // Add more cases for additional books
  }
}

// Function to redirect to experience page
function goToExperiencePage() {
  window.location.href = 'experience.html';
}

// Function to redirect to book details page
function bookDetail() {
  window.location.href = 'book.html';
}

// Function to redirect to about page
function aboutme() {
  window.location.href = 'about.html';
}

// Function to redirect to YouTube courses page
function youtubeCourse() {
  window.location.href = 'youtubeCourse.html';
}

// Function to open YouTube video in new tab
function watchVideo(videoUrl) {
  window.open(videoUrl, '_blank');
}