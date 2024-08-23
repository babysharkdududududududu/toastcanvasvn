
import book1 from './asset/book1.png';
import book from './asset/book.png';
import book2 from './asset/book2.png';
import plant from './asset/plant.png';
import calendar from './asset/calendar.png';
import note1 from './asset/note1.png';
import note2 from './asset/note2.png';
import note3 from './asset/note3.png';
const Banner4 = () => {
    return (
        <div style={{ width: '100%', background: '#0565bb', height: 700, marginTop: 100, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: 50 }}>
                <h2 style={{ textTransform: 'uppercase', color: '#fcd426', fontSize: 50, textTransform: "uppercase" }}>Brand Story</h2>
                <p style={{ maxWidth: 550, fontSize: 17, color: '#fcd426', marginTop: -20, maxWidth: 760 }}>
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </p>
            </div>
            <div style={{ position: 'absolute', bottom: 90, right: '10%', transform: 'translate(-50%, 0)', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <div style={{ position: 'absolute', right: -150, top: -410 }} >
                    <img src={plant} alt="plant" style={{ width: 180, height: 350, }} />
                </div>
                <div style={{ position: 'absolute', right: -150 }}>
                    <img src={calendar} alt="calendar" style={{ width: 285, height: 150, zIndex: 1 }} />
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: 100, left: 100 }}>
                <img src={book1} alt="note1" style={{ width: 100, height: 150 }} />
                <img src={book2} alt="note1" style={{ width: 80, height: 100, position: 'absolute', left: 100, top: 50 }} />
            </div>
            <div style={{ position: 'absolute', top: 170, left: 180 }}>
                <img src={note3} alt="note1" style={{ width: 100, height: 110 }} />
            </div>
            <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translate(-50%, 0)', width: '100%', }}>
                <img src={book} alt="book" style={{ width: '65%', height: 350 }} />
            </div>
            <div style={{ position: 'absolute', top: 350, left: 800 }} >
                <strong style={{ textTransform: 'uppercase', textAlign: 'left' }}>
                    What Happened’s Brand story
                </strong>
                <p style={{ maxWidth: 400, textAlign: 'left', fontSize: 15 }}>
                    청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                    봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                    긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                    인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                    아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
                </p>
                <div style={{ justifyContent: 'center', display: 'flex', background: "white", width: 150, height: 40, borderWidth: 3, borderColor: "#000", borderStyle: 'groove', alignItems: 'center' }}>
                    <p style={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        margin: 0
                    }}>See more</p>
                </div>
            </div>
            <div style={{ position: 'absolute', top: 40, right: 200 }}>
                <img src={note1} alt="note1" style={{ width: 80, height: 80 }} />
                <img src={note2} alt="note1" style={{ width: 80, height: 100, position: 'absolute', top: 20, left: 45 }} />
            </div>
        </div>
    )
}
export default Banner4;