type HeadingProps = {
    title?: string
}

const Heading = ({title = "test"}: HeadingProps): JSX.Element => {
  return (
    <div>Heading {title}</div>
  )
}

export default Heading