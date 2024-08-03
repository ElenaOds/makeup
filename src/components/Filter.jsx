import { useState, useEffect } from 'react';
import { Select, Space, Typography } from "antd";

const Filter = ({dataSource, setFilteredData}) => {
    const [chosenBrands, setChosenBrands] = useState([]);
    const [chosenTags, setChosenTags] = useState([]);

    const { Title } = Typography;

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
    <div>
    <Space direction="horizontal">
    
    <Title level={5}>Filter by brand</Title>
    <Select 
        style={{ width: 240 }}
        mode="multiple"
        allowClear
        options={brandOptions()}
        placeholder="Choose brand"
        onChange={(value) => handleChange(value, 'brand')}
        value={chosenBrands}
    />
  
    <Title level={5}>Filter by tags</Title>
    <Select
        style={{ width: 240 }}
        mode="multiple"
        allowClear
        placeholder="Choose tags"
        options={tagOptions()}
        onChange={(value) => handleChange(value, 'tag')}
        value={chosenTags}
    />
    
    </Space>
    </div>
  )
}

export default Filter;
