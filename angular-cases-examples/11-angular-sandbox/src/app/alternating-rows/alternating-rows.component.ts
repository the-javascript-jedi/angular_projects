import {
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    HostListener,
    AfterViewInit
} from '@angular/core';

@Component({
    selector: 'app-alternating-rows',
    templateUrl: './alternating-rows.component.html',
    styleUrls: ['./alternating-rows.component.scss']
})
export class AlternatingRowsComponent implements OnInit, AfterViewInit {
    @ViewChild('container') container!: ElementRef;

    boxes = Array.from({ length: 20 }, (_, i) => i + 1);
    rows: number[][] = [];

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.arrangeBoxes();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.arrangeBoxes();
    }

    arrangeBoxes(): void {
        this.rows = [];
        const containerWidth = this.container.nativeElement.offsetWidth;
        let currentRow: number[] = [];
        let rowWidth = 0;

        this.boxes.forEach(number => {
            const boxWidth = 300 + 10; // Box width + margin
            rowWidth += boxWidth;

            if (rowWidth > containerWidth) {
                this.rows.push(currentRow);
                currentRow = [];
                rowWidth = boxWidth;
            }

            currentRow.push(number);
        });

        if (currentRow.length > 0) {
            this.rows.push(currentRow);
        }
    }
}
