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

  const copy = (link) => {
    navigator.clipboard.writeText(link)
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
                      <i id='play' class="fas fa-play"></i>
                      <Buttons>
                        <button onClick={() => copy(content['tracking_link'])}><i className="fal fa-link fa-flip-vertical"></i> </button>
                        <button><a href={content['download_url']} download_url><i className="fal fa-arrow-to-bottom"></i></a></button>
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

