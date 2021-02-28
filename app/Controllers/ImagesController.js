
import { imagesService } from '../Services/ImagesService.js'
import { ProxyState } from '../AppState.js'

function _drawImage() {
    document.getElementById('bg-img').style.backgroundImage = /*html*/ `url('${ProxyState.image}')`
}

export default class ImageController {
    constructor() {
        ProxyState.on('image', _drawImage)
    }

}