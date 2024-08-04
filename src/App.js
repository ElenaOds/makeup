import MainPage from './pages/MainPage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { Layout, ConfigProvider, Grid } from 'antd';
const {  Content } = Layout;
const { useBreakpoint } = Grid;

function App() {
  const screens = useBreakpoint();

  return (
    <ConfigProvider
      theme={{
      token: {
        colorPrimary: '#ff534a',
        borderRadius: 2,
        colorBgContainer: '#f2e4e0',
        
      },
      components: {
        Table: {
          headerBg: '#f47f6a', 
          headerColor: '#fff',
          padding: '5px',
          fontSize: screens.lg ? '16px' : '12px',
        },
      },
    }}
    >
   
    <Layout style={{
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      }}>
      <HeaderComponent/>
      <Content style={{
        padding: 24,
        backgroundColor:'#f6b89e',
    }}> 
        <MainPage/> 
      </Content>
      <FooterComponent/>

</Layout>
</ConfigProvider>
  );
}

export default App;
