const MainHeader = ({
	title = "Galih's Blog",
	desc = "This blog contains Galih Permana's writings and sharing the knowledge that I have learned. The writings on this blog may not always be related to IT but can also be about my hobbies or my favorite football club.",
	button = true,
	gradient = 'bg-gradient-to-b from-[#FFF8E8] to-[#FFFFFF]',
}) => {
	return (
		<div
			className={` ${gradient} min-h-[80vh] flex justify-center items-center `}
		>
			<div className=" text-center container">
				<h1 className="font-semibold text-[40px] md:text-[60px]">
					{title}
				</h1>
				<p className="text-[16px] text-[#7D7D7D] mt-[18px] mb-[25px] md:text-[20px] max-w-[600px] my-0 mx-auto">
					{desc}
				</p>
				{button && (
					<a
						href="mailto:galihcbn123@gmail.com"
						className="border-2 border-black rounded-[20px] text-[18px] py-[6px] px-[25px] md:text-[20px]"
					>
						{' '}
						Send Me An Email!
					</a>
				)}
			</div>
		</div>
	);
};

export default MainHeader;
