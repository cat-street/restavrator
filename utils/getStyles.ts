type Styles = {
  elementStyles: Array<string> | string;
  styles: { readonly [key: string]: string };
};

function getStyles({ elementStyles, styles }: Styles): string {
  if (typeof elementStyles === 'string') return styles[elementStyles];
  return elementStyles.map((el: string) => styles[el]).join(' ');
}

export default getStyles;
