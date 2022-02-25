import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@material-ui/core/Typography'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Avatar, Fab } from '@mui/material';
import { blue, green, pink, red, yellow, purple,  } from '@mui/material/colors';
import { styled, alpha, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IdeaDetails from './IdeaDetails';


// const drawerWidth = 240;

  const useStyles = makeStyles((theme) => {
    return {
      
      drawerPaperIdeaDetail:{
        width:"84%"
      },
    }
  
})


export default function IdeaCard({ idea }) {
    
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
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

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    

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
                        { idea.summary }
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleDrawerOpen} >Learn more</Button>
                        <Drawer
                            variant="persistent"
                            anchor="right"
                            open={open}
                            classes={{paper: classes.drawerPaperIdeaDetail}}
                            style = {{backgroundColor: getBackground()}}
                        >
                            <IdeaDetails idea = {idea} setOpen={setOpen}/>
                        </Drawer>
                    </CardActions>
                </Card>
        </div>
    )
}