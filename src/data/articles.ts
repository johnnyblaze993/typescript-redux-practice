export type Article = {
  city: string;
  image: string;
  title: string;
  date: string;
  readingTime: number;
  summary: string;
};

const data: Article[] = [
  {
    city: "New York",
    image:
      "https://images.unsplash.com/photo-1548182880-8b7b2af2caa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3eW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    title: "The History of Pizza in New York City",
    date: "2020-07-23",
    readingTime: 10,
    summary:
      "Pizza has been a beloved food in New York City for decades. This article delves into the history of how pizza became so popular in the city.",
  },
  {
    city: "Paris",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "Exploring the Best Pastry Shops in Paris",
    date: "2021-03-14",
    readingTime: 15,
    summary:
      "Paris is known for its delicious pastries. This article rounds up some of the best pastry shops in the city, including popular spots like Ladurée and Pierre Hermé.",
  },
  {
    city: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "A Guide to Tokyo's Best Ramen Restaurants",
    date: "2022-01-01",
    readingTime: 20,
    summary:
      "Ramen is a popular dish in Tokyo and there are many great restaurants to try it at. This article recommends some of the best places to get ramen in the city.",
  },
  {
    city: "London",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "The Best Afternoon Tea Spots in London",
    date: "2022-06-15",
    readingTime: 15,
    summary:
      "Afternoon tea is a beloved tradition in London. This article recommends some of the best spots in the city to enjoy this classic experience.",
  },
  {
    city: "Sydney",
    image:
      "https://images.unsplash.com/photo-1549180030-48bf079fb38a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3lkbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "The Best Beaches in Sydney",
    date: "2021-09-01",
    readingTime: 10,
    summary:
      "Sydney is home to some of the most beautiful beaches in the world. This article recommends the best beaches to visit in the city, including Bondi Beach and Manly Beach.",
  },
  {
    city: "Rome",
    image:
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    title: "A Foodie's Guide to Rome",
    date: "2020-12-01",
    readingTime: 20,
    summary:
      "Rome is a food lover's paradise. This article recommends some of the best restaurants and dishes to try when visiting the city.",
  },
  {
    city: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "Exploring the Street Food Scene in Mumbai",
    date: "2022-02-14",
    readingTime: 15,
    summary:
      "Mumbai is known for its vibrant street food scene. This article recommends some of the best places to try street food in the city, including popular dishes like chaat and vada pav.",
  },
];

export default data;