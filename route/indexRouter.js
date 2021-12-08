const express=require('express');
const app=express();
const router=express.Router();
const indexCtrl=require('../controllers/indexCtrl');
const browseCtrl=require('../controllers/browseCtrl');


router.get('/',indexCtrl.getHome);

router.post('/postWords', indexCtrl.postWords);

router.get('/browse',browseCtrl.getBrowse);

router.post('/browse/moodSearch',browseCtrl.moodSearch);
router.post('/browse/keywordSearch',browseCtrl.keywordSearch);

router.get('/delete/:datetime',browseCtrl.deleteCard);

module.exports=router;