import React, { useState } from 'react';

const HelpCenter = () => {
  const [selectedTopic, setSelectedTopic] = useState("general");

  const handleTopicChange = (e) => setSelectedTopic(e.target.value);

  return (
    <div className="overflow-y-auto h-[600px] p-4 mb-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Help Center</h1>

      {/* Yardım Kategorileri */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Select a Topic</h2>
        <select
          value={selectedTopic}
          onChange={handleTopicChange}
          className="p-3 border border-gray-300 rounded-md w-full mb-4"
        >
          <option value="general">General Support</option>
          <option value="account">Account Issues</option>
          <option value="payment">Payment and Billing</option>
          <option value="technical">Technical Support</option>
        </select>

        <div className="space-y-4">
          {selectedTopic === "general" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-700">General Support</h3>
              <p className="text-gray-600">Here you can find general help topics.</p>
              <ul className="list-disc pl-5">
                <li>How to change account settings?</li>
                <li>How to reset your password?</li>
                <li>How to contact support?</li>
              </ul>
            </div>
          )}

          {selectedTopic === "account" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Account Issues</h3>
              <p className="text-gray-600">Common account-related issues and solutions.</p>
              <ul className="list-disc pl-5">
                <li>How to recover a lost account?</li>
                <li>How to update your email address?</li>
                <li>How to delete your account?</li>
              </ul>
            </div>
          )}

          {selectedTopic === "payment" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Payment and Billing</h3>
              <p className="text-gray-600">Payment related issues and information.</p>
              <ul className="list-disc pl-5">
                <li>How to update your payment method?</li>
                <li>How to request a refund?</li>
                <li>Why was my payment declined?</li>
              </ul>
            </div>
          )}

          {selectedTopic === "technical" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Technical Support</h3>
              <p className="text-gray-600">Troubleshooting technical issues.</p>
              <ul className="list-disc pl-5">
                <li>How to troubleshoot login issues?</li>
                <li>How to fix slow performance?</li>
                <li>How to report a bug?</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Yardım Talep Formu */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Need More Help?</h2>
        <p className="text-gray-600 mb-4">If you can't find the answer you're looking for, fill out the form below to contact our support team:</p>
        
        <form className="space-y-4">
          <div>
            <label className="text-gray-600">Your Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="text-gray-600">Your Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-gray-600">Your Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Describe your issue"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit Request
          </button>
        </form>
      </div>

      {/* Kaydırma Özelliği Eklendi */}
      <div className="overflow-y-auto max-h-[300px] border-2 border-gray-300 p-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold">How to change my password?</h4>
            <p className="text-gray-600">To change your password, go to account settings and click on "Change Password".</p>
          </div>
          <div>
            <h4 className="font-semibold">How do I delete my account?</h4>
            <p className="text-gray-600">If you want to delete your account, contact support through the form above.</p>
          </div>
          <div>
            <h4 className="font-semibold">How to contact customer support?</h4>
            <p className="text-gray-600">You can contact customer support by submitting a request in the form above.</p>
          </div>
          <div>
            <h4 className="font-semibold">Why was my payment declined?</h4>
            <p className="text-gray-600">Payments may be declined due to insufficient funds, expired card, or other payment method issues.</p>
          </div>
          <div>
            <h4 className="font-semibold">How to report a bug?</h4>
            <p className="text-gray-600">To report a bug, use the "Report a Bug" option under technical support.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
