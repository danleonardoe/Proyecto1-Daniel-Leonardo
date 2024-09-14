import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add'); // Operación por defecto: Suma
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    try {
      // Realiza la solicitud GET usando fetch
      const response = await fetch(`http://localhost:8080/${operation}?num1=${parseFloat(num1)}&num2=${parseFloat(num2)}`);
      
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      setResult(data); // El resultado que el backend devuelve
      setError(null);  // Resetea el estado de error si la operación es exitosa

    } catch (err) {
      setError('Error during the calculation: ' + err.message);
      setResult(null);
    }
  };

  return (
    <div className="calculator">
      <h1>Calculadora</h1>

      <div>
        <label>Numero 1: </label>
        <input 
          type="number" 
          value={num1} 
          onChange={e => setNum1(e.target.value)} 
          placeholder="Enter first number" 
        />
      </div>

      <div>
        <label>Numero 2: </label>
        <input 
          type="number" 
          value={num2} 
          onChange={e => setNum2(e.target.value)} 
          placeholder="Enter second number" 
        />
      </div>

      <div>
        <label>Operacion: </label>
        <select value={operation} onChange={e => setOperation(e.target.value)}>
          <option value="add">Suma</option>
          <option value="subtract">Resta</option>
          <option value="multiply">Multiplicacion</option>
          <option value="divide">Division</option>
        </select>
      </div>

      <button onClick={handleCalculate}>Calcular</button>

      {result !== null && (
        <div>
          <h2>El resultado es: {result}</h2>
        </div>
      )}

      {error && (
        <div style={{ color: 'red' }}>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
};

export default Calculator;
