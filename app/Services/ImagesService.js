import { ProxyState } from '../AppState.js';
import { sandboxApi } from '../Services/AxiosService.js'

class ImagesService {
    constructor() {
        this.getImages()
    }

    async getImages() {
        try {
            const res = await sandboxApi.get('images')
            ProxyState.image = res.data.url
        } catch (error) {
            console.error(error);
        }
    }
}

export const imagesService = new ImagesService();