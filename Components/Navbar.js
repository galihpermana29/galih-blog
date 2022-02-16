import Image from 'next/image';
import logo from '../public/logo.png';
import back from '../public/back.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Navbar = () => {
	const router = useRouter();
	if (router.pathname !== '/') {
		console.log('diblog');
	}
	return (
		<div
			className={`fixed w-full flex items-center md:pt-8 pt-3 px-3 md:px-10 justify-between ${
				router.pathname !== '/' ? 'flex-row-reverse' : 'flex-row'
			}`}
		>
			<Link href="http://galihpermana.netlify.app/">
				<div className="max-w-[60px] cursor-pointer">
					<Image src={logo} />
				</div>
			</Link>
			{router.pathname !== '/' && (
				<Link href={'/'}>
					<div className="max-w-[30px] md:max-w-[35px] cursor-pointer">
						<Image src={back} />
					</div>
				</Link>
			)}
		</div>
	);
};

export default Navbar;
