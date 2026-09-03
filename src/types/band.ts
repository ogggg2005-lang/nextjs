export type Member = {
  name: string;
  image: string;
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  members: Member[];
  image: string;
  imagePosition?: string;
  description?: string;
};