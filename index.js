console.log("Before");
const user = getUser(1);
console.log(user);
console.log("After");

function getUser(id) {
    setTimeout(() => {
        console.log("Reading a user form the database....");
        return { id: id, gitHubUsername: 'mosh' };
    }, 2000);

    return 1;
}