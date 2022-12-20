import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'Store';
import { AppRoutes } from 'AppRoutes';
import reportWebVitals from './reportWebVitals';
import 'Style/index.scss';
import { GoogleOAuthProvider } from '@react-oauth/google';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;
const root = createRoot(container);

const { REACT_APP_GOOGLE_CLIENT } = process.env;

root.render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT || ''}>
        <div className='app-wrapper'>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </div>
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
