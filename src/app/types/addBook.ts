export type BookValues = {
  id: number;
  title: string;
  publicationDate: string;
  isbn: number;
  pages: string;
  author: string;
  description: string;
  image: File[],
  file: File[];
  qty: number;
  category: number[];
  selectAll: boolean
};
