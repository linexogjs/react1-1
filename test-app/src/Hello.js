class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.toWhat}</div>
    }
}
//const root = ReactDom.createRoot(document.getElementById('root'))
//root.render(<Hello toWhat="World"/>)
export default Hello;