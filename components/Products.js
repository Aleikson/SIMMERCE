const images = require.context('../assets', true, /\.jpg$/);

export const Products = [
    {
        id: 1,
        productName: "PlusCake",
        price: 4.5,
        productImage: images('./product1.jpg'),
    },
    {
        id: 2,
        productName: "Crave Clean",
        price: 3.5,
        productImage: images('./product2.jpg'),
    },
    {
        id: 3,
        productName: "Fusion Dots",
        price: 5.0,
        productImage: images('./product3.jpg'),
    },
    {
        id: 4,
        productName: "BeautiCake",
        price: 6.0,
        productImage: images('./product4.jpg'),
    },
    {
        id: 5,
        productName: "Sweet Smiles",
        price: 5.0,
        productImage: images('./product5.jpg'),
    },
    {
        id: 6,
        productName: "Grandma’s Specials",
        price: 7.0,
        productImage: images('./product6.jpg'),
    },
    {
        id: 7,
        productName: "Lemon Muffin",
        price: 3.5,
        productImage: images('./product7.jpg'),
    },
    {
        id: 8,
        productName: "Creamy Lemon",
        price: 3.5,
        productImage: images('./product8.jpg'),
    },
    {
        id: 9,
        productName: "TropicalCake",
        price: 5.5,
        productImage: images('./product9.jpg'),
    },
    {
        id: 10,
        productName: "The Love Snack",
        price: 2.5,
        productImage: images('./product10.jpg'),
    },
    {
        id: 11,
        productName: "Choco Haven",
        price: 5.0,
        productImage: images('./product11.jpg'),
    },
    {
        id: 12,
        productName: "The Butterfly",
        price: 4.5,
        productImage: images('./product12.jpg'),
    },
    {
        id: 13,
        productName: "Moonlight Desserts",
        price: 5.5,
        productImage: images('./product13.jpg'),
    },
    {
        id: 14,
        productName: "Many Hearts",
        price: 4.0,
        productImage: images('./product14.jpg'),
    },
    {
        id: 15,
        productName: "Delicious Rainbow",
        price: 4.5,
        productImage: images('./product15.jpg'),
    },
    {
        id: 16,
        productName: "Delicious Wonder",
        price: 5.0,
        productImage: images('./product16.jpg'),
    },
    {
        id: 17,
        productName: "Velvety Soft",
        price: 3.5,
        productImage: images('./product17.jpg'),
    },
    {
        id: 18,
        productName: "Pinpin Cake",
        price: 3.0,
        productImage: images('./product18.jpg'),
    }
];


