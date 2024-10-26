import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import GenerateButton from './GenerateButton';

function App() {
  const [userData, setUserData] = useState(null);

  // const generate = () => {
  //   fetch('https://randomuser.me/api/')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserData(data.results[0]);
  //     })
  //     .catch((err) => console.error('Error', err));
  // };

  const generate = async () => {
    try {
      const res = await axios.get('https://randomuser.me/api/');
      setUserData(res.data.results[0]);
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
      {userData && <Card userData={userData} />}
      <GenerateButton generateUser={generate} />
    </>
  );
}

export default App;
