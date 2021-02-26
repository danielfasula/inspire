import { quotesService } from '../Services/QuotesService.js'
import { ProxyState } from '../AppState.js'


function _drawQuote() {
    document.getElementById('quote').innerHTML = ProxyState.quotes.Template
}

export default class QuotesController {
    constructor() {
        ProxyState.on('quotes', _drawQuote)
    }



}