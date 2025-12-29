import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService, Product } from '../../services/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  product: Product | undefined;
  currentImageIndex: number = 0;
  relatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Get product ID from URL
    this.route.params.subscribe(params => {
      const id = +params['id']; // + converts string to number
      this.product = this.productService.getProductById(id);
      
      // Get related products (same category, excluding current product)
      if (this.product) {
        const allInCategory = this.productService.getProductsByCategory(this.product.category);
        this.relatedProducts = allInCategory.filter(p => p.id !== this.product!.id).slice(0, 3);
      }
    });
  }

  // Change main display image
  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  // Navigate to previous image
  previousImage(): void {
    if (this.product) {
      this.currentImageIndex = 
        this.currentImageIndex === 0 
          ? this.product.images.length - 1 
          : this.currentImageIndex - 1;
    }
  }

  // Navigate to next image
  nextImage(): void {
    if (this.product) {
      this.currentImageIndex = 
        this.currentImageIndex === this.product.images.length - 1 
          ? 0 
          : this.currentImageIndex + 1;
    }
  }
}