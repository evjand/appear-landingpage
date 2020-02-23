const Container = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
      <style jsx>{`
        div {
          max-width: 1264px;
          padding: 0 2rem;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export default Container
