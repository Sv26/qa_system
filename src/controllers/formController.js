const connection = require('../config/db')

exports.submitForm = (req,res) =>{
    const {department,role ,brand,sift,date,enginer_name,in_charge_name,itam,time} = req.body;
    const query = 
    `INSERT INTO  forme_data (department,role ,brand,sift,date,enginer_name,in_charge_name,itam,time)
    VALUES ('${department}','${role}','${brand}','${sift}','${date}','${enginer_name},${in_charge_name},${itam}${time}
    `;
    connection.query(query,[department,role ,brand,sift,date,enginer_name,in_charge_name,itam,time],
        (err,result)=>{
            if(err){
                console.log(err)
                res.status(500).send(`error saving data`);
                return;
            }
            res.status(200).send(`data saved successfully`);
        });


};

exports.getForm = (req,res) =>{
    const query = `SELECT * FROM forme_data`;

    connection.query(query,(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send('error fetching data');
            return;}
            res.status(200).send(result);
    });
};