document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("searchForm");
    const input = document.getElementById("usernameInput");
    const result = document.getElementById("result");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const username = input.value.trim();

        if (username === "") {
            result.innerHTML = "<p>Please enter a GitHub username.</p>";
            return;
        }

        const url = `https://api.github.com/users/${username}`;

        try {
            const response = await fetch(url);

            const data = await response.json();

            result.innerHTML = `
                <div class="card">
                    <img src="${data.avatar_url}" alt="Avatar" width="100">
                    <p>Name:${data.name || "N/A"}</p>
                    <p>Login: ${data.login}</p>
                    <p>Url to GitHub: <a href="${data.html_url}">${data.html_url}</a></p>
                    <p>Blog: <a href="${data.blog}">${data.blog || "N/A"}</a></p>
                    <p>City: ${data.location || "N/A"}</p>
                    <p>Email: ${data.email || "No Email"}</p>
                    <p>Followers: ${data.followers}</p>
                    <p>Following: ${data.following}</p>
                </div>
            `;
        } catch (error) {
            result.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });
});
