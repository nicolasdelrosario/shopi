const currentDate = () => {
	const date = new Date()
	const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	const month =
		date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
	return `${day}-${month}-${date.getFullYear()}`
}

export default currentDate
