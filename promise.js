const p = new Promise((resolve, reject) => {
    // Kick out some async work
    setTimeout(() => {
        // resolve(1); //pending => resolved, fulfilled
        reject(new Error("message")); //pending => rejected
    }, 2000);
});

p.then(result => console.log(result)).catch(error => console.log(error));