import TonWeb from 'tonweb';

const tonweb = new TonWeb({
  endpoint: 'https://toncenter.com/api/v2/jsonRPC', // Kết nối đến TON Center API
});

export default tonweb;
