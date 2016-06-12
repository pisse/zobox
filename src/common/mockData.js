import Mock from "../bower_components/mockjs/dist/mock-min"

var data = {

    login: Mock.mock({
        retcode: 0, retmsg: 'success', mobile: 13262717306, skey: 'f16db5322730b0c5'
    }),
    logout: "logout",
    register: Mock.mock({
        retcode: 0,retmsg: "sucess"
    }),
    getvcode: "getvcode",
    devicelist: Mock.mock({

    }),
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

};


export default data;