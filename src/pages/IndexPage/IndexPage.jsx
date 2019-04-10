import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import './IndexPage.css';

const IndexPage = (props) => {
  return (
    <h1>Index Page {props.loc}</h1>
  )
};

export default IndexPage;