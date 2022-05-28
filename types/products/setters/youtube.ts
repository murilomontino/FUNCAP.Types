import { youtube } from '@/types/models/youtube'

export interface SettersYoutube extends youtube {
	id: number
	nome_unico: string
	nome_arquivo: string
	produtoId: number
	videoId: string
	channelId: string
	thumbnailYt: string
	url: string
	privacyStatus: string
	publishedAt: string
	categoryYoutube: number
	titulo: string
	sobre_a_obra: string
	tags: string[]
}
