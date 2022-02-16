import CardContent from './CardContent';
import sll from '../public/thumbs/sll.png';
import Link from 'next/link';
export const data = [
	{
		subject: 'Data Structure',
		topic: 'Single Linked List',
		desc: 'A singly linked list is a type of linked list that is unidirectional, it can be traversed in only one direction from the head to the last node (tail).Each element in a linked list is called a node. A single node contains data and a pointer to the ​next node, which helps to maintain​ the structure of the list.',
		color: 'bg-[#F2EEFF]',
		thumb: sll,
		link: '/articles/single-linked-list',
		realease: true,
	},
	{
		subject: 'Data Structure',
		topic: 'Double Linked List',
		desc: 'a doubly linked list is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains three fields: two link fields (references to the previous and to the next node in the sequence of nodes) and one data field.',
		color: 'bg-[#E4FAFF]',
		thumb: sll,
		link: '/articles/double-linked-list',
		realease: false,
	},
	{
		subject: 'Basic C++',
		topic: 'Pointer',
		desc: 'C++ pointers are easy and fun to learn. Some C++ tasks are performed more easily with pointers, and other C++ tasks, such as dynamic memory allocation, cannot be performed without them.',
		color: 'bg-[#FFF4F8]',
		thumb: sll,
		link: '/articles/pointer',
		realease: false,
	},
	{
		subject: 'Basic C++',
		topic: 'Struct',
		desc: 'C++ struct, short for C++ Structure, is an user-defined data type available in C++. It allows a user to combine data items of (possibly) different data types under a single name.',
		color: 'bg-[#E7FEE7]',
		thumb: sll,
		link: '/articles/struct',
		realease: false,
	},
];

const CardSection = () => {
	return (
		<div className="space-y-6 mt-5 mb-20">
			{data.map((data, idx) => {
				return <CardContent data={data} key={idx} />;
			})}
		</div>
	);
};

export default CardSection;
