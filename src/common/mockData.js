import Mock from "../bower_components/mockjs/dist/mock-min"

var data = {

    login: Mock.mock({
        retcode: 0, retmsg: 'success', mobile: 13262717306, skey: 'f16db5322730b0c5'
    }),
    logout: Mock.mock({
        retcode: 0,retmsg: "sucess"
    }),
    register: Mock.mock({
        retcode: 0,retmsg: "sucess"
    }),
    forgetpasswd: Mock.mock({
        retcode: 0,retmsg: "sucess"
    }),
    getvcode: "getvcode",
    devicelist: Mock.mock({
        retcode:0, retmsg: "success", my_device_num:3 ,'my_device|1-5': [
            {imei: /imei-[A-Z]-[0-9]/, 'name|1':['Door', "Garage",'Hource'], 'gsm_status': /[1-5]/, gprs_status: /[1-5]/, gps_status:/[1-5]/, alarm_num: /[1-9]\d/}
        ],
        other_device_num: /\d/, 'other_device|1-5': [
            {imei: /imei-[A-Z]-[0-9]/, 'name|1':['Door', "Garage",'Hource'], 'gsm_status': /[1-5]/, gprs_status: /[1-5]/, gps_status:/[1-5]/, alarm_num: /[1-9]\d/}
        ]
    }),
    deviceinfo:  Mock.mock({
        retcode:0, retmsg: "success",
        imei:/imei-[A-Z]-[0-9]/, sim_imei: /imei-[A-Z]-[0-9]/, 'name|1':['Door', "Garage",'Hource'], 'gps': /[1-5]/, sensitivity: /[1-5]/, sim_phone:/[1-9]{11}/, alarm: /[1-9]\d/, sensitivity: /\d/
    }),
    deviceuser: Mock.mock({
        retcode: 0,retmsg: "sucess", userlist_num: /\d/,
        'userlist|2-5': ['Door', "Hourse", "Garage"]
    }),

    adddevice: Mock.mock({
        retcode: 0,retmsg: "sucess"
    }),

    moddevice:  Mock.mock({
        retcode: 0,retmsg: "sucess"
    }),
    chgdevicepasswd : Mock.mock({
        retcode: 0,retmsg: "sucess"
    }),
    adddeviceuser: Mock.mock({
        retcode: 0, retmsg: "sucess"
    }),
    profile:  Mock.mock({
        retcode: 0, retmsg: "sucess", first_name: /\w{6}/, last_name: /\w{6}/, country: /\w{6}/,  street: /[1-9]{6}/,
        'state|1': ['shanghai', 'jiangxi', 'guuangdong'], "city|1": ['shanghai', 'beijing', 'shenzhen', 'guangzhou'], zipcode:  /[1-9]{6}/
    }),
    modprofile: Mock.mock({
        retcode: 0, retmsg: "sucess"
    }),
    chgpasswd:  Mock.mock({
        retcode: 0, retmsg: "sucess"
    }),
    ticklist:  Mock.mock({
        retcode: 0,retmsg: "sucess", ticklist_num: 10,
        'ticklist|10': [
            {'latitude|1': [35,37,38,39], 'longitude|1': [-74.3,-74.7,-75.1,-74.5], altitude: 11, speed: 11, direction: "", 'time|1': ['1','2','3','4']}
        ]
    }),
    deldeviceuser:  Mock.mock({
        retcode: 0, retmsg: "sucess"
    })

};


export default data;