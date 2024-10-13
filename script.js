function computer() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) return "gunting";
    if (choice == 1) return "batu";
    if (choice == 2) return "kertas";
}
function human() {
    let choice = prompt("enter your choice");
    return choice.toLowerCase();
}
function check(H, C) {
    if (H == "gunting" && C == "kertas") return 1;
    else if (H == "gunting" && C == "batu") return 0;
    else if (H == "batu" && C == "kertas") return 0;
    else if (H == "batu" && C == "gunting") return 1;
    else if (H == "kertas" && C == "gunting") return 0;
    else if (H == "kertas" && C == "batu") return 1;
    else return 2;
}
function play() {
    const Hc = human();
    const Cc = computer();
    const a = check(Hc, Cc);
    if (a == 1) {
        Hscore++;
        console.log(`You win! \n Your choice: ${Hc} \n Computer choice: ${Cc}`);
    }
    else if (a == 0) {
        Cscore++;
        console.log(`You lose! \n Your choice: ${Hc} \n Computer choice: ${Cc}`);
    }
    else if (a ==2)console.log(`Draw! \n Your choice: ${Hc} \n Computer choice: ${Cc}`);
}
function loop() {
    for(let i=0;i<5;i++) {
        play();
        console.log(`${Hscore} : ${Cscore}`)
    }

}
let Hscore = 0;
let Cscore = 0;
loop();