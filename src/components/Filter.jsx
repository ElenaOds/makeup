import { useState, useEffect } from 'react';
import { Select, Grid, Typography } from "antd";
const { useBreakpoint } = Grid;

const Filter = ({dataSource, setFilteredData}) => {
    const [chosenBrands, setChosenBrands] = useState([]);
    const [chosenTags, setChosenTags] = useState([]);

    const { Text } = Typography;
    const screens = useBreakpoint();

    
  const listStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
  }

    const brandOptions = () => {
        const brands = [...new Set(dataSource.map(item => item.brand))];
        const filteredBrands = brands.filter(brand => brand !== null && brand !== '');
        const sortedOptions = filteredBrands.sort();
        return sortedOptions.map(brand => ({
          value: brand,
          label: brand,
        }));
       };

       const tagOptions = () => {
        const tags = [...new Set(dataSource.flatMap(item => item.tag_list || []))];
        const filteredTags = tags.filter(tag => tag !== null && tag !== '');
        const sortedTags = filteredTags.sort();
        return sortedTags.map(tag_list => ({
          value: tag_list,
          label: tag_list.toLowerCase(),
        }))
      };


    const handleChange = (value, type) => {
        if (type === 'brand') {
          setChosenBrands(value);
        } else if (type === 'tag') {
          setChosenTags(value);
        }
      };

      useEffect(() => {
        const applyFilters = () => {
          let filteredData = dataSource;
      
          if (chosenBrands.length > 0) {
            filteredData = filteredData.filter(data => chosenBrands.includes(data.brand));
          }
      
          if (chosenTags.length > 0) {
            filteredData = filteredData.filter(data => 
              data.tag_list && data.tag_list.some(tag => chosenTags.includes(tag))
            );
          }
      
          setFilteredData(filteredData);
        };
      
        applyFilters();
      }, [chosenBrands, chosenTags, dataSource, setFilteredData]);

  return (
  
   <ul style={{ 
      display: 'flex',
      gap: '20px',
    }}>
    <li style={listStyle}>
    <Text level={5} 
    style={{ 
      color: '#fff',
    }}>
      Filter by brand</Text>
    <Select 
        style={{ width: screens.lg ? 240 : 160 }}
        mode="multiple"
        allowClear
        options={brandOptions()}
        placeholder="Choose brand"
        onChange={(value) => handleChange(value, 'brand')}
        value={chosenBrands}
    />
    </li>

    <li style={listStyle}>
    <Text level={5}
    style={{ 
      color: '#fff',
    }}>Filter by tags</Text>
    <Select
        style={{ width: screens.lg ? 240 : 160 }}
        mode="multiple"
        allowClear
        placeholder="Choose tags"
        options={tagOptions()}
        onChange={(value) => handleChange(value, 'tag')}
        value={chosenTags}
    />
    </li>
 </ul>
  )
}

export default Filter;
