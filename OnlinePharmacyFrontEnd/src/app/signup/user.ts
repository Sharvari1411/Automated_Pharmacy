export class User {
    constructor(
        public doctorid:number=-1, 
        public fname:string='',  
        public mname:string='',
        public lname:string='',
        public gender:string="",
        public fkplaceid:number=1,
        public username:string="", 
        public password:string="",
        public emailid:string="",
        public contactno:string="" ) {}    
}
