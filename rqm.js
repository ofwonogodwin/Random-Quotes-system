const quotes = [
    {
      text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison",
    },
    {
      text: "You can observe a lot just by watching.",
      author: "Yogi Berra",
    },
    {
      text: "A house divided against itself cannot stand.",
      author: "Abraham Lincoln",
    },
    {
      text: "Difficulties increase the nearer we get to the goal.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      text: "Fate is in your hands and no one elses",
      author: "Byron Pulsifer",
    },
    {
      text: "Be the chief but never the lord.",
      author: "Lao Tzu",
    },
    {
      text: "Nothing happens unless first we dream.",
      author: "Carl Sandburg",
    },
    {
      text: "Well begun is half done.",
      author: "Aristotle",
    },
    {
      text: "Life is a learning experience, only if you learn.",
      author: "Yogi Berra",
    },
    {
      text: "Self-complacency is fatal to progress.",
      author: "Margaret Sangster",
    },
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha",
    },
    {
      text: "What you give is what you get.",
      author: "Byron Pulsifer",
    },
    {
      text: "We can only learn to love by loving.",
      author: "Iris Murdoch",
    },
    {
      text: "Life is change. Growth is optional. Choose wisely.",
      author: "Karen Clark",
    },
    {
      text: "You'll see it when you believe it.",
      author: "Wayne Dyer",
    },
    {
      text: "It's easier to see the mistakes on someone else's paper.",
      author: "Godwin Ofwono",
    },
    {
      text: "To lead people walk behind them.",
      author: "Lao Tzu",
    },
  ];
  
  const colors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#9E9E9E",
    "#607D8B",
    "#1ABC9C",
    "#16A085",
    "#2ECC71",
  ];
  
  let currentColor = colors[0];
  let currentQuote = quotes[0];
  
  function pickRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  function pickRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function onButtonClick() {
    currentColor = pickRandomColor();
    currentQuote = pickRandomQuote();
  
    document.body.style.backgroundColor = currentColor;
    document.getElementById('quoteBox').style.color = currentColor;
    document.getElementById('newQuoteButton').style.backgroundColor = currentColor;
  
    document.getElementById('quoteText').textContent = currentQuote.text;
    document.getElementById('quoteAuthor').textContent = currentQuote.author;
  }
  
  // Ofwono U can now use the first quote and color
  document.addEventListener('DOMContentLoaded', (event) => {
    document.body.style.backgroundColor = currentColor;
    document.getElementById('quoteBox').style.color = currentColor;
    document.getElementById('newQuoteButton').style.backgroundColor = currentColor;
  
    document.getElementById('quoteText').textContent = currentQuote.text;
    document.getElementById('quoteAuthor').textContent = currentQuote.author;
  });