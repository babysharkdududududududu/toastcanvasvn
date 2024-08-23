import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    }
    return (
        <div>
            <Header />
            <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
                <p style={{ fontWeight: 'bold', color: '#3b84c8', fontSize: '48px', textTransform: 'uppercase' }}>Join Us</p>
                <span style={{ display: 'block', width: '300px', height: '2px', background: 'black', margin: '20px auto' }}></span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <form onClick={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto' }}>
                        <label style={{ marginBottom: '5px', fontWeight: 'bold', textAlign: 'left' }}>아이디(이메일) *</label>
                        <input type="email" placeholder="example@email.com" style={{ marginBottom: '15px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />

                        <label style={{ marginBottom: '5px', fontWeight: 'bold', textAlign: 'left' }}>비밀번호 *</label>
                        <input type="password" placeholder="영문, 숫자, 특수문자를 포함한 8~12자리" style={{ marginBottom: '15px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />

                        <label style={{ marginBottom: '5px', fontWeight: 'bold', textAlign: 'left' }}>비밀번호 확인 *</label>
                        <input type="password" style={{ marginBottom: '15px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />

                        <label style={{ marginBottom: '5px', fontWeight: 'bold', textAlign: 'left' }}>주소</label>
                        <input type="text" style={{ marginBottom: '15px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                        <input type="text" style={{ marginBottom: '15px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />

                        <label style={{ marginBottom: '5px', fontWeight: 'bold', textAlign: 'left' }}>연락처</label>
                        <input type="text" style={{ marginBottom: '15px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />

                        <span style={{ display: 'block', width: '300px', height: '2px', background: 'black', margin: '20px auto' }}></span>

                        <span style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '15px', fontSize: 10 }}> <input type="checkbox" style={{ marginRight: '10px' }} />
                            이용약관 및 개인정보 처리 방침에 동의합니다. (필수)
                        </span>

                        <span style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '15px', fontSize: 10 }}>
                            <input type="checkbox" style={{ marginRight: '10px' }} />
                            광고 및 메일 수신에 동의합니다. (선택)
                        </span>

                        <button type="submit" style={{ padding: '10px', border: 'none', backgroundColor: '#0165bc', color: 'white', cursor: 'pointer', borderRadius: '4px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
                            가입하기
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;
