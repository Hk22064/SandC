// PasswordComponent.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PasswordComponent = () => {
  const [password, setPassword] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const fetchSavedPassword = () => {
    setIsFetching(true);
    axios.get('/.netlify/functions/savePassword') // 保存されたパスワードを取得するエンドポイントのURLを指定
      .then(response => {
        setPassword(response.data.savedPassword);
        setIsFetching(false);
      })
      .catch(error => {
        console.error('Error fetching saved password:', error);
        setIsFetching(false);
      });
  };

  useEffect(() => {
    fetchSavedPassword();
  }, []);

  return (
    <div>
      <h2>Saved Password:</h2>
      <p>{password}</p>
    </div>
  );
};

export default PasswordComponent;
