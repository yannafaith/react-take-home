import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, Media, Buttons } from './styledcomponents.js'

const App = () => {

  const [data, setData] = useState(null);

  const getData = () => {
    const URL = 'https://www.plugco.in/public/take_home_sample_feed';
    axios.get(URL).then( res => {
      setData(res.data.campaigns);
      console.log(res.data.campaigns[0].medias[0]);
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
          <>
          
            <Header>
              <img src={cam['campaign_icon_url']} alt='icon'/>
              <div>
                <h3>{cam['campaign_name']}</h3>
                <p>{cam['pay_per_install']} per install </p>
              </div>
            </Header>

            <Media>
              {
                cam.medias.map(content => {
                  return (
                    <div>
                      <img src={content['cover_photo_url']} alt=''/>
                      <Buttons>
                        <button>Link</button>
                        <button>Link</button>
                      </Buttons>
                    </div>
                  );
                })
              }
            </Media>

          </>
        );
      })}
    </div>
  );
};

export default App;

