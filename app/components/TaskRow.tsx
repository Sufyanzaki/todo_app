import {CheckIcon, TrashIcon} from "@heroicons/react/24/outline";
import {DataDto} from "@/app/types/TaskTypes";

type TaskRowProps = {
    item: DataDto;
    updateStatus: (id: number) => void;
    handleDelete: (id: number) => void;
}

export default function TaskRow({item, updateStatus, handleDelete} : TaskRowProps){
    return (
        <tr className="border-b border-neutral-200 dark:border-white/10" key={item.id}>
            <td className="whitespace-nowrap px-6 py-4 font-medium">{item.id}</td>
            <td className="whitespace-nowrap px-6 py-4">{item.taskName}</td>
            <td className="whitespace-nowrap px-6 py-4">{item.status}</td>
            <td className="whitespace-nowrap px-6 py-4 space-x-2">
                <button className='border p-2 rounded-lg' onClick={() => updateStatus(item.id)}><CheckIcon className='w-5 h-5 text-black-500'/></button>
                <button className='border p-2 rounded-lg' onClick={() => handleDelete(item.id)}><TrashIcon className='w-5 h-5 text-black-500'/></button>
            </td>
        </tr>
    )
}