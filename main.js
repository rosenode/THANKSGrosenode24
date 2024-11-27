let btn= document.getElementById('btn');
let output= document.getElementById('output');
let quotes = 
[
      '"Gratitude turns what we have into enough."',
     '"Thanksgiving is a time to reflect on the good things in life, to be grateful for the past, and hopeful for the future."',
      '"Thanksgiving is the day when we pause to appreciate the abundance in our lives, to share and reflect on the goodness that surrounds us."',
      '"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them."',
      '"The roots of all goodness lie in the soil of appreciation for goodness."'
  ];

  btn.addEventListener('click', function(){
      var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      output.innerHTML = randomQuote;
  })
