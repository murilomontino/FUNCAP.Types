export declare type exhibition = {
    id?: number;
    produtoId: number;
    titulo: string;
    nome_unico: string;
    data_de_inicio: string;
    data_de_fim: string;
    local: string;
    artista: string;
};
export declare type exhibitionPhotos = {
    id?: number;
    exibicaoId: number;
    documentoId: number;
    tipo_de_foto: ExhibitionPhotosTypes;
    titulo: string;
    descricao: string;
    data: string;
    artista: string;
};
export declare enum ExhibitionPhotosTypes {
    foto_de_montagem = 1,
    foto_de_artista = 2,
    foto_de_local = 3,
    foto_de_evento = 4,
    foto_de_abertura = 5,
    outros = 6
}
export declare type exhibitionWorks = {
    id?: number;
    exibicaoId: number;
    documentoId: number;
    titulo: string;
    artista: string;
    tecnica: string;
    edicao: string;
    impressao: string;
    moldura: string;
    ano: string;
    dimensao: string;
    obra_original: boolean;
};
