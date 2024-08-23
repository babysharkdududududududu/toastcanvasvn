import banner2 from './asset/banner2.png'
import obj1 from './asset/obj1.png';
import obj2 from './asset/obj2.png';
const Banner5 = () => {
    return (
        <div style={{ position: 'relative' }}>
            <img src={banner2} alt="banner2" style={{ width: '100%', height: 'auto', marginTop: '-5px' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <h2 style={{ textTransform: 'uppercase', color: '#000', fontSize: 50 }}>Happened’s issue</h2>
                <p style={{ maxWidth: 760, fontSize: 17, color: '#000', textAlign: 'center', marginTop: -30 }}>
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </p>
                <div style={{ justifyContent: 'center', display: 'flex', marginTop: 50 }} >
                    <div style={{ justifyContent: 'center', display: 'flex', width: 150, height: 40, borderWidth: 3, borderColor: "#000", borderStyle: 'groove', alignItems: 'center' }}>
                        <p style={{ textTransform: 'uppercase', fontWeight: 'bold', margin: 0, color: 'black' }}>See more</p>
                    </div>
                </div>
                <div style={{ position: 'absolute', right: -300, top: 0 }} >
                    <img src={obj1} alt="note1" style={{ width: 80, height: 80, position: 'absolute', top: -100 }} />
                    <img src={obj2} alt="note1" style={{ width: 80, height: 80 }} />
                </div>
            </div>
        </div>
    )
}
export default Banner5;