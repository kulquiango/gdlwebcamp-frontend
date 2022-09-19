export interface InfoEvent {
	_id: number
	name: string
	date: string
	hour: string
	_idCategory: {
		_id: number
		category: string
		icon: string
	}
}
