import logoDark from "../assets/images/logo-dark.svg";
import logoLight from "../assets/images/logo-light.svg";

class Theme {
    constructor() {
        this.common = {
            headerHeight: "70px",
            sidebarWidth: "240px",
            playingBarHeight: "90px",
            paddingSection: "59px",
            color: "white",
            logo: `url('${logoDark}')`,
            thumbColor: "rgb(255 255 255 / 30%)",
            layoutBg: "#37075d",
            sibarBg: "#ffffff0d",
            headerBoxShadow: "#0000001a",
        };
    }

    london() {
        return {
            ...this.common,
            background:
                "url('https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/London-Mid1.jpg')",
        };
    }
    zingMusicAwards() {
        return {
            ...this.common,
            background:
                "url('https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/zma.svg')",
        };
    }
    eiffel() {
        return {
            ...this.common,
            background:
                "url('https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/eiffel.jpg')",
        };
    }
    jisoo() {
        return {
            ...this.common,
            logo: `url('${logoLight}')`,
            color: "#32323d",
            layoutBg: "#ffff",
            sibarBg: "#0000000d",
            thumbColor: "#0000001a",
            background:
                "url('https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/jisoo.jpg')",
        };
    }
}

export default Theme;
