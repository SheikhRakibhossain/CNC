import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import aicar from '../../assets/girlscat/aicar.jpg';
import "./us.css"

const Us = () => {
    return (
        <>
            <section className='usSection '>
                <div className='bgText pb-6'>
                    <h2 className='fs-1 fw-bold py-3'>Florida elementary school principal and teacher are placed on leave after Black students are singled out at an assembly</h2>
                    <p>
                        The principal and a teacher at a Flagler County, Florida, elementary school are on paid administrative leave after an assembly was held only for fourth and fifth-grade Black students, who were collectively told to improve their school performance, according to the school district – regardless of how each student was doing individually.

                        The two school staffers were placed on leave days after the assembly was held at Bunnell Elementary School on August 18. Only African American students from the two grades participated, Flagler County Schools spokesperson Jason Wheeler told CNN.

                        During the assembly, a 2023-2024 school year Goals and Objectives PowerPoint presentation was used that read in part, “AA have underperform (sic) on standardized assessment for the last past 3 years,” Flagler County School Board chair Cheryl Massaro told CNN in an email.</p>
                        <Button variant='warning'>Read More...</Button>
                </div>
            </section>
        </>
    );
};

export default Us;