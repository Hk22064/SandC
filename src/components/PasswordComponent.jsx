// PasswordComponent.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PasswordComponent = () => {
    const [password, setPassword] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const fetchSavedPassword = () => {
        setIsFetching(true);
        axios.get('/.netlify/functions/getSavedPassword') // 保存されたパスワードを取得するエンドポイントのURLを指定
            .then(response => {
                // 取得した保存されたパスワードを処理する
                const savedPassword = response.data.savedPassword;
                // ここで取得した保存されたパスワードをReactのステートにセットするなどの処理を行う
            })
            .catch(error => {
                console.error('Error fetching saved password:', error);
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
