import { Button } from 'Components';
import { FC, useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import './QRScan.scss';

export const QRScan: FC = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  console.log('rendering');
  useEffect(() => {
    if (data) {
      navigate(data);
      setData('');
    }
  }, [data, navigate]);

  return error ? (
    <Button
      onClick={() => {
        setData('');
        setError('');
      }}
      text={error}
    ></Button>
  ) : (
    <div className='qr-scanner'>
      {data}
      <QrReader
        className='reader'
        onResult={(result, error) => {
          if (result) {
            setData(result.getText()?.split('/').pop() || '');
          }
          if (error) {
            setError('Camera only works on pages with HTTPS');
          }
        }}
        constraints={{
          facingMode: 'user',
        }}
        videoStyle={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'stretch',
        }}
        videoContainerStyle={{
          innerWidth: 2,
          innerHeight: 100,
        }}
      />
    </div>
  );
};
