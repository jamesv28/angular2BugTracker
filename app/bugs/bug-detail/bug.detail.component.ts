import {Component, OnInit} from '@angular/core';
import {Form, FormGroup,FormControl} from '@angular/forms';

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
            title: new FormControl(),
            status: new FormControl(1),
            severity: new FormControl(1),
            description: new FormControl()
        });
    }

    submitForm() {
        console.log(this.bugForm); 
    }
    
};