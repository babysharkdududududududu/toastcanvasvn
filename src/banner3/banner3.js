import img1 from './asset/img1.png';
import img2 from './asset/img2.png';
import img3 from './asset/im3g.png';
import img4 from './asset/img4.png';
import img5 from './asset/img5.png';
import img6 from './asset/img6.png';
import img7 from './asset/img7.png';
import img8 from './asset/img8.png';
import img9 from './asset/img9.png';
import img10 from './asset/img10.png';
import img11 from './asset/img11.png';
import img12 from './asset/img12.png';
import img13 from './asset/img13.png';
import img14 from './asset/img14.png';
import img15 from './asset/img15.png';
import img16 from './asset/img16.png';
import img17 from './asset/img17.png';
import img18 from './asset/img18.png';
import img19 from './asset/img19.png';
import img20 from './asset/img20.png';
import img21 from './asset/img21.png';
import img22 from './asset/img22.png';
import img23 from './asset/img23.png';
import img24 from './asset/img24.png';
import img25 from './asset/img25.png';

const banner3 = () => {
    const product = [
        { img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }, { img: img5 }, { img: img6 }, { img: img7 }, { img: img8 }, { img: img9 }, { img: img10 }, { img: img11 }, { img: img12 }, { img: img13 }, { img: img14 }, { img: img15 }, { img: img16 }, { img: img17 }, { img: img18 }, { img: img19 }, { img: img20 }, { img: img21 }, { img: img22 }, { img: img23 }, { img: img24 }, { img: img25 }
    ];
    const groupedProducts = [];
    for (let i = 0; i < product.length; i += 5) {
        groupedProducts.push(product.slice(i, i + 5));
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%', height: 'auto', marginTop: 100 }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '90%', height: 'auto' }}>
                {groupedProducts.map((group, groupIndex) => (
                    <div key={groupIndex} style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                        {group.map((item, index) => (
                            <div>
                                <img key={index} src={item.img} alt="product" style={{ width: 250, height: 250, marginLeft: 10 }} />
                                <p style={{ fontWeight: 'bold', textAlign: 'left', marginLeft: 10 }} >
                                    [What happen] How to create
                                </p>
                                <div style={{ flexDirection: "row", justifyContent: 'space-between', display: 'flex', marginLeft: 10 }}>
                                    <span>2,500 won</span>
                                    <span style={{ color: "#989999" }} role="img" aria-label="heart">❤️236</span>
                                </div>
                            </div>
                        ))}

                    </div>
                ))}
            </div>
        </div>
    )
}
export default banner3;