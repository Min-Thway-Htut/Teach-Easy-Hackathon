document.addEventListener('DOMContentLoaded', () => {
    const gradeForm = document.getElementById('grade-form');
    const gradesContainer = document.getElementById('grades-container');
    const gpaDisplay = document.getElementById('gpa');
    const grades = JSON.parse(localStorage.getItem('grades')) || [];
  
    const assignmentForm = document.getElementById('assignment-form');
    const assignmentsContainer = document.getElementById('assignments-container');
    const assignments = JSON.parse(localStorage.getItem('assignments')) || [];
  
    // Function to calculate GPA
    function calculateGPA(grades) {
      let totalPoints = 0;
      let totalCredits = 0;
      const gradePoints = {
        'A': 4.0,
        'A-': 3.7,
        'B+': 3.3,
        'B': 3.0,
        'B-': 2.7,
        'C+': 2.3,
        'C': 2.0,
        'C-': 1.7,
        'D+': 1.3,
        'D': 1.0,
        'F': 0.0
      };
  
      grades.forEach(grade => {
        const points = gradePoints[grade.grade.toUpperCase()] || 0;
        totalPoints += points * grade.credits;
        totalCredits += grade.credits;
      });
  
      return totalCredits === 0 ? 0 : totalPoints / totalCredits;
    }
  
    // Function to update the UI for grades
    function updateGradesUI() {
      gradesContainer.innerHTML = '';
      grades.forEach(grade => {
        const gradeItem = document.createElement('div');
        gradeItem.classList.add('grade-item');
        gradeItem.innerHTML = `
          <p>Course: ${grade.course}</p>
          <p>Grade: ${grade.grade}</p>
          <p>Credits: ${grade.credits}</p>
        `;
        gradesContainer.appendChild(gradeItem);
      });
      const gpa = calculateGPA(grades);
      gpaDisplay.textContent = gpa.toFixed(2);
    }
  
    // Handle form submission for grades
    if (gradeForm) {
      gradeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const course = e.target.course.value;
        const grade = e.target.grade.value;
        const credits = parseFloat(e.target.credits.value);
  
        if (course && grade && !isNaN(credits)) {
          grades.push({ course, grade, credits });
          localStorage.setItem('grades', JSON.stringify(grades));
          e.target.reset();
          updateGradesUI();
        }
      });
    }
  
    // Function to update the UI for assignments
    function updateAssignmentsUI() {
      assignmentsContainer.innerHTML = '';
      assignments.forEach(assignment => {
        const assignmentItem = document.createElement('div');
        assignmentItem.classList.add('assignment-item');
        assignmentItem.innerHTML = `
          <p>Assignment: ${assignment.name}</p>
          <p>Course: ${assignment.course}</p>
          <p>Submission: ${assignment.submission}</p>
        `;
        assignmentsContainer.appendChild(assignmentItem);
      });
    }
  
    // Handle form submission for assignments
    if (assignmentForm) {
      assignmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.assignment.value;
        const course = e.target.course.value;
        const submission = e.target.submission.value;
  
        if (name && course && submission) {
          assignments.push({ name, course, submission });
          localStorage.setItem('assignments', JSON.stringify(assignments));
          e.target.reset();
          updateAssignmentsUI();
        }
      });
    }
  
    // Initial UI updates
    if (gradesContainer) updateGradesUI();
    if (assignmentsContainer) updateAssignmentsUI();
  });
  