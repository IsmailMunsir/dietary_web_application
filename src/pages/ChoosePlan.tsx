import React from 'react';
import { toast } from 'react-toastify';

const ChoosePlan: React.FC = () => {
  const handleSelectPlan = (planName: string) => {
    toast.success(`You have selected the ${planName} plan!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="choose-plan-container">
      <div className="choose-plan-card">
        <h2 className="choose-plan-title">Choose Your Plan</h2>
        <p className="choose-plan-subtitle">
          Select the plan that best suits your dietary tracking needs. Upgrade, downgrade, or cancel anytime.
        </p>
        <div className="plans-grid">
          {/* Plan 1 */}
          <div className="plan-card">
            <h3 className="plan-title">Basic Plan</h3>
            <p className="plan-price">$9.99<span className="plan-duration">/month</span></p>
            <p className="plan-description">Perfect for individuals starting their dietary journey.</p>
            <ul className="plan-features">
              <li>✅ Track up to 3 meals per day</li>
              <li>✅ Basic nutritional insights</li>
              <li>✅ Access to 10+ recipes</li>
              <li>❌ Advanced analytics</li>
              <li>❌ Personalized meal plans</li>
            </ul>
            <button
              className="plan-select-btn"
              onClick={() => handleSelectPlan('Basic')}
            >
              Select Plan
            </button>
            <p className="plan-note">7-day free trial available</p>
          </div>

          {/* Plan 2 */}
          <div className="plan-card popular-plan">
            <div className="popular-badge">Most Popular</div>
            <h3 className="plan-title">Pro Plan</h3>
            <p className="plan-price">$19.99<span className="plan-duration">/month</span></p>
            <p className="plan-description">Great for users who want advanced tracking and insights.</p>
            <ul className="plan-features">
              <li>✅ Track unlimited meals per day</li>
              <li>✅ Advanced nutritional insights</li>
              <li>✅ Access to 50+ recipes</li>
              <li>✅ Personalized meal plans</li>
              <li>❌ 1-on-1 dietitian support</li>
            </ul>
            <button
              className="plan-select-btn"
              onClick={() => handleSelectPlan('Pro')}
            >
              Select Plan
            </button>
            <p className="plan-note">14-day free trial available</p>
          </div>

          {/* Plan 3 */}
          <div className="plan-card">
            <h3 className="plan-title">Premium Plan</h3>
            <p className="plan-price">$29.99<span className="plan-duration">/month</span></p>
            <p className="plan-description">Best for users who want full support and customization.</p>
            <ul className="plan-features">
              <li>✅ Track unlimited meals per day</li>
              <li>✅ Advanced nutritional insights</li>
              <li>✅ Access to 100+ recipes</li>
              <li>✅ Personalized meal plans</li>
              <li>✅ 1-on-1 dietitian support</li>
            </ul>
            <button
              className="plan-select-btn"
              onClick={() => handleSelectPlan('Premium')}
            >
              Select Plan
            </button>
            <p className="plan-note">30-day free trial available</p>
          </div>
        </div>
        <div className="plan-faq">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-item">
            <p className="faq-question">Can I switch plans later?</p>
            <p className="faq-answer">
              Yes, you can upgrade, downgrade, or cancel your plan at any time.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-question">Is there a free trial?</p>
            <p className="faq-answer">
              Yes, all plans come with a free trial. No credit card required.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-question">What payment methods do you accept?</p>
            <p className="faq-answer">
              We accept all major credit cards, PayPal, and bank transfers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;