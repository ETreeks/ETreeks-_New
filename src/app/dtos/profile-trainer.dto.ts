// src/app/dtos/profile-trainer.dto.ts

export interface AddressDto2 {
    addressId: number;
    longitude: number;
    latitude: number;
    city: string;
    country: string;
  }
  
  export interface ProfileTrainerDTO {
    id: number;
    username: string;
    password: string;
    fname: string;
    lname: string;
    email: string;
    imagename: string;
    specialization: string;
    gender: string;
    phone: number;
    bio_Trainer: string;
    address: AddressDto2;
  }
  