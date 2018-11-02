var enemy_health = 100;
var normal_attack = 30;
var special_attack = 60;
var enemy_health_text = document.getElementById('enemy-health-text');
var enemy_bar = document.getElementById('enemy-bar');
var enemy_normal_attack = norm;
var enemy_special_attack = spec;
var player_health = 100;
var player_health_text = document.getElementById('player-health-text');
var player_bar = document.getElementById('player-bar');
var player_level = 1;
var enemy_pic = document.getElementById('enemy-pic');
var enemy_name = document.getElementById('enemy-name');

var name = prompt("Please enter your name.");
var norm =  Math.floor(Math.random() * 40) + 1;
var spec =  Math.floor(Math.random() * 80) + 1;
function normal() {
    enemy_health -= normal_attack;
    enemyAttacks();
    updateHealth();
    gameCheck();
}


if (name !== null) {
    document.getElementById("nameContainer").innerHTML = name;
}

function nameChange(){
  var name = prompt("Please enter your name.");
  document.getElementById("nameContainer").innerHTML = name;
}

function special() {
    enemy_health -= special_attack;
    enemyAttacks();
    updateHealth();
    gameCheck();
}

function gameCheck() {
    if (player_health <= 0) {
        alert('OW BRAINBALLS');
        alert('You have died! Congratulations. The game will now reset so you do not have to explain this to your family.');
        reset();
    } else if (enemy_health <= 0) {
        levelUp();
    }
}

function updateHealth() {
    player_health_text.innerHTML = player_health;
    player_bar.value = player_health;
    enemy_health_text.innerHTML = enemy_health;
    enemy_bar.value = enemy_health;
}

function enemySelectsMove() {
    var randomEnemyMoves = [enemy_normal_attack, enemy_special_attack];
    var enemyChoice = randomEnemyMoves[Math.floor(Math.random() * randomEnemyMoves.length)];
    return enemyChoice;
}

function enemyAttacks() {
    var enemyTurn = enemySelectsMove();
    if (enemyTurn === enemy_normal_attack) {
        alert('A whole mess of strifing takes place. Enemy used Normal Attack!');
        player_health -= enemy_normal_attack;
    } else if (enemyTurn === enemy_special_attack) {
        alert('As you strike, you are knocked back! Enemy used Special Attack!');
        player_health -= enemy_special_attack;
    }
}

function levelUp() {
    player_level++;
    window["level" + player_level]();
}

function level2() {
    alert( "After this battle, and having saved your city from the DREAD OGRE you are chosen to go on a quest to slay the evil DREAD WIZARD KING who is bringing the end of the world via meteor storm! You stop at ERUTUF City for supplies, but the city is under attack by the DREAD WIZARD KING's pet monster, Fluthlu!");
    enemy_pic.src = "https://vignette.wikia.nocookie.net/mspaintadventures/images/2/23/Fluthlu.gif/revision/latest?cb=20121110195816";
    document.body.style.backgroundImage = "url('https://upload-assets.vice.com/files/2016/12/12/1481561777kul.gif?crop=0.7407407407407407xw:1xh;center,center&resize=1050:*')";
    enemy_name.innerHTML = "Fluthlu";
    enemy_health = 150;
    enemy_normal_attack = 20;
    enemy_special_attack = 40;
    player_health = 170;
    normal_attack = norm;
    special_attack = spec;
    player_bar.max = player_health;
    enemy_bar.max = enemy_health;
    updateHealth();
}

function level3() {
    alert("You corner Fluthlu at the DREAD WIZARD KING'S volcano lair and prepared to slay your enemy. FLUTHLU roars and tapped into its magic!");
    enemy_pic.src = "https://vignette.wikia.nocookie.net/mspaintadventures/images/2/23/Fluthlu.gif/revision/latest?cb=20121110195816";
    document.body.style.backgroundImage = "url('https://cdn-images-1.medium.com/max/1600/1*pgoFf3vSJh5VCwWmMg8ZGA.gif')";
    enemy_name.innerHTML = "Enraged Fluthlu";
    enemy_health = 200;
    enemy_normal_attack = 40;
    enemy_special_attack = 60;
    player_health = 180;
    normal_attack = 90;
    special_attack = 90;
    player_bar.max = player_health;
    enemy_bar.max = enemy_health;
    updateHealth();
}

function level4() {
    alert("You has finally entered the DREAD WIZARD KING's lair. Will you show him your stabs for the good of all things?");
    enemy_pic.src = "https://www.dropbox.com/pri/get/Fight%20Sprite%20(1).gif?_subject_uid=695896843&raw=1&revision_id=A9WdNa8yb2FxWNQG31uYq9nh4N0j-o7lvLOOtXbgHYU9oR4Pxywgm-Nr-hk-3mbRnigcU1f4O_VsZo1uFJirh6Czz14Khs1W3WS4y6pm7XlyfATpUWGSnYamrM__aqqN10k&size=1600x1200&size_mode=3&w=AACHUsBrhfMscttx9wxi-Arglr5Tkm5PRRs3aFkH9qWlEA";
    document.body.style.backgroundImage = "url('https://twistedsifter.files.wordpress.com/2013/05/animated-gifs-of-fighting-game-backgrounds-18.gif?w=800&h=336')";
    enemy_name.innerHTML = "Dread Wizard King";
    enemy_health = 800;
    enemy_normal_attack = 1;
    enemy_special_attack = 90;
    player_health = 400;
    normal_attack = 100;
    player_bar.max = player_health;
    enemy_bar.max = enemy_health;
    updateHealth();
}

function level5() {
    alert("You have almost defeated the DREAD WIZARD KING, but he has healed himself and is preparing a devestating attack!");
    enemy_pic.src = "https://www.dropbox.com/pri/get/Fight%20Sprite%20(1).gif?_subject_uid=695896843&raw=1&revision_id=A9WdNa8yb2FxWNQG31uYq9nh4N0j-o7lvLOOtXbgHYU9oR4Pxywgm-Nr-hk-3mbRnigcU1f4O_VsZo1uFJirh6Czz14Khs1W3WS4y6pm7XlyfATpUWGSnYamrM__aqqN10k&size=1600x1200&size_mode=3&w=AACHUsBrhfMscttx9wxi-Arglr5Tkm5PRRs3aFkH9qWlEA";
    document.body.style.backgroundImage = "url('https://twistedsifter.files.wordpress.com/2013/05/animated-gifs-of-fighting-game-backgrounds-18.gif?w=800&h=336')";
    enemy_name.innerHTML = "Dread Wizard King";
    enemy_health = 500;
    enemy_normal_attack = 1;
    enemy_special_attack = 1;
    player_health = 480;
    normal_attack = 999;
    special_attack = 999;
    player_bar.max = player_health;
    enemy_bar.max = enemy_health;
    updateHealth();
}

function level6() {
    alert("Well that was anticlimactic.");
    alert("Wait no nevermind-");
    alert("The DREAD WIZARD KING has unleashed his true form! Roy is empowered by his city to strike him down!");
    enemy_pic.src = "https://piskel-imgstore-b.appspot.com/img/5f41d1a6-a4d8-11e7-8b7f-e142f8618cb2.gif";
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/ac/69/36/ac693688625b9ac3d0f54cf31879ee3a.jpg')";
    enemy_health = 66666;
    enemy_normal_attack = 140;
    enemy_special_attack = 400;
    player_health = 3000;
    normal_attack = 5000;
    special_attack = 7000;
    player_bar.max = player_health;
    enemy_bar.max = enemy_health;
    enemy_name.innerHTML = "Eternal Blight";
    updateHealth();
}

function level7() {
    enemy_pic.src = "https://cdn-images-1.medium.com/max/1200/1*d8DyNLUIa8xo5rGrO-2FSg.jpeg";
    document.body.style.backgroundImage = "url('https://i.redd.it/6axfm8uck3oy.png')";
    alert("You have finally defeated the DREAD WIZARD KING! The world is safe. A winner is you.");
    alert("The end.");
    alert("lol nope you're trapped underground now better fight the literal ground to get out");
   enemy_health = 50;
    enemy_normal_attack = 0;
    enemy_special_attack = 2;
    player_health = 3000;
    normal_attack = 10;
    special_attack = -5;
    player_bar.max = player_health;
    enemy_bar.max = enemy_health;
    enemy_name.innerHTML = "The literal ground";
    updateHealth();
}


function reset() {
    enemy_pic.src = "https://vignette.wikia.nocookie.net/mspaintadventures/images/7/7e/Ogre_01.gif/revision/latest/scale-to-width-down/300?cb=20140113021137";
    id = "enemy-pic";
    document.body.style.backgroundImage = "url('http://25.media.tumblr.com/72b27538006cd1207ea2592106ee9ee3/tumblr_n2qtfy5beZ1qegdapo1_500.gif')";
    player_level = 1;
    player_health = 100;
    enemy_health = 100;
    normal_attack = 30;
    enemy_normal_attack = 10;
    enemy_special_attack = 20;
    updateHealth();
}





var enemy_health = 100;
var normal_attack = 30;
var special_attack = 60;
var enemy_health_text = document.getElementById('enemy-health-text');
var enemy_bar = document.getElementById('enemy-bar');
var enemy_normal_attack = 10;
var enemy_special_attack = 20;
var player_health = 100;
var player_health_text = document.getElementById('player-health-text');
var player_bar = document.getElementById('player-bar');
var player_level = 1;
var enemy_pic = document.getElementById('enemy-pic');
var enemy_name = document.getElementById('enemy-name');

function normal() {
    enemy_health -= normal_attack;
    enemyAttacks();
    updateHealth();
    gameCheck();
}

function special() {
    enemy_health -= special_attack;
    enemyAttacks();
    updateHealth();
    gameCheck();
}

function gameCheck() {
    if (player_health <= 0) {
        alert('OW BRAINBALLS');
        alert('You have died! Congratulations. The game will now reset so you do not have to explain this to the family.');
        reset();
    } else if (enemy_health <= 0) {
        levelUp();
    }
}

function updateHealth() {
    player_health_text.innerHTML = player_health;
    player_bar.value = player_health;
    enemy_health_text.innerHTML = enemy_health;
    enemy_bar.value = enemy_health;
}

function enemySelectsMove() {
    var randomEnemyMoves = [enemy_normal_attack, enemy_special_attack];
    var enemyChoice = randomEnemyMoves[Math.floor(Math.random() * randomEnemyMoves.length)];
    return enemyChoice;
}

function enemyAttacks() {
    var enemyTurn = enemySelectsMove();
    if (enemyTurn === enemy_normal_attack) {
        alert('A whole mess of strifing takes place. Enemy used Normal Attack!');
        player_health -= enemy_normal_attack;
    } else if (enemyTurn === enemy_special_attack) {
        alert('As you strike, you are knocked back! Enemy used Special Attack!');
        player_health -= enemy_special_attack;
    }
}

function levelUp() {
    player_level++;
    window["level" + player_level]();
}

function level2() {
    alert("Roy, having saved his city from the DREAD OGRE was chosen to go on a quest to slay the evil DREAD WIZARD KING who was bringing the end of the world via meteor storm! He stopped at ERUTUF City for supplies, but the city was under attack by the DREAD WIZARD KING's pet monster, Fluthlu!");
    enemy_pic.src = "https://vignette.wikia.nocookie.net/mspaintadventures/images/2/23/Fluthlu.gif/revision/latest?cb=20121110195816";
    document.body.style.backgroundImage = "url('https://upload-assets.vice.com/files/2016/12/12/1481561777kul.gif?crop=0.7407407407407407xw:1xh;center,center&resize=1050:*')";
    enemy_name.innerHTML = "Fluthlu";
    enemy_health = 150;
    enemy_normal_attack = 20;
    enemy_special_attack = 40;
    player_health = 170;
    normal_attack = 40;
    special_attack = 70;
    player_bar.max = player_health;
    enemy_bar.max = enemy_health;
    updateHealth();
}

function level3() {
    alert("Roy cornered Fluthlu at the DREAD WIZARD KING'S volcano lair and prepared to slay his enemy. FLUTHLU roared and tapped into it's magic!");
    enemy_pic.src = "https://vignette.wikia.nocookie.net/mspaintadventures/images/2/23/Fluthlu.gif/revision/latest?cb=20121110195816";
    document.body.style.backgroundImage = "url('https://cdn-images-1.medium.com/max/1600/1*pgoFf3vSJh5VCwWmMg8ZGA.gif')";
    enemy_name.innerHTML = "Enraged Fluthlu";
    enemy_health = 200;
    enemy_normal_attack = 40;
    enemy_special_attack = 60;
    player_health = 180;
    normal_attack = 90;
    special_attack = 90;
    player_bar.max = player_health;
    enemy_bar.max = enemy_health;
    updateHealth();
}

function level4() {
    alert("Roy has finally entered the DREAD WIZARD KING's lair. Will he show him his stabs for the good of all things?");
    enemy_pic.src = "https://www.dropbox.com/pri/get/Fight%20Sprite%20(1).gif?_subject_uid=695896843&raw=1&revision_id=A9WdNa8yb2FxWNQG31uYq9nh4N0j-o7lvLOOtXbgHYU9oR4Pxywgm-Nr-hk-3mbRnigcU1f4O_VsZo1uFJirh6Czz14Khs1W3WS4y6pm7XlyfATpUWGSnYamrM__aqqN10k&size=1600x1200&size_mode=3&w=AACHUsBrhfMscttx9wxi-Arglr5Tkm5PRRs3aFkH9qWlEA";
    document.body.style.backgroundImage = "url('https://twistedsifter.files.wordpress.com/2013/05/animated-gifs-of-fighting-game-backgrounds-18.gif?w=800&h=336')";
    enemy_name.innerHTML = "Dread Wizard King";
    enemy_health = 800;
    enemy_normal_attack = 1;
    enemy_special_attack = 90;
    player_health = 400;
    normal_attack = 100;
    player_bar.max = player_health;
    enemy_bar.max = enemy_health;
    updateHealth();
}

function level5() {
    alert("Roy has almost defeated the DREAD WIZARD KING, but he has healed himself and is preparing a devestating attack!");
    enemy_pic.src = "https://www.dropbox.com/pri/get/Fight%20Sprite%20(1).gif?_subject_uid=695896843&raw=1&revision_id=A9WdNa8yb2FxWNQG31uYq9nh4N0j-o7lvLOOtXbgHYU9oR4Pxywgm-Nr-hk-3mbRnigcU1f4O_VsZo1uFJirh6Czz14Khs1W3WS4y6pm7XlyfATpUWGSnYamrM__aqqN10k&size=1600x1200&size_mode=3&w=AACHUsBrhfMscttx9wxi-Arglr5Tkm5PRRs3aFkH9qWlEA";
    document.body.style.backgroundImage = "url('https://twistedsifter.files.wordpress.com/2013/05/animated-gifs-of-fighting-game-backgrounds-18.gif?w=800&h=336')";
    enemy_name.innerHTML = "Dread Wizard King";
    enemy_health = 500;
    enemy_normal_attack = 1;
    enemy_special_attack = 1;
    player_health = 480;
    normal_attack = 999;
    special_attack = 999;
    player_bar.max = player_health;
    enemy_bar.max = enemy_health;
    updateHealth();
}

function level6() {
    alert("The DREAD WIZARD KING has unleashed his true form! Roy is empowered by his city to strike him down!");
    enemy_pic.src = "https://piskel-imgstore-b.appspot.com/img/5f41d1a6-a4d8-11e7-8b7f-e142f8618cb2.gif";
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/ac/69/36/ac693688625b9ac3d0f54cf31879ee3a.jpg')";
    enemy_health = 66666;
    enemy_normal_attack = 140;
    enemy_special_attack = 400;
    player_health = 3000;
    normal_attack = 5000;
    special_attack = 7000;
    player_bar.max = player_health;
    enemy_bar.max = enemy_health;
    enemy_name.innerHTML = "Eternal Blight";
    updateHealth();
}

function level7() {
    enemy_pic.src = "https://i.pinimg.com/originals/76/8d/41/768d41c38389731667cf6972ae5bdd1c.gif";
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/71G578mTSx2Ba/giphy.gif')";
    alert("Roy has finally defeated the DREAD WIZARD KING! The world is safe. A winner is you.");
    alert("The end.");
    alert("lol nope you're trapped underground now better fight the literal ground to get out");
   enemy_health = 66666;
    enemy_normal_attack = 140;
    enemy_special_attack = 400;
    player_health = 3000;
    normal_attack = 5000;
    special_attack = 7000;
    player_bar.max = player_health;
    enemy_bar.max = enemy_health;
    enemy_name.innerHTML = "dirt";
    updateHealth();
}


function reset() {
    enemy_pic.src = "https://vignette.wikia.nocookie.net/mspaintadventures/images/7/7e/Ogre_01.gif/revision/latest/scale-to-width-down/300?cb=20140113021137";
    id = "enemy-pic";
    document.body.style.backgroundImage = "url('http://25.media.tumblr.com/72b27538006cd1207ea2592106ee9ee3/tumblr_n2qtfy5beZ1qegdapo1_500.gif')";
    player_level = 1;
    enemy_health = 100;
    enemy_normal_attack = 10;
    enemy_special_attack = 20;
    updateHealth();
}
