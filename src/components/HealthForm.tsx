import React, { useState } from 'react';

const HealthForm: React.FC = () => {
  const [age, setAge] = useState<number>(0);
  const [bodyweight, setBodyweight] = useState<number>(0);
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');
  const [otherGender, setOtherGender] = useState<string>(''); // State for "Other" gender input
  const [height, setHeight] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      age,
      bodyweight,
      gender: gender === 'other' ? otherGender : gender, // Use "Other" text if selected
      height,
    };
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="health-form-container">
      <div className="health-form-card">
        <h2 className="health-form-title">Enter Your Health Information</h2>
        <form onSubmit={handleSubmit} className="health-form">
          {/* Age Field */}
          <div className="form-group floating-label">
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="form-input"
              min="0"
              required
            />
            <label htmlFor="age">Age</label>
          </div>

          {/* Bodyweight Field */}
          <div className="form-group floating-label">
            <input
              type="number"
              id="bodyweight"
              value={bodyweight}
              onChange={(e) => setBodyweight(Number(e.target.value))}
              className="form-input"
              min="0"
              required
            />
            <label htmlFor="bodyweight">Bodyweight (lbs)</label>
          </div>

          {/* Gender Field */}
          <div className="form-group floating-label">
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value as 'male' | 'female' | 'other')}
              className="form-input"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="gender">Gender</label>
          </div>

          {/* Other Gender Text Input (Conditional Rendering) */}
          {gender === 'other' && (
            <div className="form-group floating-label">
              <input
                type="text"
                id="other-gender"
                value={otherGender}
                onChange={(e) => setOtherGender(e.target.value)}
                className="form-input"
                placeholder="Specify your gender"
                required
              />
              <label htmlFor="other-gender">Specify Gender</label>
            </div>
          )}

          {/* Height Field */}
          <div className="form-group floating-label">
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="form-input"
              min="0"
              required
            />
            <label htmlFor="height">Height (inches)</label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HealthForm;