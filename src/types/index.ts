// User types
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "customer";
  created_at?: Date;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "customer";
}

// Vehicle types
export interface Vehicle {
  id: number;
  vehicle_name: string;
  type: "car" | "bike" | "van" | "SUV";
  registration_number: string;
  daily_rent_price: number;
  availability_status: "available" | "booked";
  created_at?: Date;
}

// Booking types
export interface Booking {
  id: number;
  customer_id: number;
  vehicle_id: number;
  rent_start_date: string;
  rent_end_date: string;
  total_price: number;
  status: "active" | "cancelled" | "returned";
  created_at?: Date;
}

// JWT Payload
export interface JWTPayload {
  id: number;
  email: string;
  role: "admin" | "customer";
}

// Express Request extension
declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}
