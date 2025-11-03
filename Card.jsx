import React from 'react';

// Card component accepts props: name, course, and feedback
function Card({ name, course, feedback }) {
  // Simple inline style for the card layout
  const cardStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9'
  };

  return (
    <div style={cardStyle}>
      <h3>Feedback Details</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Feedback:</strong> {feedback}</p>
    </div>
  );
}

export default Card;