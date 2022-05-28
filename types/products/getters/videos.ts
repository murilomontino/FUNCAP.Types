import { videos, products, youtube } from '@/types'

type OmitProduct = Omit<products, 'generos' | 'tags'>

export interface GettersVideosInfo extends videos, OmitProduct, youtube {
	id: number
	thumbnail: string
	tags?: string[]
	generos?: string[]
}

export type DownParamsGraphQLVideoInfo = Partial<
	Record<keyof GettersVideosInfo, boolean>
>
