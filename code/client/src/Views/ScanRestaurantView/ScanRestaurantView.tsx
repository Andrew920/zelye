import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useGetSponsorQuery } from 'Api';
import { BackgroundImage, Button, LogotypeBig, Spinner } from 'Components';
import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { QRScan } from './QRScan';
import './ScanRestaurantView.scss';

export const ScanRestaurantView: FC = () => {
  // Use Login query. If user display
  const [user, setUser] = useState('David Bester');
  const { data: sponsorData, isLoading: sponsorLoading } = useGetSponsorQuery();
  const successCallback = useCallback((credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
    if (credentialResponse.credential) {
      // login(credentialResponse.credential);
      // Call for login. Save data into store.
    }
  }, []);

  const errorCallback = useCallback(() => {
    console.log('there seems to be an error');
  }, []);

  return sponsorLoading ? (
    <Spinner />
  ) : (
    <>
      {sponsorData && <BackgroundImage image={sponsorData.background} />}
      <div className='scan-restaurant-view' style={{ backgroundImage: '' }}>
        <LogotypeBig />
        <QRScan />
        <span>Scan the QR code on the table to recieve the menu of the restaurant.</span>
        <Link to='1'>Demo Restaurant</Link>
        {/* Conditional login button if user is not logged in / token is not in store */}
        <div className='login-user'>
          Login with Google:
          <GoogleLogin
            size='large'
            type='icon'
            theme='outline'
            shape='pill'
            onSuccess={successCallback}
            onError={errorCallback}
          />
        </div>
      </div>
    </>
  );
};
