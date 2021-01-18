/*
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2021-01-18 19:05:45
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2021-01-18 19:07:07
 */
class Storage {

    getItem( key ){
        localStorage.getItem( key )
    }

    setItem( key, value ){
        localStorage.setItem( key, value )
    }
}

export default new Storage();