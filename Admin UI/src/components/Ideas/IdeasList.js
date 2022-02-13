import React,{useEffect, useState} from 'react'
import {makeStyles, Container} from '@material-ui/core';
import Masonry from 'react-masonry-css'
import IdeaCard from './IdeaCard';

const useStyles = makeStyles({
    // btn: {
    //     fontSize: 60,
    //     backgroundColor: 'yellow',
    //     '&:hover':{
    //         backgroundColor:'orange'
    //     }
    // },
    // title: {
    //     textDecoration: 'underline',
    //     marginBottom: 20
    // }
    field: {
        marginTop: 20,
        marginBottom: 20,
        display:'block'
    }
})

export default function IdeasList() {

  const classes = useStyles()
  const [ideas, setIdeas] = useState([])
  
  useEffect(() => {
    fetch( "http://localhost:8000/ideas")
        .then(response => response.json())
        .then(data => setIdeas(data))
  
  }, [])
  
  const breakpoints = {
      default: 3,
      1100: 2,
      500: 1,

  }
  return (
    <Container>
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {ideas.map(idea => (
                <div key={idea.id}>
                    <IdeaCard idea={idea}/>
                </div>
            ))}
        </Masonry>
    </Container>
  )
}
