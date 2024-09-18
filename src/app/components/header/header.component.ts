import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.activatedRoute.root;
        this.title = this.getTitle(currentRoute);
      });
  }

  // Función recursiva para obtener el título de la ruta activa
  getTitle(route: ActivatedRoute): string {
    let childRoute = route.firstChild;
    if (childRoute?.snapshot.data['title']) {
      return childRoute.snapshot.data['title'];
    }
    return childRoute ? this.getTitle(childRoute) : '';
  }
}
