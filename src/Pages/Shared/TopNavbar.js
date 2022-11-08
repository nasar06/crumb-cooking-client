import React, { useContext } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/AuthProvider';


const TopNavbar = () => {
    const { user, handelSignOut } = useContext(UserContext);


    const handelLogOut =()=>{
        handelSignOut()
        .then(()=>{})
        .catch(err => console.error(err))
    }
    return (
        <Navbar className='border mb-12'
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand to="https://flowbite.com/">
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Crumb Cooking
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {user?.uid &&
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>

                }

                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active={true}
                >
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to='/blog'>Blog</Link>
                </Navbar.Link>

                {
                    user?.uid ?
                        <>
                            <Navbar.Link>
                                <Link to='/addService'>Add Service</Link>
                            </Navbar.Link>
                            <Navbar.Link>
                                <Link to='/myReviews'>My Reviews</Link>
                            </Navbar.Link>
                            <Navbar.Link>
                                <Link onClick={handelLogOut}>LogOut</Link>
                            </Navbar.Link>
                        </>

                        :
                        <Navbar.Link>
                            <Link to='/login'>Login</Link>
                        </Navbar.Link>
                }

            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNavbar;