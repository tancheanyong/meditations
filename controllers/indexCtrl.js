const db = require('../database');

exports.getHome=(req,res)=>{
    const data={
        "title":"Meditations",
        "tableResult":[]
    }
    const sqlquery="SELECT * FROM cards ORDER BY RAND() LIMIT 1";
    db.query(sqlquery,(err,rows)=>{
        if(err){
            console.log(err);
            res.render('index',data);
        }else{
            console.log(rows);
            data.tableResult=rows;
            res.render('index',data);
        }
    })
};

exports.postWords=(req,res)=>{
    
    const dateObj=new Date();
    const date=dateObj.getFullYear()+'/'+(dateObj.getMonth()+1)+'/'+dateObj.getDate()+' '+dateObj.getHours()+':'+((dateObj.getMinutes()<10?'0':'')+dateObj.getMinutes())+':'+((dateObj.getSeconds()<10?'0':'')+dateObj.getSeconds());
    console.log(date);
    const sqlWords=req.body.wordsInput;
    const sqlMood=req.body.moodInput;
    const query="INSERT INTO cards VALUE('"+date+"','"+sqlMood+"','"+sqlWords+"')";
    db.query(query,(err,rows)=>{
        if(err){
            console.log(err);
            res.redirect('/');
        }else{
            console.log('value entered!');
            res.redirect('/');
        }
    });
};