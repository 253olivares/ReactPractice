function Footer() {
// footer component
// we pass new date with year
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Your website name </p>
        </footer>
    )

}

export default Footer