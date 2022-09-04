export const orderByElement = (data: any) => {
	let orderedCalendar: Array<any> = []
	let temporalArray: Array<any> = []

	const addArray = (temporalArrayReq: Array<any>, data: any, position: number) => {
		orderedCalendar.push(temporalArrayReq)
		temporalArray = []
		temporalArray.push(data[position])
	}

	for (let i = 0; i < data.length - 1; i++) {
		if (data[i].date === data[i + 1].date) {
			temporalArray.push(data[i])
		} else {
			addArray(temporalArray, data, i)
		}
	}

	if (data[data.length - 1].date === data[data.length - 2].date) {
		temporalArray.push(data[data.length - 1])
	} else {
		addArray(temporalArray, data, data.length - 1)
	}

	orderedCalendar.push(temporalArray)
	return orderedCalendar
}
