import fb from './asset/fb.png';
import ins from './asset/ins.avif';
const Footer = () => {
    return (
        <div style={{ background: '#f1f1f1' }}>
            <div style={{ textAlign: 'center', marginLeft: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <div style={{ flex: 1 }}>
                    <h3 style={{ color: '#0565bb', textAlign: 'left', fontSize: '24px', marginBottom: '10px' }}>What Happened</h3>
                    <p style={{ fontSize: '14px', maxWidth: 260, textAlign: 'left', lineHeight: '1.6' }}>
                        [공지] 개인 정보 처리 방침 변경 사전 안내<br />
                        [공지] 29CM 강남 스토어 영업 종료<br />
                        [공지] 개인 정보 처리 방침 변경 사전 안내<br />
                        [공지] iOS 10 이하 버전 지원 중단 안내<br />
                        [공지] 개인 정보 처리 방침 변경 사전 안내
                    </p>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', padding: '20px 20px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '40px' }}>
                        <li>
                            <a href="#" style={{ textDecoration: 'none', color: '#0565bb', fontWeight: 'bold' }}>About Us</a>
                            <ul style={{ listStyleType: 'none', paddingLeft: '15px', textAlign: 'left' }}>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>회사 소개</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>인재 채용</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>상시 할인 혜택</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" style={{ textDecoration: 'none', color: '#0565bb', fontWeight: 'bold' }}>My Order</a>
                            <ul style={{ listStyleType: 'none', paddingLeft: '15px', textAlign: 'left' }}>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>내 주문</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>주문 배송</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>취소 / 교환 / 반품 내역</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>상품 리뷰 내역</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>증빙 서류 발급</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" style={{ textDecoration: 'none', color: '#0565bb', fontWeight: 'bold' }}>My Account</a>
                            <ul style={{ listStyleType: 'none', paddingLeft: '15px', textAlign: 'left' }}>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>회원 정보 수정</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>회원 등급</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>쿠폰</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" style={{ textDecoration: 'none', color: '#0565bb', fontWeight: 'bold' }}>Contact Us</a>
                            <ul style={{ listStyleType: 'none', paddingLeft: '15px', textAlign: 'left' }}>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>1 : 1 상담 내역</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>상품 Q & A 내역</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>공지 사항</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>자주하는 질문고객의 소리</a></li>
                                <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>고객의 소리</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px 0', borderTop: '1px solid #ccc', marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>© 2024 What Happened. All rights reserved.</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto' }}>
                    <a href="#" style={{ margin: '0 10px' }}>
                        <img src={fb} alt="Facebook" style={{ width: '24px', height: '24px' }} />
                    </a>
                    <a href="#" style={{ margin: '0 10px' }}>
                        <img src={ins} alt="Instagram" style={{ width: '24px', height: '24px' }} />
                    </a>
                    <a href="#" style={{ margin: '0 10px' }}>
                        <img src={fb} alt="Zalo" style={{ width: '24px', height: '24px' }} />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Footer;