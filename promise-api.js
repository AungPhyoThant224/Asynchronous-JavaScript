// -----Settled Promises-----

// const res = Promise.resolve('1');
// res.then(result => console.log(result));

// const rej = Promise.reject(new Error("Reason for rejection..."));
// rej.then(error => console.log(error));

// -----Promises in Parallel-----

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async operation 1");
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async operation 2");
        resolve(2);
    }, 2000);
});

/** Promise.race([p1, p2]) will return a new promise that will be resolved when all the promise in the array are resolved. */
Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(error => console.log('Error', error.message));

/**  As soon as one promise in the array is fulfilled, the promise that will return form this method is considered as fulfilled*/
Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(error => console.log('Error', error.message));