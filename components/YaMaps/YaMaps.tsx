import { FC } from 'react';

type Props = {
  width: string;
  height: string;
};

const YaMaps: FC<Props> = ({ width, height }: Props) => (
  <script
    type="text/javascript"
    charSet="utf-8"
    async
    src={`https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3AhzHt4u-0nsSHnXVJCBAhUNTSlATc4nFl&amp;width=${width}&amp;height=${height}&amp;lang=ru_RU&amp;scroll=true`}
  />
);

export default YaMaps;
