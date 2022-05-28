export declare type musicsAlbums = {
    id?: number;
    nome: string;
    produtoId: number;
    nome_unico: string;
    tipo: TypeMusicAlbums;
    artista: string;
    data_de_lancamento: string;
};
export declare type tracks = {
    id?: number;
    albumMusicalId: number;
    documentoId: number;
    titulo: string;
    duracao: string;
    compositor: string;
    artista: string;
};
export declare enum TypeMusicAlbums {
    'single' = 1,
    'ep' = 2,
    'album_interprete' = 3,
    'album' = 4
}
