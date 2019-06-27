import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from './styledcomponents.js'

const App = () => {

  const [data, setData] = useState(null);

  const getData = () => {
    const URL = 'https://www.plugco.in/public/take_home_sample_feed';
    axios.get(URL).then( res => {
      setData(res.data.campaigns);
      console.log(res);
    }).catch( err => {
      console.log(err);
    })
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      {data && data.map(cam => {
        return (
          <div>
            <Header>
              <img src={cam['campaign_icon_url']} alt='icon'/>
              <div>
                <h3>{cam['campaign_name']}</h3>
                <p>{cam['pay_per_install']} per install </p>
              </div>
            </Header>
          </div>
        )
      })}
    </div>
  );
};

export default App;

