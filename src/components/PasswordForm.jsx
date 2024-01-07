// PasswordForm.js

import React, { useState } from 'react';
import axios from 'axios';

const PasswordForm = () => {
  const [password, setPassword] = useState('');

  const handleSavePassword = () => {
    axios.post('/.netlify/functions/savePassword', { password })
      .then(response => {
        console.log(response.data.message);
        // パスワード保存の成功処理
        axios.get('/.netlify/functions/getSavedPassword')
          .then(savedPasswordResponse => {
            setPassword(savedPasswordResponse.data.savedPassword);
          })
          .catch(error => {
            console.error('Error fetching saved password:', error);
          });
      })
      .catch(error => {
        console.error('Error saving password:', error);
        // パスワード保存の失敗処理
      });
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSavePassword}>Save Password</button>
      <h2>Saved Password:</h2>
      <p>{password}</p>
    </div>
  );
};

export default PasswordForm;
