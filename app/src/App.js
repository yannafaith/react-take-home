import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [data, setData] = useState(null);

  const getData = () => {
    const URL = 'https://www.plugco.in/public/take_home_sample_feed';
    axios.get(URL).then( res => {
      console.log(res);
      setData(res.data.campaigns);
    }).catch( err => {
      console.log(err);
    })
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      {data && data[0]['campaign_name']}
    </div>
  );

};

export default App;

