document.addEventListener('DOMContentLoaded', () => {
    const courseDetailsContainer = document.getElementById('course-details');
  
    // Example courses data
    const courses = [
      {
        id: 1,
        title: 'Computer Networks',
        description: '',
        modules: [
          { week: 1, introduction: 'Introduction to Computer Networks', exercises: 'Exercises for Week 1', slides: 'Slides for Week 1' },
          { week: 2, introduction: 'Network Protocols and Architecture', exercises: 'Exercises for Week 2', slides: 'Slides for Week 2' },
          { week: 3, introduction: 'Network Devices and Media', exercises: 'Exercises for Week 3', slides: 'Slides for Week 3'}
          // Add more weeks as needed up to week 10
        ]
      },
      {
        id: 2,
        title: 'Cyber Security',
        description: '',
        modules: [
          { week: 1, introduction: 'Introduction to Cyber Security', exercises: 'Exercises for Week 1', slides: 'Slides for Week 1' },
          { week: 2, introduction: 'Network Security', exercises: 'Exercises for Week 2', slides: 'Slides for Week 2' },
          { week: 3, introduction: 'Application and Software Security', exercises: 'Exercises for Week 3', slides: 'Slides for Week 3'}
        ]
      },
      {
        id: 3,
        title: 'Operating Systems',
        description: '',
        modules: [
            { week: 1, introduction: 'Introduction to Operating Systems', exercises: 'Exercises for Week 1', slides: 'Slides for Week 1' },
          { week: 2, introduction: 'Introduction to Thread and Processes', exercises: 'Exercises for Week 2', slides: 'Slides for Week 2' },
          { week: 3, introduction: 'CPU Scheduling', exercises: 'Exercises for Week 3', slides: 'Slides for Week 3'}
        ]
      },
      {
        id: 4,
        title: 'Software Engineering',
        description: '',
        modules: [
            { week: 1, introduction: 'Introduction to Software Engineering', exercises: 'Exercises for Week 1', slides: 'Slides for Week 1' },
          { week: 2, introduction: 'Software Requirements Engineering', exercises: 'Exercises for Week 2', slides: 'Slides for Week 2' },
          { week: 3, introduction: 'Software Project Management', exercises: 'Exercises for Week 3', slides: 'Slides for Week 3'}
        ]
      },
      {
        id: 5,
        title: 'Sustainability Management',
        description: '',
        modules: [
            { week: 1, introduction: 'Introduction to Week 1', exercises: 'Exercises for Week 1', slides: 'Slides for Week 1' },
          { week: 2, introduction: 'Introduction to Week 2', exercises: 'Exercises for Week 2', slides: 'Slides for Week 2' },
          { week: 3, introduction: 'Network Devices and Media', exercises: 'Exercises for Week 3', slides: 'Slides for Week 3'}
        ]
      },
      {
        id: 6,
        title: 'Computer Science Lab',
        description: '',
        modules: [
            { week: 1, introduction: 'Introduction to Week 1', exercises: 'Exercises for Week 1', slides: 'Slides for Week 1' },
          { week: 2, introduction: 'Introduction to Week 2', exercises: 'Exercises for Week 2', slides: 'Slides for Week 2' },
          { week: 3, introduction: 'Network Devices and Media', exercises: 'Exercises for Week 3', slides: 'Slides for Week 3'}
        ]
      },
      {
        id: 7,
        title: 'App & Web Development',
        description: '',
        modules: [
            { week: 1, introduction: 'Introduction to Week 1', exercises: 'Exercises for Week 1', slides: 'Slides for Week 1' },
          { week: 2, introduction: 'Introduction to Week 2', exercises: 'Exercises for Week 2', slides: 'Slides for Week 2' },
          { week: 3, introduction: 'Network Devices and Media', exercises: 'Exercises for Week 3', slides: 'Slides for Week 3'}
        ]
      },
      {
        id: 8,
        title: 'Advanced Programming',
        description: '',
        modules: [
            { week: 1, introduction: 'Introduction to Week 1', exercises: 'Exercises for Week 1', slides: 'Slides for Week 1' },
          { week: 2, introduction: 'Introduction to Week 2', exercises: 'Exercises for Week 2', slides: 'Slides for Week 2' },
          { week: 3, introduction: 'Network Devices and Media', exercises: 'Exercises for Week 3', slides: 'Slides for Week 3'}
        ]
      },
      {
        id: 9,
        title: 'Project Management',
        description: '',
        modules: [
            { week: 1, introduction: 'Introduction to Week 1', exercises: 'Exercises for Week 1', slides: 'Slides for Week 1' },
          { week: 2, introduction: 'Introduction to Week 2', exercises: 'Exercises for Week 2', slides: 'Slides for Week 2' },
          { week: 3, introduction: 'Network Devices and Media', exercises: 'Exercises for Week 3', slides: 'Slides for Week 3'}
        ]
      },
      {
        id: 10,
        title: 'Statistics',
        description: '',
        modules: [
            { week: 1, introduction: 'Introduction to Week 1', exercises: 'Exercises for Week 1', slides: 'Slides for Week 1' },
          { week: 2, introduction: 'Introduction to Week 2', exercises: 'Exercises for Week 2', slides: 'Slides for Week 2' },
          { week: 3, introduction: 'Network Devices and Media', exercises: 'Exercises for Week 3', slides: 'Slides for Week 3'}
        ]
      }

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
      `;
    } else {
      console.error('Course not found'); // Debug log
      courseDetailsContainer.innerHTML = `<p>Course not found</p>`;
    }
  });
  
  
  