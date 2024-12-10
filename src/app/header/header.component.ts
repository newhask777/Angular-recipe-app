import { Component, EventEmitter, Output } from "@angular/core";
import { DropdownDirective } from "../shared/dropdown.directive";

@Component({
    selector: 'app-header',
    imports: [ DropdownDirective ],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() feauterSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.feauterSelected.emit(feature);
    }
}