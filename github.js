class GitHub{
    constructor(){
        this.numRepos = 5;
        this.repoSort = 'created: asc';
    }
    async getUser(username){
        const profileResponse = await fetch(`https://api.github.com/users/${username}`);
        const profile = await profileResponse.json();
        const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.numRepos}&sort=${this.repoSort}`);
        const repos = await repoResponse.json();
        return {
            profile, 
            repos
        }
    }
}