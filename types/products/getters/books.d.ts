import { books, products } from '@/types';
import { artists } from '@/types/models/artists';
export interface GetterBooks extends books, Omit<products, 'tags' | 'generos'>, Omit<artists, 'nome_cultural'> {
    id: number;
    tags?: string[];
    generos?: string[];
    image: string;
    pdf: string;
    autor: string;
    existDB?: boolean;
}
