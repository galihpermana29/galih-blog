import Image from 'next/image';
import Link from 'next/link';
const CardContent = ({
	data: { subject, topic, desc, color, thumb, link, realease },
}) => {
	return (
		<Link href={realease ? link : '/'}>
			<div className="flex justify-center items-center">
				<div
					className={`container ${color} rounded-[20px] mr-5 p-5 md:p-[60px] flex flex-col md:flex-row items-center space-x-6 md:justify-center cursor-pointer hover:shadow-lg`}
				>
					<div className="w-full">
						<p
							className={`${
								realease ? 'bg-blue-400' : 'bg-red-400'
							} w-fit rounded-full px-3 py-1 text-white text-[14px] mb-5`}
						>
							{realease ? 'Realeased' : 'Soon'}
						</p>
						<p className="text-[#228678] text-[35px] md:text-[40px] lg:text-[42px] font-semibold">
							{subject}
						</p>
						<p className="text-[black text-[35px] md:text-[40xp] lg:text-[42px] font-semibold">
							{topic}
						</p>
						<p className="text-[16px] text-[#7D7D7D] my-[18px] max-w-[400px]">
							{desc}
						</p>
					</div>
					<div className="w-full">
						<Image src={thumb} />
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CardContent;
