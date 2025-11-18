// why us
var serviceElements = document.querySelectorAll('.services-list');

// Loop through each card element
serviceElements.forEach(function(card) {
    // Get the paragraph inside the current card element
    let paragraph = card.querySelector('p');

    // Check if a paragraph exists
    if (paragraph) {
        // Truncate the paragraph content to 50 characters
        let truncatedContent = paragraph.textContent.slice(0, 150);

        // Add ellipsis if the content is truncated
        if (paragraph.textContent.length > 50) {
            truncatedContent += '.....';
        }

        // Update the paragraph content
        paragraph.textContent = truncatedContent;
    }
});
// end why us
// Footer links with URLs
const itTrainingWithUrls = [
    { name: "Software Testing Training", url: "/software-testing-training" },
    { name: "Full Stack Java Development", url: "/full-stack-java-Development" },
    { name: "Full Stack Python Development", url: "/full-stack-python-Development" },
    { name: "Full Stack Web Development", url: "/web-development-course" },
    { name: "Data Science With Python", url: "/python-data-science" },
    { name: "Java Development Training", url: "/java-training" },
    { name: "Python Development Training", url: "/python-training" },
    { name: "Web Desiging Training", url: "/web-designing-training" },
    { name: "React Training", url: "/React-course" },
    { name: "Angular Training", url: "/Angular-course" },
    { name: "RPA Training", url: "/RPA" }
];

const degreeWithUrls = [
    { name: "BCA", url: "/bcacourse" },
    { name: "Quastech Degree Program", url: "/dualdegree" }
];

const quicklinksWithUrls = [
    { name: "About Us", url: "/about-us" },
    { name: "Placement", url: "/placement" },
    { name: "Contact Us", url: "/contact-us" },
    { name: "Certificate Download", url: "/certificate-download" },
    { name: "Payment Methods", url: "/payment-methods" },
    { name: "Blogs", url: "/blogs" },
    { name: "Faq's", url: "/faqs" }
];

const eLearningWithUrls = [
    { name: "Software Testing Training", url: "/software-testing-training" },
    { name: "Full Stack Java Development", url: "/full-stack-java-Development" },
    { name: "Full Stack Python Development", url: "/full-stack-python-Development" },
    { name: "Full Stack Web Development", url: "/web-development-course" },
    { name: "Java Development Training", url: "/java-training" },
    { name: "Python Development Training", url: "/python-training" },
    { name: "Web Desiging Training", url: "/web-designing-training" },
    { name: "Digital Marketing", url: "https://quaskills.com/digital_marketing_course.html" }
];

const nonITCoursesWithUrls = [
    { name: "Digital Marketing", url: "https://quaskills.com/digital_marketing_course.html" },
    { name: "Data Analysis & Visualization With Python", url: "https://quaskills.com/data_analysis_visualization_course.html" },
    { name: "Graphic Designing", url: "https://quaskills.com/graphic_designing_course.html" },
    { name: "Web Graphic Designing", url: "https://quaskills.com/web_graphic_designing_course.html" },
    { name: "Management Information Systems (MIS)", url: "https://quaskills.com/management_information_system_course.html" },
    { name: "Information Technology Programme ", url: "https://quaskills.com/information_technology_programme_course.html" },
    { name: "Financial Accounting", url: "https://quaskills.com/financial_accounting_course.html" },
    { name: "Accounting", url: "https://quaskills.com/accounting_course.html" },
    { name: "Taxation", url: "https://quaskills.com/taxation_course.html" }
];

function createLinks(listId, categoryArray) {
    var list = document.getElementById(listId);
    categoryArray.forEach(function (category) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.href = category.url; // Set the URL
        link.textContent = category.name; // Set the display text
        listItem.appendChild(link); // Append the link to the list item
        list.appendChild(listItem); // Append the list item to the list
    });
}

// Call the function for each category
createLinks("itTrainingList", itTrainingWithUrls);
createLinks("degreeList", degreeWithUrls);
createLinks("eLearningList", eLearningWithUrls);
createLinks("quickLinksList", quicklinksWithUrls);
createLinks("nonItList", nonITCoursesWithUrls);

// Additional JavaScript logic if needed
// ...
    