import TaskTable from "@/app/components/TaskTable";
import Link from "next/link";

export default function Home() {
  return (
      <section className='max-w-7xl mx-auto'>
          <div className="flex flex-col my-12">
              <Link className='bg-blue-400 px-4 py-2 my-2 text-white w-fit rounded-md ml-auto' href="/createTodo">Add Todo</Link>
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                          <TaskTable/>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
