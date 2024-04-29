console.log("Before");
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repos.repositories[0], (commits) => {
            console.log(commits);
        })
    })
});
console.log("After");

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading a user form the database....");
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    })
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling GitHub API....");
            resolve({ name: username, repositories: ['repo1', 'repo2', 'repo3'] });
        }, 2000);
    })
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting the Commits....");
            resolve({ name: repo, commits: ['Update', 'Delete', 'Create'] });
        }, 2000);
    })
}