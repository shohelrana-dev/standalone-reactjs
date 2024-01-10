export default function CartItem({ item, onRemove, onIncrease, onDecrease }) {
	const { name, totalPrice, description, image, quantity } = item
	return (
		<div className='flex justify-between mb-6 border-b broder-gray-300 pb-3'>
			<div className='flex flex-grow gap-4'>
				<img src={image} alt={name} className='w-24 h-24 object-cover rounded-md' />

				<div>
					<h2 className='text-gray-800 font-bold text-xl'>{name}</h2>
					<p className='text-gray-500 font-medium text-sm'>{description}</p>
					<p className='inline-block mt-4 bg-green-600 px-2 py-1 text-xs text-white rounded-full'>
						Free shipping
					</p>
				</div>
			</div>

			<div className='min-w-28 flex flex-col justify-center align-content-center'>
				<div className='grid grid-cols-[1fr_1fr_1fr] mb-3'>
					<span
						className='text-center cursor-pointer border border-gray-300 text-xl text-gray-700 rounded-tl-md rounded-bl-md select-none'
						onClick={onDecrease}
					>
						-
					</span>
					<span className='font-medium text-center border-y broder-gray-300'>{quantity}</span>
					<span
						className='text-center cursor-pointer border border-gray-300 text-xl text-gray-700 rounded-tr-md rounded-br-md select-none'
						onClick={onIncrease}
					>
						+
					</span>
				</div>

				<p className='text-lg font-bold text-center mb-2'>{totalPrice}</p>

				<button
					className='font-medium bg-red-500 text-white cursor-pointer py-1 rounded-full'
					onClick={onRemove}
				>
					Remove
				</button>
			</div>
		</div>
	)
}
