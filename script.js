function openJournal() {
  console.log("Opening journal...");
  var welcomeText = document.createElement("p");
  welcomeText.style.color = "green";
  welcomeText.innerHTML = "<b>Welcome back, Dr. Solberg. Opening journal...</b>";
  document.querySelector("#journal").appendChild(welcomeText);

  var quotes = document.querySelectorAll("blockquote.hidden");
  var delay = 1500; // 1.5 second delay between fading in each quote (in milliseconds)
  var fadeDuration = 1000; // Duration of the fade effect (in milliseconds)
  var currentQuoteIndex = 0;

  function fadeInNextQuote() {
    if (currentQuoteIndex < quotes.length) {
      quotes[currentQuoteIndex].style.opacity = 1;
      currentQuoteIndex++;
      setTimeout(fadeInNextQuote, delay);
    }
  }

  fadeInNextQuote(); // Start fading in the blockquotes
}
