import { Table } from "antd";
import { columns } from '../helpers/columns';

const TableList = ({ dataSource }) => {
   
  return (
    <Table 
      dataSource={dataSource} 
      columns={columns} 
      bordered
      expandable={{
        expandedRowRender: (record) => (
          <ul
            style={{
              margin: 0,
              display: 'flex',
              justifyContent: 'stretch',
              flexWrap: 'wrap',
              width: '100%',
              gap: '20px',
            }}
          >
            {record.product_colors?.map((color, index) => (
                <li style={{backgroundColor: color.hex_value, 
                            width: '100px', 
                            height: '50px',
                            display: 'flex',
                            borderRadius: '5px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '5px'}} key={index}>
                    <p style={{color: '#fff', textAlign: 'center'}}>{color.colour_name}</p></li>
            ))}
          </ul>
        ),
      }}
      />
  )
}

export default TableList
