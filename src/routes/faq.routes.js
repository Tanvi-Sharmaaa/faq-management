import express from 'express';
import faq from '../models/faq.model.js';
import { getFAQ, postFAQ,deleteFAQ } from '../controllers/faq.controller.js';

const router= express.Router();

router.get('/',getFAQ);
router.post('/',postFAQ);
router.delete('/:id',deleteFAQ);

export {router};
  
 
  