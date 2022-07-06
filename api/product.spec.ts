import { ProductMock } from './product_test'

test('just asserting imports work fine in Jest env', () => {
    let product = new ProductMock()
    let result = product.getProduct();
    expect(result).toHaveReturned();
})