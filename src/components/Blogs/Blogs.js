import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8} className="mt-5">
                        <h5>1. What is the difference between <code>authorization</code> and <code>authentication</code> ?</h5>

                        <p>
                        <strong>Authentication</strong> is the process of identifying someone's identity by assuring that the person is the same as what he is claiming for. It is used by both server and client. The server uses authentication when someone wants to access the information, and the server needs to know who is accessing the information. The client uses it when he wants to know that it is the same server that it claims to be. The authentication by the server is done mostly by using the username and password. Other ways of authentication by the server can also be done using cards, retina scans, voice recognition, and fingerprints.
                        </p>
                        <p>
                        <strong>Authorization</strong> is the process of granting someone to do something. It means it a way to check if the user has permission to use a resource or not. It defines that what data and information one user can access. It is also said as AuthZ. The authorization usually works with authentication so that the system could know who is accessing the information. It is usually done once the user is successfully authenticated. User cannot modify the Authorization permissions as it is given to a user by the owner/manager of the system, and only has the authority to change it.
                        </p>

                        <h5 className='mt-5'>2. Why are you using <code>firebase</code> ? What other options do you have to implement authentication?</h5>

                        <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                        <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through <b>cards</b>, <b>retina scans</b>, <b>voice recognition</b>, and <b>fingerprints</b>.</p>

                        <h5 className='mt-5'>3. What other services does <code>firebase</code> provide other than <code>authentication</code>?</h5>
                        <p>There are many services which Firebase provides, Most useful of them are:</p>
                        <ol>
                            <li>Hosting</li>
                            <li>Cloud Firestore</li>
                            <li>Cloud Functions</li>
                            <li>Authentication</li>
                            <li>Cloud Storage</li>
                            <li>Google Analytics</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging</li>
                            <li>Dynamic Links</li>
                            <li>Remote Config</li>
                            
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;






