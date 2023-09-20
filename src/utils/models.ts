export interface INews {
  title: string;
  description: string;
  urlToImage: string;
  author: string;
}

export interface INewsList {
  news: INews[];
}

export interface INewsItem {
  news: INews
}