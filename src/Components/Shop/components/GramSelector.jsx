import { useState } from 'react';
import Button from './UI/Button.jsx';

const gramOptions = [50, 100, 150, 250, 500, 1000];

export default function GramSelector({ onConfirm, onCancel,price }) {
  const [selectedGram, setSelectedGram] = useState(50);

  const handleChange = (event) => {
    setSelectedGram(Number(event.target.value));
  };

  return (
    <div className="gram-selector rounded-md text-black flex space-y-1 px-8 flex-col ">
      <select value={selectedGram} onChange={handleChange}>
        {gramOptions.map((gram) => (
          <option className='' key={gram} value={gram}>
            {gram} grams = {price[gramOptions.indexOf(gram)]}
          </option>
        ))}
      </select>
      <Button onClick={() => onConfirm(selectedGram,price[gramOptions.indexOf(selectedGram)])}>Confirm</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
}
