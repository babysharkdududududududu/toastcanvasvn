import banner2 from './asset/banner2.png'
import pr1 from './asset/pr1.png'
import pr2 from './asset/pr2.png'
import pr3 from './asset/pr3.png'
import label1 from './asset/label1.png'
import label2 from './asset/label2.png'
import label3 from './asset/label3.png'
import go from './asset/go.png'

const Banner2 = () => {
    const banner = [
        {
            img: pr1,
            label: label1,
            go: go,
            content: 'How to create mobile-optimized'
        },
        {
            img: pr2,
            label: label2,
            go: go,
            content: 'How to create mobile-optimized'
        },
        {
            img: pr3,
            label: label3,
            go: go,
            content: 'How to create mobile-optimized'
        }
    ]
    return (
        <div style={{ position: 'relative' }}>
            <img src={banner2} alt="banner2" style={{ width: '100%', height: 'auto', marginTop: '-5px' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <h2 style={{ textTransform: 'uppercase', color: '#f96400', fontSize: 50 }}>Best product</h2>
                <p style={{ maxWidth: 550, fontSize: 17, color: '#f96400', textAlign: 'center', marginTop: -30 }}>
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    {banner.map((item, index) => {
                        return (
                            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                <img src={item.img} alt="pr" style={{ width: 450, height: 450 }} />
                                <img src={item.label} alt="label" style={{ width: 70, height: 70, position: 'absolute', left: 0, top: -25 }} />
                                <div style={{ top: -30, position: 'relative', background: "white", width: 300, height: 65, borderWidth: 3, borderColor: "#000", borderStyle: 'groove' }}>
                                    <p style={{ color: "black", fontWeight: 'bold', maxWidth: 150, textAlign: 'left', marginLeft: 20 }}>{item.content}</p>
                                    <img src={item.go} alt="go" style={{ width: 50, height: 50, position: 'absolute', right: 10, top: 10 }} />
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
export default Banner2;