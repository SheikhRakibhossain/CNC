import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import aicar from '../../assets/girlscat/aicar.jpg';
import "./us.css"
import UsPost from './UsPost';
import UsHeroSEction from './UsHeroSEction';

const Us = () => {
    return (
        <>
            <UsHeroSEction/>
            <UsPost/>

        </>
    );
};

export default Us;