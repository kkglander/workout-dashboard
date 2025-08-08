function DayCard({day, workoutObj}:any) {
    return (
        <>
        <div className="flex flex-col rounded-xl m-2 p-1 max-w-5xl shadow-xl bg-neutral-300/90">
            <h4 className="text-decoration-line: underline ">{day}</h4>
            <div className="flex flex-wrap gap-x-7 ">
            {Object.entries(workoutObj).map(([movement,workoutArray]) => 
                <div className="flex gap-x-2" key={movement}>
                    <h5 className="">{movement}:</h5>
                    {workoutArray.map((array) => {
                        return <p>{array[0]}x{array[1]}</p>
                    })}
                </div>
            )}
            </div>
        </div>
        </>
        );
}

export default DayCard;