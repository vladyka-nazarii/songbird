export interface INews {
    source: {
        id: string | null,
        name: string,
    },
    author: string | null,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}

export interface ISource {
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string,
}
