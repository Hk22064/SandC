// App.jsx

import React from 'react';
import PasswordForm from './components/PasswordForm'; // 作成したパスワードフォームコンポーネント

const App = () => {
  return (
    <div>
      <h1>Password Manager App</h1>
      <PasswordForm /> {/* 作成したパスワードフォームを呼び出す */}
    </div>
  );
};

export default App;
