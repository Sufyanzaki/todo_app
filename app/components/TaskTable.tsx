'use client'

import {useData} from "@/app/provider/DataProvider";
import TaskRow from "@/app/components/TaskRow";

export default function TaskTable(){

    const { dataSet, updateStatus, handleDelete } = useData();

    return (
        <table
            className="min-w-full text-sm font-light text-surface dark:text-white text-center">
            <thead
                className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
                <th scope="col" className="px-6 py-4">#</th>
                <th scope="col" className="px-6 py-4">Task</th>
                <th scope="col" className="px-6 py-4">Status</th>
                <th scope="col" className="px-6 py-4">Action</th>
            </tr>
            </thead>
            <tbody>
            {dataSet.map((item) => {
                return (
                    <TaskRow handleDelete={handleDelete} item={item} updateStatus={updateStatus} key={item.id}/>
                )
            })}
            </tbody>
        </table>
    )
}