const redisClient = require("./config/redis")


exports.saveCallId = (key,value) => {
    return new Promise((resolve,reject) =>{
        redisClient.SET(key, JSON.stringify(value),"EX",86400,(err,res) =>{  //link expires here change later
            if(err){
                reject(err)
            }
            resolve(res)
        })
    })
}


exports.getCallId = (key) =>{
    return new Promise((resolve, reject) =>{
        if(err){
            reject(err)
        }
        resolve(JSON.parse(res))
    })
}