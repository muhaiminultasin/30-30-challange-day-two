const passwordBox = document.getElementById("password");

function generetePass(){
    let pass = "";
    // This is a empty variable to store the genereted password

    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ + abcdefghijklmnopqrstuvwxyz~!@#$%^&*()_-+={}[]|:;<>,.?/"
// it will loop 8 times to eterate the string "letter"
    for(let i = 0; i <= 8; i++){
         let char = Math.floor(Math.random() * letter.length);

         pass += letter[char];
    }

    return passwordBox.value = pass;
};

// this function for copy the genereted password;
function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}
