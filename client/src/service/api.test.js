import { API } from './api.js';  // Import the API methods

const testApi = async () => {
    try {
        // Test userLogin API (for example)
        const response = await API.userLogin({
            username: 'testuser',
            password: 'testpassword'
        });

        // Handle success or failure
        if (response.isSuccess) {
            console.log('Login successful:', response.data);
        } else {
            console.error('Error:', response.msg);
        }
    } catch (error) {
        console.error('API Error:', error);
    }
};

testApi();
