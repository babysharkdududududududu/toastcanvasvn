import banner1 from './asset/banner.png'
import './banner1.css'

const Banner1 = () => {
    return (
        <div className="banner1">
            <div style={{ position: 'relative' }}>
                <img src={banner1} alt="banner1" style={{ width: '100%', height: 'auto', marginTop: '-5px' }} className="responsive-img" />
                <div className="banner-content" style={{ position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px', textAlign: 'center' }}>
                    <h1 style={{ textAlign: "left", maxWidth: 500, textTransform: 'uppercase' }}>What happend!</h1>
                    <p style={{ textAlign: "left", maxWidth: 500 }} >How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                        step to your brand's success. How to create
                        mobile-optimized videos in minutes.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Banner1;