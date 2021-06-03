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
);

export default YaMaps;
