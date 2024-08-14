export interface UpdateProfileAdminDto {
    userId: number;
    newUsername: string;
    newPassword: string;
    newFname: string;
    newLname: string;
    newEmail: string;
    newImageName: string;
    newGender: string;
    newPhone: number;
  }