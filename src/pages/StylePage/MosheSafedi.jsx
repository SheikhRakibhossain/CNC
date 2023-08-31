import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import mosheSafedi from '../../assets/girlscat/MosheSafdie.webp';
import './MosheSafidi.css';



const MosheSafedi = () => {
    return (
        <>
            <Container className='py-4'>
                <Row >
                    <Col className='relative'>
                        <div className="card bgOpacity text-bg-dark ms-5">
                            <img src={mosheSafedi} className="card-img " alt="img" />
                            <div className="card-img-overlay d-flex flex-column justify-content-center">
                                <div className='border-start border-3 border-light ps-4 ms-6' style={{ maxWidth: 600 }}>
                                    <h5 className="card-title text-light fw-bold" style={{fontSize: '40px' }}>
                                        "Yen Meng Jiin/SPHOL/AP
                                        ‘My beliefs haven’t changed’: From social housing to skyscrapers, architect Moshe Safdie is still an idealist"</h5>
                                    <p className="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>


            </Container>

        </>
    );
};

export default MosheSafedi;