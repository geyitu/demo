import api from './api'
import utils from '../utils'
import oldCache from './oldCache'
import { Notification } from 'element-ui'
import config from '../config'

class OldApi {
  constructor () {
    this.sid = oldCache.getLoggedUser().sid
  }

  sendGet (url, params) {
    let sendData = '?params=' + utils.base64Encode(params)
    return api.get(url + sendData)
  }

  sendPost (url, params) {
    let sendData = 'params=' + utils.base64Encode(params)
    return api.post(url, sendData)
  }

  sendMultipart (url, param) {
    return api.post(url, param)
  }

  getImageUrl (path) {
    var basePath = window.location.origin
    var formdataParam = {'path': path}
    if (path && path !== 'undefined') {
      return basePath + config.API_PATH + '/open/file/image?params=' + utils.base64Encode(formdataParam)
    // return config.remote + config.API_PATH + '/open/file/image?params=' + utils.base64Encode(formdataParam)
    }
  }
  getExcelUrl (url, params) {
    console.log('params0909--%o', config.API_PATH + url + '?params=' + utils.base64Encode(params))
    return config.API_PATH + url + '?params=' + utils.base64Encode(params)
    // return CONFIG.SERVER_URL + CONFIG.SERVER_PATH + url + '?params=' + encodedParams + '&&JSESSIONID=' + SessionService.getSid();
  }

  /**
   * service 中处理错误信息，一般在 新增，修改，删除等操作中调用
   * @param { res.data } data response 中的data
   * @param { success | error | errorOnly } options 成功或失败的 msg, errorOnly 只提示错误消息
   */
  handleError (data, options = {}) {
    options.duration = 1500
    options.message = options.success || '操作成功'
    options.message = options.error || data.info
    if (data.code === 200) {
      !options.errorOnly && Notification.success(options)
    } else {
      Notification.error(options)
    }
  }
}

export default OldApi
