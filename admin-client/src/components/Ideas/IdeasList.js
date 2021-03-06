import React,{useEffect, useState} from 'react'
import {makeStyles, Container} from '@material-ui/core';
import Masonry from 'react-masonry-css'
import IdeaCard from './IdeaCard';
import { useDispatch, useSelector } from 'react-redux';
import { createPost} from '../../actions/ideas';


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

export default function IdeasList({ideaData}) {
  const ideas = useSelector((state) => state.ideas);
  console.log(ideas);
  const classes = useStyles()
  const dispatch = useDispatch();
  
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
                <div key={idea._id}>
                    <IdeaCard idea={idea}/>
                </div>
            ))}
        </Masonry>
    </Container>
  )
}
