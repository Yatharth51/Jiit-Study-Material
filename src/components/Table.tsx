type Column = { key: string; header: string };

export function GenericTable({ data, columns }: { data: any[]; columns: Column[] }) {
  return (
    <div className="overflow-x-auto border border-gray-300 rounded-md mt-4 mx-8">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className=" text-left">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 font-semibold text-white">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-zinc-900">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 text-white">
                  {row[col.key] ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
