import './App.css';
import Header from './layout/Header';
import PageLayout from './layout/PageLayout';
import Footer from './layout/Footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen font-montserrat'>
      <Header className='bg-white absolute top-0 left-0 w-full z-50' />
      <PageLayout className=' ' />
      <Footer className='flex flex-col items-center  text-white' />
      {/*        from-bluemarine from-2% to-bluegeo to-60
       */}{' '}
    </div>
  );
}

export default App;
