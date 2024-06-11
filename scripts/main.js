document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.getElementById('course-list');
  
    const courses = [
      { id: 1, title: 'Computer Networks', description: 'Description of Course 1' },
      { id: 2, title: 'Cyber Security', description: 'Description of Course 2' },
      { id: 2, title: 'Cyber Security', description: 'Description of Course 2' },
      { id: 2, title: 'Cyber Security', description: 'Description of Course 2' },
      { id: 2, title: 'Cyber Security', description: 'Description of Course 2' },
      { id: 2, title: 'Cyber Security', description: 'Description of Course 2' },
      { id: 2, title: 'Cyber Security', description: 'Description of Course 2' },
      { id: 2, title: 'Cyber Security', description: 'Description of Course 2' },
      { id: 2, title: 'Cyber Security', description: 'Description of Course 2' },
      { id: 2, title: 'Cyber Security', description: 'Description of Course 2' },
      // Add more courses as needed
    ];
  
    courses.forEach(course => {
      const courseItem = document.createElement('div');
      courseItem.classList.add('course-item');
      courseItem.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <a href="course-details.html?id=${course.id}">View Details</a>
      `;
      courseList.appendChild(courseItem);
    });
  });
  