import { videos, products, youtube } from '@/types';
declare type OmitProduct = Omit<products, 'generos' | 'tags'>;
export interface GettersVideosInfo extends videos, OmitProduct, youtube {
    id: number;
    thumbnail: string;
    tags?: string[];
    generos?: string[];
}
export declare type DownParamsGraphQLVideoInfo = Partial<Record<keyof GettersVideosInfo, boolean>>;
export {};
