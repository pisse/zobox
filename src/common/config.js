
var isDev = true;

var config = {

    isDev: isDev,

    devUrl: !isDev ? "http://112.124.66.29:8080/cgi-bin/" : "http://localhost:8080/cgi-bin/",

    service: {
        login: "login",
        logout: "logout",
        register: "register",
        getvcode: "getvcode",
        devicelist: "devicelist",
        deviceinfo: "deviceinfo",
        deviceuser: "deviceuser",
        adddevice: "adddevice",

        moddevice:"moddevice",
        chgdevicepasswd:"chgdevicepasswd",
        adddeviceuser: "adddeviceuser",
        profile: "profile",
        modprofile: "modprofile",
        chgpasswd: "chgpasswd",
        ticklist: "ticklist"
    }

};

export default config;