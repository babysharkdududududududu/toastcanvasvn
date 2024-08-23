import React, { useState } from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import f from './asset/f.png';
import g from './asset/g.png';
import n from './asset/n.png';
import c from './asset/c.png';
import { useNavigate } from 'react-router-dom'; // Sửa chỗ import

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/');
    };
    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <div>
            <Header />
            <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: 50 }}>
                <p style={{ fontWeight: 'bold', color: '#3b84c8', fontSize: '48px' }}>Welcome!</p>
                <span style={{ display: 'block', width: '300px', height: '2px', background: 'black', margin: '20px auto' }}></span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto' }}>
                        <input
                            type="text"
                            placeholder="로그인하기"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ marginBottom: '15px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                        />
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ marginBottom: '15px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                        />
                        <button
                            type="submit"
                            style={{ padding: '10px', border: 'none', backgroundColor: '#0165bc', color: 'white', cursor: 'pointer', borderRadius: '4px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}
                        >
                            로그인하기
                        </button>
                    </form>
                    <p style={{ margin: '20px 0', fontSize: '16px', color: '#555' }}>SNS 계정으로 로그인</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
                        <img src={f} alt="f" style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
                        <img src={g} alt="g" style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
                        <img src={n} alt="n" style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
                        <img src={c} alt="c" style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
                    </div>
                    <button
                        style={{ padding: '10px', background: '#ffffff', color: 'black', cursor: 'pointer', width: '300px', marginBottom: '20px' }}
                        onClick={handleRegister}
                    >
                        계정이 없으신가요? 간편가입하기
                    </button>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px', marginTop: '20px', fontSize: '14px', color: '#555' }}>
                        <p style={{ margin: '5px 0', cursor: 'pointer', color: '#0165bc' }}>아이디(이메일)찾기</p>
                        <p style={{ margin: '5px 0', cursor: 'pointer', color: '#0165bc' }}>비밀번호 찾기</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
