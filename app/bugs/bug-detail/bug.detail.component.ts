import {Component, OnInit} from '@angular/core';
import {Form, FormGroup,FormControl,Validators} from '@angular/forms';
import {forbiddenStringValidator} from '../../shared/validations/forbidden-validation.strings';

@Component({
    moduleId: module.id,
    selector: 'bug-detaill',
    templateUrl: 'bug.detail.component.html',
    styleUrls: ['bug.detail.component.css']
})

export class BugDetailComponent implements OnInit {
    private modalId = "bugModal";
    private bugForm: FormGroup;

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.configureForm();
    }

    configureForm() {
        this.bugForm = new FormGroup({
            title: new FormControl(null,[Validators.required,forbiddenStringValidator(/puppy/i)]),
            status: new FormControl(1,Validators.required),
            severity: new FormControl(1,Validators.required),
            description: new FormControl(null,Validators.required)
        });
    }

    submitForm() {
        console.log(this.bugForm); 
    }
    
};