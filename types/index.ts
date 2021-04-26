export type MenuItem = {
  name: string;
  link: string | null;
  sub?: Array<MenuItem>;
};
