
const db=require('../database');

exports.getBrowse=(req,res)=>{
    const data={
        "title":"Browse",
        "tableResult":[]
    };
    const query='SELECT * FROM cards ORDER BY RAND() LIMIT 10';

    db.query(query,(err,rows)=>{
        if(err){
            console.log(err);
            res.render('browse',data);
        }else{
            console.log('Data retrieved!');
            data.tableResult=rows;
            res.render('browse',data);
        };
    });
    
};

exports.moodSearch=(req,res)=>{
    const search=req.body.browseSearch;
    console.log(search);
    const data={
        "title":"Browse",
        "tableResult":[]
    };
    db.query('SELECT * FROM cards WHERE mood="'+search+'"',(err,rows)=>{
        if(err){
            console.log(err);
            res.render('browse',data);
        }else{
            console.log('Mood search finished!');
            data.tableResult=rows;
            res.render('browse',data);
        };
    });
}

exports.keywordSearch=(req,res)=>{
    const search=req.body.browseSearch;
    console.log(search);
    const data={
        "title":"Browse",
        "tableResult":[]
    };
    db.query('SELECT * FROM cards WHERE words LIKE "%'+search+'%"',(err,rows)=>{
        if(err){
            console.log(err);
            res.render('browse',data);
        }else{
            console.log('keyword search finished!');
            data.tableResult=rows;
            res.render('browse',data);
        };
    });
}

exports.deleteCard = (req,res) =>{
   const datetime=req.params.datetime;
   console.log(datetime);
   const sqlquery='DELETE FROM cards WHERE datetime="'+datetime+'"';
   db.query(sqlquery,(err,rows)=>{
        if(err) throw err;
        console.log('Delete successful!');
        res.redirect('/browse');
   });
}