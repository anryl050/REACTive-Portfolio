import React from 'react';
import Button from 'react-bootstrap/Button';


export default function Resume() {
  return (
    <section className = "place-content-center pt-40 pb-40">
      <h1>Resume</h1>
      <a href="./assets/myw3schoolsimage.jpg" download>
      <Button variant="success">Success</Button>{' '}
      </a>
    </section>
  );
}
