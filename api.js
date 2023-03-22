const Axios = require('axios')

export const code2Session = async (code) => {
    const resp = (await Axios.get("https://api.weixin.qq.com/sns/jscode2session"), {
        params: {
            appid: process.env.appid,
            secret: process.env.secret,
            grant_type: 'authorization_code',
            js_code: code
        }
    }).data
    return resp.data
}
