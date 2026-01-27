// auth.services.ts
// Services for authentication, including OTP handling

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export interface SendOtpRequest {
  email?: string;
  phone?: string;
  type: 'login' | 'reset-password';
}

export interface VerifyOtpRequest {
  code: string;
  email?: string;
  phone?: string;
  type: 'login' | 'reset-password';
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

// Send OTP to email or phone
export async function sendOtp(request: SendOtpRequest): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/send-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send OTP');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Send OTP error:', error);
    return { success: false, message: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Verify OTP code
export async function verifyOtp(request: VerifyOtpRequest): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to verify OTP');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Verify OTP error:', error);
    return { success: false, message: error instanceof Error ? error.message : 'Unknown error' };
  }
}