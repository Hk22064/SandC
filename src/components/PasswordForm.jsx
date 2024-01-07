import React, { useState } from 'react';
import axios from 'axios';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [savedPassword, setSavedPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSavePassword = () => {
    axios.post('/.netlify/functions/savePassword', { password })
      .then(response => {
        console.log(response.data.message);
        // パスワード保存の成功処理
      })
      .catch(error => {
        console.error('Error saving password:', error);
        // パスワード保存の失敗処理
      });
  };

  const showSavePassword = () => {
    axios.get('/.netlify/functions/getSavedPassword')
      .then(savedPasswordResponse => {
        setSavedPassword(savedPasswordResponse.data.savedPassword);
        setIsPasswordVisible(true); // パスワードが取得されたら表示する
      })
      .catch(error => {
        console.error('Error fetching saved password:', error);
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
      <button onClick={showSavePassword}>Show Saved Password</button>
      {isPasswordVisible && <p>{savedPassword}</p>}
    </div>
  );
};

export default PasswordForm;
