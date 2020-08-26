import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler';
import { getAllStudents, postStudent } from './controllers';
const router = express.Router();

router.get('/get/students', asyncHandler(getAllStudents));
router.post('/post/student', asyncHandler(postStudent));

export default router;
