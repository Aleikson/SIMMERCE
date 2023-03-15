const images = require.context('../assets', true, /\.jpg$/);

export const Products = [
    {
        id: 1,
        productName: "PlusCake",
        price: 24.0,
        productImage: images('./product1.jpg'),
    },
    {
        id: 2,
        productName: "Crave Clean",
        price: 18.0,
        productImage: images('./product2.jpg'),
    },
    {
        id: 3,
        productName: "Fusion Dots",
        price: 27.0,
        productImage: images('./product3.jpg'),
    },
    {
        id: 4,
        productName: "BeautiCake",
        price: 35.0,
        productImage: images('./product4.jpg'),
    },
    {
        id: 5,
        productName: "Sweet Smiles",
        price: 30.0,
        productImage: images('./product5.jpg'),
    },
    {
        id: 6,
        productName: "Grandma’s Specials",
        price: 42.0,
        productImage: images('./product6.jpg'),
    }
];



