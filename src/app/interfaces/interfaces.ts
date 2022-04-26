export interface Movie {
    Title: string,
    Year:number,
    imdbID:string,
    Type:string,
    Poster:string
}

export interface ResponseApiMovie {
    Search: Movie[],
    totalResults:number,
    Response: boolean
}
