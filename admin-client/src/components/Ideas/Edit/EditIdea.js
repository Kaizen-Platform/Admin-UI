import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {updatePost} from '../../../actions/ideas';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



function EditIdea({}) {
    const classes = useStyles();
    const history = useNavigate();
    const [postData, setPostData] = useState(
    //     {
    //     owner: '', 
    //     title: '', 
    //     summary: '', 
    //     description: '', 
    //     selectedFile: '',
    //     category:'',
    //     status: '',
    //     remarks:'',
    //     createdAt: '',
    // }
    );

    const id = useParams().id;
    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/ideas/${id}`)
                .then((res) => res.data)
                .then(data => setPostData(data.post));
        };
        fetchHandler();
    },[id]);

    const sendRequest = async() => {
        await axios.patch(`http://localhost:5000/ideas/${id}`, {
            title: String(postData.title),
            summary: String(postData.summary),
            description: String(postData.description),
            category: String(postData.category),
            status: String(postData.status)
        }).then(res => res.data)
    } 

    const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(() => history("/ideasList"));
    };
    
    const handleChange = (e) => {
        
    };
    // const clear = () => {
        
    //     setPostData({
    //         owner: '', 
    //         title: '', 
    //         summary: '', 
    //         description: '', 
    //         selectedFile: '',
    //         category:'',
    //         status: '',
    //         remarks:'',
    //         createdAt: '',
    //     });
    // }
  return (
    <Paper className={classes.paper}>
        {postData && (<form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Edit Idea</Typography>
            <TextField 
                name = "title" 
                variant="outlined" 
                label="Title" 
                fullWidth
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />
            <TextField 
                name = "summary" 
                variant="outlined" 
                label="Summary" 
                fullWidth
                value={postData.summary}
                onChange={(e) => setPostData({ ...postData, summary: e.target.value })}
            />
            <TextField 
                name = "description" 
                variant="outlined" 
                label="Description" 
                fullWidth
                value={postData.description}
                onChange={(e) => setPostData({ ...postData, description: e.target.value })}
            />
            <TextField 
                name = "category" 
                variant="outlined" 
                label="Category" 
                fullWidth
                value={postData.category}
                onChange={(e) => setPostData({ ...postData, category: e.target.value})}
            />
            <TextField 
                name = "status" 
                variant="outlined" 
                label="Status" 
                fullWidth
                value={postData.status}
                onChange={(e) => setPostData({ ...postData, status: e.target.value})}
            />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            {/* <Button variant="contained" color="secondary" size="small"  fullWidth>Clear</Button> */}
        </form>)}
    </Paper>
  )
}

export default EditIdea