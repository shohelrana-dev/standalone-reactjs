import CartItem from './CartItem'
import products from '../utils/products'

export default function CartList() {
	const [items, setItems] = React.useState(products)
	const [totalPrice, setTotalPrice] = React.useState(0)

	React.useEffect(() => {
		const sum = items.reduce((accumulator, object) => {
			return accumulator + object.totalPrice
		}, 0)

		setTotalPrice(sum)
	}, [items])

	function handleRemove(item) {
		setItems(prevItems => prevItems.filter(i => i !== item))
	}

	function handleIncrease(item) {
		setItems(prevItems => {
			return prevItems.map(_item => {
				if (_item.id === item.id) {
					_item.quantity += 1
					_item.totalPrice = _item.quantity * _item.price
				}
				return _item
			})
		})
	}

	function handleDecrease(item) {
		setItems(prevItems => {
			return prevItems.map(_item => {
				if (_item.id === item.id && _item.quantity > 0) {
					_item.quantity -= 1
					_item.totalPrice = _item.quantity * _item.price
				}
				return _item
			})
		})
	}

	function resetCart() {
		setItems([...products])
	}

	return (
		<div className='max-w-4xl bg-white mt-8 mx-auto p-4 rounded-xl border border-gray-200'>
			<div className='flex justify-between mt-2 mb-6'>
				<h1 className='text-2xl font-bold'>Your Cart</h1>
				<button className='text-blue-400 block font-bold' onClick={resetCart}>
					Reset cart
				</button>
			</div>

			{items.map(item => (
				<CartItem
					key={item.id}
					item={item}
					onRemove={() => handleRemove(item)}
					onIncrease={() => handleIncrease(item)}
					onDecrease={() => handleDecrease(item)}
				/>
			))}
			{items.length === 0 && <p className='text-center my-8'>Cart is empty.</p>}

			<div className='max-w-[200px] ml-auto'>
				<div className='flex justify-between min-w-48 mb-4'>
					<p className='font-bold text-lg'>Grand Total: </p>
					<p className='font-bold text-lg'>{totalPrice}</p>
				</div>

				<button
					className='font-medium bg-blue-500 px-6 py-2 text-white cursor-pointer py-1 rounded-full w-full hover:bg-blue-400 disabled:bg-gray-200 disabled:cursor-auto'
					disabled={totalPrice === 0}
				>
					Checkout
				</button>
			</div>
		</div>
	)
}
