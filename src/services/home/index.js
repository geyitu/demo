import OldApi from '../oldApi'
class Home extends OldApi {
  constructor () { // 这里写接口地址
    super()
    this.getHomeUrl = ''
  }
  // 这里写接口方法
  getHome (params) {
    return this.sendGet(this.getHomeUrl, params).then(res => {
      return res.data
    })
  }
}
export default new Home()
