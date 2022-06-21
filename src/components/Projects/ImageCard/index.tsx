import Image from 'next/image';
import {
  CardWrapper,
  Card,
  CardHead,
  CardBody,
  CardTitle,
  CardText,
} from './styles';

const ImageCard = () => {
  return (
    <CardWrapper>
      <Card>
        <CardHead>
          <Image
            src={
              'https://img001.prntscr.com/file/img001/RWTorb49RUW6UCGODopCTA.png'
            }
            layout={'fill'}
            alt="Card Image"
          />
        </CardHead>
        <CardBody>
          <CardTitle>QQQQQQQQQQQQQQQQQQ</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diamnonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyamerat,qqqqqqqqqqqqqqqqqqqqqqqq
          </CardText>
        </CardBody>
      </Card>
    </CardWrapper>
  );
};

export default ImageCard;
