import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@mui/material/CardActions';
import Typography from '@material-ui/core/Typography'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';
import { blue, green, pink, red, yellow } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';

// const useStyles = makeStyles({
//     avatar: {
//         // border: (idea) => {
//         //     if(idea.category == 'work'){
//         //         return '1px solid red'
//         //     }
//         // }
//         backgroundColor: (idea) => {
//             if(idea.category == 'Tool'){
//                 return "#00AAFF"
//             }
//             if(idea.category == "Technical Framework"){
//                 return green[200]
//             }
//             if(idea.category == "Process Framework"){
//                 return pink[200]
//             }
//             return red[200]
//         }
//     },
// })

const CardStyled = styled('div')({
    position: 'relative',
    // backgroundColor: "#00AAFF"
    backgroundColor: (idea) => {
        if(idea.category == 'Tool'){
            return "#00AAFF"
        }
        if(idea.category == "Technical Framework"){
            return green[200]
        }
        if(idea.category == "Process Framework"){
            return pink[200]
        }
        return red[200]
    }
    
  });

export default function IdeaCard({ idea }) {
    // const classes = useStyles(idea)
  return (
    <div>
        <CardStyled>
            <Card elevation={1}>
                <CardHeader
                avatar = {
                    <Avatar >
                        {idea.category[0].toUpperCase()}
                    </Avatar>
                }
                title={idea.title}
                subheader={idea.category}
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary">
                    { idea.details }
                </Typography>
                </CardContent>
                <CardActions>

                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </CardStyled>
      
    </div>
  )
}