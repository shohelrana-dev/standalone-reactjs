import CartList from './components/CartList'

function App() {
	return (
		<div className='h-screen bg-gray-200 pt-8'>
			<CartList />
		</div>
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
