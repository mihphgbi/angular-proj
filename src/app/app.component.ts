import {Component} from "@angular/core";
import {NavigationEnd, Router, RouterOutlet} from "@angular/router";
import {NgxSpinnerModule} from "ngx-spinner";
import {filter, map} from "rxjs/operators";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NgxSpinnerModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => router.routerState.snapshot.root.firstChild),
    ).subscribe(activatedRouteSnapshot => {

    })
  }
}
