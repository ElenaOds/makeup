import { Layout, Typography, Grid } from 'antd';
const { Text } = Typography;
const { Footer } = Layout;
const { useBreakpoint } = Grid;


const FooterComponent = () => {
    const screens = useBreakpoint();
    const fontSize = screens.lg ? '18px' : '14px';

    const date = new Date().getFullYear();

  return (
    <Footer style={{
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#f47f6a',
        marginTop: 'auto',
    }}>
    <Text style={{
        color: '#fff',
        margin: 0,
        fontSize,
    }}>
      All rights are reserved &copy; {date}
    </Text>
    </Footer>
  )
}

export default FooterComponent
