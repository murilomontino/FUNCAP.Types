import { Category } from './categoriesProducts';
import { FinancialResources } from './financialResources';
export declare type tags = {
    id?: number;
    tag: string;
    produtoId?: number;
};
export declare type generos = {
    id?: number;
    genero: string;
    produtoId?: number;
};
export declare type products = {
    id?: number;
    cpf: string;
    cnpj: string;
    categoria: Category;
    recurso: FinancialResources;
    patrocinadores: number;
    fichaTecnica: number;
    sobre_a_obra: string;
    link: string;
    tags?: tags[];
    generos?: generos[];
    data_cadastro?: Date;
};
