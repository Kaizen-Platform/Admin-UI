import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@mui/material/CardActions';
import Typography from '@material-ui/core/Typography'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';
import { blue, green, pink, red, yellow, purple,  } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';




export default function IdeaCard({ idea }) {
    const getBackground = () => {
        if(idea.category === 'Tool'){
            return yellow[200]
        }
        if(idea.category === "Technical Framework"){
            return green[200]
        }
        if(idea.category === "Process Framework"){
            return pink[200]
        }
        if(idea.category === "Product"){
            return blue[200]
        }
        if(idea.category === "App"){
            return "#1de9b6"
        }
        if(idea.category === "Web Portal"){
            return "#76ff03"
        }
        if(idea.category === "Template"){
            return purple[200]
        }



        return "#1de9b6"
}
  return (
    <div>
            <Card elevation={1} style = {{backgroundColor: getBackground()}}>
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

                    <Button size="small" >Learn More</Button>
                </CardActions>
            </Card>
      
    </div>
  )
}