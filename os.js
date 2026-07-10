const os = require('node:os');
/*console.log(os.userInfo());

console.log('the cpu architecture is ' + os.arch());*/

//network interfaces

const networkFaces = os.networkInterfaces();
jsonformat = JSON.stringify(networkFaces, null, 2);
console.log(jsonformat);

console.log(__dirname);
