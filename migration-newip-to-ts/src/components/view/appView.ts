import News from './news/news';
import Sources from './sources/sources';
import { INews, INewsResp, ISource, ISourceResp } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: INewsResp) {
        const values: INews[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISourceResp) {
        const values: ISource[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
