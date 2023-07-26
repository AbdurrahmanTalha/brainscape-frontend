

const CLearningTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table text-center">
                {/* head */}
                <thead className="bg-[#171320]">
                    <tr className="text-[#FFFFFF]">
                        <th>Index</th>
                        <th>Lecture</th>
                        <th>Continue Learning</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className="text-[#FFFFFF]">
                        <th>1.</th>
                        <td>Cy Ganderton</td>
                        <td>
                            <button className="bg-[#171320] text-[#FFFFFF] px-5 py-1 rounded-md">Continue lesson</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CLearningTable;