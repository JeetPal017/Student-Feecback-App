import React from 'react';

function Header() {
  // You can add basic styling here or in a separate CSS file
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <header style={headerStyle}>
      <h1>Student Feedback App</h1>
    </header>
  );
}

export default Header;