const res = Promise.resolve('1');
res.then(result => console.log(result));

const rej = Promise.reject(new Error("Reason for rejection..."));
rej.then(error => console.log(error));