import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import Spinner from '../common/Spinner';
import SocialAuth from './SocialAuth';
import DietaryPreferences from './DietaryPreferences';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dietaryPreference, setDietaryPreference] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log('Registration successful');
      console.log('Dietary Preference:', dietaryPreference);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create an Account</h2>
        <p>Join us to get started</p>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <DietaryPreferences onChange={setDietaryPreference} />
          {error && <p className="error">{error}</p>}
          <Button type="submit" disabled={loading}>
            {loading ? <Spinner /> : 'Register'}
          </Button>
        </form>
        <div className="divider">OR</div>
        <SocialAuth />
        <p className="auth-footer">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;