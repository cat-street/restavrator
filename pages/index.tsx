import Hero from 'components/MainPage/Hero/Hero';
import Layout from 'components/Layout/Layout';
import Experience from 'components/MainPage/Experience/Experience';
import MainGallery from 'components/MainPage/MainGallery/MainGallery';
import MainFeatured from 'components/MainPage/MainFeatured/MainFeatured';

function Home(): JSX.Element {
  return (
    <Layout title="НПП Реставрационный центр" transparentHeader>
      <Hero />
      <MainFeatured />
      <Experience />
      <MainGallery />
    </Layout>
  );
}

export default Home;
