export class Doctor {
    fullname: string;
    contactno: string;
    placename: string;
    speciality: string;
    qualification: string;
    experience: string;
  
    constructor(fullname: string, contactno: string, placename: string, speciality: string, qualification: string, experience: string) {
      this.fullname = fullname;
      this.contactno = contactno;
      this.placename = placename;
      this.speciality = speciality;
      this.qualification = qualification;
      this.experience = experience;
    }
}
