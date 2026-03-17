const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const canvas_width = canvas.width = 480;
const canvas_height = canvas.height = 648;
const container = document.querySelector('.con');
const kick = document.querySelector('.kick');
const fist = document.querySelector('.fist');
const fFist = document.querySelector('.false-fist')
const palHealth = document.getElementsByClassName('d');
const emHealth = document.getElementsByClassName('em');

const spriteWidth = 128;
const spriteHeight = 128;

let frameX = 0;
let frameY = 0;
let scale = 4;

let pla1 = {
    x: 20,
    y: 200,
    speed: 10
};
// let em_x = 800;
// let em_speed = 3;
let em = {
    em_x: 800,
    em_speed: 3,
}
const playerImage = new Image();
playerImage.src = 'Idle.png';
let img;
let em_img;
var dir;


const containerWidth = container.clientWidth;
const playerWidth = 145;


// let x = 20;
// let y = 200;
// let speed = 10;
let j_speed = 40;
let act_ch;
let frame_c;

const enemyImage = new Image();
enemyImage.src = 'i.png';
let frame_c1;
let c1;
const act_e = {
    action: [
        {
            img: 'a2.png',
            c1: 3,
        },
        {
            img: 'a3.png',
            c1: 2,
        },
        {
            img: 's.png',
            c1: 1,
        }
    ]
};
let em_c = 0;
let co = 0;
// ['a2.png', 'a3.png', 's.png']
let atta;
// function hit() {
//     if (enemyImage.src == 'a2.png') {
//         health[co - 1].style.display = "none";
//         console.log(co);
//     }
// }
function def() {
    frameX = 0
    playerImage.src = 'Idle.png';
}
function defem() {
    frameX1 = 0;
    enemyImage.src = 'i.png';
}
function dead(){
    if(co == 30){
        img = 'Dead.png';
        frameX = 2;
        const newImage = new Image();
        newImage.src = img;
         newImage.onload = () => {
            playerImage.src = newImage.src;
        };
    }
    if(em_c == 30){
         em_img = 'd.png';
        const newEnm = new Image();
        newEnm.src =em_img;
        // frame_c1 = act_e.action[en].c1;

        newEnm.onload = () => {
            enemyImage.src = newEnm.src;
        }
    }
}
function playerDis() {
    // if(em_x > x){
    //     while(em_x != x-100){
    //         em_x +=em_speed;
    //         canvas1.style.left = em_x + "px";
    //     }
    // }
    // if ((em.em_x - pla1.x <= 80) && (em.em_x - pla1.x >= 90) ) {
    console.log(em.em_x - pla1.x);
    if (em.em_x - pla1.x <= 80) {
        console.log("Yeah!");
        // alert("Wow");
        if (img == 'Attack_1.png') {
            fist.currentTime = 0;
            fist.play();
            console.log("fist");
            em_c++;
            emHealth[em_c - 1].style.display = "none";
        }
        if (img == 'Attack_2.png') {
            fist.currentTime = 0;
            fist.play();
            console.log("fist");
            em_c++;
            emHealth[em_c - 1].style.display = "none";
        }
        if (img == 'Attack_3.png') {
            kick.currentTime = 0;
            kick.play();
            console.log("kick");
            em_c++;
            emHealth[em_c - 1].style.display = "none";
        }
        if (em_img == 'a2.png') {
            co++;

            palHealth[co - 1].style.display = "none";
            console.log(co);

        }
        // if (atta) {
        //     enemyImage.src = 's.png';
        // }
        // hit();
        dead();
        def();
        defem();
    }

}
let check_em = true;

document.addEventListener('keydown', (e) => {


    // let en = Math.floor(Math.random() * 3);
    // const newEnm = new Image();
    // newEnm.src = act_e.action[en].img;
    // // frame_c1 = act_e.action[en].c1;

    // newEnm.onload = () => {
    //     enemyImage.src = newEnm.src;
    // }




    if (e.key == 'w') {
        img = "Run.png";
        dir = false;

        pla1.x += pla1.speed;
        
        const newImage = new Image();
        newImage.src = img;
        atta = false;
        act_ch = false;
        if (frameX < 3) {
            frameX++;
        }
        else {
            frameX = 0;
        }
        newImage.onload = () => {
            playerImage.src = newImage.src;
        };
        // canvas.style.left = x + "px";
    }
    if (e.key == 's') {
        img = "Run.png";
        dir = true;

        pla1.x -= pla1.speed;
        const newImage = new Image();
        newImage.src = img;
        atta = false;
        act_ch = false;
        if (frameX < 3) {
            frameX++;
        }
        else {
            frameX = 0;
        }
        newImage.onload = () => {
            playerImage.src = newImage.src;
        };
        // canvas.style.left = x + "px";
    }

    if (e.key == 'shift') {
        img = "Jump.png";
        // dir = false;

        if (dir) {
            x -= j_speed;
        } else {
            x += j_speed;
        }
        frame_c = 9;
        const newImage = new Image();
        newImage.src = img;

        atta = false
        act_ch = true;
        if (frameX < 3) {
            frameX++;
        }
        else {
            frameX = 0;
        }
        newImage.onload = () => {
            playerImage.src = newImage.src;
        };
        // canvas.style.left = x + "px";
    }
    if (e.key == '1') {
        img = "Attack_1.png";
        // dir = false;
        // fFist.currentTime = 0;
        // fFist.play();

        frame_c = 3;
        atta = true;
        const newImage = new Image();
        newImage.src = img;
        frameX = 0; 1
        act_ch = true;
        newImage.onload = () => {
            playerImage.src = newImage.src;
        };
        // canvas.style.left = x + "px";

    }
    if (e.key == '2') {
        img = "Attack_2.png";
        // dir = false;
        // fist.currentTime = 0;
        // fist.play();
        // fFist.currentTime = 0;
        // fFist.play();
        frame_c = 2;
        atta = true;
        const newImage = new Image();
        newImage.src = img;
        frameX = 0; 1
        act_ch = true;
        newImage.onload = () => {
            playerImage.src = newImage.src;
        };
        // canvas.style.left = x + "px";

    }
    if (e.key == '3') {
        img = "Attack_3.png";
        // kick.currentTime = 0;
        // kick.play();
        // // dir = false;
        // fFist.currentTime = 0;
        // fFist.play();

        frame_c = 3;
        atta = true;
        const newImage = new Image();
        newImage.src = img;
        frameX = 0;
        act_ch = true;
        newImage.onload = () => {
            playerImage.src = newImage.src;
        };


    }
    if (e.key == '4') {
        em_img = 'w.png';
        const newEnm = new Image();
        newEnm.src =em_img;
        // frame_c1 = act_e.action[en].c1;

        newEnm.onload = () => {
            enemyImage.src = newEnm.src;
        }
        em.em_x -= em.em_speed;
        check_em = true;
        if (frameX1 < 3) {
            frameX1++;
        }
        else {
            frameX1 = 0;
        }
    }
    if (e.key == '6') {
        em.em_x += em.em_speed;
        enemyImage.src = 'w.png';
        check_em = false;
        if (frameX1 < 3) {
            frameX1++;
        }
        else {
            frameX1 = 0;
        }
    }
    if (e.key == '7') {
        em_img = 'a2.png';
        const newEnm = new Image();
        newEnm.src =em_img;
        // frame_c1 = act_e.action[en].c1;

        newEnm.onload = () => {
            enemyImage.src = newEnm.src;
        }
        // em.em_x -= em.em_speed;
        // enemyImage.src = 'a2.png';
        // check_em = true;
        if (frameX1 < 3) {
            frameX1++;
        }
        else {
            frameX1 = 0;
        }
    }
    if (e.key == '9') {
        // em.em_x -= em.em_speed;
        // enemyImage.src = 'a3.png';
        em_img = 'a3.png';
        const newEnm = new Image();
        newEnm.src =em_img;
        // frame_c1 = act_e.action[en].c1;

        newEnm.onload = () => {
            enemyImage.src = newEnm.src;
        }
        // check_em = true;
        if (frameX1 < 3) {
            frameX1++;
        }
        else {
            frameX1 = 0;
        }
    }
    canvas1.style.left = em.em_x + "px";


    if (pla1.x < 0) pla1.x = 0;
    if (pla1.x > containerWidth - playerWidth)
        pla1.x = containerWidth - playerWidth;
    canvas.style.left = pla1.x + "px";

    playerDis();
})



let gameFrame = 0;
let staggerFrames = 8;


function animate() {
    ctx.clearRect(0, 0, canvas_width, canvas_height);

    const flip = dir; // change to false if you don't want flip

    ctx.save();
    if (flip) {
        ctx.scale(-1, 1);
        ctx.drawImage(
            playerImage,
            frameX * spriteWidth,
            frameY * spriteHeight,
            spriteWidth,
            spriteHeight,
            -0 - spriteWidth * scale, // IMPORTANT for flip
            0,
            spriteWidth * scale,
            spriteHeight * scale
        );
    } else {
        ctx.drawImage(
            playerImage,
            frameX * spriteWidth,
            frameY * spriteHeight,
            spriteWidth,
            spriteHeight,
            0,
            0,
            spriteWidth * scale,
            spriteHeight * scale
        );
    }
    ctx.restore();
    if (act_ch) {
        if (gameFrame % staggerFrames === 0) {
            if (frameX < frame_c) {
                frameX++;
            }
            else {
                def();
            }
        }
    }


    gameFrame++;
    requestAnimationFrame(animate);
}
animate();


const canvas1 = document.querySelector('.canvas1');
const ctx1 = canvas1.getContext('2d');
const canvas1_width = canvas1.width = 480;
const canvas1_height = canvas1.height = 648;

const spriteWidth1 = 128;
const spriteHeight1 = 128;





let frameX1 = 0;
let frameY1 = 0;



let gameFrame1 = 0;
let staggerFrames1 = 5;

let scale1 = 4;


// document.addEventListener('keydown',(ev) => {

// })
function animateEnemy() {
    ctx1.clearRect(0, 0, canvas1_width, canvas1_height);
    ctx1.save();

    const flip = check_em;   // flip horizontally

    if (flip) {
        ctx1.scale(-1, 1);
        ctx1.drawImage(
            enemyImage,
            frameX1 * spriteWidth1,
            frameY1 * spriteHeight1,
            spriteWidth1,
            spriteHeight1,
            -spriteWidth1 * scale1,  // important for flip
            0,
            spriteWidth1 * scale1,
            spriteHeight1 * scale1
        );
    } else {
        ctx1.drawImage(
            enemyImage,
            frameX1 * spriteWidth1,
            frameY1 * spriteHeight1,
            spriteWidth1,
            spriteHeight1,
            0,
            0,
            spriteWidth1 * scale1,
            spriteHeight1 * scale1
        );
    }

    ctx1.restore();

    // FIX: staggerFrames must not be 0
    // if (gameFrame1 % 8 === 0) {
    //     frameX1 = frameX1 < 3 ? frameX1 + 1 : 0;
    // }
    if (gameFrame1 % staggerFrames1 === 0) {
        if (frameX1 < frame_c1) {
            frameX1++;
        }
        else {
            defem();
        }

    }

    gameFrame1++;
    requestAnimationFrame(animateEnemy);
}
animateEnemy();
