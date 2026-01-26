//router

export const ROUTES = {
    TOP: "/",
    ABOUT: "/about",
    SKILLS: "/skills",
    MYPRODUCTS: "/myproducts",
    CONTACT: "/contact",
} as const;

//画像

import topimg from "./assets/toppageimg.webp";
import me from "./assets/meimg.webp";
import osake from "./assets/osakeimg.webp";
import meguri from "./assets/meguriimg.webp";
import musicimg from "./assets/musicimg.webp";
import djimg from "./assets/djimg.webp";
import dtmimg from "./assets/dtmimg.webp";
import movieimg from "./assets/animemovieimg.webp";

// product画像
import myportfolioimg from "./assets/productimg/myportfolio.webp";
import sandboximg from "./assets/productimg/sandbox.webp";
import musicplayerimg from "./assets/productimg/music-player.webp";


export const IMAGES = {
    TOPIMG: topimg,
    ME: me,
    OSAKE: osake,
    MEGURI: meguri,
    MUSIC: musicimg,
    DJ: djimg,
    DTM: dtmimg,
    MOVIE: movieimg,

    //product画像
    MYPORTFOLIO: myportfolioimg,
    SANDBOX: sandboximg,
    MUSICPLAYER: musicplayerimg,
}as const;