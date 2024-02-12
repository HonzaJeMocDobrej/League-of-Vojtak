import { Background } from "./ui/basic-utils.js";
import { Player } from "./ui/player.js";
const background = new Background();
const player = new Player(3000, 2000);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const keys = {};
//keyW: true/false;
document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});
let mouse = {
    x:0,
    y:0
}
document.addEventListener("click", (e) => {
    mouse.x = ((e.clientX - canvasPos.left) / canvasPos.width) * canvas.width;
    mouse.y = ((e.clientY - canvasPos.top) / canvasPos.height) * canvas.height;
    const canvasPos = canvas.getBoundingClientRect();
    console.log(canvasPos.top);
    console.log(canvasPos.left);
})

const gameLoop = () => {
    resize()
    //clear - render background
    clear();
    //update
    update();
    //render
    render();
    //fps
    fps();
    window.requestAnimationFrame(gameLoop);
}

const clear = () => {
    background.draw(ctx, player);
    player.draw(ctx)

};
const resize = () => {
    canvas.width = 1280
    canvas.height = 720
};
const render = () => {};
const fps = () => {};


window.onload = () => {
    window.requestAnimationFrame(gameLoop);
}
const update = () => {
    handlePlayerMovement();
}


const handlePlayerMovement = () => {
    //console.log(player.y);
    //console.log(player.x);
    if (keys["KeyW"]) {
        player.y -= player.velocity;
    }
    if (keys["KeyA"]) {
        player.x -= player.velocity;
    }
    if (keys["KeyS"]) {
        player.y += player.velocity;
    }
    if (keys["KeyD"]) {
        player.x += player.velocity;
    }
}