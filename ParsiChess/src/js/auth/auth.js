import PocketBase from 'pocketbase';

// Initialize PocketBase
const pb = new PocketBase('https://parsichess.pockethost.io');

export const auth = {
    // Register a new user
    async register(email, password, displayName) {
        try {
            const userData = {
                email,
                password,
                passwordConfirm: password,
                displayName,
                rating: 1200,        // Using default value
                gamesPlayed: 0       // Using default value
            };
            
            return await pb.collection('users').create(userData);
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    },

    // Login user
    async login(email, password) {
        try {
            return await pb.collection('users').authWithPassword(email, password);
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    },

    // Get current user data
    getCurrentUser() {
        return pb.authStore.model;
    },

    // Check if user is authenticated
    isAuthenticated() {
        return pb.authStore.isValid;
    },

    // Logout user
    logout() {
        pb.authStore.clear();
    }
}; 