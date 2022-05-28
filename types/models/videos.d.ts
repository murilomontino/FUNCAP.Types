export declare enum CategoriesVideos {
    NaoInformado = 0,
    VideoClipe = 1,
    Show = 2
}
export declare const mapCategoriesVideos: {
    id: CategoriesVideos;
    categoria: string;
}[];
export declare type videos = {
    id?: number;
    produtoId: number;
    documentoId: number;
    nome_unico: string;
    titulo: string;
    artista: string;
    categoria_de_video: CategoriesVideos;
};
