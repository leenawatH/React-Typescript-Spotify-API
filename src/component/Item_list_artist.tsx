import React from 'react';
import { spotifyApi } from './api';
import Card from './Card';
import {Row} from 'react-bootstrap';

interface SearchResultProps {
  accessToken: string;
  query: string;
}

interface Artist {
  id: string;
  name: string;
  images: { url: string }[];
}

interface SearchResultState {
  artists: Artist[];
}

export class SearchResult extends React.Component<SearchResultProps, SearchResultState> {
  constructor(props: SearchResultProps) {
    super(props);
    this.state = { artists: [] };
  }

  async componentDidMount() {
    const { accessToken, query } = this.props;
    const { artists } = await spotifyApi.search(query, ['artist'], { accessToken });
    this.setState({ artists: artists.items });
  }

  render() {
    return (
      <div>
        <Row style={{ margin: '5%' }} className='List_of_Item'>
            {this.state.artists.map((artist) => {

                return <Card id={artist.id} name={artist.name} url={artist.images[0].url} />

            })}
        </Row>

      </div>
    );
  }
}
export default SearchResult;