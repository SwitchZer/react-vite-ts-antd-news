export type TTopHeadline = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: {
    id: string | null;
    name: string;
  };
};

export type TResponseHandler =
  | "content-type"
  | "json"
  | "text"
  | ((response: Response) => Promise<any>);
