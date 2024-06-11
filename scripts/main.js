document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.getElementById('course-list');
  
    const courses = [
      { id: 1, title: 'Computer Networks', description: '(B205 Computer Networks)' },
      { id: 2, title: 'Cyber Security', description: '(B207 Cyber Security)' },
      { id: 3, title: 'Operating Systems', description: '(B206 Operating System)' },
      { id: 4, title: 'Software Engineering', description: '(B203 Software Engineering)' },
      { id: 5, title: 'Sustainability Management', description: '(B112B Software Engineering)' },
      { id: 6, title: 'Computer Science Lab', description: '(B201 Comupter Science Lab)' },
      { id: 7, title: 'App & Web Development', description: '(B204 App & Web Development)' },
      { id: 8, title: 'Advanced Programming', description: 'B202 Advanced Programming' },
      { id: 9, title: 'Project Management', description: 'B113C Project Management' },
      { id: 10, title: 'Statistics', description: 'B123B Statistics' },
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
  