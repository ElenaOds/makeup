import { capitalized } from './firstLetterCapitalized';

export   const columns = (groupKey) => [
    { title: groupKey ? capitalized(groupKey.replace(/_/g, ' ')) : 'Products',
      children: [
    {
        title: 'Image',
        dataIndex: 'api_featured_image',
        render: (text, record) => <img src={text} alt={record.name} style={{ width: '100px', height: '100px' }} />,
    },

    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },

    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: text => (text ? text.replace(/_/g, ' ') : 'general'),
    },

    {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
        render: text => (text ? text : 'no brand'),
    },

    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },

    {
        title: 'Product type',
        dataIndex: 'product_type',
        key: 'product_type',
        render: text => text.replace(/_/g, ' '),
        
    },
  ]
  },
];
