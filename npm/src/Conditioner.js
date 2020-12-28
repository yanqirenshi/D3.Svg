export default class Conditioner {
    raiseWarning (msg) {
        try {
            console.log('Warn: ' + msg);
        } catch (w) {
            console.log(msg);
        }
    }
}
