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

  setTimeout(fadeInNextQuote, 2000); // Wait for 2 seconds before starting to fade in the blockquotes
}

var images = [
  "serpent1.jpg",
  "serpent2.jpg",
  "serpent3.jpg",
  // Add more image names as needed
];

var currentIndex = 0;
var galleryImage = document.getElementById("galleryImage");

function changeImage(step) {
  currentIndex += step;

  // Wrap around to the beginning or end if reaching the limits
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  galleryImage.src = images[currentIndex];
}

function performCustomAction() {
  const quotes = [
    "Quote 1",
    "Quote 2",
    "Quote 3",
    // Add more quotes as needed
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  terminalOutput.textContent += `\nRandom quote: ${randomQuote}`;
}

function processCommand(command) {
  switch (command) {
    case 'help':
      terminalOutput.textContent += '\nAvailable commands: help, time, greet, loremipsum';
      break;
    case 'time':
      const date = new Date();
      terminalOutput.textContent += `\nCurrent time: ${date.toLocaleTimeString()}`;
      break;
    case 'greet':
      terminalOutput.textContent += '\nHello there!';
      break;
    case 'loremipsum':
      performCustomAction();
      break;
    default:
      terminalOutput.textContent += `\nCommand not found: ${command}`;
      break;
  }

  // Scroll to the bottom of the terminal
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function performCustomAction() {
  // Write your code here to define what the "loremipsum" command should do
  // For example:
  terminalOutput.textContent += '\nCustom action executed!';
}
