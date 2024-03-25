/* eslint-disable react/prop-types */

export default function SignedinTableData(props) {
  console.log(props.signformData);
  return (
    <div className="mb-9">
      {/* Display prisma data */}
      <div>
        <table className="border-collapse bg-slate-300 w-1/2">
          <thead>
            <tr>
              <th className="p-2 bg-slate-500 border border-black">id</th>
              <th className="p-2 bg-slate-500 border border-black">Name</th>
              <th className="p-2 bg-slate-500 border border-black">Email</th>
              <th className="p-2 bg-slate-500 border border-black">Password</th>

              {/* Add Actions column */}
            </tr>
          </thead>
          <tbody>
            {props.signformData.map((value) => (
              <tr key={value.id}>
                <td className="p-2 border border-black">{value.id}</td>
                <td className="p-2 border border-black">{value.name}</td>
                <td className="p-2 border border-black">{value.email}</td>
                <td className="p-2 border border-black">{value.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
