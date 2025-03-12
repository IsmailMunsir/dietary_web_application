import React, { useState } from 'react';
import Select from '../common/Select';

const DietaryPreferences: React.FC<{ onChange: (value: string) => void }> = ({ onChange }) => {
  const [dietaryPreference, setDietaryPreference] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setDietaryPreference(value);
    onChange(value);
  };

  return (
    <div className="dietary-preferences">
      <label>Dietary Preference:</label>
      <Select
        value={dietaryPreference}
        onChange={handleChange}
        options={[
          { value: '', label: 'Select your dietary preference' },
          { value: 'vegetarian', label: 'Vegetarian' },
          { value: 'vegan', label: 'Vegan' },
          { value: 'keto', label: 'Keto' },
          { value: 'gluten-free', label: 'Gluten-Free' },
          { value: 'paleo', label: 'Paleo' },
          { value: 'low-carb', label: 'Low-Carb' },
          { value: 'mediterranean', label: 'Mediterranean' },
        ]}
      />
    </div>
  );
};

export default DietaryPreferences;