import React, { createContext, useState, useEffect } from "react";

const BlogContext = createContext();

export default BlogContext;

export const BlogProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("blogData"));
    if (!(storedData && storedData.length > 0)) {
      const newData = [
        {
          id: 1,
          gambar: "/img/blogs/img1.jpeg",
          judul:
            "Audiensi ala Coffee Morning antara Pimp FT Unhas dan CEO & Jajaran Direktur PT Bumi Karsa untuk Inisiasi Kelas Affirmasi Prodi S2 TS FTUH",
          isi: `Audiensi ala Coffee Morning antara Dekan & Delegasi Prodi S2 TS FTUH dg CEO PT Bumi Karsa & Jajaran Direktur, dlm rangka inisiasi Pembukaan Kelas Affirmasi Berbasis Hybrid utk Prodi S2 TS FTUH KS Jasa Konstruksi bagi Tenaga Teknik PT Bumi Karsa @DistroCafe-WismaKalla; 24052023, 08.30-10.00`,
          penulis: "admin FT-UH",
          publishDate: "2023-05-24",
          kategori: ["alumni", "umum"],
          statusPublikasi: "Published",
        },
        {
          id: 2,
          gambar: "/img/blogs/img2.jpg",
          judul:
            "Tim Fakultas Teknik Unhas memenangkan the 1st Winner dan the Best Presentation pada ajang Southeast Paper Competition MARS#10",
          isi: `Pada tanggal 6 Mei 2023, tim Fakultas Teknik yang beranggotakan Aflah Fikri Mahmud (Teknik Elektro '20), Naufal Syahrid Panrita (Teknik Geologi '20), Syawal Fadrilul Fiqhi (Teknik Sipil '20), Raihan Ainur Ridho Fardhin (Teknik Elektro '22), dan Fathinah Nur Jannah (Teknik Informatika '22) memenangkan the 1st Winner dan the Best Presentation pada ajang Southeast Paper Competition MARS#10 di Universitas Negeri Yogyakarta. Kegiatan ini diikuti oleh lebih dari 120 tim dari 33 kampus se-Asia Tenggara. Terdapat beberapa tahap seleksi dalam kompetisi ini, mulai dari pengumpulan abstrak, pengumpulan fullpaper dan infografis, hingga presentasi secara luring. Tim Fakultas Teknik Unhas ini mengajukan gagasan mengenai dekarbonisasi sektor migas melalui utilisasi energi baru terbarukan pada anjungan migas lepas pantai. Penghargaan berupa medali emas, sertifikat, dan uang tunai diberikan kepada tim yang bernama IGNITE ini. Tim IGNITE dibimbing oleh ibu Dr. Ir. Zaenab Muslimin, M.T., IPM.`,
          penulis: "admin FT-UH",
          publishDate: "2023-05-07",
          kategori: ["mahasiswa", "umum", "nasional"],
          statusPublikasi: "Published",
        },
        {
          id: 3,
          gambar: "/img/blogs/img3.jpg",
          judul:
            "Pererat Hubungan Bilateral Jepang-Indonesia Bidang Pendidikan, Konjen Jepang di Makassar Audiensi dengan Dekan FT UNHAS",
          isi: `Disela-sela kunjungan kerjanya di Kabupaten Gowa pada hari Rabu, 3 Mei 2023, Kepala Kantor Konsulat Jenderal (Konsuler/Konjen) Jepang di Makassar, Bapak Ohashi Koichi, menyempatkan berkunjung ke Kampus Fakultas Teknik UNHAS di Bontomarannu, Kabupaten Gowa, Sulsel. Konjen Jepang ini disambut hangat oleh Dekan Fakultas Teknik UNHAS beserta jajaran pimpinan FT UNHAS lainnya. 

          Dekan FTUH, Prof M. Isran Ramli bersama jajaran  selepas menjemput kedatangan Konjen Jepang di Plaza Gedung Kembar (Gedung CoT-Gedung CSA) di Kampus FTUH, langsung membersamai Konjen Jepang ke Lounge Dekan FTUH, di Lt3 Gedung CoT untuk beraudiensi. 
          
          Dalam audiensi ini, Ohashi Koichi di dampingi oleh 2 staf Kantor Konsuler Jepang di Makassar, sedangkan Dekan FTUH, didampingi oleh Wakil Dekan Bidang Perenc., SDM & Alumni FTUH (Dr.Eng. Muhammad Rusman), Wakil Dekan Bidang Riset, Inovasi & Kemitraan FTUH (Dr. Rustan Tarakka), Kepala Pustekno-CoT FTUH (Dr.Eng. M. Ramli), Manajer Bidang Publikasi Ilmiah FTUH (Dr.Eng. Achmad Yasir Baeda), & Ketua Tempat Uji Kompetensi/TUK FTUH (Dr.Eng. Bambang Bakri). 
          
          Dalam sambutan pengantarnya, Konjen Jepang memperkenalkan diri sebagai Konjen Jepang baru di Makassar yang bertugas sejak Maret 2023, & memohon dukungan dari segenap civitas akademika FTUH untuk kelancaran pelaksanaan tugas-tugasnya sebagai Konjen Jepang di Makassar.
          Dekan FTUH, Prof Isran Ramli mengapresiasi balik kunjungan Konjen Jepang ke Kampus FTUH di Gowa, yang dibangun melalui proyek kerjasama Pemerintah Jepang dengan Pemerintah Indonesia. Dalam sambutan baliknya, Prof Isran menyampaikan kondisi pengelolaan Kampus FTUH baik dari sisi akademik maupun non akademik. Prof Isran menyampaikan bahwa sebagian besar Dosen FTUH adalah Alumni dari berbagai Universitas di Jepang. Sehingga, banyak kegiatan-kegiatan kemitraan di bidang riset dan pendidikan yang dilakukan oleh Dosen dan Mahasiswa FTUH dengan para Dosen di Universitas-Universitas Jepang. Untuk itu, Prof Isran menyampaikan harapannya agar hubungan kedua Pihak, antara Kantor Konsuler Jepang di Makassar dengan Fakultas Teknik UNHAS dapat terjalin semakin erat. 
          
          Setelah beraudiensi, Konjen Jepang menyempatkan mengunjungi beberapa gedung dan fasilitas pendidikan yang ada di Kampus FT UNHAS di Gowa, antara lain mengunjungi Kantor Pustekno CoT, Gedung Class Room, Gedung Departemen Arsitektur dan Exhibition Hall. Sebelum meninggalkan Kampus FTUH, Konjen Jepang menyampaikan terimakasihnya atas penerimaan kunjungannya, dan berharap bahwa Kantor Konsulat Jepang di Makassar dan Kampus Fakuktas Teknik UNHAS di Gowa dapat terus mempererat hubungan dengan saling berkontribusi untuk peningkatan hubungan bilateral antara Jepang-Indonesia di bidang pendidikan.`,
          penulis: "admin FT-UH",
          publishDate: "2023-05-03",
          kategori: ["mahasiswa", "umum", "nasional"],
          statusPublikasi: "Published",
        },
        {
          id: 4,
          gambar: "/img/blogs/img4.jpg",
          judul: "Finalisasi Verifikasi Pengakuan PAK Dosen FTUH",
          isi: `Tim Verifikasi Dokumen Pengakuan PAK (Penilaian Angka Kredit) Dosen lingkup FTUH melakukan FGD Finalisasi Verifikasi Dokumen Pengakuan PAK para Dosen di Tingkat Fakultas Teknik UNHAS pada Sabtu-Minggu, 29-30 April 2023. Pada kegiatan FGD ini, dilakukan Rapat Pleno untuk membahas setiap Dokumen Dosen FTUH dari 170an Dosen yang telah mengajukan Dokumen Pengakuan PAK Dosen yang telah dikompilasi ditingkat Departemen masing-masing pada tahapan sebelumnya.

          Rapat Pleno dipimpin langsung oleh Ketua Tim Verifikasi Dokumen Pengakuan PAK Dosen FTUH, Prof. Nasaruddin Salam. Dalam keterangannya di sela-sela FGD, Prof Nasaruddin menyampaikan bahwa setelah kegiatan Finalisasi Verifikasi Dokumen Pengakuan PAK Dosen FTUH ini, selanjutnya Pimpinan Fakultas Teknik menyerahkan hasil verifikasi ke tingkat Rektorat Unhas untuk kemudian diproses sesuai jadwal tahapan yang sudah ditetapkan oleh Pihak Rektorat Unhas yang mengacu kepada batas waktu yang diberikan oleh pihak Kemendikbudristek.
          
          Kegiatan FGD ini, dihadiri langsung oleh Dekan Fakultas Teknik UNHAS, Prof. Isran Ramli yang juga sebagai Penanggungjawab Tim Verifikasi. Dalam keterangannya, Prof Isran menyampaikan bahwa hasil-hasil dari Tim Verifikasi ini disamping akan diproses lebih lanjut sesuai tahapan yang ada pada tingkat yg lebih tinggi/berwenang, Pimpinan FTUH juga akan menindaklanjuti dalam bentuk pengmabilan kebijakan untuk mendukung dosen-dosen FTUH dalam pengajuan kenaikan Jabatan Akademik sesuai dengan skala Angka Kredit Dosen yang telah diakui nantinya. "Pimpinan FTUH akan mendorong dosen-dosen FT untuk menyegarakan pengajuan naik jenjang Jabatan Akademiknya, sesuai dengan skala Angka Kredit yang sudah diperoleh", pungkas Prof Isran. "Dosen yang sudah memenuhi Jumlah Angka Kreditnya untuk naik Jabatan Guru Besar, namun terkendala di syarat/kriteria khusus semisal harus memiliki Jurnal Bereputasi, akan Kita support dalam bentuk kebijakan pendampingan dan sejenisnya", ujar Prof Isran. "Demikian juga dengan dosen-dosen lainnya yang sudah memenuhi jumlah Angka Kredit nya untuk naik jenjang Jabatan Akademik lainnya, misalnya dari Lektor naik ke Lektor Kepala dan dari Asisten Ahli naik ke Lektor. Intinya, tidak boleh lagi ada Dosen FTUH yang lama baru naik pangkat, semua harus segera mengurus kenaikan pangkatnya pasca penetapan Pengakuan Angka Kredit Dosen ini", kunci Prof Isran mengakhiri keterangannya.`,
          penulis: "admin FT-UH",
          publishDate: "2023-04-30",
          kategori: ["dosen", "umum", "nasional"],
          statusPublikasi: "Draft",
        },
        {
          id: 5,
          gambar: "/img/blogs/img5.jpg",
          judul:
            "Workshop Finalisasi Kurikulum 2023 DTL FTUH",
          isi: `Pada Sabtu, 29 April 2023 Dekan FTUH menghadiri Workshop Kurikulum Prodi Sarjana Teknik Lingkungan FTUH. Workshop yang dilaksanakan oleh Departemen Teknik Lingkungan FTUH di Hotel Claro ini, bertujuan untuk memfinalisasi penyelarasan Kurikulum 2021 Prodi S1 Teknik Lingkungan dalam rangka mengadopsi Mata Kuliah Penguatan Kompetensi (MPK) sejumlah 20 SKS melalui Program Kurikulum 2023 UNHAS (K23 UH).
          Workshop yang dihadiri oleh semua dosen DTL FTUH ini, dipimpin langsung oleh Kadep Teknik Lingkungan FTUH, Dr.Eng. Muralia Hustim. Dalam workshop ini, Dekan FTUH, Prof M. Isran Ramli, mengapresiasi hasil Finalisasi Kurikulum 2023 Prodi TL, yang akan diterapkan pada Tahun Ajaran 2023/2024 mulai Agustus 2023 mendatang. "Dengan penerapan K-23 di Prodi S1 TL, diharapkan penguatan kompetensi bagi mahasiswa S1 TL semakin meningkat, sehingga tuntutan pemenuhan Capaian Pembelajaran Lulusan Prodi S1 TL oleh DUDI semakin dapat dipenuhi", pungkas Prof Isran dalam penutupan Workshop.`,
          penulis: "admin FT-UH",
          publishDate: "2023-04-30",
          kategori: ["umum", "nasional"],
          statusPublikasi: "Published",
        },
      ];
      localStorage.setItem("blogData", JSON.stringify(newData));
      storedData = JSON.parse(localStorage.getItem("blogData"));
    }
    setData(storedData);
  }, []);

  // Mengupdate data konteks dan juga menyimpannya ke penyimpanan
  const updateData = (newData) => {
    setData(newData);
    localStorage.setItem("blogData", JSON.stringify(newData));
  };

  return (
    <BlogContext.Provider value={{ data, updateData }}>
      {children}
    </BlogContext.Provider>
  );
};
