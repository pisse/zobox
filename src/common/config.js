
var isDev = true;

var config = {

    isDev: isDev,
    useMock: true,

    devUrl: !isDev ? "http://112.124.66.29:8080/cgi-bin/" : "http://localhost:8080/cgi-bin/",

    service: {
        login: "login",
        logout: "logout",
        forgetpasswd: "forgetpasswd",
        register: "register",
        getvcode: "getvcode",
        devicelist: "devicelist",
        deviceinfo: "deviceinfo",
        deviceuser: "deviceuser",
        adddevice: "adddevice",
        deldevice: "deldevice",

        moddevice:"moddevice",
        chgdevicepasswd:"chgdevicepasswd",
        adddeviceuser: "adddeviceuser",
        deldeviceuser: "deldeviceuser",
        profile: "profile",
        modprofile: "modprofile",
        chgpasswd: "chgpasswd",
        ticklist: "ticklist"
    }

};

export default config;