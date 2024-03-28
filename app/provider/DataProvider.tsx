'use client'
import React, { createContext, useContext, useState, ReactNode} from 'react';
import {DataContextValue, DataDto} from "@/app/types/TaskTypes";

const DataContext = createContext<DataContextValue>({
    dataSet: [],
    updateDataSet: () => {},
    updateStatus: () => {},
    handleDelete: () => {},
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: {children : ReactNode}) => {
    const [dataSet, setDataSet] = useState<DataDto[]>([
        { id: 1, taskName: 'Task 1', status: 'Pending' },
        { id: 2, taskName: 'Task 2', status: 'Completed' },
        { id: 3, taskName: 'Task 3', status: 'In Progress' }
    ]);

    const updateDataSet = (newData : DataDto[]) => {
        setDataSet(newData);
    };

    function updateStatus(id: number){
        const updatedDataSet = dataSet.map(item => {
            if (item.id === id) {
                return {...item, status: 'Completed'};
            }
            return item;
        });
        setDataSet(updatedDataSet);
    }
    function handleDelete(id: number){
        const updatedTasks = dataSet.filter(item=>item.id !== id)
        setDataSet(updatedTasks)
    }

    return (
        <DataContext.Provider value={{ dataSet, updateDataSet, updateStatus, handleDelete }}>
            {children}
        </DataContext.Provider>
    );
};
