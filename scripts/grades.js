document.addEventListener('DOMContentLoaded', () => {
    const gradeForm = document.getElementById('grade-form');
    const gradesContainer = document.getElementById('grades-container');
    const gpaDisplay = document.getElementById('gpa');
    const grades = JSON.parse(localStorage.getItem('grades')) || [];
  
    // Function to calculate GPA
    function calculateGPA(grades) {
      let totalPoints = 0;
      let totalCredits = 0;
      grades.forEach(grade => {
        let points = 0;
        if (grade.grade >= 90) points = 4.0;
        else if (grade.grade >= 85) points = 3.7;
        else if (grade.grade >= 80) points = 3.3;
        else if (grade.grade >= 75) points = 3.0;
        else if (grade.grade >= 70) points = 2.7;
        else if (grade.grade >= 65) points = 2.3;
        else if (grade.grade >= 60) points = 2.0;
        else if (grade.grade >= 55) points = 1.7;
        else if (grade.grade >= 50) points = 1.3;
        else if (grade.grade >= 45) points = 1.0;
        else points = 0.0;
  
        totalPoints += points * grade.credits;
        totalCredits += grade.credits;
      });
  
      return totalCredits === 0 ? 0 : totalPoints / totalCredits;
    }
  
    // Function to update the UI
    function updateUI() {
      gradesContainer.innerHTML = '';
      grades.forEach(grade => {
        const gradeItem = document.createElement('div');
        gradeItem.classList.add('grade-item');
        gradeItem.innerHTML = `
          <p>Module: ${grade.module}</p>
          <p>Grade: ${grade.grade}%</p>
          <p>Credits: ${grade.credits}</p>
        `;
        gradesContainer.appendChild(gradeItem);
      });
      const gpa = calculateGPA(grades);
      gpaDisplay.textContent = gpa.toFixed(2);
    }
  
    // Handle form submission
    gradeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const module = e.target.module.value;
      const grade = parseFloat(e.target.grade.value);
      const credits = parseFloat(e.target.credits.value);
  
      if (module && !isNaN(grade) && !isNaN(credits)) {
        grades.push({ module, grade, credits });
        localStorage.setItem('grades', JSON.stringify(grades));
        e.target.reset();
        updateUI();
      }
    });
  
    // Initial UI update
    updateUI();
  });
  