'use client'
import React, { useRef } from "react";
import { ITableColumn } from "@/interfaces"


interface Props<T = any> { 
  data: T[] 
  columns: ITableColumn[]
  className?: string
  colspan?: number
  title?: string,
  showSearch?: boolean
} 



const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date: number) => {
  const newDate = new Date(date * 1000); // convert to milliseconds
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${day} ${months[month+1]} ${year}`;
};


const Table = <T extends any>({ data, columns, className, colspan, title, showSearch=true }: Props) => {
  const [filtererdData, setFilteredData] = React.useState<null | T[]>(null);
  const [search, setSearch] = React.useState<string>("");

  const handleFilter = () => {
    const value = search;
    const filtered: any = data?.filter((item: any) => {
      return Object.keys(item).some((key) => {
        return item[key]?.toString().toLowerCase().includes(value?.toLowerCase());
      });
    });
    setFilteredData(filtered);
  };

  // const debounce =  (func: () => void, wait: number) => {
  //   let timeout: any;
  //   return function executedFunction(...args: any) {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => {
  //       clearTimeout(timeout);
  //       func();
  //       // func(...args);
  //     }, wait);
  //   };
  // };
  
  // const search = debounce(handleFilter, 1000)

  return (
      <div className="overflow-hidden font-medium">
        { showSearch && <div className="flex items-center justify-end w-full gap-4 mb-4 md:gap-8">
         <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="search"
         className="px-4 py-2.5 text-sm border border-gray-300 focus:border-primary rounded-md w-full md:max-w-xl"
          />
         <button onClick={handleFilter} className="px-4 py-2 text-white rounded-md bg-primary">Search</button>
        </div>}
        <div className="pb-10 overflow-x-auto text-sm">
          <table className="min-w-full text-sm font-light text-left border-none rounded-t-lg table-auto">
            <thead className="font-normal rounded-t">
              <tr className="rounded-t-lg bg-primary"> 
                <th colSpan={colspan || 8} className="border-none rounded-t-lg">
                  <div className="flex items-center justify-between gap-4 px-4 py-6 text-white rounded-t-lg md:gap-8 bg-primary">
                    <span>{title || 'Wallet'}</span>
                  </div>
                </th>
              </tr>
              <tr className="text-black bg-white">
                {columns?.map((item, index) => (
                 <th key={index} scope="col" className="px-4 py-6 font-medium border whitespace-nowrap">{item?.label}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#737B7B] text-xs md:text-sm font-medium">
              {data?.length > 0 ? (filtererdData || data)?.map((item, index) => (
                <tr key={index} className={`text-xs ${index % 2 !== 0 ? 'bg-white text-black' : "bg-white"}`}>
                  {columns?.map((column, index) => {
                    // console.log("column", column)
                    if (column?.extra && column?.custom) {
                      return ( 
                        <td key={index} className="px-4 py-6 whitespace-nowrap">
                          {column?.custom(item[column?.name as keyof T], item)}
                        </td>
                      )
                    } else if (column?.name === "updated_at" || column?.name === "created_at" || column?.name === "created") {
                      return <td key={index} className="px-4 py-6 whitespace-nowrap">{formatDate(Number(item[column?.name as keyof T]))}</td>
                    }
                    return <td key={index} className="px-4 py-6 whitespace-nowrap">{item[column?.name as keyof T]}</td>
                  }
                  )}
                </tr>
              )
              ): 
              <tr>
                  <td colSpan={columns?.length} className="py-10 text-center">
                    <p className="text-[#737B7B] text-sm">No data found</p>
                  </td>
                </tr>
                }
              {/* {data?.length <= 0  && (
                <tr>
                  <td colSpan={columns?.length} className="py-10 text-center">
                    <p className="text-[#737B7B] text-sm">No data found</p>
                  </td>
                </tr>
              )} */}
            </tbody>
          </table>
        </div>
      </div>
  )
};

export default Table;