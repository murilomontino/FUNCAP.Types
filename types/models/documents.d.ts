export declare enum TypesProducts {
    MP3 = 1,
    URL = 2,
    PDF = 3,
    CAPA = 4,
    PHOTOS = 5,
    MP4 = 6,
    LINK = 7,
    NAO_INFORMADO = 99
}
export declare const mapTypesProducts: {
    id: TypesProducts;
    tipo: string;
}[];
export declare type documents = {
    id?: number;
    produtoId: number;
    tipo_de_arquivo: TypesProducts;
    arquivo: string;
    nome_arquivo: string;
};
