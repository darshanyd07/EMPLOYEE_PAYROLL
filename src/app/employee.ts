
export class Employee 
{
   firstName:string = "";
   profilePic:string = "";
   gender:string = "";
   salary:number = 0;
   department:Array<any> = [];
   startDate:Date;
   notes:string = "";

   constructor(firstName:string, startDate:Date, profilePic:string,gender:string, department:Array<any>,notes:string, salary:number)
   {
       this.firstName = firstName;
       this.startDate = startDate;
       this.department = department;
       this.profilePic = profilePic;
       this.notes = notes;
       this.salary =salary;
       this.gender = gender;
   }
}