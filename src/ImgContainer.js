import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function ImgContainer(props) {
    return <div className="bg-img">
      <div style={{padding:"40px"}}>
        <div>
          <img src="https://cms.taygo.com/whitelabel/default/images/logo_light_white.png" />
        </div>
        <div style={{paddingTop:"40px"}}>
          <Typography variant="h4" gutterBottom>
             One Button,
          </Typography>
          <Typography variant="h4" gutterBottom>
             Consumer Direct Marketing!
          </Typography>
        </div>
      </div>
    </div>
}
