import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  }
  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to='/' className='navbar-brand'>TracNghiem</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className='nav-link'>Trang Chủ</NavLink>
            <NavLink to='/users' className='nav-link'>Người Dùng</NavLink>
            <NavLink to='/admins' className='nav-link'>Admin</NavLink>
          </Nav>
          <Nav>
            <button className='btn-login' onClick={() => handleLogin()}>Đăng nhập</button>
            <button className='btn-sign up' onClick={() => handleRegister()}>Đăng ký</button>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item >Thông tin</NavDropdown.Item>
              <NavDropdown.Item >Nhập mã phòng</NavDropdown.Item>
              <NavDropdown.Item >Tạo trắc nghiệm</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Đăng Xuất
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;