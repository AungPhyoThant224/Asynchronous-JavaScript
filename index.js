console.log("Before");
getUser(1, getRepos);
console.log("After");

function getRepos(user) {
    getRepositories(user.gitHubUsername, getCommit)
}

function getCommit(repos) {
    getCommits(repos.repositories[0], displayCommit);
}

function displayCommit(commits) {
    console.log(commits);
}

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

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log("Getting the Commits....");
        callback({ name: repo, repositories: ['Update', 'Delete', 'Create'] });
    }, 2000);
}