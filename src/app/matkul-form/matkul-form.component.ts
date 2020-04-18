import { Component, OnInit } from '@angular/core';
import { MatkulService } from '../matkul.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Matkul } from '../matkul';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-matkul-form',
  templateUrl: './matkul-form.component.html',
  styleUrls: ['./matkul-form.component.scss']
})
export class MatkulFormComponent implements OnInit {
  id: string;
  update: boolean = false;
  user: Matkul;
  matkulForm = this.fb.group(
    {
      namamatkul: ["", [Validators.required, Validators.minLength(5)]],
      semester: ["", [Validators.required]],
      hari: ["", [Validators.required]],
      dosen: ["", [Validators.required, Validators.min(150)]],
      tahun: ["", [Validators.required]],
      check: [false, [Validators.requiredTrue]],
    }
  )

  namamatkul = this.matkulForm.get("namamatkul");
  semester = this.matkulForm.get("semester");
  hari = this.matkulForm.get("hari");
  dosen = this.matkulForm.get("dosen");
  tahun = this.matkulForm.get("tahun");
  check = this.matkulForm.get("check");

  constructor(
    private ms: MatkulService, 
    private route: ActivatedRoute, 
    private router: Router,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder ) { }

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }
    
  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      if (param.get('id')){
        this.id = param.get('id');
        this.ms.getDataMatkul(this.id).subscribe(
            response => {
              this.user = response;
              this.update = true;

              this.matkulForm.get("namamatkul").setValue(this.user.namamatkul);
              this.matkulForm.get("semester").setValue(this.user.semester);
              this.matkulForm.get("hari").setValue(this.user.hari);
              this.matkulForm.get("dosen").setValue(this.user.dosen);
              this.matkulForm.get("tahun").setValue(this.user.tahun);
            }, 
            err => {
              console.log(err);
            }
          );
        }
      });
    }

  addMatkul(){
    const param = this.matkulForm.value;
    delete param.check;

    this.ms.addMatkul(this.matkulForm.value).subscribe(
      response => { 
        this.openSnackBar("Mata Kuliah ditambahkan", null);
        console.log(response);
        this.router.navigate(['/main']); 
      },
      err => {
        console.log(err);
      }
    )
  }

  deleteMatkul(){
    if (confirm("Are you sure you want to delete this user?")) {
      this.ms.deleteMatkul(this.id).subscribe(
        response => { 
          console.log(response);
          this.router.navigate(['/main']); 
        },
        err => { 
          console.log(err); 
        }
      );
    }
  }
  
  updateMatkul(){
    this.ms.updateMatkul(this.id, this.matkulForm.value).subscribe(
      response => { 
        console.log(response);
        this.router.navigate(['/main']); 
      },
      err => { 
        console.log(err); 
      }
    );
  }
}
