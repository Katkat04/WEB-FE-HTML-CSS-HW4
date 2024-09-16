import {goalsInfo} from "../utils/info";

function getStatus(compliance) {
    if (compliance <= 35) {
        return <p className="text-[#be201c]">Critic</p>;
    } else if (compliance > 35 && compliance <= 75){
        return <p className="text-[#ff8800]">Aceptable</p>;
    } else if (compliance > 75) {
        return <p className="text-[#008000]">Sucess</p>;
    }
}

function Goals(){
    return(
        <section className= "flex-col w-full h-auto bg-[#e2f0fb] px-6 py-4">
            <h1 className=" font-bold text-2xl justify-items-start pl-2">
                Goals
            </h1>
            <table className="table-auto w-full text-left rtl:text-right text-gray-800">
                <thead className="text-xl text-[#f6a019] bg-cyan-950">
                    <tr className="border">
                        <th className="text-center">ID</th>
                        <th className="w-auto">Goal</th>
                        <th className="text-start">Target</th>
                        <th className="text-start">Progress</th>
                        <th className="text-start" >Compliance</th>
                        <th className="text-start">Status</th>
                    </tr>
                </thead>
                <tbody className="text-lg bg-gray-50">
                    {goalsInfo.map((goal) => (
                        <tr key={goal.id} className="border-b px-6 py-5 hover:bg-blue-100">
                            <td className="text-center">{goal.id}</td>
                            <td>{goal.goal}</td>
                            <td className="pl-2">{goal.target}</td>
                            <td className="pl-2">{goal.progress}</td>
                            <td className="text-start">{goal.compliance}%</td>
                            <td>{getStatus(goal.compliance)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
export default Goals;
