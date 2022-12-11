import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '80be14f09c6247c69fb8d2fc4897b727', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
