import { Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

const Header = () => {
    const items = [
        { label: 'Introduction' },
        { label: 'Solution' },
        { label: 'Rate plan' },
        { label: '|' },
        { label: <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link> },
        { label: 'Apply for free use' }
    ];
    return (
        <div style={{ justifyContent: 'space-between', display: 'flex', background: "#090909", padding: '0.1rem' }}>
            <p style={{ color: "white", marginLeft: '40px', fontSize: 20 }}>What happened</p>
            <Menubar model={items} />
        </div>
    );
}
export default Header;
