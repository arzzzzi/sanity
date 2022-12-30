export interface Post {
  title: string;
  _id: string;
  _createdAt: string;
  author: {
    name: string;
    image: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}
