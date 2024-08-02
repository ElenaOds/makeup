import { useEffect, useState } from 'react'
import { getData } from '../services/makeupApi';
import TableList from '../components/TableList';

const MainPage = () => {
    const [ dataSource, setDataSource ] = useState ([]);
  
 
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getData();
            const itemsData = data.map(item => ({
                ...item,
                key: item.id 
            }));
            setDataSource(itemsData);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

      console.log(dataSource)
    

      

  return (
    <div>
        <TableList dataSource={dataSource} />
    </div>
  )
}

export default MainPage;
