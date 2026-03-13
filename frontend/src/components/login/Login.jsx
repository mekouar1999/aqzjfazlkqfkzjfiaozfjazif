import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5001/api/v1/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log(data);
            if (data.success) {
                navigate("/home");
            }
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className="login-container">
            {/* Ambient Background Blobs */}
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>
            <div className="bg-blob blob-3"></div>

            <div className="login-card">
                <div className="login-header">
                    <h1>Bienvenue</h1>
                    <p>Connectez-vous à votre espace membre</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-wrapper">
                            <input
                                type="email"
                                id="email"
                                placeholder="nom@exemple.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <div className="input-wrapper">
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="login-button">
                        Se connecter
                    </button>
                </form>

                <div className="social-login">
                    <div className="divider">ou continuer avec</div>
                    <div className="social-buttons">
                        <button className="social-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.02 1.024-2.6 2.148-5.912 2.148-5.404 0-9.56-4.352-9.56-9.756s4.156-9.756 9.56-9.756c3.152 0 5.488 1.252 7.18 2.876l2.304-2.304c-1.944-1.812-4.472-3.172-9.484-3.172-8.52 0-15.52 6.948-15.52 15.468s7 15.468 15.52 15.468c4.58 0 8.056-1.512 10.704-4.28 2.748-2.748 3.612-6.648 3.612-9.972 0-.96-.08-1.872-.224-2.724h-14.12z" />
                            </svg>
                            Google
                        </button>
                        <button className="social-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                            GitHub
                        </button>
                    </div>
                </div>

                <div className="form-footer">
                    Pas encore de compte ? <a href="/signup">S'inscrire</a>
                </div>
            </div>
        </div>
    );
};

export default Login;