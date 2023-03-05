import React, { useState } from 'react';

function App() {
  const [buttonPosition, setButtonPosition] = useState({ x: '55%', y: '50%' });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleMouseMove = (event) => {
    if (event.target === noButtonRef.current) {
      const newX = Math.random() * (window.innerWidth - 100);
      const newY = Math.random() * (window.innerHeight - 50);
      setButtonPosition({ x: newX, y: newY });
    }
  };

  const handleNoButtonClick = () => {
    setButtonDisabled(true);
  };

  const noButtonRef = React.createRef();

  return (
    <div>
      
      <h1>Quer ser minha futura esposa?</h1>
      <button
        style={{ position: 'absolute', top:'50%', left:'50%', border:'none',backgroundColor:'green',width:50,height:30,borderRadius:8,color:'white' }}
        onClick={() => alert('Você clicou em Sim!')}
        disabled={buttonDisabled}
      >
        Sim
      </button>
      <button
        ref={noButtonRef}
        style={{ position: 'absolute', top: buttonPosition.y, left: buttonPosition.x,border:'none',backgroundColor:'red',width:50,height:30,borderRadius:8,color:'white'}}
        onMouseMove={handleMouseMove}
        onClick={handleNoButtonClick}
      >
        Não
      </button>
    </div>
  );
}

export default App;