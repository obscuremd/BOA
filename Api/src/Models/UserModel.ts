import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    account_number: { type: String, required: true, unique: true },
    full_name: { type: String, default:'' },
    password: { type: String, default:'' },
    profile_picture: {type: String, default:''},
    email: { type: String, default:''},
    phone_number: { type: String, default:'' },
    occupation: { type: String, default:'' },
    date_of_birth: { type: String }, // Use `Date` for dates
    marital_status: { type: String, default:'' },
    gender: { type: String, default:'' },
    address: { type: String, default:'' },
    account_type: { type: String, default:'' },
    registration_date: { type: String, default:'' }, // Automatically set the current date
    total_balance: { type: Number, default: 0 }, // Use `Number` for balances
    available_balance: { type: Number, default: 0 }, // Use `Number` for balances
    IMF_code: { type: String, default:'' },
  },
  { timestamps: true } // Adds `createdAt` and `updatedAt` automatically
);

// Prevent re-compilation of the model in hot-reload environments
const User = models.UserData || mongoose.model("UserData", userSchema);

export default User;
