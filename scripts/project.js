const jokeDisplayElement = document.getElementById('jokeDisplay');
const getJokesBtn = document.getElementById('getJokesBtn');

getJokesBtn.addEventListener('click', fetchJokes);

async function fetchJokes() {
  const response = await fetch('https://api.icndb.com/jokes/random/5'); // Example API endpoint (Chuck Norris jokes)
  const data = await response.json();

  if (data.type === 'success') {
    const jokes = data.value;
    displayJokes(jokes);
  } else {
    jokeDisplayElement.textContent = 'Failed to fetch jokes. Please try again.';
  }
}

function displayJokes(jokes) {
  jokeDisplayElement.innerHTML = '';

  jokes.forEach(joke => {
    const jokeItem = document.createElement('p');
    jokeItem.textContent = joke.joke;
    jokeDisplayElement.appendChild(jokeItem);
  });
}
