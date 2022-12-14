import './news.css';
import { IResponse } from '../../../types/index';

class News {
    draw(data: IResponse[]) {
        const news: IResponse[] = data.length >= 10 ? data.filter((_item: IResponse, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: IResponse, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            if (idx % 2) (newsClone.querySelector('.news__item') as HTMLDivElement).classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLDivElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (newsClone.querySelector('.news__meta-author') as HTMLLIElement).textContent =
                item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLLIElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLHeadingElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLHeadingElement).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLParagraphElement).textContent =
                item.description;
            (newsClone.querySelector('.news__read-more a') as HTMLParagraphElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLDivElement).innerHTML = '';
        (document.querySelector('.news') as HTMLDivElement).appendChild(fragment);
    }
}

export default News;
