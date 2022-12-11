export interface IResponse {
    status: string,
    sources: [
        id: string,
        name: string,
        description: string,
        url: string,
        category: string,
        language: string,
        country: string,
    ]
}

export default IResponse;