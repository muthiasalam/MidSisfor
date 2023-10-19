<template>
    <header class="h-16 flex items-center justify-between bg-white">
  <div class="navbar-left pl-10">
    <p id="logo">
      <img src="./assets/logo/imglogo-b.png" alt="logo" width="200" height="40">
    </p>
  </div>
  <div class="navbar-right flex items-center pr-10">
    <ul class="list-none flex space-x-10">
      <li class="SITEMAP">SITEMAP</li>
      <li class="QUICKACCESS">
        <i class="fas fa-key"></i> QUICK ACCESS
      </li>
      <li class="SEARCH_ICON">
        <a href="#">
          <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="search" width="19" height="19">
        </a>
      </li>
      <li class="OTHER_ICON">
        <a href="#">
          <img src="https://cdn-icons-png.flaticon.com/128/900/900782.png" alt="other icon" width="19" height="19">
        </a>
      </li>
    </ul>
  </div>
</header>


    <div>
    <nav style="background-color: #7E0404;">
      <ul class="list-none flex justify-center space-x-12 p-2 ">
        <li><a href="#" class="text-white">BERANDA</a></li>
        <li><a href="#" class="text-white">PROFIL</a></li>
        <li><a href="#" class="text-white">AKADEMIK</a></li>
        <li><a href="#" class="text-white">SUMBER DAYA</a></li>
        <li><a href="#" class="text-white">K3</a></li>
        <li><a href="#" class="text-white">KEMAHASISWAAN</a></li>
        <li><a href="#" class="text-white">RISET DAN INOVASI</a></li>
        <li><a href="#" class="text-white">KEMITRAAN</a></li>
        <li><a href="#" class="text-white">DPM-PR</a></li>
        <li><a href="#" class="text-white">COT</a></li>
        <li><a href="#" class="text-white">DHARMA WANITA</a></li>
      </ul>
    </nav>
  </div>
  <div class="banner">
    <div id="image-content" class="image-content flex flex-col mr-10 h-260 w-full">
        <div id="image-container" class="image-container w-full h-full">
            <img src="./assets/banner/Group 170 new.jpg" class="image active:block border-0 w-full h-full object-cover">
            <img src="./assets/banner/Group 171 new.jpg" class="image hidden border-0 w-full h-full object-cover">
            <img src="./assets/banner/Group 172 new.jpg" class="image hidden border-0 w-full h-full object-cover">
            <img src="./assets/banner/Group 173.jpg" class="image hidden border-0 w-full h-full object-cover">
        </div>
    </div>
</div>
<div class="sambutan">
  <div class="sambutan-container flex flex-row bg-aliceblue m-12">
      <div class="sambutan-kiri flex justify-center items-center">
        <div class="dekan-container m-8 h-48 w-48">
          <img src="./assets/sambutan/new1.jpg" class="foto" alt="Slider1">
        </div>
      </div>
      <div class="sambutan-kanan p-12">
        <p id="title" class="text-2xl font-bold text-black">Dekan Fakultas Teknik</p>
        <p id="nama" class="text-lg text-black mt-4 mb-16">Prof. Dr. Eng. Ir. Muhammad Isran Ramli, S.T., M.T., IPM., ASEAN Eng</p>
        <span id="quote" class="text-sm text-gray-600">Besar harapan kita semoga ridho-Nya menyertai segala aktifitas dalam upaya pembinaan sumber daya manusia dalam bidang teknologi dan semoga informasi melalui web ini dapat berguna bagi semua pihak. Kami dari semua civitas akademika Fakultas Teknik dengan semua dukungan komponen perguruan tinggi yang ada akan terus meningkatkan pencapaian menuju terwujudnya visi dan misi yang telah dicanangkan dalam rencana strategis fakultas. Semoga informasi yang diberikan lewat layanan website ini dapat memberikan gambaran situasi dan kondisi Fakultas Teknik kepada semua lapisan masyarakat.</span>
      </div>
  </div>
</div>

<div class="galeri">
  <div class="judul absolute text-black text-2xl font-semibold ml-8">GALERI</div>
  <div class="galeri-content flex flex-row pt-10">
    <div class="galeri-item m-5 justify-center self-center">
      <img src=".\assets\berita\kiri.png" class="w-5 h-5 mt-2">
    </div>
    <div class="galeri-item m-5">
      <img src="https://eng.unhas.ac.id/fakultas/uploads/kegiatan/4c3280d8b9c7e386c81879ef42ef0c78.jpeg" alt="Transformasi digital manajemen persuratan(mBerkas)" class="w-44 h-32">
      <p class="w-36 text-neutral-700 text-xs font-medium">Transformasi digital manajemen persuratan(mBerkas).</p>
    </div>

    <div class="galeri-item m-5">
      <img src="https://eng.unhas.ac.id/fakultas/uploads/kegiatan/ec65905c3c130b84e99080893984ad96.jpeg" alt="Kesepakatan Kerja Sama" class="w-44 h-32">
      <p class="w-36 text-neutral-700 text-xs font-medium">Kesepakatan Kerjasama.</p>
    </div>

    <div class="galeri-item m-5">
      <img src="https://eng.unhas.ac.id/fakultas/uploads/kegiatan/858d435348d24fe76681764f0d954bac.jpeg" alt="Pengabdian Masyarakat" class="w-44 h-32">
      <p class="w-36 text-neutral-700 text-xs font-medium">Pengabdian masyarakat.</p>
    </div>

    <div class="galeri-item m-5">
      <img src="https://eng.unhas.ac.id/fakultas/uploads/kegiatan/ab7f2ee681bfce30b5b306dcd94ee6a2.jpeg" alt="Rapat Kerja Fakultas Teknik" class="w-44 h-32">
      <p class="w-36 text-neutral-700 text-xs font-medium">Rapat Kerja Fakultas Teknik.</p>
    </div>

    <div class="galeri-item m-5">
      <img src="https://eng.unhas.ac.id/fakultas/uploads/kegiatan/eb2cf7581e9be18dcc757d4b6fc4f07d.jpeg" alt="Pelantikan dan Pengambilan sumpah jabatan Pejabat" class="w-44 h-32">
      <p class="w-36 text-neutral-700 text-xs font-medium">Pelantikan dan Pengambilan sumpah jabatan Pejabat.</p>
    </div>

    <div class="galeri-item m-5">
      <img src="https://eng.unhas.ac.id/fakultas/uploads/kegiatan/0c2784b1a71175217a261e244eaa8974.jpeg" alt="Wisuda Universitas Hasanuddin Periode IV tahap II" class="w-44 h-32">
      <p class="w-36 text-neutral-700 text-xs font-medium">Wisuda Universitas Hasanuddin Periode IV tahap II.</p>
    </div>

    <div class="galeri-item m-5">
      <img src="https://eng.unhas.ac.id/fakultas/uploads/kegiatan/004b7bd19a3f33c42ec4873ce942bf59.jpeg" alt="Rapat Koordinasi Internal" class="w-44 h-32">
      <p class="w-36 text-neutral-700 text-xs font-medium">Rapat Koordinasi Internal.</p>
    </div>

    <div class="galeri-item m-5 justify-center self-center">
      <img src=".\assets\berita\kanan.png" class="w-5 h-5">
    
    </div>
  </div>
</div>

<div class="Group161 w-full h-96 relative mb-20">
  <div class="relative w-full h-full">
    <img class="Image132 w-full h-96 left-0 top-0 absolute" src=".\assets\dharma\bgdharma.jpg" />
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
  </div>
  <div class="Button w-52 h-11 left-[687.30px] top-[318.43px] absolute bg-red-600 rounded-md"></div>
  <div class="DharmaWanita w-100 pr-10 left-[296.15px] top-[136.94px] absolute text-justify text-slate-50 text-2xl font-medium">Dharma Wanita Persatuan Fakultas Teknik Unhas yang diketuai oleh Ny. Muralia Isran Ramli, aktif melakukan berbagai macam kegiatan seperti amaliah ramadhan, arisan di kapal, kegiatan BKMT dan DPW Unhas.</div>
  <img class="Image128 w-52 h-32 left-[45.21px] top-[127.76px] absolute" src=".\assets\dharma\image 128.jpg" />
  <button class="Selengkapnya left-[712.20px] top-[327.60px] absolute text-justify text-white text-xl font-bold">SELENGKAPNYA</button>
  <div class="DharmaWanita left-[360.36px] top-[31.45px] absolute text-slate-50 text-2xl font-semibold">DHARMA WANITA</div>
</div>

<div class="Berita ml-8 mr-8 relative ">
  <div class="berita1 relative">
    <div class="judul left-0 top-0 absolute text-black text-2xl font-semibold">BERITA</div>
    <div class="berita-content flex pt-10 items-center justify-center"> 
      <a href="#" class="berita-item w-44 h-60 bg-slate-50 m-6">
        <div class="relative w-44 h-32">
          <img class="w-full h-full" src="./assets/berita/imgb1.jpg" alt="News Image 1">
          <div class="absolute top-0 left-0 w-full h-full bg-red-600 opacity-30"></div>
        </div>
        <div class="judul-berita">
          <p class="text-neutral-700 text-xs font-medium">Fakultas Teknik Sukses Gelar Konferensi Internasional 2023</p> <!-- Memperbaiki penulisan "Konferensi" -->
          <p class="text-neutral-700 text-xs font-normal">13 Oktober 2023</p>
        </div>
      </a>

      <a href="#" class="berita-item w-44 h-60 bg-slate-50 m-6">
        <div class="relative w-44 h-32">
          <img class="w-full h-full" src="./assets/berita/imgb2.jpg" alt="News Image 2">
          <div class="absolute top-0 left-0 w-full h-full bg-red-600 opacity-30"></div>
        </div>
        <div class="judul-berita">
          <p class="text-neutral-700 text-xs font-medium">Fakultas Teknik Universitas Hasanuddin Gelar Rapat Koordinasi Ex-Post Evaluasi Project JICA.</p>
          <p class="text-neutral-700 text-xs font-normal">13 Oktober 2023</p>
        </div>
      </a>

      <a href="#" class="berita-item w-44 h-60 bg-slate-50 m-6">
        <div class="relative w-44 h-32">
          <img class="w-full h-full" src="./assets/berita/imgb3.jpg" alt="News Image 3">
          <div class="absolute top-0 left-0 w-full h-full bg-red-600 opacity-30"></div>
        </div>
        <div class="judul-berita">
          <p class="text-neutral-700 text-xs font-medium">Kedatangan Profesor Dari Jepang, Departemen Teknik Industri Fakultas Teknik Universitas Hasanuddin ...</p>
          <p class="text-neutral-700 text-xs font-normal">11 Oktober 2023</p>
        </div>
      </a>

      <a href="#" class="berita-item w-44 h-60 bg-slate-50 m-6">
        <div class="relative w-44 h-32">
          <img class="w-full h-full" src="./assets/berita/imgb4.jpg" alt="News Image 4">
          <div class="absolute top-0 left-0 w-full h-full bg-red-600 opacity-30"></div>
        </div>
        <div class="judul-berita">
          <p class="text-neutral-700 text-xs font-medium">Fakultas Teknik Universitas Hasanuddin Jadi Tuan Rumah Temu Ilmiah Ikatan Peneliti Lingkungan ...</p>
          <p class="text-neutral-700 text-xs font-normal">11 Oktober 2023</p>
        </div>
      </a>
    </div>
    <a href="#" class="text-right">
      <p class="text-black text-xs font-light ">LIHAT BERITA LAIN ></p> <!-- Memperbaiki penulisan "LIHAT BERITA LAIN" -->
    </a>
  </div>
</div>



<!-- ksj -->

<div class="informasi ml-8 mr-8 mb-10"> 
  <div class="judul text-black text-[26px] font-semibold">INFORMASI</div>
  <div class="info-content flex pt-10 items-center justify-center">
    <div class="info-item1 flex flex-col bg-slate-50 w-128 h-64 mr-10">
      <a href="#">
        <div class="item1-top flex">
          <div class="item1-top-left">
            <div class="item1-date-container bg-red-500 ml-3 flex flex-col justify-center items-center">
              <p class="pt-1 pr-3.5 pl-3.5 text-12 font-extrabold text-white ">23</p>
              <p class="pb-1 pr-3.5 pl-3.5 text-12  text-white ">SEP</p>
            </div>

          </div>
          <div class="item1-top-right"></div>
        </div>
        <div class="item1-bottom">
          <p class="w-52 text-black text-xs font-light pt-3 pl-3 pb-3">THE 3RD EPI INTERNATIONAL CONFERENCE ON SCIENCE AND ENGINEERING 2019</p>
        </div>
      </a>
      <div></div>
    </div>
    <a href="#">
      <div class="info-item2 flex flex-col  bg-slate-50 w-128 h-64 mr-10">
      <div>
        <div class="item2-top flex">
          <div class="item2-top-left">
            <div class="item2-date-container bg-red-500 ml-3 flex flex-col justify-center items-center">
              <p class="pt-1 pr-3.5 pl-3.5 text-12 font-extrabold text-white ">06</p>
              <p class="pb-1 pr-3.5 pl-3.5 text-12  text-white ">AGU</p>
            </div>

          </div>
          <div class="item2-top-right"></div>
        </div>
        <div class="item2-bottom">
          <p class="w-52 text-black text-xs font-light pt-3 pl-3 pb-3">WORKSHOP & SIMPOSIUM NASIONAL GEOMEKANIKA 5 2019</p>
        </div>
      </div>
      <div></div>
    </div>
    </a>
    <a href="#">
      <div class="info-item3 flex flex-col bg-slate-50 w-128 h-64 mr-10">
      <div>
        <div class="item2-top flex">
          <div class="item2-top-left">
            <div class="item2-date-container bg-red-500 ml-3 flex flex-col justify-center items-center">
              <p class="pt-1 pr-3.5 pl-3.5 text-12 font-extrabold text-white ">11</p>
              <p class="pb-1 pr-3.5 pl-3.5 text-12  text-white ">JUL</p>
            </div>

          </div>
          <div class="item2-top-right"></div>
        </div>
        <div class="item2-bottom">
          <p class="w-52 text-black text-xs font-light pt-3 pl-3 pb-3">Pengembangan Karakter Mahasiswa Baru 2019 Fakultas Teknik Unhas</p>
        </div>
      </div>
      <div></div>
      </div>
    </a>
    
    </div>
  </div>



<!-- ksj -->

<div class="tour ml-8 mr-8 mb-10">
  <div class="judul text-black text-[26px] font-semibold">TOUR 360°</div>
  <section class="tourft">
		<div class="container">
			<div class="row">
				<!-- <div class="col-xl-12" style="text-align:center;">
					<div class="section-title mb-md-0">
						<iframe style="height: 350px; width: 700px;" src="https://www.youtube.com/embed/YZE7Kn84nV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div> -->
				<div class="col-xl-12">
					<div class="section-title mb-md-0">
						<iframe loading="lazy" style="height:400px; width:100%;" src="https://unhas.ac.id/petakampus/virtualtour/index.php?scene=outdoortheater#outdoortheater" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<footer class="footer flex items-center justify-between bg-merahgelap">
  <div class="footer-left flex-column justify-between pl-20 pt-20 pb-20">
    <div class="footer-left-top">
      <div class="logo-unhas">
        <img src="./assets/logo/Group 168.png" alt="logo" width="386" height="72">
      </div>
      <p class="text-white mt-10 font-bold mb-2">Alamat</p>
      <div class="alamat flex ml-0 mt-0 mb-10">
        <div class="alamat-icon">
          <img src="./assets/logo/icons8-location-50.png" class="mr-3" width="20" height="20">
        </div>
        <div class="alamat-text">
          <p class="text-white">Jl. Poros Malino Km. 6 Bontomarannu  92171 Gowa, South Sulawesi Indonesia</p>
        </div>
      </div>
      <p class="text-white mt-10 font-bold mb-2">Kontak</p>
      <div class="kontak flex flex-col">
        <div class="kontak-top flex">
          <div class="kontak-top-left">
            <img src="./assets/logo/icons8-phone-30.png" alt="logo" class="mr-3" width="20" height="20">
          </div>
          <div class="kontak-top-right">
            <p class="text-white">+62 852-9999-9958</p>
          </div>
        </div>
        <div class="kontak-bottom flex">
          <div class="kontak-bottom-left">
            <img src="./assets/logo/icons8-mail-24.png" alt="logo" class="mr-3" width="20" height="20">
          </div>
          <div class="kontak-bottom-right">
            <p class="text-white">teknik@unhas.ac.id</p>
          </div>
        </div>
      </div>
    </div>
    <p class="text-white mt-10 font-bold mb-2">Sosial Media</p>
    <div class="footer-left-bottom flex">
      <img src="./assets/logo/icons8-facebook-50.png" alt="logo" class="mr-2" width="20" height="20">
      <img src="./assets/logo/icons8-instagram-24.png" alt="logo" class="mr-2" width="20" height="20">
      <img src="./assets/logo/icons8-youtube-50.png" alt="logo" class="mr-2" width="20" height="20">
    </div>
  </div>

  <div class="footer-right">
    <p class="text-white font-bold mb-2">Visitor</p>
    <div class="footer-right-top pr-40">
      <a href="https://info.flagcounter.com/vhwc">
        <img alt="flag-counter" src="https://s11.flagcounter.com/count2/vhwc/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/">
      </a>
    </div>
    <p class="text-white mt-10 font-bold mb-2">Didukung Oleh</p>
    <div class="footer-right-bottom flex pr-40" >
      <img src="./assets/logo/Group 182.jpg" alt="logo" class="mr-2" width="70" height="70">
      <img src="./assets/logo/Group 183.jpg" alt="logo" class="mr-2" width="70" height="70">
    </div>
  </div>
</footer>

</template>


<script>
export default {
  data() {
    return {
      currentImageIndex: 0,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    startAutoSlide() {
      setInterval(() => {
        this.toggleImages();
      }, 3000);
    },
    toggleImages() {
      const images = document.querySelectorAll('.image');
      images[this.currentImageIndex].classList.add('hidden');
      this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
      images[this.currentImageIndex].classList.remove('hidden');
    },
  },
};

</script>




<style src="./assets/css/main.css" />

