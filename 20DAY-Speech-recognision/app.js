window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true; //to be able to see what we are saying as we speeking

let p = document.createElement('p');

const words = document.querySelector('.words');

words.appendChild(p);

recognition.addEventListener('result', e => {

  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.textContent = transcript;
  if(e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }

  if(transcript.includes('unicorn')){
    document.querySelector('body').style.background = "url(https://image.freepik.com/free-vector/no-translate-detected_1278-135.jpg) repeat"
  }

  if(transcript.includes('cat')){
    document.querySelector('body').style.background = "url(https://avatanplus.com/files/resources/mid/5934fd840ee3915c76fe4bdd.png) repeat"
  }

  console.log(transcript);
});

recognition.addEventListener('end', recognition.start);

recognition.start();
