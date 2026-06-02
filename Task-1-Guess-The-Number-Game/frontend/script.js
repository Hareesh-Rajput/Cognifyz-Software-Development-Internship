let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess(){

    let userGuess =
    Number(document.getElementById("guess").value);

    let result =
    document.getElementById("result");

    if(userGuess === randomNumber){
        result.innerHTML = "🎉 Correct!";
    }
    else if(userGuess > randomNumber){
        result.innerHTML = "Too High!";
    }
    else{
        result.innerHTML = "Too Low!";
    }
}