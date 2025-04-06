import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password };

        axios.post('http://localhost:4003/api/login', user)
            .then(res => {
                const { upi_id, message, balance } = res.data;

                console.log(">>>>>.", upi_id);
                localStorage.setItem('user', JSON.stringify({ email, upi_id, balance }));

                alert(message);
                navigate('/transaction');
                window.location.reload();
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in');
            });
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <Link to="/register">Donot have an account? Register here</Link>
        </div>
    );
};

export default Login;