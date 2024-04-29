console.log("Before");
// getUser(1, (user) => {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repos.repositories[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });

//Promise-base approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos.repositories[0]))
//     .then(commits => console.log(commits))
//     .catch(error => console.log("Error ", error.message));

// Async and Await approach
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos.repositories[0]);
        console.log(commits);
    } catch (error) {
        console.log("Error", error.message);
    }
}
displayCommits();

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
            reject(new Error("Cannot get repos..."));
            // console.log("Calling GitHub API....");
            // resolve({ name: username, repositories: ['repo1', 'repo2', 'repo3'] });
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