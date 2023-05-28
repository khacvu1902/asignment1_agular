import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = [];
  title = 'Quản lý sản phẩm';

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    }, error => console.log(error));
  }
  removeItem(id: any) {
    this.productService.deleteProducts(id).subscribe(() => {
      console.log('Ban da xoa thanh cong')
      this.products = this.products.filter(item => item.id != id)
    })
  }
}
