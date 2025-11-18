document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.course-section').forEach(section => {
        section.style.display = 'none';
    });
    // Add the 'active' class to the IT button and display its content by default
    document.getElementById('modalitBtn').classList.add('active');
    document.getElementById('modalit').style.display = 'block';
});

function modelChange(coursename) {
    // Remove the 'active' class from all buttons
    document.querySelectorAll('.mymodal button').forEach(button => {
        button.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    document.getElementById(`${coursename}Btn`).classList.add('active');

    // Hide all elements with the class 'course-section'
    document.querySelectorAll('.course-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the element with the ID equal to coursename
    document.getElementById(coursename).style.display = 'block';
}


// itclick

// Your course data object array
const coursesData = {
    st: ["Software Testing Course", "Manual Testing ", "Selenium Automation Testing", "ISTQB Certification"],
    fd: ["FULL STACK JAVA DEVELOPMENT TRAINING", "FULL STACK PYTHON DEVELOPMENT TRAINING", " FULL STACK WEB DEVELOPMENT TRAINING"],
    sd: ["JAVA DEVELOPMENT TRAINING", "PYTHON DEVELOPMENT TRAINING"],
    fed: ["WEB DESIGNING TRAINING","REACT TRAINING", "ANGULAR TRAINING"],
    ds: ["DATA SCIENCE WITH PYTHON TRAINING"],
    bge: ["Big Data Engineering"],
    rpa: ["RPA TRAINING"],
};

const Courseurls={
    st: ["/software-testing-training", "/manual", "/selenium", "/istqb"],
    fd: ["/full-stack-java-Development", "/full-stack-python-Development", "/web-development-course"],
    sd: ["/java-training", "/python-training"],
    fed: ["/web-designing-training", "/react-course", "/angular-course"],
    ds: ["/python-data-science"],
    bge: ["/big-data-engineering-course"],
    rpa: ["/RPA"]
}

document.addEventListener('DOMContentLoaded', function () {
    mdfilterchange('st');
});

function mdfilterchange(category) {
    document.querySelectorAll('.itcourses-sidebar').forEach(div => {
        div.classList.remove('active-modal-button-it');
    });
    document.getElementById(`${category}Div`).classList.add('active-modal-button-it');


    const coursesContainer = document.getElementById("mdcourses-container");
    const selectedCourses = coursesData[category];

    // Clear previous courses
    coursesContainer.innerHTML = "";

    // Display related courses
    if (selectedCourses) {
        selectedCourses.forEach((course, index) => {
            const courseBox = document.createElement("div");
            courseBox.classList.add("course-box");

            // const courseBoxinner = document.createElement("div");
            // courseBoxinner.classList.add("course-box-inner");

            const anchorTag = document.createElement("a");
            anchorTag.href = `${Courseurls[category][index]}`;
            console.log()
        

            const iconTag = document.createElement("i");
            iconTag.classList.add('fa', 'fa-book', 'course-icon'); // Adjust classes as needed
;
            anchorTag.appendChild(iconTag)
            anchorTag.appendChild(document.createTextNode(course));
            courseBox.appendChild(anchorTag)
            coursesContainer.appendChild(courseBox);
        });
    }
}
