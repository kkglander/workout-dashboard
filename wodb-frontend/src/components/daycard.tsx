function DayCard({day, workoutObj}:any) {
    return (
        <div className="balls">
            <h4>{day}</h4>
            {Object.entries(workoutObj).map(([movement,workoutArray]) => 
                <div className="numbers" key={movement}>
                    <h5>{movement}</h5>
                    {workoutArray.map((array) => {
                        return <p>{array[0]}x{array[1]}</p>
                    })}
                </div>
            )}
        </div>
        );
}

export default DayCard;