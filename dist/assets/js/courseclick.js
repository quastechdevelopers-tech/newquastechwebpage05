document.addEventListener('DOMContentLoaded', function() {
   change("it")
});
function change(coursename) {

    document.querySelectorAll('.course-filters button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(`${coursename}Btn`).classList.add('active');
  

    
    document.querySelectorAll('.allcourses').forEach(course => {
        course.style.display = 'none';
    });
    document.getElementById(`${coursename}`).style.display = 'flex';
}



// truncate pragraph


// Get all elements with the class "card"
var cardElements = document.querySelectorAll('.card');

// Loop through each card element
cardElements.forEach(function(card) {
    // Get the paragraph inside the current card element
    var paragraph = card.querySelector('p');

    // Check if a paragraph exists
    if (paragraph) {
        // Truncate the paragraph content to 50 characters
        var truncatedContent = paragraph.textContent.slice(0, 50);

        // Add ellipsis if the content is truncated
        if (paragraph.textContent.length > 50) {
            truncatedContent += '.....';
        }

        // Update the paragraph content
        paragraph.textContent = truncatedContent;
    }
});


