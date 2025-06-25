// Placeholder user data for development
const MOCK_USERS = [
  {
    id: 1,
    email: "admin@example.com",
    password: "admin123", // In real app, this would be hashed
    name: "Admin User",
    role: "admin",
    avatar: null,
    createdAt: "2024-01-01T00:00:00Z",
    lastLogin: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    email: "user@example.com",
    password: "user123",
    name: "Regular User",
    role: "user",
    avatar: null,
    createdAt: "2024-01-05T00:00:00Z",
    lastLogin: "2024-01-14T15:45:00Z",
  },
];

// Simulate localStorage for session management
const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  USER_DATA: "user_data",
  REFRESH_TOKEN: "refresh_token",
};

class AuthRepository {
  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
    this.isAuthenticated = this.checkAuthStatus();
  }

  // Check if user is currently authenticated
  checkAuthStatus() {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    return !!token;
  }

  // Get current user data
  getCurrentUser() {
    const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return userData ? JSON.parse(userData) : null;
  }

  // Get auth token
  getAuthToken() {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  }

  // Simulate API delay
  async simulateApiCall(data, delay = 1000) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  }

  // Login user
  async login(email, password) {
    try {
      // Simulate API validation
      const user = MOCK_USERS.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        throw new Error("Invalid email or password");
      }

      // Generate mock tokens
      const authToken = `mock_jwt_token_${user.id}_${Date.now()}`;
      const refreshToken = `mock_refresh_token_${user.id}_${Date.now()}`;

      // Store in localStorage
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, authToken);
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
      localStorage.setItem(
        STORAGE_KEYS.USER_DATA,
        JSON.stringify({
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          avatar: user.avatar,
        })
      );

      this.isAuthenticated = true;

      return await this.simulateApiCall({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          avatar: user.avatar,
        },
        tokens: {
          accessToken: authToken,
          refreshToken: refreshToken,
        },
      });
    } catch (error) {
      throw new Error(error.message || "Login failed");
    }
  }

  // Register new user
  async signup(userData) {
    try {
      const { email, password, name } = userData;

      // Validate required fields
      if (!email || !password || !name) {
        throw new Error("All fields are required");
      }

      // Check if user already exists
      const existingUser = MOCK_USERS.find((u) => u.email === email);
      if (existingUser) {
        throw new Error("User with this email already exists");
      }

      // Create new user
      const newUser = {
        id: MOCK_USERS.length + 1,
        email,
        password, // In real app, this would be hashed
        name,
        role: "user",
        avatar: null,
        createdAt: new Date().toISOString(),
        lastLogin: null,
      };

      // Add to mock database
      MOCK_USERS.push(newUser);

      return await this.simulateApiCall({
        success: true,
        message: "User registered successfully",
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
        },
      });
    } catch (error) {
      throw new Error(error.message || "Registration failed");
    }
  }

  // Logout user
  async logout() {
    try {
      // Clear localStorage
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER_DATA);
      localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);

      this.isAuthenticated = false;

      return await this.simulateApiCall({
        success: true,
        message: "Logged out successfully",
      });
    } catch {
      throw new Error("Logout failed");
    }
  }

  // Refresh token
  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

      if (!refreshToken) {
        throw new Error("No refresh token available");
      }

      // Simulate token refresh
      const newAuthToken = `mock_jwt_token_refreshed_${Date.now()}`;
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, newAuthToken);

      return await this.simulateApiCall({
        success: true,
        accessToken: newAuthToken,
      });
    } catch {
      throw new Error("Token refresh failed");
    }
  }

  // Request password reset
  async requestPasswordReset(email) {
    try {
      const user = MOCK_USERS.find((u) => u.email === email);

      if (!user) {
        throw new Error("User not found");
      }

      // In real app, this would send an email
      return await this.simulateApiCall({
        success: true,
        message: "Password reset email sent successfully",
      });
    } catch (error) {
      throw new Error(error.message || "Password reset request failed");
    }
  }

  // Reset password
  async resetPassword(token, newPassword) {
    try {
      // In real app, this would validate the reset token
      if (!token || !newPassword) {
        throw new Error("Invalid token or password");
      }

      return await this.simulateApiCall({
        success: true,
        message: "Password reset successfully",
      });
    } catch {
      throw new Error("Password reset failed");
    }
  }

  // Update user profile
  async updateProfile(userData) {
    try {
      const currentUser = this.getCurrentUser();

      if (!currentUser) {
        throw new Error("User not authenticated");
      }

      // Update mock user data
      const userIndex = MOCK_USERS.findIndex((u) => u.id === currentUser.id);
      if (userIndex !== -1) {
        MOCK_USERS[userIndex] = {
          ...MOCK_USERS[userIndex],
          ...userData,
        };
      }

      // Update localStorage
      const updatedUser = {
        ...currentUser,
        ...userData,
      };
      localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(updatedUser));

      return await this.simulateApiCall({
        success: true,
        message: "Profile updated successfully",
        user: updatedUser,
      });
    } catch {
      throw new Error("Profile update failed");
    }
  }

  // Change password
  async changePassword(currentPassword, newPassword) {
    try {
      const currentUser = this.getCurrentUser();

      if (!currentUser) {
        throw new Error("User not authenticated");
      }

      // Verify current password
      const user = MOCK_USERS.find((u) => u.id === currentUser.id);
      if (!user || user.password !== currentPassword) {
        throw new Error("Current password is incorrect");
      }

      // Update password in mock data
      user.password = newPassword;

      return await this.simulateApiCall({
        success: true,
        message: "Password changed successfully",
      });
    } catch (error) {
      throw new Error(error.message || "Password change failed");
    }
  }

  // Verify email
  async verifyEmail(token) {
    try {
      // In real app, this would validate the verification token
      if (!token) {
        throw new Error("Invalid verification token");
      }

      return await this.simulateApiCall({
        success: true,
        message: "Email verified successfully",
      });
    } catch {
      throw new Error("Email verification failed");
    }
  }

  // Get user statistics (for admin dashboard)
  async getUserStats() {
    try {
      if (!this.isAuthenticated) {
        throw new Error("User not authenticated");
      }

      const currentUser = this.getCurrentUser();
      if (currentUser.role !== "admin") {
        throw new Error("Access denied");
      }

      return await this.simulateApiCall({
        success: true,
        stats: {
          totalUsers: MOCK_USERS.length,
          activeUsers: MOCK_USERS.filter((u) => u.lastLogin).length,
          newUsersThisMonth: MOCK_USERS.filter((u) => {
            const createdAt = new Date(u.createdAt);
            const now = new Date();
            return (
              createdAt.getMonth() === now.getMonth() &&
              createdAt.getFullYear() === now.getFullYear()
            );
          }).length,
        },
      });
    } catch {
      throw new Error("Failed to fetch user statistics");
    }
  }

  // Get all users (admin only)
  async getAllUsers() {
    try {
      if (!this.isAuthenticated) {
        throw new Error("User not authenticated");
      }

      const currentUser = this.getCurrentUser();
      if (currentUser.role !== "admin") {
        throw new Error("Access denied");
      }

      const users = MOCK_USERS.map((user) => ({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
      }));

      return await this.simulateApiCall({
        success: true,
        users,
      });
    } catch {
      throw new Error("Failed to fetch users");
    }
  }
}

// Create and export a singleton instance
const authRepository = new AuthRepository();
export default authRepository;
