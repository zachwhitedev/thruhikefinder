import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
<ins className="adsbygoogle"
     style={{display:'block'}}
     data-ad-client="ca-pub-6067997293110015"
     data-ad-slot="3560277736"
     data-ad-format="auto"
    data-full-width-responsive="true">
</ins>

          
    );
  }
}