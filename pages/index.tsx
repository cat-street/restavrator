import Hero from 'components/MainPage/Hero/Hero';
import Layout from 'components/Layout/Layout';
import Featured from 'components/MainPage/Featured/Featured';
import Experience from 'components/MainPage/Experience/Experience';
import MainGallery from 'components/MainPage/MainGallery/MainGallery';

function Home(): JSX.Element {
  return (
    <Layout title="НПП Реставрационный центр" transparentHeader>
      <Hero />
      <Featured />
      <Experience />
      <MainGallery />
    </Layout>
  );
}

export default Home;
