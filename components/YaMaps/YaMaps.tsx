type Props = {
  width: string;
  height: string;
};

const YaMaps = ({ width, height }: Props): JSX.Element => (
  <iframe
    title="Yandex Maps"
    src="https://yandex.ru/map-widget/v1/?um=constructor%3AhzHt4u-0nsSHnXVJCBAhUNTSlATc4nFl&amp;source=constructor"
    width={width}
    height={height}
    frameBorder="0"
  />
  // <script
  //   type="text/javascript"
  //   charSet="utf-8"
  //   async
  //   src={`https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3AhzHt4u-0nsSHnXVJCBAhUNTSlATc4nFl&amp;width=${width}&amp;height=${height}&amp;lang=ru_RU&amp;scroll=true`}
  // />
);

export default YaMaps;
