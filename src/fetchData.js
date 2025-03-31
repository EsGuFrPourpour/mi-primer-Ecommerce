import { products } from "./products";
export const fetchData = (data) => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    },1000);
});