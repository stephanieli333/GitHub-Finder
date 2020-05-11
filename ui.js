class UI{
    constructor(){
        this.profile = document.querySelector('#profile');

    }
    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3>
                        <img class="img-fluid mb-2" src="${user.avatar_url}" alt="Profile Avatar">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }
    showRepos(repos){
        let output = '';
        repos.forEach(repo => output+=`
            <div class="card card-body mb-2">
                <div class="row>
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>    
        `)
        document.querySelector('#repos').innerHTML=output;
    }
    clearProfile(){
        this.profile.innerHTML = '';
    }
    showError(message, className){
        this.clearProfile();
        const alert = document.createElement('div');
        alert.className=className;
        alert.appendChild(document.createTextNode(message));
        this.profile.appendChild(alert);
        setTimeout(()=>this.profile.removeChild(alert), 3000);
    }
}