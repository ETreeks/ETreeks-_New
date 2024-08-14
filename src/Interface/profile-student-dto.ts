export interface ProfileStudentDTO {
    id: number;
    username: string;
    password: string;
    fname: string;
    lname: string;
    email: string;
    phone: number;
    imagename: string;
    gender: string;
    roleId?: number;
    address: Address;
  }
  
  
  export interface Address {
    id: number;
    city: string;
    country: string;
    longitude: number;
    latitude: number;
  }
  