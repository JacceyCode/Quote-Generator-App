const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url) {
  try {
    // Display loading while fetching quotes
    quote.innerHTML = "";
    quote.classList.add("dots-2");
    author.innerHTML = "Loading...";

    const response = await fetch(url);

    //Error handling
    if (!response.ok) throw new Error();

    //Data handing
    const data = await response.json();
    if (data.content) quote.classList.remove("dots-2");
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
  } catch (error) {
    quote.innerHTML = "Error fetching quote, please try again!";
    author.innerHTML = "Error";
  }
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      '"' +
      quote.innerHTML +
      '"' +
      " -- by: " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=400"
  );
}
