import React, { useState } from 'react';

function FeedbackForm() {
  // 1. Use the useState hook to store input values
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [feedback, setFeedback] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    // 2. Prevent page reload on form submission
    e.preventDefault();

    // Check if fields are filled (optional, but good practice)
    if (name.trim() === '' || course.trim() === '' || feedback.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }

    // 3. Print the input data in the console
    const feedbackData = {
      name: name,
      course: course,
      feedback: feedback
    };
    console.log('Form Submitted Data:', feedbackData);

    // Clear the form fields after submission
    setName('');
    setCourse('');
    setFeedback('');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '400px', margin: '0 auto 30px' }}>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input Field */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* Course Input Field */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* Feedback Input Field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            rows="4"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          ></textarea>
        </div>

        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#5cb85c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;