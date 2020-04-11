import { MemberEditComponent } from './../members/member-edit/member-edit.component';
import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
canDeactivate(Component: MemberEditComponent) {
    if (Component.editForm.dirty) {
        return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
    }
    return true;
}
}