const Product = require('./model/product')

class FakeDb {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        text1: 'onec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
        text2: 'onec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
        text3: 'onec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
      },
      {
        coverImage: './assets/img/pen-and-phone.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        text1: 'サンプルテキスト1',
        text2: 'サンプルテキスト2',
        text3: 'サンプルテキスト3'
      },
      {
        coverImage: './assets/img/laptop.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        text1: 'サンプルテキスト1',
        text2: 'サンプルテキスト2',
        text3: 'サンプルテキスト3'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone 12 Pro Max',
        price: 2500,
        description: '',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        text1: 'サンプルテキスト1',
        text2: 'サンプルテキスト2',
        text3: 'サンプルテキスト3'
      }
    ]
  }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDb() {
    this.pushProductsToDb()
  }
}

module.exports = FakeDb