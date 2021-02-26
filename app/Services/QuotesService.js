
import { ProxyState } from '../AppState.js';
import Quote from '../Models/Quote.js';
import { sandboxApi } from '../Services/AxiosService.js';

class QuotesService {
    constructor() {
        this.getQuotes()
    }


    async getQuotes() {
        try {
            const res = await sandboxApi.get('quotes')
            ProxyState.quotes = new Quote(res.data)
        } catch (error) {
            console.error(error);
        }
    }
}

export const quotesService = new QuotesService();