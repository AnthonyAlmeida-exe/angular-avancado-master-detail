import { Component, OnInit, AfterContentChecked } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Category } from "../shared/category.model";
import { CategoryService } from "../shared/category.service";

import { switchMap } from "rxjs/operators";
import { ToastrModule } from "ngx-toastr";

@Component({
  selector: "app-category-form",
  templateUrl: "./category-form.component.html",
  styleUrls: ["./category-form.component.scss"]
})
export class CategoryFormComponent implements OnInit {
  currentAction: string;
  categoryForm: FormGroup;
  pageTitle: string;
  serverError: string[] = null;
  submitingForm: boolean = false;
  // category: Category = new Category();

  constructor(
    private CategoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  ngAfterContentChecked() {}
}
