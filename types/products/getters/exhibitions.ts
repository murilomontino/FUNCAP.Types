import { products, AuxGettersDocs } from '@/types'

import {
	exhibition,
	exhibitionPhotos,
	exhibitionWorks,
} from '../../models/exhibition'

export interface GettersExhibitions
	extends exhibition,
		Omit<products, 'tags' | 'generos'> {
	id: number
	image: string
	works: GettersExhibitionsWorks[]
	artistPhotos: GettersExhibitionsPhotos[]
	photos: GettersExhibitionsPhotos[]
	biografia: string
	tags?: string[]
	generos?: string[]
}

export interface GettersExhibitionsPhotos
	extends exhibitionPhotos,
		AuxGettersDocs {
	produtoId: number
}
export interface GettersExhibitionsWorks
	extends exhibitionWorks,
		AuxGettersDocs {
	produtoId: number
}
