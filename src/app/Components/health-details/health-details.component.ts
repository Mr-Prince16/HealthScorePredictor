import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   fruit: string;
// }

// /** Constants used to fill up our data base. */
// const FRUITS: string[] = [
//   'blueberry',
//   'lychee',
//   'kiwi',
//   'mango',
//   'peach',
//   'lime',
//   'pomegranate',
//   'pineapple',
// ];
// const NAMES: string[] = [
//   'Maia',
//   'Asher',
//   'Olivia',
//   'Atticus',
//   'Amelia',
//   'Jack',
//   'Charlotte',
//   'Theodore',
//   'Isla',
//   'Oliver',
//   'Isabella',
//   'Jasper',
//   'Cora',
//   'Levi',
//   'Violet',
//   'Arthur',
//   'Mia',
//   'Thomas',
//   'Elizabeth',
// ];
@Component({
  selector: 'app-health-details',
  templateUrl: './health-details.component.html',
  styleUrls: ['./health-details.component.css']
})
export class HealthDetailsComponent implements AfterViewInit {
  displayedColumns: string[] = ['param', 'value', 'range', 'report'];
  dataSource: any;
  backendOutput = [{pulse: 130, hbp: 128, lbp:83 , haemoglobin:15.8, hba1c_fbs:1.6 , cholesterol: 240 , creatinine:5 , sgpt:1 , bmi:52.17, obes:"low" , diabetes:"low" , kidney: "low", anaemia: "high", cardiac: "low" }];
  outputRanges!:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render

    this.outputRanges = this.backendOutput.map(item => {
      const haemoglobinRange = {param:'haemoglobin',value: item.haemoglobin, lowRange:13 , highRange:17, range:'13-17'};
      const pulse = {param:'pulse',value: item.pulse, range: '60-100',lowRange:60, highRange:100 };
      const hbpRange = {param:'hbp',value: item.hbp, range: '120-130' , lowRange:120 , highRange:130};
      const lbpRange = {param:'lbp',value: item.lbp, range: '80-89' , lowRange:80 , highRange:89};
      const hba1c_fbs = {param:'hba1c_fbs',value: item.hba1c_fbs, range: '1-6' , lowRange:1 , highRange:6};
      const cholesterol = {param:'cholesterol',value: item.cholesterol, range: '200-240', lowRange:200 , highRange:240};
      const creatinine = {param:'creatinine',value: item.creatinine, range: '200-240', lowRange:200 , highRange:240};

      return [hbpRange, lbpRange , pulse ,haemoglobinRange,hba1c_fbs,cholesterol, creatinine];
    }).flat();
    console.log(this.outputRanges);
    this.dataSource = new MatTableDataSource(this.outputRanges);
    console.log(this.dataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  isEvenRow(row: any): boolean {
    return this.dataSource.data.indexOf(row) % 2 === 0;
  }

}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
  // backendOutput = [{pulse: 130, hbp: 128, lbp:83 , haemoglobin:15.8, hba1c_fbs:1.6 , cholesterol: 240 , creatinine:5 , sgpt:1 , bmi:52.17, obes:"low" , diabetes:"low" , kidney: "low", anaemia: "high", cardiac: "low" }];
  // outputRanges!:any;
  //  ngOnInit(): void {
  //   this.outputRanges = this.backendOutput.map(item => {
  //     const haemoglobinRange = {param:'haemoglobin',value: item.haemoglobin, lowRange:13 , highRange:17, range:'13-17'};
  //     const pulse = {param:'pulse',value: item.pulse, range: '60-100',lowRange:60, highRange:100 };
  //     const hbpRange = {param:'hbp',value: item.hbp, range: '120-130' , lowRange:120 , highRange:130};
  //     const lbpRange = {param:'lbp',value: item.lbp, range: '80-89' , lowRange:80 , highRange:89};
  //     const hba1c_fbs = {param:'hba1c_fbs',value: item.hba1c_fbs, range: '1-6' , lowRange:1 , highRange:6};
  //     const cholesterol = {param:'cholesterol',value: item.cholesterol, range: '200-240', lowRange:200 , highRange:240};
  //     const creatinine = {param:'creatinine',value: item.creatinine, range: '200-240', lowRange:200 , highRange:240};

  //     return [hbpRange, lbpRange , pulse ,haemoglobinRange,hba1c_fbs,cholesterol, creatinine];
  //   }).flat();
    
  //   console.log(this.outputRanges);
  //  }
  



