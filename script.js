
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 async function genText() {
    var words = ["Dinner🍽️","Movie🍿🎥","😴😴Sleep😴😴😴","💃Dance🕺","Gossip💁‍♂️💁🏻","Study📚📚","Games👑🃏🎲","Sing🎤👩🏻‍🎤👨🏻‍🎤","Nothing🙃🙃","Code👨🏻‍💻👩🏻‍💻","Reels📱📱","Cooking👩🏻‍🍳👨🏻‍🍳","Yoga🧘🏻‍♂️🧘🏻‍♀️","etc😵‍💫🫤"];
    for (let i = 1; i < Math.floor((Math.random() * 100) + 30); i++) {        
       await sleep(100);
       document.getElementById("text").innerHTML = words[Math.floor(Math.random()*words.length)];
    }
 }
 genText();

//  "Romance😘🥰😍","Sex🫦💋","Kiss😗😚😘😘"