import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import './App.css';
import Nav from './component/Nav';

const liff = window.liff;

function App() {
  const [displayName, setDisplayName] = useState('')
  const [userId, setUserId] = useState('')
  const [pictureUrl, setPictureUrl] = useState('')

  const initLine = async () => {
    await liff.init({ liffId: '1657043590-Qe6npdDk' }).catch(err => { throw err })
    if (liff.isLoggedIn()) {
      let getProfile = await liff.getProfile();
      setDisplayName(getProfile.displayName);
      setUserId(getProfile.userId);
      setPictureUrl(getProfile.pictureUrl);
    } else {
      liff.login();
    }
  }

  useEffect(() => {
    initLine();
    console.log("hello");
  }, [])

  return (
    <div >
      <Nav />
      {displayName}
      {userId}
      {pictureUrl}
    </div>
  );
}

export default App;
