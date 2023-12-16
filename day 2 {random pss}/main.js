const passwordBox = document.getElementById("password");

function generetePass(){
    let pass = "";

    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ + abcdefghijklmnopqrstuvwxyz~!@#$%^&*()_-+={}[]|:;<>,.?/"

    for(let i = 0; i <= 8; i++){
         let char = Math.floor(Math.random() * letter.length);

         pass += letter[char];
    }

    return passwordBox.value = pass;
};





function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}