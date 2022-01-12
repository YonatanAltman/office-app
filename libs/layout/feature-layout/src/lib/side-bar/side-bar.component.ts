import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISideBarFeature, MOCK_SIDE_BAR_FEATURE } from './side-bar.interface';

@Component({
  selector: 'layout-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent implements OnInit {
  features$: Observable<ISideBarFeature[]> = of([]);
  constructor(private changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.features$ = of(MOCK_SIDE_BAR_FEATURE)
    this.changeDetectorRef.detectChanges();
  }

}
