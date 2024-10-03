import { ReactNode } from "react";

interface TableProps<T> {
  data: T[];
  columns: (keyof T)[];
  className?: string;
}

const isRenderable = (value: unknown): value is ReactNode => {
  return (
    ["string", "number", "boolean"].includes(typeof value) || value === null
  );
};

const Table = <T,>({ data, columns, className }: TableProps<T>) => {
  return (
    <table
      className={
        className ?? "table-auto w-full border-collapse border border-gray-400"
      }
    >
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column as string}
              className='border border-gray-400 px-4 py-2'
            >
              {column as string}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => {
              const value = row[column];
              return (
                <td
                  key={column as string}
                  className='border border-gray-400 px-4 py-2'
                >
                  {isRenderable(value) ? value : "N/A"}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
