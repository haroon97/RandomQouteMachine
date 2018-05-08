const qoutes = [
      'The Way To Get Started Is To Stop Talking And Begin Doing.  -Walt Disney',
      'The Pessimist Sees Difficulty In Every Oppurtunity. The Oppurtunist Sees Oppurtunity In Every Difficulty.  -William Churchil',
      'Don\'t Let Yesterday Take Up Too Much Of Today.  Will Rogers',
      'You Learn More From Failure Than From Success. Don\'t Let It Stop You. Failure Builds Character.  -Haroon Ahmed',
      'It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up.  -Vince Lombardi',
      'If You Are Working On Something You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You.  -Steve Jobs',
      'People Who Are Crazy Enough To Think That They Can Change The World, Are The Ones Who Do.  -Og Mandino',
      'We May Encounter Many Defeats But We Must Not Be Defeated.  -Maya Angelo',
      'Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.  -Princess Diana',
      'Genius does what it must, talent does what it can.  -Edward Bulwer',
      'People are lucky and unlucky ... according to the ratio between what they get and what they have been led to expect.  -Samuel Butler',
      'A man should never be ashamed to own that he has been in the wrong, which is but saying ... that he is wiser today than yesterday.  -Jonathan Swift',
      'Our actions are the springs of our happiness or misery.  -Philip Skelton',
      'I don\'t believe in pessimism.  -Clint Eastwood'];

const colors = ['#16a085',
                '#27ae60', 
                '#2c3e50',
                '#f39c12', 
                '#e74c3c',
                '#9b59b6',
                '#FB6964',
                '#342224',
                '#472E32',
                '#BDBB99',
                '#77B1A9',
                '#73A857'];

let count = 0;
let colorCount = 0;
const qouteButton = document.querySelector('.newQoute');
const qouteText = document.querySelector('.qouteText');
const body = document.querySelector('body');
const twButton = document.querySelector('.btn-tw');
const shareTweetButton = document.querySelector('.shareTweet');

qouteButton.addEventListener('click', () => {
	qouteText.innerHTML = qoutes[count];
	body.style.backgroundColor = colors[colorCount];
	qouteButton.style.backgroundColor = colors[colorCount];
	qouteText.style.color = colors[colorCount];
	twButton.style.backgroundColor = colors[colorCount];
	count += 1;
	colorCount += 1;
	if(count === qoutes.length)
	{
		count = 0;
	}
	if(colorCount === colors.length - 1)
	{
		colorCount = 0;
	}
});

shareTweetButton.addEventListener('click', () => {
	if(qouteText.innerHTML.length > 140)
	{
		alert("The length of qoute is larger than allowed limit!");
	}
	else
	{
		let twitterURL = "https://twitter.com/intent/tweet?text=" + qouteText.innerHTML;
	    shareTweetButton.setAttribute("href", twitterURL);
	}
	

})
