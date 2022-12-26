import { Component, OnDestroy, TemplateRef } from '@angular/core';
import { ToastService } from '../../services/toast.service';


@Component({
    selector: 'app-toasts',
    templateUrl: "./toast-container.component.pug",
    styleUrls: ["./toast-container.component.scss"],
})
export class ToastsContainer implements OnDestroy {
	constructor(public toastService: ToastService) {}

    ngOnDestroy(): void {
        this.toastService.clear();
    }

	isTemplate(toast: any) {
		return toast.textOrTpl instanceof TemplateRef;
	}
}