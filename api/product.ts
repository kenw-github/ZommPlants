interface Product{
    id: number,
    name: string,
    price: string,
    desc: string,
}

interface ProductInterface{
    getProduct(): Product[]
}

class ProductClass implements ProductInterface{
    getProduct(): Product[] {
        let result = [] as Product[];
        return result
    }
}