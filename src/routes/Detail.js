import React from "react";
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  };

  render() {
    const { location } = this.props;
    console.log(location);
    return (
      <>
        <img 
          src={location.state.poster} 
          alt={location.state.title}
          title={location.state.title} 
          />
        <h1 className="title_detail">
          {location.state.title}
        </h1>
        <h3 className="year_detail">
          {location.state.year}
        </h3>
        <ul className="genres_detail">
          {location.state.genres.map((genre) => <li className="genre_detail">{genre}</li>)}
        </ul>
        <span className="genre_detail">
          {location.state.summary}
        </span>
      </>
    );
  };
}
export default Detail;