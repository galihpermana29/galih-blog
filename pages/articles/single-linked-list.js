import HeadComponent from '../../Components/HeadComponent';
import { useRouter } from 'next/router';
import MainHeader from '../../Components/MainHeader';
import Image from 'next/image';
import apaitu from '../../public/sll/apaitu.png';
import apaitu2 from '../../public/sll/apaitu2.png';
import { useEffect } from 'react';
import img1 from '../../public/sll/1.png';
import img2 from '../../public/sll/2.png';
import img3 from '../../public/sll/3.png';
import img4 from '../../public/sll/4.png';
import img5 from '../../public/sll/5.png';
import img6 from '../../public/sll/6.png';
import img7 from '../../public/sll/7.png';
import tambahdepan1 from '../../public/sll/tambahdepan1.png';
import tambahdepan2 from '../../public/sll/tambahdepan2.png';
import tambahdepan3 from '../../public/sll/tambahdepan3.png';
import tambahdepan4 from '../../public/sll/tambahdepan4.png';

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../Components/Highlighting';

const SingleLL = ({ data }) => {
	const router = useRouter();
	const [{ subject, topic, desc, color, thumb, link }] = data.filter(
		(data) => data.link === router.pathname
	);

	useEffect(() => {
		const highlight = async () => {
			await Prism.highlightAll(); // <--- prepare Prism
		};

		highlight(); // <--- call the async function
	}, []);
	return (
		<div>
			<HeadComponent title={topic} desc={desc} />
			<MainHeader
				title={topic}
				desc={desc}
				gradient={`bg-gradient-to-b from-[#DCD1FF] to-[#FFFFFF]`}
				button={false}
			/>
			<div className=" mt-5 mb-20 flex justify-center text-[18px] text-justify">
				<div className="container md:px-20">
					<p className="py-2">
						Heyho! di artikel kali ini aku bakal sharing ilmu yang pernah
						aku pelajari tentang Struktur Data menggunakan C++. Karena
						Struktur Data itu banyak jenisnya, di artikel kali ini aku mau
						bahas dari yang paling simpel dan paling mudah dipahami yaitu
						Linked List. Oh iya, sebelum mulai masuk ke materinya, jangan
						lupa buka Text Editor kalian ya, karena kita bakal belajar
						sambil langsung ngoding bareng!.
					</p>
					<p className="py-2">
						Penting untuk diketahui bahwa sebelum kalian terjun dan mulai
						belajar Linked List dan Struktur Data yang lain, ada beberapa
						materi yang harus kalian kuasai terlebih dahulu. Seperti,
						struct, pointer, dan konsep pemahaman tentang pengalokasian
						sebuah value pada memory komputer.
					</p>
					<p className="py-2">Gimana udah siap? leggo</p>
					<ol className="pl-2">
						<div className="my-5">
							<li>1. Apa itu Single Linked List</li>
							<p className="py-2">
								Oke, jadi apa sebenarnya Single Linked List itu?. Oiya
								mulai sekarang Single Linked Listnya aku singkat jadi
								SLL ya biar cepet aja ya cape soalnya wkakak. Jadi
								sebenarnya SLL itu sebuah struktur data yang terdiri
								dari satu atau lebih node yang saling berkaitan dimana
								terdapat head node sebagai node paling awal dan tail
								node sebagai node paling akhir dari SLL. Tadi kan aku
								bilang saling berkaitan, nah antara satu node dengan
								node yang lain itu dihubungkan dengan sebuah link yang
								pada programnya itu berupa sebuah pointer. Sehingga,
								node tersebut memiliki penunjuk ke node setelahnya dan
								begitu seterusnya sampai pada node terakhir yang
								menunjuk pada null yang menandakan bahwa node tersebut
								merupakan tail dari SLL nya.
							</p>
							<div className="flex justify-center my-10 max-w-[500px] mx-auto">
								<Image src={apaitu} />
							</div>
							<p className="py-2">
								Gambar di atas adalah bentuk penggambaran Single Linked
								List dan bagian-bagian dari SLL itu sendiri. Head adalah
								bagian paling depan dan tidak ditunjuk oleh node
								manapun. Link adalah penghubung node yang satu dengan
								yang lain. Dan tail adalah bagian paling belakang dan
								tidak menunjuk node manapun. Sekarang mari kita bahas
								node yang membentuk SLL itu sendiri.
							</p>
							<div className="flex justify-center my-10 max-w-[500px] mx-auto">
								<Image src={apaitu2} />
							</div>
							<p className="py-2">
								Jadi bagian dari node sendiri itu ada dua, yaitu data
								dan pointer. Dimana node dibentuk dari sebuah struct.
								Sehingga kita perlu membuat blueprint dari node nya
								terlebih dahulu untuk kemudian bisa kita gunakan ketika
								membuat LL.
							</p>
						</div>

						<div className="my-5">
							<li>2. Linked List vs Array</li>
							<p className="py-2">
								Sekarang mari kita bahas bedanya LL dengan Array.
							</p>
							<div className="pl-2">
								<div className="py-5">
									<p>
										1. Array bersifat statis sedangkan LL lebih
										dinamis.
									</p>
									<p>
										{' '}
										Apa maksudnya Array bersifat statis?. Kalau kalian
										ingat bahwa proses deklarasi sebuah Array di C++
										juga tak lepas dari deklarasi berapa banyak data
										yang akan ditampung Array tersebut. Katakan kalian
										membuat Array yang bisa menampung 5 data, lalu
										kemudian di tengah jalan ternyata kalian ingin
										array tersebut bisa menampung 6 atau 8 data. Hal
										inilah yang menjadi dasar kenapa Array bersifat
										statis. Lalu bagaimana dengan LL?. Well, pada
										prosesnya LL tidak memerlukan informasi berapa
										banyak data yang dapat ditampung. Dengan kata
										lain, selama slot memory yang kosong masih
										tersedia, LL masih dapat terus menambah datanya
										untuk disimpan sehingga lebih dinamis.
									</p>
								</div>
								<div className="py-5">
									<p>2. Random Access vs Sequential Access</p>
									<p>
										Masih ingat bagaimana cara mengakses sebuah
										Array?. Yas betul sekali, kita hanya perlu
										memanggil indeks dari data yang ingin kita akses.
										Itulah sifat dari Random Access dimana proses
										pengaksesan sebuah data bisa dilakukan dari mana
										saja asalkan indeks tersebut benar dan tersedia
										dalam Arraynya. Sedangkan pada LL, ketika kita
										ingin mengakses sebuah data pada LL, kita harus
										melakukannya secara sekuensial atau berurutan dari
										bagian head sampai akhir node atau sebaliknya dari
										tail sampai bagian paling depan dari LL. Sehingga
										pada penulisan kode programnya kita perlu
										melakukan seleksi kondisi untuk mencari data yang
										ingin kita cari tersebut.
									</p>
								</div>
								<div className="py-5">
									<p>3. Penyimpanan pada memori</p>
									<p>
										Pada Array yang menampung banyak data sekaligus,
										tiap-tiap data disimpan pada alamat memori yang
										berurutan antara satu dengan yang lainnya.
										Sedangkan pada LL data dialokasikan secara random
										atau berjauhan antara satu data pada node dengan
										yang lain.
									</p>
								</div>
							</div>
						</div>

						<div className="my-5">
							<li>3. Membuat Single Linked List</li>
							<p className="py-2">
								Sekarang tiba saatnya kita masuk ke bagian paling
								membagongkan dalam artikel ini hahahah. Bagian paling
								seruu!. Kita bakal bikin Single Linked List secara
								bertahap sambil aku jelasin maksud dari baris kode
								programnya ya!. Leggo.
							</p>
							<div className="pl-2">
								<div className="py-5">
									<p>
										1. Kalian tentunya harus sudah membuka text editor
										kalian, di sini aku pakai Dev C++
									</p>
								</div>

								<div className="py-5">
									<p>
										2. Buat struct sebagai cetakan atau blueprint dari
										nodenya nanti.
									</p>
									<div className="flex justify-center my-2 max-w-[500px] mx-auto">
										<Image src={img1} />
									</div>
									<p className="py-2">
										Ingat bahwa node memiliki dua bagian? yas, bagian
										data yang berupa variable bertipe data yang ingin
										disimpan (integer, string, dst) dan pointer.
										Struct ini bernama tnode yang di dalamnya terdapat
										variable data yang bertipe integer, dan pointer
										bertipe tnode dengan nama next yang akan digunakan
										sebagai pointer ke next node.
									</p>
									<p className="py-2">
										Kenapa pointernya tipenya tnode? kenapa ngga
										seperti pointer kaya biasanya aja?. Well, kalau
										pertanyaan itu terlintas di otak kalian berarti
										kalian cukup mengikuti artikel ini dengan serius.
										Jadi, kenapa tipenya adalah tnode juga, karena
										pointer next tersebut akan digunakan untuk
										menunjuk node lain dimana node lain tersebut juga
										terbuat dari struct tnode ini. Gimana masuk akal?
										jadi, kalau kita menggunakan tipe yang berbeda
										dari apa yang akan kita pointing, akan menyebabkan
										error pada program yang kita buat.
									</p>
								</div>

								<div className="py-5">
									<p>
										3. Setelah berhasil membuat blueprint dari
										nodenya, sekarang waktunya kita membuat struct
										untuk SLLnya.
									</p>
									<div className="flex justify-center my-2 max-w-[500px] mx-auto">
										<Image src={img2} />
									</div>
									<p className="py-2">
										Eits jangan pusing dulu.. tenang, rileks, kita
										bahas satu persatu. Seperti yang udah aku jelasin
										sebelumnya bahwa LL memiliki bagian head dan tail.
										Tetapi bagian paling penting adalah head sehingga
										tail menjadi opsional alias boleh ada boleh tidak.
										Baris pertama pada bagian struct sll adalah
										bagaimana kita membuat head yang menunjuk ke NULL
										karena belum ada data atau node pada SLL yang kita
										buat. Setelah itu kamu akan melihat 4 method utama
										pada SLL yang nantinya akan kita bahas satu
										persatu.
									</p>
									<div className="pl-5 py-2">
										<ul className="list-disc">
											<div>
												<li>Method isKosong</li>
												<p className="py-2">
													Seperti namanya isKosong atau isEmpty
													merupakan method yang akan dibuat dengan
													tujuan untuk mengecek apakah SLL tersebut
													masih kosong atau sudah ada isinya.
													Mengapa hal ini perlu dilakukan? karena
													ketika ingin menambahkan node baru atau
													menghapus node kita akan membutuhkan
													informasi dari method tersebut untuk
													melakukan treatment yang berbeda pada
													kondisi kosong atau sudah ada isinya.
													Agaknya kepala kalian sudah mulai
													berasap? sekarang mari kita isi
													methodnya.
												</p>
												<div className="flex justify-center my-2 max-w-[500px] mx-auto">
													<Image src={img3} />
												</div>
												<p className="py-2">
													Terdapat seleksi kondisi untuk mengecek,
													apakah pointer head isinya NULL? jika iya
													return 1 yang menandakan SLL benar masih
													kosong. Jika tidak, return 0 yang
													menandakan SLL sudah tidak kosong atau
													sudah ada isinya.
												</p>
											</div>

											<div>
												<li>Method tambahDepan</li>
												<p className="py-2">
													Selanjutnya method tambahDepan dimana
													method ini yang akan kita gunakan ketika
													kita ingin menambahkan node baru dari
													depan sehingga node baru tersebut lah
													yang akan menjadi head yang baru. Mari
													kita isi methodnya.
												</p>
												<div className="flex justify-center my-2 max-w-[500px] mx-auto">
													<Image src={img4} />
												</div>
												<p className="py-2">
													Sekarang kita bahas method nya. Pertama
													method ini mempunyai parameter berupa
													data baru yang akan diinputkan atau
													ditambahkan ke SLL. Ingat bahwa pada
													proses pembuatan node sebelumnya data
													yang kita buat bertipe integer, sehingga
													pada method ini tipe datapun harus
													disesuaikan dengan itu. Selanjutnya kita
													buat node baru dari struct tnode dengan
													menggunakan keyword new. Node baru
													tersebut kita pointing dengan pointer
													bernama baru. Setelah node terbuat,
													saatnya kita mengisi 2 bagian yang ada
													pada node. Untuk mengisi bagian next dari
													nodenya sebagai inisialisasi awal kita
													isikan dengan NULL sedangkan untuk
													datanya kita isi dengan variable dataBaru
													yang merupakan data yang akan
													ditambahkan.
												</p>
												<div className="flex justify-center my-10 max-w-[500px] mx-auto">
													<Image src={tambahdepan1} />
												</div>
												<p className="py-2">
													Sampai pada proses tersebut, kita hanya
													baru membuat sebuah node lalu mengisi 2
													bagiannya dengan data dan alamat awal.
													Selanjutnya kita buat SLL nya. Cek
													terlebih dahulu apakah SLL ini masih
													kosong? ingat bahwa method isKosong akan
													mengembalikan true (1) jika memang benar
													bahwa SLL masih kosong. Jika benar, maka
													head akan kita isikan dengan node yang
													baru saja kita buat. Dan terakhir jangan
													lupa bagian nextnya kita pointing ke NULL
													karena ini merupakan penambahan dari
													depan sehingga node yang pertama
													ditambahkan akan berada pada paling
													belakang dari SLL.
												</p>
												<div className="flex justify-center my-10 max-w-[500px] mx-auto">
													<Image src={tambahdepan2} />
												</div>
												<p className="py-2">
													Jika ternyata SLL bukan kosongan atau
													sudah ada isinya, maka next dari node
													baru tersebut kita pointing kan ke bagian
													head sebelumnya. Jangan lupa kita
													pindahkan head ke node yang baru kita
													tambahkan.
												</p>
												<div className="flex justify-center my-10 max-w-[500px] mx-auto">
													<Image src={tambahdepan3} />
												</div>
												<div className="flex justify-center my-10 max-w-[500px] mx-auto">
													<Image src={tambahdepan4} />
												</div>
											</div>

											<div>
												<li>Method tampilNode</li>
												<p className="py-2">
													Selanjutnya adalah bagaimana cara
													menampilkan isi dari SLL yang telah kita
													buat. Di method tampilNode ini kita akan
													melakukannya dimana sesuai dengan apa
													yang sudah aku bahas di awal bahwa proses
													pengaksesan data pada LL adalah
													sekuensial sehingga berurutan dari head
													sampai tail. Mari kita isi methodnya.
												</p>
												<div className="flex justify-center my-2 max-w-[500px] mx-auto">
													<Image src={img5} />
												</div>
												<p className="py-2">
													Idenya adalah dengan menggunakan
													perulangan while kita akan menelusuri
													setiap node dari head sampai tailnya.
													Sehingga kita membutuhkan pointer bantu
													yang akan kita geser pada setiap
													perulangannya. Kita buat dahulu
													pointernya dengan tipe tnode dan kita
													posisikan dia pada head. Lakukan
													pengecekan apakah SLL kosong? jika iya
													kita tidak perlu melakukan perulangan.
													Jika SLL tidak kosong, maka kita buat
													perulangan while sampai nilai pada
													pointer bantu tidak NULL atau sampai pada
													node paling akhir. Selanjutnya kita
													tinggal lakukan print data pada setiap
													nodenya, dan jangan lupa pointer bantu
													nya kita geser ke node selanjutnya agar
													perulangannya tidak pada node yang
													itu-itu saja.
												</p>
											</div>

											<div>
												<li>Method hapusDepan</li>
												<p className="py-2">
													Method terakhir adalah cara menghapus
													sebuah node pada SLL yang sudah kita
													buat. Berbeda dengan array dimana kita
													tidak bisa secara ril menghapus data
													dalam array, kita hanya melakukan
													pergeseran data pada indeks yang akan
													dihapus saja. Pada SLL penghapusan sangat
													memungkinkan dengan keyword ‘delete’.
													Sekarang mari kita cus ke methodnya
												</p>
												<div className="flex justify-center my-2 max-w-[500px] mx-auto">
													<Image src={img6} />
												</div>
												<p className="py-2">
													Idenya adalah sebelum menghapus node yang
													dituju, kita harus memindahkan pointer
													headnya ke node yang berada paling depan
													jika node yang dituju itu dihapus. Karena
													ini penghapusan dari depan, maka node
													selanjutnya yang akan menjadi head selalu
													node setelah node paling depan. Sehingga
													kita buat terlebih dahulu pointer bantuan
													dengan nama hapus. Lalu cek apakah SLL
													kosong atau tidak.
												</p>
												<p className="py-2">
													Jika tidak kosong, kita perlu buat
													seleksi kondisi lagi untuk menghandle
													kondisi jika itu merupakan satu-satunya
													node dan kondisi jika itu bukan
													satu-satunya node pada SLL tersebut. Jika
													bukan satu-satunya node, isi pointer
													hapus dengan head saat ini lalu pindahkan
													pointer head ke node setelah head saat
													ini atau head-next. Lalu untuk menghapus
													gunakan keyword delete lalu delete hapus.
													Sedangkan jika merupakan node
													satu-satunya pada SLL tersebut, bagian
													headnya kita isi dengan NULL seperti
													kondisi inisial awalnya.
												</p>
											</div>
										</ul>
									</div>
								</div>
							</div>

							<li>4. Mengimplementasikan Single Linked List</li>
							<p className="py-2">
								Kalian pasti bertanya-tanya, bagaimana cara menggunakan
								method pada structnya?. Mari kita bahas sama-sama.
								Sebagai contoh kita akan melakukan penambahan node atau
								data pada SLL untuk pertama kalinya.
							</p>
							<div className="flex justify-center my-2 max-w-[500px] mx-auto">
								<Image src={img7} />
							</div>
							<p className="py-2">
								Untuk menggunakan struct sll yang sudah kita buat, kita
								harus deklarasikan seperti membuat variabel tetapi
								bagian tipe datanya kita ubah jadi nama struct nya. Lalu
								untuk menggunakan methodnya tinggal kita panggil
								variable SLL(tanda titik)(nama method). Pada program di
								atas berarti kita akan menambahkan node baru dengan data
								12 lalu kita tambahkan lagi node baru dengan data 123
								pada SLL kita.
							</p>
							<p className="py-2">
								Sekarang pertanyaannya, data yang mana yang akan menjadi
								head dari linked list kita?. Yap benar sekali node yang
								memiliki data 123 lah yang akan menjadi head. Loh kok
								bisa? karena ingat kita melakukan penambahan node baru
								dari depan, sehingga node dengan data 12 akan berada
								dibelakang node dengan data 123 yang baru saja masuk
								atau ditambahkan ke SLL.
							</p>
						</div>
					</ol>
					<p className="py-2">
						Gimana? udah mulai berkabut kepala kalian?.
					</p>
					<p className="py-2">
						Sampai juga kita pada akhir dari artikel yang panjang ini.
						Semoga artikel ini bermanfaat buat kita semua dan jangan lupa
						tetap berlatih sendiri di kediaman masing-masing. Ohiya,
						sebagai bahan latihan kalian juga mungkin kalian bisa explore
						lebih lanjut tentang bagaimana cara melakukan tambah dari
						belakang, tambah berdasarkan indeks, tambah tepat di
						tengah-tengah, hapus dari belakang, hapus berdasarkan data
						yang dicari, hapus tepat di tengah-tengah, dan menghitung
						berapa banyak node yang ada pada SLL yang kalian buat.
					</p>
					<p className="py-2">
						Terima kasih semuanya, see ya in another articles!
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleLL;
