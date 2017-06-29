import { Component, OnInit, Input } from '@angular/core';
import { Form, FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { BugService } from '../service/bugs.service';
import { forbiddenStringValidator } from '../../shared/validations/forbidden-validation.strings';
import { Bug } from '../model/bug.model';

@Component({
    moduleId: module.id,
    selector: 'bug-detaill',
    templateUrl: 'bug.detail.component.html',
    styleUrls: ['bug.detail.component.css']
})

export class BugDetailComponent implements OnInit {
    private modalId = "bugModal";
    private bugForm: FormGroup;
    @Input() currentBug = new Bug(null, null, 1, 1, null, null, null, null);

    constructor(private formB: FormBuilder, private service: BugService) {

    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.configureForm();
    }

    configureForm(bug?: Bug) {
         if(bug) {
                this.currentBug = bug;
            }
        this.bugForm = this.formB.group({   
            title: [this.currentBug.title, [Validators.required, forbiddenStringValidator(/puppy/i)]],
            status: [this.currentBug.status, Validators.required],
            severity: [this.currentBug.severity, Validators.required],
            description: [this.currentBug.description, Validators.required]
        });
    }

    submitForm() {
        console.log(this.bugForm);
        this.addBug();

    }

    addBug() {
        this.currentBug.title = this.bugForm.value['title'];
        this.currentBug.status = this.bugForm.value['status'];
        this.currentBug.severity = this.bugForm.value['severity'];
        this.currentBug.description = this.bugForm.value['description'];
        this.service.addBug(this.currentBug);
        this.refreshForm();
    }

    refreshForm() {
        this.bugForm.reset({
            status: 1,
            severity: 1
        });
        this.cleanBug();
    }

    cleanBug() {
        this.currentBug = new Bug(null,null,1,1,null,null);
    }

};