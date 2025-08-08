import WorkoutList from "./workoutlist";
import Heatmap from "./HeatmapCalender";

function MainContent() {
    return <>
        <div className="flex flex-col bg-neutral-300 h-dvl max-h-screen w-dvw  text-black/90 overflow-y-auto">
            <Heatmap enddate={"2025-05-14"}/>
            <WorkoutList />
        </div>
    </>
}

export default MainContent;