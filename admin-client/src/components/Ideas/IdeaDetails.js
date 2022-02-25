import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import {Container} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'
import Chip from '@mui/material/Chip';
import { blue, green, pink, red, yellow, purple,  } from '@mui/material/colors';
import { styled, alpha, useTheme } from '@mui/material/styles';
import Typography from '@material-ui/core/Typography';
import { Avatar, Fab } from '@mui/material';
import { Grid,Item } from '@mui/material';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import moment from 'moment';
import { useEffect, useState } from 'react';
import EditIdea from './Edit/EditIdea';
import { Link, useParams } from 'react-router-dom';
// import { Link } from '@material-ui/core';
import Button from '@mui/material/Button';
import axios from 'axios';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

export default function IdeaDetails({idea, setOpen}) {

    const theme = useTheme();
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(null);
    
    

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
    const handleDrawerClose = () => {
        setOpen(false);
      };
      
    return (
        <div>
            <DrawerHeader style = {{backgroundColor: getBackground()}}>
                <Typography variant="h4" color="secondary" align = "left">{idea.title}</Typography>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />

            <Grid container spacing={3}className = {classes.details}>
                <Grid item xs={4} >
                  
                    <Box className = {classes.owner} sx={{ display: 'flex'}}>
                        <Avatar sx={{ width: 56, height: 56, bgcolor: blue[500] }}>
                            {idea.owner[0].toUpperCase()}
                        </Avatar>
                        <Typography className = {classes.owner} variant="h6" color="secondary" align = "left">
                            {idea.owner}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={2} className = {classes.chips}>
                    <Typography variant="body1" color="secondary" align = "left">
                        Category   
                    </Typography>
                    <Chip  label={idea.category} style = {{backgroundColor: getBackground()}}/>
                </Grid>
                <Grid item xs={2} className = {classes.chips}> 
                    <Typography variant="body1" color="secondary" align = "left">
                        Status   
                    </Typography>
                    <Chip  label={idea.status} color="primary"/>
                </Grid>
                <Grid item xs={2}> 
                    <Typography variant="h6" color="secondary" align = "left">
                        {moment(idea.createdAt).fromNow()}   
                    </Typography>
                </Grid>
                <Grid item xs={2}> 
                    <Fab color="primary" aria-label="edit" size="small" align="right">
                        {/* <EditIcon onClick={() => setCurrentId(idea._id)}/>
                        {currentId? <EditIdea currentId={currentId} />:null} */}
                        <Button LinkComponent={Link} to={`/editIdea/${idea._id}`} onClick={() => setCurrentId(idea._id)}>
                            <EditIcon style={{ color: "white" }}/>
                        </Button>
                        {/* <Link to = '/editIdea' cla ssName='btn-btn-primary'>edit</Link> */}
                    </Fab>
                </Grid>

                
                <Grid className={classes.keys} item xs={2}>
                    <Typography variant="body1" color="secondary" align = "center">
                        Summary
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1" color="secondary" align = "left">
                        {idea.summary} 
                    </Typography>
                </Grid>
                

                <Grid className={classes.keys} item xs={2}>
                    <Typography variant="body1" color="secondary" align = "center">
                        Description
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1" color="secondary" align = "left">
                        {idea.description} 
                    </Typography>
                </Grid>


                <Grid className={classes.keys} item xs={2}>
                    <Typography variant="body1" color="secondary" align = "center">
                        Remarks
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1" color="secondary" align = "left">
                        {idea.remarks} 
                    </Typography>
                </Grid>

            </Grid>

        </div>

    )
}