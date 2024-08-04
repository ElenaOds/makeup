import { Layout, Typography, Grid } from 'antd';
const { Title } = Typography;
const { Header } = Layout;
const { useBreakpoint } = Grid;

const HeaderComponent = () => {
    const screens = useBreakpoint();
    const fontSize = screens.lg ? '36px' : '24px';
 
    return (
    <Header style={{
        textAlign: 'left',
        padding: 20,
        backgroundColor: '#f47f6a',
        height: 'auto',
    }}>
    <Title style={{
        color: '#fff',
        margin: 0,
        fontSize,
    }}>
      Makeup store
    </Title>
    </Header>
  )
}

export default HeaderComponent
