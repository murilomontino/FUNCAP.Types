import { youtube } from '@/types/models/youtube'

export interface GettersYoutube extends youtube {
	id: number
	produtoId: number
	videoId: string
	url: string
	channelId: string
	thumbnailYt: string
	privacyStatus: string
	publishedAt: string
	categoryYoutube: number
}
