import React from 'react';
import Button from '../common/Button';

const SocialAuth: React.FC = () => {
  const handleGoogleLogin = () => {
    console.log('Logging in with Google');
    // Add Google OAuth logic here
  };

  const handleFacebookLogin = () => {
    console.log('Logging in with Facebook');
    // Add Facebook OAuth logic here
  };

  return (
    <div className="social-auth">
      <Button className="google-btn" onClick={handleGoogleLogin}>
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
        Sign in with Google
      </Button>
      <Button className="facebook-btn" onClick={handleFacebookLogin}>
        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
        Sign in with Facebook
      </Button>
    </div>
  );
};

export default SocialAuth;