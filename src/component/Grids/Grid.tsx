import Masonry from "react-masonry-css"
import { Card } from "../Card/Card";
import './Grid.css'
export const Grid = ({ gifs }: any) => {
    const breakpointColumnsObj = {
        default: 5,
        1100: 3,
        700: 2,
        500: 1
      };


    return <Masonry
    breakpointCols={breakpointColumnsObj}
    columnClassName='grid_column'
    className='grid'>
    {
        gifs.map(({id, url, images, title}: any) => (
            <div key={id}>
                <Card id={id} url={url} previewUrl={images.preview_gif.url} title={title}/>
            </div>
        ))
    }
  </Masonry>
}