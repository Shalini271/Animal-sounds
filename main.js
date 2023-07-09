function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/w-IDASorw/model.json", modelready);
}

function modelready() {
    console.log("success");
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else if (results) {
        console.log(results);
        sound = results[0].label;
        confidence = results[0].confidence;
        confidence = Math.floor(confidence * 100);
        document.getElementById("sound").innerHTML = "I can hear " + sound;
        document.getElementById("accuracy").innerHTML = "Accuracy: " + confidence + "%";
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("sound").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
   
    
    animal = document.getElementById("animals");
    if (sound == "Bark") {
        animal.src = "dog gif.gif";   
    }
    else if (sound == "Meow") {
     animal.src = "kitty-cat-sandwich.gif";
    }
    else if (sound == "Oink") {
        animal.src = "pig gif.gif";
    }
    else if (sound == "Moo"){
       animal.src  = "cow gif.gif";
    }
    else if (sound == "Background Noise"){
        animal.src  = "ear.jpg";
     }
    }
    
}







