import { Component, OnInit } from "@angular/core";
import { Category } from "../shared/category.model";
import { CategoryService } from "../shared/category.service";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"]
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private CategoryService: CategoryService) {}

  ngOnInit() {
    this.CategoryService.getAll().subscribe(
      categories => (this.categories = categories),
      error => alert("Erro ao carregar lista")
    );
  }
  deleteCategory(category) {
    const mustDelete = confirm("Deseja realmente excluir essa categoria?");
    if (mustDelete) {
      this.CategoryService.delete(category.id).subscribe(
        () =>
          (this.categories = this.categories.filter(
            element => element != category
          )),
        () => alert("erro ao tentar excluir")
      );
    }
  }
}
