import { musicsAlbums, products, AuxGettersDocs } from '@/types';
import { tracks } from '../../models/musics';
export interface GettersAlbums extends musicsAlbums, Omit<products, 'tags' | 'generos'> {
    id: number;
    image: string;
    tags?: string[];
    generos?: string[];
    tracks: GettersTracks[];
}
export interface GettersTracks extends tracks, AuxGettersDocs {
    id: number;
}
