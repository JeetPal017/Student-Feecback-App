import React from 'react';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import Card from './components/Card';

function App() {
  // Sample data for testing the Card component
  const sampleFeedback = {
    name: 'Alex Johnson',
    course: 'React Development',
    feedback: 'The course material was excellent and easy to follow!'
  };

  return (
    <div className="App">
      {/* 1. Import and render Header */}
      <Header />
      
      <main>
        {/* 2. Import and render FeedbackForm */}
        <FeedbackForm />

        <h2>--- Test Card Display (Manual Data) ---</h2>
        {/* 3. Import and render Card, passing sample data as props */}
        <Card 
          name={sampleFeedback.name}
          course={sampleFeedback.course}
          feedback={sampleFeedback.feedback}
        />
      </main>
    </div>
  );
}

export default App;