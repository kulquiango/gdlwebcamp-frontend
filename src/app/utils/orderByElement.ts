export const orderByElement = (data: any, key: string) => {
	let orderedCalendar: Array<any> = []
	let temporalArray: Array<any> = []

	const addArray = (temporalArrayReq: Array<any>, data: any, position: number) => {
		temporalArray.push(data[position])
		orderedCalendar.push(temporalArrayReq)
		temporalArray = []
	}

	const calendar = () => {
		for (let i = 0; i < data.length - 1; i++) {
			if (data[i][key] === data[i + 1][key]) {
				temporalArray.push(data[i])
			} else {
				addArray(temporalArray, data, i)
			}
		}

		if (data[data.length - 1][key] === data[data.length - 2][key]) {
			temporalArray.push(data[data.length - 1])
		} else {
			addArray(temporalArray, data, data.length - 1)
		}
	}
	const recervation = () => {
		for (let i = 0; i < data.length - 1; i++) {
			if (data[i][key]['category'] === data[i + 1][key]['category']) {
				temporalArray.push(data[i])
			} else {
				addArray(temporalArray, data, i)
			}
		}

		if (data[data.length - 1][key]['category'] === data[data.length - 2][key]['category']) {
			temporalArray.push(data[data.length - 1])
		} else {
			addArray(temporalArray, data, data.length - 1)
		}
	}
	if (key === 'date') {
		calendar()
	} else if (key === '_idCategory') {
		recervation()
	}
	orderedCalendar.push(temporalArray)

	return orderedCalendar
}
