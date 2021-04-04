import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from 'src/app/admin/product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title:any;
  book:any={};
  books:any=[];
  constructor(
    public dialog:MatDialog
  ) {

   }

  ngOnInit(): void {
    this.title='Product';
    this.book={
      title:'angular pertama',
      author:'afnanda',
      publisher:'ada aja',
      year:2020,
      price:3000000
    };
    this.getBooks();
  }

  getBooks()
  {
    this.books=[
      {
        title:'angular pertama',
        author:'afnanda',
        publisher:'ada aja',
        year:2020,
        price:3000000
      },
      {
        title:'angular kedua',
        author:'afnanda saputra',
        publisher:'ada aja yaaa',
        year:2021,
        price:6000000
      }
    ];
  }


    ProductDetail(data: any,idx: number)
    {
      let dialog= this.dialog.open(ProductDetailComponent, {
          width: '400px',
          data: data,
      });
        dialog.afterClosed().subscribe(result=> {
         if(result)
         {
          if(idx==-1)this.books.push(result);
          else this.books[idx]=result;
         }
        });
      }

      DeleteProduct(idx: any)
      {
        var conf=confirm('Delete item?');
        if(conf)
        this.books.splice(idx,1);
      }
    }