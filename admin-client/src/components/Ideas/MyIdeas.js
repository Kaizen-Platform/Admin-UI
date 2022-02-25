import React from 'react'
import IdeaCard from './IdeaCard';
import Masonry from 'react-masonry-css';
import {makeStyles, Container} from '@material-ui/core';

function MyIdeas({ideaData}) {
  const breakpoints = {
    default: 3,
    1100: 2,
    500: 1,
  }
  const owner = "varun";
  return (
    <Container>
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {ideaData.map(idea => (
                <div key={idea._id}>
                  {/* console.log({idea.title}); */}
                    {(idea.owner == owner) ?<IdeaCard idea={idea}/>:null}
                </div>
            ))}
        </Masonry>
    </Container>
  )
}

export default MyIdeas