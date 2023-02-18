import {Card} from 'react-bootstrap';

type ArtistProps = {
  id : string;
  name: string;
  url: string;
};

const Artist = ({ id,name, url }: ArtistProps) => {
  return (
    <Card id = {id} style={{ width: '17rem' , marginLeft : '1%' , marginBottom : '3%'}}>
      <Card.Img style={{ objectFit: 'cover', height: '15rem', width: '15rem' , display: 'flex' , marginTop: '1rem' , marginLeft: 'auto', marginRight: 'auto'}} variant="top" src={url} alt={name}  />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Artist;
