import { Component, OnInit } from '@angular/core';
import { MatkulService } from '../matkul.service';
import { Matkul } from '../matkul';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-matkul',
  templateUrl: './main-matkul.component.html',
  styleUrls: ['./main-matkul.component.scss']
})
export class MainMatkulComponent implements OnInit {
  datamatkul: Matkul[] = [];

  displayedColumns: string[] = ['namamatkul', 'semester', 'hari', 'dosen', 'tahun'];
  
  constructor(private ms: MatkulService, private router: Router) { }

  ngOnInit(): void {
    this.ms.getMatkul().subscribe(
      response => { 
        console.log(response);
        this.datamatkul = response; 
      },
      err => { 
        console.log(err); 
      }
    )
  }

  userOnClick(id: string) {
    console.log(id);
    this.router.navigate([`/matkul/${id}`]);
  }
}