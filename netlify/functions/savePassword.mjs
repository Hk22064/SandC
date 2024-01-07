// functions/savePassword.js

exports.handler = async (event) => {
  try {
    const { password } = JSON.parse(event.body);
    const savedPassword = password; 
    // ここでパスワードを保存するデータベースやストレージなどに送信する処理を実行する

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Password saved successfully' }),
      body: JSON.stringify({ savedPassword }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error saving password' }),
    };
  }
};
