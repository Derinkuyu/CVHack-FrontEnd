export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  title: string;
  seniority: string;
  phone?: string;
}


// Mirrors the backend AuthResultDto
export interface AuthResult {
  token: string;
  expiration: string;
  email: string;
  roles: string[];
}

// Mirrors the backend Result<T> envelope
export interface ApiResult<T> {
  isSuccess: boolean;
  statusCode: number;
  message: string | null;
  data: T | null;
  errors: string[];
}