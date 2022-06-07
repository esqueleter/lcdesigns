import type { NextPage } from 'next';
import { Card } from 'react-bootstrap';

const ImageCard: NextPage = () => {
  return (
    <>
      <Card style={{ width: 'fit-content', maxWidth: '280px' }}>
        <Card.Img
          src="https://img001.prntscr.com/file/img001/RWTorb49RUW6UCGODopCTA.png"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Text>
          <Card.Text>Other content</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ImageCard;
