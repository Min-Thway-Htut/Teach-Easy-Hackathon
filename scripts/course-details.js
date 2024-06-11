document.addEventListener('DOMContentLoaded', () => {
    const courseDetailsContainer = document.getElementById('course-details');
  
    // Example courses data
    const courses = [
      {
        id: 1,
        title: 'Computer Networks',
        description: '',
        modules: [
          { week: 1, introduction: 'Introduction to Week 1', exercises: 'Exercises for Week 1', slides: 'Slides for Week 1' },
          { week: 2, introduction: 'Introduction to Week 2', exercises: 'Exercises for Week 2', slides: 'Slides for Week 2' },
          // Add more weeks as needed up to week 10
        ]
      },
      {
        id: 2,
        title: 'Course 2',
        description: 'Detailed description of Course 2',
        modules: [
          { week: 1, introduction: 'Introduction to Week 1', exercises: 'Exercises for Week 1', slides: 'Slides for Week 1' },
          { week: 2, introduction: 'Introduction to Week 2', exercises: 'Exercises for Week 2', slides: 'Slides for Week 2' },
          // Add more weeks as needed up to week 10
        ]
      },
      // Add more courses as needed
    ];
  
    // Get course ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = parseInt(urlParams.get('id'));
  
    console.log(`Course ID from URL: ${courseId}`); // Debug log
  
    // Find the course with the matching ID
    const course = courses.find(course => course.id === courseId);
  
    if (course) {
      console.log(`Course found: ${course.title}`); // Debug log
      // Display course details
      let modulesHtml = '';
      course.modules.forEach(module => {
        modulesHtml += `
          <div class="module">
            <h3>Week ${module.week}</h3>
            <p><strong>Introduction:</strong> ${module.introduction}</p>
            <p><strong>Exercises:</strong> ${module.exercises}</p>
            <p><strong>Lecture Slides:</strong> ${module.slides}</p>
          </div>
        `;
      });
  
      courseDetailsContainer.innerHTML = `
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        ${modulesHtml}
        <a class="enroll-button" href="#">Enroll</a>
      `;
    } else {
      console.error('Course not found'); // Debug log
      courseDetailsContainer.innerHTML = `<p>Course not found</p>`;
    }
  });
  
  
  