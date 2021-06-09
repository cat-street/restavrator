import Featured from 'components/Featured/Featured';

import featuredData from 'data/featured.json';

const MainFeatured = (): JSX.Element => <Featured data={featuredData.items} />;

export default MainFeatured;
