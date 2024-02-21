import Nav from "../Nav";
// Our main header component that displays our page title which in this case is Acme Blogs
// then display our nav component which is a select list that displays all our users 
const Header = ({currentUserId, setCurrentUserId}) => {
  return (
    <header>
        <h1>Acme Blogs</h1>
        {/* nav with select */}
        <Nav
            currentUserId={currentUserId}
            setCurrentUserId={setCurrentUserId}
        />
    </header>
  )
}

export default Header;