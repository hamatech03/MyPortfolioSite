//router

export const ROUTES = {
    TOP: "/",
    ABOUT: "/about",
    SKILLS: "/skills",
    MYPRODUCTS: "/myproducts",
    CONTACT: "/contact",
} as const;

//画像

import dummy from "./assets/websiteplanet-dummy-400X300.png";
import topimg from "./assets/toppageimg.jpg";
import me from "./assets/meimg.png";
import osake from "./assets/osakeimg.jpg";
import meguri from "./assets/meguriimg.jpg";
import musicimg from "./assets/musicimg.jpg";
import djimg from "./assets/djimg.jpg";
import dtmimg from "./assets/dtmimg.jpg";
import movieimg from "./assets/animemovieimg.jpg";

// product画像
import myportfolioimg from "./assets/productimg/myportfolio.jpg";
import sandboximg from "./assets/productimg/sandbox.jpg";
import musicplayerimg from "./assets/productimg/music-player.jpg";


export const IMAGES = {
    DUMMY: dummy,
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