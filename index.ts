const conn = require('./connect.js');

function query(sql:string){
    return new Promise(function(resolve, reject){
        conn.query(sql,(err,result)=>{
            if(err){
                reject({err})
            }
            resolve({result})
        });
    });

}

async function getCustomers(){
    let customers =  await query('select * from customers');
    console.log(customers);
}
getCustomers();

