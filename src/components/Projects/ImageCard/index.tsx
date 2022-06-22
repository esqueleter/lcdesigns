import { NextPage } from 'next';
import Image from 'next/image';
import { ICardSlider } from '../../../interfaces/IProjects';
import {
  CardWrapper,
  Card,
  CardHead,
  CardBody,
  CardTitle,
  CardText,
} from './styles';

const ImageCard: NextPage<{ data: ICardSlider }> = ({ data }) => {
  return (
    <CardWrapper>
      <Card>
        <CardHead>
          <Image src={data.image.url} layout={'fill'} alt={data.title} />
        </CardHead>
        <CardBody>
          <CardTitle>{data.title}</CardTitle>
          <CardText>{data.content}</CardText>
        </CardBody>
      </Card>
    </CardWrapper>
  );
};

export default ImageCard;
