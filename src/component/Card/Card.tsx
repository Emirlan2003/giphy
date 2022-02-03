import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({
  previewUrl,
  id
  }: any) => {
 
  const [loaded, setLoaded] = useState(false);

  const inlineImageStyles = {
    opacity: loaded ? 1 : 0
  };

  const onLoad = (e: any) => {
    setLoaded(true);
  };

  const loaderInlineStyles = {
    opacity: loaded ? 0 : 1
  }

  return (
    <Link
      className='root'
      to={`/gif/${id}`}
    >
     <img
          src={previewUrl}
          style={inlineImageStyles}
          onLoad={onLoad}
          alt=''
          className='imgGif'
        />
      <div className='loader' style={loaderInlineStyles}>Loading</div>
    </Link>
  );
};

export { Card };