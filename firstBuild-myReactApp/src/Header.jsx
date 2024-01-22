function Header() {
    // Header component here we create a nav that we will pas to app jsx as a component
    return (
        <header>
            <h1>My website</h1>
            <nav>
                <ul><a href="#">Home</a></ul>
                <ul><a href="#">About</a></ul>
                <ul><a href="#">Services</a></ul>
                <ul><a href="#">Contact</a></ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header