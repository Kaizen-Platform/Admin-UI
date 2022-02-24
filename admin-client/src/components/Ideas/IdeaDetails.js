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

            <Grid container spacing={3} justifyContent="space-around">
                <Grid item xs={8} >
                    <Typography padding={10} variant="h4" color="secondary" align = "left">
                        Owner: {idea.owner}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Chip  label={idea.category} style = {{backgroundColor: getBackground()}}/>
                </Grid>
                <Grid item xs={2}> 
                    <Chip  label={idea.status} color="primary"/>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1" color="secondary" align = "left">
                        Summary: {idea.summary} 
                        
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Fab color="secondary" aria-label="edit" size="small" align="right">
                        <EditIcon />
                    </Fab>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1" color="secondary" align = "left">
                        Description: {idea.description} 
                        
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Fab color="secondary" aria-label="edit" size="small" align="right">
                        <EditIcon />
                    </Fab>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1" color="secondary" align = "left">
                        Remarks: {idea.remarks}
                        
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Fab color="secondary" aria-label="edit" size="small" align="right">
                        <EditIcon />
                    </Fab>
                </Grid>

            </Grid>

        </div>

    )
}