'use strict';
// let tiles_text = 'Ea So We No Wh Gr Rd 1m 2m 3m 4m 5m 6m 7m 8m 9m 1p 2p 3p 4p 5p 6p 7p 8p 9p 1s 2s 3s 4s 5s 6s 7s 8s 9s'.split(' ');
// let tiles_raw = '1234567qwertyuiozxcvbnm,.asdfghjkl'.split('');

// function convert_to_text(element) {
//     element.textContent = element.textContent.split('').map(
//         (v, i, self) => tiles_text[tiles_raw.indexOf(v)]
//     ).join(' ');
//     element.classList.remove('tiles');
//     element.classList.remove('otf');
//     element.classList.add('tiles-text');
// }

function convert_to_raw(element) {
    // element.textContent = element.textContent.split(' ').map(
    //     (v, i, self) => tiles_raw[tiles_text.indexOf(v)]
    // ).join('');
    // element.classList.remove('tiles-text');
    // element.classList.add('tiles');
    element.classList.remove('otf');
}

function convert_to_otf(element) {
    element.classList.add('otf');
}

function convert_tiles() {
    let tile_containers = document.getElementsByClassName('tiles otf');
    let convert_func = convert_to_raw;
    let new_link_text = "My tiles aren't showing correctly";
    // let new_link_text = 'Try colored tiles again';

    if (tile_containers.length == 0) {
        tile_containers = document.getElementsByClassName('tiles');
        convert_func = convert_to_otf;
        // new_link_text = "My tiles still aren't showing correctly!";
        new_link_text = 'Try colored tiles again';
    }

    // if (tile_containers.length == 0) {
    //     tile_containers = document.getElementsByClassName('tiles-text');
    //     convert_func = convert_to_raw;
    //     new_link_text = "My tiles aren't showing correctly";
    // }

    tile_containers = Array.from(tile_containers);

    for (let i = 0; i < tile_containers.length; i++) {
        convert_func(tile_containers[i]);
    }

    let link = document.getElementsByClassName('convert-tiles')[0];
    link.textContent = new_link_text;
}

window.addEventListener("DOMContentLoaded", () => {
    let convert_tiles = document.getElementsByClassName('convert-tiles');
    for (let i = 0; i < convert_tiles.length; i++) {
        convert_tiles[i].addEventListener('click', convert_tiles);
    }
});
