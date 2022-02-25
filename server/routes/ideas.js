import express from 'express';
import { getPosts, updatePost, getById } from '../controllers/ideas.js';

const router = express.Router();

router.get('/', getPosts);
// router.post('/', createPost);
router.get("/:id", getById);
router.patch('/:id', updatePost);


export default router;