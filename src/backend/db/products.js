import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
// 3 caterories > fiction, horror, romantic
  // 7 Fiction Books
  {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "Do Epic Shit",
    author: "Shiv Khera",
    price: {
      original: 869,
      discounted: 299,
      discount: 20
    },
    rating:5,
    categoryName: "fiction",
  },
   {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/ikigai.jpg',
    title: "Danielle Steel Spy",
    author: "Robert Brown",
    price: {
      original: 869,
      discounted: 689,
      discount: 20
    },
    rating:4,
    categoryName: "fiction",
  },
   {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/ikigai.jpg',
    title: "Wishpering in Dark",
    author: "Ruskin Bond",
    price: {
      original: 869,
      discounted: 259,
      discount: 20
    },
    rating:3,
    categoryName: "fiction",
  },
   {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "Ikigai",
    author: "Garcia Hector",
    price: {
      original: 869,
      discounted: 500,
      discount: 20
    },
    rating:2,
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "Being The Other",
    author: "Saeed Naqvi",
    price: {
      original: 869,
      discounted: 237,
      discount: 20
    },
    rating:2,
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "Tears of Jhelum",
    author: "Garcia Hector",
    price: {
      original: 869,
      discounted: 125,
      discount: 20
    },
    rating:3.5,
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "Casual Vacancy",
    author: "J K Rowling",
    price: {
      original: 869,
      discounted: 126,
      discount: 20
    },
    rating:4,
    categoryName: "fiction",
  },
  
  // 8 Horror Books
    {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "Poison Apple",
    author: "Junaid Qureshi",
    price: {
      original: 869,
      discounted: 788,
      discount: 20
    },
    rating:5,
    categoryName: "horror",
  },
    {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "The House Of Strange Stories",
    author: "Ruskin Bond",
    price: {
      original: 869,
      discounted: 566,
      discount: 20
    },
    rating:3,
    categoryName: "horror",
  },
    {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "The Girl In Room 105",
    author: "Chetan Bhagat",
    price: {
      original: 869,
      discounted: 128,
      discount: 20
    },
    rating:3,
    categoryName: "horror",
  },
    {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "Ghost Of The Silent Hills",
    author: "Anita Krishnan",
    price: {
      original: 869,
      discounted: 446,
      discount: 20
    },
    rating:3,
    categoryName: "horror",
  },
    {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "Almost Dark",
    author: "Chandradip Paitandi",
    price: {
      original: 869,
      discounted: 556,
      discount: 20
    },
    rating:3,
    categoryName: "horror",
  },
    {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "The Shining",
    author: "Stephen King",
    price: {
      original: 869,
      discounted: 699,
      discount: 20
    },
    rating:3,
    categoryName: "horror",
  },
  {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "The Shining",
    author: "Stephen King",
    price: {
      original: 869,
      discounted: 470,
      discount: 20
    },
    rating:3,
    categoryName: "horror",
  },
  {
    _id: uuid(),
    productImage: process.env.PUBLIC_URL + 'assets/book-images/doepicshit.jpg',
    title: "The Green Room",
    author: "Nag Mani",
    price: {
      original: 869,
      discounted: 666,
      discount: 20
    },
    rating:3,
    categoryName: "horror",
  },

];




/*

  // 6 ROMANTIC BOOKS
  {
    _id: uuid(),
    title: "The Mister",
    author: "EL James",
    price: {
      original: 869,
      discounted: 699,
      discount: 20
    },
    categoryName: "romantic",
  },
  {
    _id: uuid(),
    title: "Better Than Best Friends",
    author: "Ahona Sadhu",
    price: {
      original: 869,
      discounted: 699,
      discount: 20
    },
    categoryName: "romantic",
  },
   {
    _id: uuid(),
    title: "A Tale Of Two Souls",
    author: "Anand Kumar",
    price: {
      original: 869,
      discounted: 699,
      discount: 20
    },
    categoryName: "romantic",
  },
   {
    _id: uuid(),
    title: "Promise Me",
    author: "Keshav Aneel",
    price: {
      original: 869,
      discounted: 699,
      discount: 20
    },
    categoryName: "romantic",
  },
   {
    _id: uuid(),
    title: "Intense Love",
    author: "Manogyna",
    price: {
      original: 869,
      discounted: 699,
      discount: 20
    },
    categoryName: "romantic",
  },
   {
    _id: uuid(),
    title: "Prema Naada Pandita",
    author: "S B Akshobhya",
    price: {
      original: 869,
      discounted: 399,
      discount: 10
    },
    categoryName: "romantic",
  }, 
*/