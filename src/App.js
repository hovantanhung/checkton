import React, { useState } from 'react';
import tonweb from './tonClient';

const App = () => {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState('');

  const checkBalance = async () => {
    try {
      const addressObj = new tonweb.Address(address); // Tạo đối tượng địa chỉ
      const accountInfo = await tonweb.provider.getAddressInfo(addressObj); // Lấy thông tin ví
      setBalance(accountInfo.balance / 1e9); // Chuyển đổi từ nanoTON sang TON
      setError('');
    } catch (err) {
      setError('Không thể tìm thấy ví này.');
      setBalance(null);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>DApp: Kiểm tra Balance ví TON</h1>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Nhập địa chỉ ví TON"
        style={{ padding: '10px', width: '100%' }}
      />
      <button onClick={checkBalance} style={{ margin: '10px 0', padding: '10px 20px' }}>
        Kiểm tra Balance
      </button>

      {balance !== null && (
        <p>
          <strong>Balance:</strong> {balance} TON
        </p>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default App;
