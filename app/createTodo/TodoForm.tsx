'use client'
import {useData} from "@/app/provider/DataProvider";
import {FormEvent, useRef} from "react";
import { useRouter } from 'next/navigation'

export default function TodoForm(){
    const router = useRouter()
    const { dataSet, updateDataSet } = useData();
    const todoName = useRef<HTMLInputElement>(null);
    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(todoName.current)
        if(todoName.current?.value.trim()){
            const body = {id: Math.floor(Math.random() * 1000), status: 'Pending', taskName: todoName.current.value}
            const newDataSet = [...dataSet, body];
            updateDataSet(newDataSet);
            router.push('/')
            return
        }
        alert('Title is required')
    };

    return (<form className="max-w-sm mx-auto my-12" onSubmit={handleSubmit}>
        <div className="mb-5">
            <label htmlFor="todoName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                Todo</label>
            <input type="text" id="todoName" ref={todoName}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Todo..." required/>
        </div>
        <button type="submit"
                className="bg-blue-400 px-4 py-2 my-2 text-white w-fit rounded-md">Submit
        </button>
    </form>)
}