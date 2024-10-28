import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import GenerateButton from './components/GenerateButton';

function App() {
  const [userData, setUserData] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // Api call using axios
  const generate = async () => {
    try {
      const res = await axios.get('https://randomuser.me/api/');
      setUserData(res.data.results[0]);
      setShowMoreInfo(false);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    generate();
  }, []);

  console.log(userData);
  return (
    <>
      {userData && (
        <Card
          userData={userData}
          showMoreInfo={showMoreInfo}
          setShowMoreInfo={setShowMoreInfo}
        />
      )}
      {/* The Generate Button triggers the UseEffect function for data fetching from api*/}
      <GenerateButton generateUser={generate} />
    </>
  );
}

export default App;
