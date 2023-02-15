const determiners_singular = ["a", "one", "the"];

const determiners_plural = ["some", "many", "the"];

const nouns_singular = ["boy", "cat", "car", "man", "dog", "deer", "elephant"];

const nouns_plural = ["boys", "cats", "cars", "men"];

const verbs_past = ["ran", "ate", "laughed", "cried"];

const verbs_present_singular = ["runs", "eats", "laughs", "cries", "escapes", "flyes", "swims"];

const verbs_present_plural = ["run", "eat", "laugh", "cry"];

const verbs_future = ["will run", "will eat", "will laugh", "will cry"];




//function that creates a singular phrase, repeat this function with different options like singular-past, singular-future, etc
function changePhrase (){
    let phrase = document.getElementById("random-phrase");
    
    let randomDeterminer = determiners_singular[Math.floor(Math.random() * determiners_singular.length)];
    
    let randomNoun = nouns_singular[Math.floor(Math.random() * nouns_singular.length)];
    
    let randomVerb = verbs_present_singular[Math.floor(Math.random() * verbs_present_singular.length)];
    
    phrase.innerHTML = `${randomDeterminer} ${randomNoun} ${randomVerb}`;
}

let button = document.querySelector("#generate-phrase");

button.addEventListener("click", changePhrase);


//GET AN IMAGE FROM THE GENERATED PHRASE



// const API_KEY = "33654372-731e16a116c7d7403d778fb56";
// const searchTerm = currentPhrase.innerHTML;
// const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`;

async function getImage(){

    //get the current phrase that is generated and create a list to store the words from the phrase
    let currentPhrase = document.getElementById("random-phrase");
    
    let wordsFromPhrase = [];
    
    wordsFromPhrase = currentPhrase.innerHTML.split(" ");


    //put items from the list in the URL to call the data using the Pixabay API
    const searchTerm = `${wordsFromPhrase[0]}+${wordsFromPhrase[1]}+${wordsFromPhrase[2]}`;

    const response = await fetch(`https://pixabay.com/api/?key=33654372-731e16a116c7d7403d778fb56&q=${searchTerm}&image_type=photo&pretty=true`);
    
    const data = await response.json();

    console.log(data);

    //To change form the same image to a random, randomize the index for data.hits
    const imgURL = data.hits[0].webformatURL;

    const image = document.getElementById("image");

    image.src = imgURL;
}

let drawingButton = document.getElementById("generate-drawing");

drawingButton.addEventListener("click", getImage);

