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
            thumbColor: "rgba(255, 255, 255, 0.3)",
            primaryBg: "#4b1178",
            alphaBg: "rgba(255, 255, 255, 0.1)",
            layoutBg: "#37075d",
            sibarBg: "#ffffff0d",
            headerBoxShadow: "#0000001a",
            alphaColor: "rgba(255, 255, 255, 0.1)",
            searchText: "#eee",
            textSecondary: "#ffffff80",
            textPlaceholder: "#dadada",
            linkTextHover: "#fe63da",
            settingColor: "#d8d8d8",
            borderPrimary: "hsl(0deg 0% 100% / 10%)",
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
