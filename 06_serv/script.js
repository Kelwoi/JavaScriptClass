const API_KEY = '4fa6e15a';
let currentPage = 1;
let currentSearch = '';

document.getElementById('searchBtn').addEventListener('click', () => {
  currentPage = 1;
  currentSearch = document.getElementById('searchInput').value.trim();
  searchMovies();
});

document.getElementById('nextPage').addEventListener('click', () => {
  currentPage++;
  searchMovies();
});

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    searchMovies();
  }
});

async function searchMovies() {
  if (!currentSearch) return;

  const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(currentSearch)}&page=${currentPage}&apikey=${API_KEY}`);
  const data = await response.json();

  const container = document.getElementById('moviesContainer');
  container.innerHTML = '';
  document.getElementById('currentPage').textContent = currentPage;

  if (data.Response === "True") {
    data.Search.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/180x260?text=No+Image'}" alt="Poster">
        <h3>${movie.Title}</h3>
        <p>📅 ${movie.Year}</p>
      `;
      container.appendChild(card);
    });
  } else {
    container.innerHTML = `<p>No results found.</p>`;
  }
}
