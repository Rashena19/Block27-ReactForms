import { useState, useEffect } from 'react'


function SignUpForm({ setToken }) {
    const [formData, setFormData] = useState({ username: "", password: "", error: null });

    useEffect(() => {
    }, [formData]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setFormData(prevData => ({ ...prevData, error: null }));

        try {
            const promise = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await Response.json();
            if (!data.success) throw new Error(data.error);

            setToken(data.token);
        } catch (err) {
            setFormData(prevData => ({ ...prevData, error: err.message }));
        }
    };




    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" value={formData.username} onChange={handleChange} pattern=".{4,}" title="Username must be 4 or more characters" required className="input-field" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" value={formData.password} onChange={handleChange} pattern=".{6,}" title="Password must be 6 or more characters" required className="input-field" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default SignUpForm;