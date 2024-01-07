// App.jsx

import React from 'react';
import PasswordComponent from './components/PasswordComponent'; 
import PasswordForm from './components/PasswordForm'; // 作成したパスワードフォームコンポーネント

const App = () => {
  return (
    <div>
      <h1>Password Manager App</h1>
      <PasswordForm /> {/* 作成したパスワードフォームを呼び出す */}
      <PasswordComponent />
    </div>
  );
};

export default App;
