import { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import axios from 'axios';

const Example = () => {
  const [materialData, setMaterialData] = useState([]);

  async function fetchMaterialData() {
    try {
      const response = await axios.get("http://localhost:5002/materialtable");
      setMaterialData(response.data); // Extracting data from the response
      console.log(response.data)
    } catch (err) {
      window.alert(err.message);
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchMaterialData();
  }, []);

  // should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', // access nested data with dot notation
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'address', // normal accessorKey
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: materialData, // Pass materialData as an array to the useMaterialReactTable hook
    enableRowDragging: true, // Enable row dragging
    enableColumnDragging: true, // Enable row dragging

  });

  return <MaterialReactTable table={table} />;
};

export default Example;
