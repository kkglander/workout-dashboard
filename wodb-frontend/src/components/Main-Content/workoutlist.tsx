import { useEffect, useState } from 'react';
import DayCard from './daycard';


function getWorkoutData() { 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWorkOutData = async () => {
            try {
                const response = await fetch("http://100.91.90.9:3000/api/workouts");
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                let Data = await response.json();
                setData(Data);
                setError(null);
            } catch (err: any) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        fetchWorkOutData();
    }, []);
    return [loading,error,data]
};

function WorkoutList() {
    const arrayofthings = getWorkoutData()
    const loading = arrayofthings[0]
    const error = arrayofthings[1]
    const data:any = arrayofthings[2]

    if (loading) {return <h1>Loading...</h1>}
    if (loading===false && error) {return <h1>{error}</h1>}

    return (
        <>
        <div className='flex flex-col'>
            {
                Object.entries(data).map(([day,values]) => {
                    return <DayCard key={day} day={day} workoutObj={values} />
                })
            }
        </div>
    </>
  )
}

export default WorkoutList;
