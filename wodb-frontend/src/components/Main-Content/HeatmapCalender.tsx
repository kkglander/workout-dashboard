import { useEffect, useState } from 'react';
import HMGrid from './HMgrid';

function fetchHeatmapData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const Fetchmodeactivated = async () => {
            try {
                const response = await fetch("http://100.91.90.9:3000/api/heatmaptest");
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                let Data = await response.json();
                setData(Data.userActivity);
                setError(null);
            } catch(err) {
                setError(err.message)
                setData(null)
            } finally {
                setLoading(false)
            }
        };
        Fetchmodeactivated();
    },[]);
    return[loading,error,data];
};

function getValidDateString(dateObj) {
    const strang = dateObj.toISOString();
    return strang.slice(0,10);
}

function Heatmap({enddate}) {
    const arrayofthings = fetchHeatmapData();
    const loading = arrayofthings[0];
    const error = arrayofthings[1];
    const data = arrayofthings[2];

    const currDate = new Date();
    
    const currDateStr = getValidDateString(currDate);
    currDate.setFullYear(currDate.getFullYear() - 1);
    const yearAgoStr = getValidDateString(currDate);


    if (loading) {return <h1>Loading...</h1>}
    if (loading===false && error) {return <h1>{error}</h1>}
    if (data) {
        return <div className='h-screen w-full flex flex-col justify-items-center items-center'>
            <div className='flex gap-1'>
                <span className='flex flex-col justify-around py-2'>
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                </span>
            <HMGrid startdate={yearAgoStr} enddate={currDateStr} data={data}/>
            </div>
            </div>
    }
}

export default Heatmap;