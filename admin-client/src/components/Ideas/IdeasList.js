import React,{useEffect, useState} from 'react'
import {makeStyles, Container} from '@material-ui/core';
import Masonry from 'react-masonry-css'
import IdeaCard from './IdeaCard';
import { useSelector } from 'react-redux'


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
  const ideas = useSelector((state) => state.ideas);
  console.log(ideas);
  const classes = useStyles()
  const [ideaData, setIdeaData] = useState([])
//   const [ideaData, setIdeaData] = useState({
//       uid:'',
//       title:'',
//       summary:'',
//       description:'',
//       category:'',
//       status:'',
//       remarks:'',
//       owner:'',
//       selectedFile:'',
//   });
  
  useEffect(() => {
    fetch( "http://localhost:8000/ideas")
        .then(response => response.json())
        .then(data => setIdeaData(data))
  
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
            {ideaData.map(idea => (
                <div key={idea.id}>
                    <IdeaCard idea={idea}/>
                </div>
            ))}
        </Masonry>
    </Container>
  )
}
