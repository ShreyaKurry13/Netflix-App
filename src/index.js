import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';


ReactDOM.render(
  <>
  <h1 className='heading_style'>List Of Top 5 Netflix Series in 2023</h1>
    
    {Sdata.map((val) => {
      return(
    <Card
      imgsrc={val.imgscr}
      title = {val.title}
      sname={val.sname}
      link={val.link}
    />
  );
    })};

  </>,
  document.getElementById('root')
);


