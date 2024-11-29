interface Users {
    _id: string;
    account_number: string; // Required and unique
    password:string;
    full_name: string;
    profile_picture: string;
    email: string;
    phone_number: string;
    occupation: string;
    date_of_birth: string;
    marital_status: string;
    gender: string;
    address: string;
    account_type: string;
    registration_date: string;
    total_balance: number;
    available_balance: number;
    IMF_code: string;
  }