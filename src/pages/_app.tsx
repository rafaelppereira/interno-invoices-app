import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyles } from '../styles/GlobalStyles';
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyles />
    </>
  );
}

export default MyApp
