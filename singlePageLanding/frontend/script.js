document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from submitting traditionally

    const email = document.getElementById('email').value;

    try {
        const response = await fetch('http://localhost:3010/signup', { // Use your backend server's URL and port
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Signup successful!');
        } else if (response.status = 409) {
            alert(data.message || 'Email alread Exists! Please try with different.');
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred. Please try again.');
    }
});
