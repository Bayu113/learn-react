import React from 'react';


class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: '',
      checked: false,
      products: [
        {
          name: 'Buku Tulis Tiki',
          price: 50000,
          discount: 0,
          image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/5/12/2203190/2203190_ecaabaec-034c-418b-9024-89d6dd99e464.jpg',
          rating: 3.7,
          seller: 'Toko Serba Ada',
          location: 'Jakarta'
        },
        {
          name: 'Buku Gambar',
          price: 20000,
          discount: 24,
          image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/6/16/34893307/34893307_fc77fa2e-c364-4b4d-aecd-ebd776d5414e_1080_1080.jpg',
          rating: 4.1,
          seller: 'Toko Serba',
          location: 'Bogor'
        },
        {
          name: 'Sepeda Anak',
          price: 2500000,
          discount: 0,
          image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/18/17803673/17803673_2b02e8ac-1704-4f5f-a59e-6c7be95df811_457_457.jpg',
          rating: 0,
          seller: 'Toko Sepeda Kita',
          location: 'Bandung'
        },
        {
          name: 'Sepeda Anak',
          price: 2500000,
          discount: 0,
          image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/18/17803673/17803673_2b02e8ac-1704-4f5f-a59e-6c7be95df811_457_457.jpg',
          rating: 0,
          seller: 'Toko Sepeda Kita',
          location: 'Bandung'
        },
        {
          name: 'Sepeda Anak',
          price: 2500000,
          discount: 0,
          image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/18/17803673/17803673_2b02e8ac-1704-4f5f-a59e-6c7be95df811_457_457.jpg',
          rating: 3.9,
          seller: 'Toko Sepeda Kita',
          location: 'Bandung'
        },
      ]
    }
  }
  drawStar = (rating) => {
    // change decimal to integer
    const ratingNumber = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < ratingNumber; i++) {
      stars.push(<img width="15" src="https://image.flaticon.com/icons/svg/148/148841.svg" />)
    }
    return stars;
  }
  onKeywordChange = e => {
    this.setState({ keyword: e.target.value })
  }

  render() {
    const { products } = this.state;

    const ratingFilterProducts = products.filter((product) => {
      if (this.state.checked === false) {
        return true
      } else {
        if (product.rating > 0) {
          return true
        } else {
          return false
        }
      }
    })

    const filteredProducts = ratingFilterProducts.filter(products => {
      if (products.name.toLowerCase().startsWith(this.state.keyword.toLowerCase())) {
        return true
      } else {
        return false
      }
    })


    return (
      <div className="container" style={{ paddingTop: 20 }}>

        <div className="row" style={{ marginBottom: 20 }}>
          <div className="input-group col-md-6">
            <input type="text" class="form-control"
              placeholder="Search here"
              value={this.state.keyword}
              onChange={this.onKeywordChange}
            />
          </div>
          <div className="input-group col-md-12">
            <div className="checkbox">
              <label><input type="checkbox" checked={this.state.checked} onChange={(e) => { this.setState({ checked: e.target.checked }) }} />
                show ratings</label>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginBottom: 20 }}>
          {filteredProducts.map(products => {
            return (
              <div className="col-md-4 col-xs-12">
                <div className="card" style={{ marginBottom: 10 }}>
                  <img src={products.image} class="card-img-top" alt="product" />
                  <div className="card-body">
                    <h5 className="card-title">{products.name}</h5>
                    <p className="card-text" style={{ marginBottom: '-5px' }}>
                      <span>Rp {products.price - products.discount / 100 * products.price}</span>
                      {products.discount > 0 && <del style={{ color: 'red', fontSize: '14px', marginLeft: '5px' }}>Rp {products.price}</del>}
                    </p>
                    <div style={{ height: '20px', marginBottom: '10px' }}>
                      {products.rating > 0
                        ?
                        this.drawStar(products.rating)
                        :
                        <i style={{ fontSize: '12px' }}>Belum ada rating</i>
                      }
                    </div>
                    <b className="card-text">{products.seller}</b>
                    <div className="card-text">{products.location}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ProductList;