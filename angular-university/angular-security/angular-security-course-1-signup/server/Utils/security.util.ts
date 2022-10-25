const util=require('util');
const cryptoTwo=require('crypto');
// promise based version of randomBytes
export const randomBytes=util.promisify(cryptoTwo.randomBytes)
// callback based randomBytes
// cryptoTwo.randomBytes(32,(err,num)=>{
//     console.log("num-callback-based",num)
// })
// promise based based randomBytes
// randomBytes(32)
//     .then(num=>console.log("num-promise-based",num))
//     .catch(err=>{console.log("error",err)})