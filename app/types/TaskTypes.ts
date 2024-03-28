export type DataDto = {
    id: number;
    taskName: string;
    status: string;
}

export type DataContextValue = {
    dataSet: DataDto[];
    updateDataSet: (newData: DataDto[]) => void;
    updateStatus: (id: number) => void,
    handleDelete: (id: number) => void,
}