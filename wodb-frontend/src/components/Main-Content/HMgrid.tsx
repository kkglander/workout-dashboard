function HMGrid({startdate, enddate, data}) {
    let stDate = new Date(startdate);
    let enDate = new Date(enddate);
    const daysInMonth = Math.ceil((enDate - stDate) / (1000 * 60 * 60 * 24)) + 1;
    const calenderGrid = Array.from({ length: daysInMonth}, (_, i) => {
        const date = new Date(stDate);
        date.setDate(stDate.getDate() + i)
        return date.toISOString().slice(0,10);
    })

    const highestValue = data.reduce((a, b) => Math.max(a, b.count), -Infinity)

    const determineColor = (activityCount) => {
        const intensity =  highestValue !== 0 ? Number(activityCount / highestValue) : 0;
        const colorCodes = ['#FFEEEE', '#FFCCCC', '#FFAAAA', '#FF8888', '#FF6666', '#FF4444'];
        const colorIndex = Math.min(Math.floor(intensity * colorCodes.length), colorCodes.length - 1);
        // console.log(colorIndex);
        return colorCodes[colorIndex]
    }

    return (
        <div className="grid grid-flow-col gap-1" style={{gridTemplateRows: 'repeat(7, minmax(0, 1fr)'}}>
            {
                calenderGrid.map((day, index) => {
                    const activityCount = data.find((item) => item.date === day)?.count || 0;
                    const color = determineColor(activityCount)
                    return <div className="w-4 h-4 rounded cursor-pointer bg-gray-400" title={`${activityCount} Post on ${day}`} style={{backgroundColor: `${activityCount === 0 ? "#FFFFFF60" : String(color)}`}}></div>
                })
            }
        </div>
    )
}

export default HMGrid;