console.log("Before");
getUser(1, (user) => {
    console.log(user);

    getRepositories(user.gitHubUsername, (repo) => {
        console.log(repo);
    });
});
console.log("After");

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading a user form the database....");
        callback({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log("Calling GitHub API....");
        callback({ name: username, repositories: ['repo1', 'repo2', 'repo3'] });
    }, 2000);
}