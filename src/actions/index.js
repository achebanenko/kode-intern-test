export function storeData(data) {
	return {
		type: 'STORE_DATA',
		data
	}
}

export function loadingData(status) {
	return {
		type: 'LOADING_DATA',
		status
	}
}

export function saveErrorMessage(message) {
	return {
		type: 'NEW_ERROR_MESSAGE',
		message
	}
}

export function errorMessageReset() {
	return {
		type: 'RESET_ERROR_MESSAGE'
	}
}

export function doFilterSeries(setsSeries) {
	return {
		type: 'DO_FILTER_SERIES',
		setsSeries
	}
}

export function doFilterName(cardName) {
	return {
		type: 'DO_FILTER_NAME',
		cardName
	}
}

export function showMore(dataPointer) {
	return {
		type: 'SHOW_MORE',
		dataPointer
	}
}

export function resetFilter() {
	return {
		type: 'RESET_FILTER'
	}
}