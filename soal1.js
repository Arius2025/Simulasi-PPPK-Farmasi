const questions = [
  {
    "category": "SKT",
    "question": "Seorang apoteker menerima resep dengan kandungan obat antibiotik. Apa tindakan yang harus dilakukan apoteker jika pasien ingin menebus obat tersebut tanpa resep?",
    "options": [
      " Memberikan obat dengan dosis rendah.",
      " Menolak memberikan obat dan menyarankan pasien kembali ke dokter.",
      " Memberikan obat dengan alasan kemanusiaan.",
      " Menyarankan pasien untuk membeli obat sejenis yang dijual bebas.",
      " Memberikan obat dan meminta pasien untuk segera membuat resep."
    ],
    "correct": 1,
    "explanation": "Pemberian antibiotik tanpa resep dokter melanggar peraturan kesehatan dan dapat menyebabkan resistensi antibiotik. Apoteker harus menolak permintaan tersebut dan mengedukasi pasien."
  },
  {
    "category": "SKT",
    "question": "Manakah dari berikut ini yang merupakan contoh dari obat psikotropika golongan IV?",
    "options": [
      " Diazepam",
      " Morfin",
      " Petidin",
      " Kokain",
      " Heroin"
    ],
    "correct": 0,
    "explanation": "Diazepam adalah obat psikotropika golongan IV yang digunakan sebagai penenang, obat tidur, dan anti-kejang. Morfin, Petidin, Kokain, dan Heroin termasuk golongan yang lebih tinggi."
  },
  {
    "category": "SKT",
    "question": "Dalam pelayanan kefarmasian, apa yang dimaksud dengan 'dispensing'?",
    "options": [
      " Proses penerimaan resep dari dokter.",
      " Proses penyerahan obat kepada pasien setelah dilakukan pemeriksaan.",
      " Proses penyimpanan obat di gudang farmasi.",
      " Proses pembuatan sediaan farmasi di laboratorium.",
      " Proses konsultasi antara apoteker dan dokter."
    ],
    "correct": 1,
    "explanation": "Dispensing adalah serangkaian proses mulai dari penerimaan resep hingga penyerahan obat yang telah disiapkan kepada pasien, termasuk pemberian informasi yang relevan."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien anak berusia 5 tahun membutuhkan dosis parasetamol. Jika dosis yang direkomendasikan adalah 10-15 mg/kg BB dan berat badan anak adalah 20 kg, berapa dosis maksimal yang dapat diberikan per kali pemberian?",
    "options": [
      " 100 mg",
      " 150 mg",
      " 200 mg",
      " 300 mg",
      " 400 mg"
    ],
    "correct": 3,
    "explanation": "Dosis maksimal parasetamol adalah 15 mg/kg B Dosis maksimal per kali pemberian adalah 15 mg/kg x 20 kg = 300 mg."
  },
  {
    "category": "SKT",
    "question": "Apa fungsi utama dari reagen benedict dalam analisis farmasi?",
    "options": [
      " Untuk mendeteksi adanya protein.",
      " Untuk mendeteksi adanya karbohidrat.",
      " Untuk mendeteksi adanya glukosa dalam urin.",
      " Untuk mendeteksi adanya lemak.",
      " Untuk mendeteksi adanya vitamin."
    ],
    "correct": 2,
    "explanation": "Reagen benedict digunakan untuk mengidentifikasi keberadaan gula pereduksi, seperti glukosa, dalam sampel urin atau darah, yang penting dalam diagnosis diabetes."
  },
  {
    "category": "SKT",
    "question": "Yang mana dari berikut ini yang termasuk dalam kategori sediaan 'steril'?",
    "options": [
      " Tablet",
      " Kapsul",
      " Injeksi",
      " Salep",
      " Sirup"
    ],
    "correct": 2,
    "explanation": "Sediaan steril adalah sediaan yang bebas dari mikroorganisme, seperti injeksi, tetes mata, dan infus. Tablet, kapsul, salep, dan sirup umumnya tidak disterilkan."
  },
  {
    "category": "SKT",
    "question": "Bagaimana prosedur yang benar untuk melakukan 'first in, first out' (FIFO) dalam manajemen stok obat?",
    "options": [
      " Menggunakan obat dengan tanggal kadaluarsa terpendek terlebih dahulu.",
      " Menggunakan obat yang baru diterima terlebih dahulu.",
      " Menggunakan obat dengan harga termurah terlebih dahulu.",
      " Menggunakan obat yang paling sering digunakan terlebih dahulu.",
      " Menggunakan obat dengan kemasan yang paling usang terlebih dahulu."
    ],
    "correct": 0,
    "explanation": "Metode FIFO (First In, First Out) adalah cara manajemen stok di mana obat yang pertama kali masuk gudang (yang biasanya memiliki tanggal kadaluarsa lebih awal) harus dikeluarkan atau digunakan lebih dulu."
  },
  {
    "category": "SKT",
    "question": "Seorang apoteker menerima resep yang menuliskan 'iter 2x'. Apa arti dari singkatan tersebut?",
    "options": [
      " Resep tidak boleh diulang.",
      " Resep boleh diulang dua kali.",
      " Resep harus disalin dua kali.",
      " Resep hanya boleh ditebus sebagian.",
      " Resep harus ditebus dalam dua hari."
    ],
    "correct": 1,
    "explanation": "Singkatan 'iter' atau 'iteratur' berarti dapat diulang. 'Iter 2x' berarti resep tersebut boleh diulang sebanyak dua kali."
  },
  {
    "category": "SKT",
    "question": "Apa kegunaan utama dari 'Laminar Air Flow (LAF)' di laboratorium farmasi?",
    "options": [
      " Untuk mengeringkan bahan baku obat.",
      " Untuk menjaga kelembaban ruangan.",
      " Untuk memastikan area kerja tetap steril dan bebas kontaminan.",
      " Untuk mencampur bahan-bahan kimi",
      " Untuk mengukur pH larutan."
    ],
    "correct": 2,
    "explanation": "LAF digunakan untuk menciptakan area kerja steril dengan aliran udara laminar yang menyaring partikel-partikel, sangat penting untuk proses peracikan sediaan steril."
  },
  {
    "category": "SKT",
    "question": "Yang mana dari berikut ini yang merupakan efek samping umum dari obat golongan NSAID (Non-Steroidal Anti-Inflammatory Drugs)?",
    "options": [
      " Sakit kepal",
      " Pusing.",
      " Mual dan iritasi lambung.",
      " Diar",
      " Sembelit."
    ],
    "correct": 2,
    "explanation": "NSAID bekerja dengan menghambat enzim siklooksigenase yang juga berperan dalam melindungi mukosa lambung, sehingga efek samping yang paling sering terjadi adalah iritasi dan perdarahan lambung."
  },
  {
    "category": "SKT",
    "question": "Sediaan obat yang diberikan melalui hidung untuk efek lokal disebut...",
    "options": [
      " Suppositoria",
      " Inhaler",
      " Tetes hidung",
      " Tablet hisap",
      " Sirup"
    ],
    "correct": 2,
    "explanation": "Tetes hidung (nasal drops) adalah sediaan cair yang digunakan untuk pengobatan lokal pada mukosa hidung."
  },
  {
    "category": "SKT",
    "question": "Bagaimana cara kerja dari obat antihipertensi golongan ACE Inhibitor?",
    "options": [
      " Meningkatkan detak jantung.",
      " Menghambat enzim pengubah angiotensin.",
      " Mengurangi produksi hormon insulin.",
      " Melebarkan pembuluh darah.",
      " Meningkatkan penyerapan air di ginjal."
    ],
    "correct": 1,
    "explanation": "ACE Inhibitor bekerja dengan menghambat enzim yang mengubah angiotensin I menjadi angiotensin II, sehingga mencegah penyempitan pembuluh darah dan menurunkan tekanan darah."
  },
  {
    "category": "SKT",
    "question": "Seorang apoteker diminta untuk menyiapkan sediaan puyer untuk anak-anak. Apa yang harus diperhatikan agar sediaan tersebut homogen?",
    "options": [
      " Mencampur bahan aktif dengan mortir yang besar.",
      " Mencampur semua bahan sekaligus tanpa penggerusan.",
      " Menggerus bahan aktif dengan pengencer secara bertahap.",
      " Mencampur bahan aktif dan pengencer dengan spatula di atas kertas perkamen.",
      " Menggerus semua bahan hingga sangat halus."
    ],
    "correct": 2,
    "explanation": "Untuk memastikan homogenitas puyer, bahan aktif harus digerus bersama pengencer secara bertahap, biasanya dimulai dari bahan yang paling sedikit."
  },
  {
    "category": "SKT",
    "question": "Apa tujuan dari 'analisis kualitatif' dalam kontrol kualitas obat?",
    "options": [
      " Menentukan kadar bahan aktif dalam sediaan.",
      " Menentukan jenis bahan aktif yang terkandung.",
      " Menentukan jumlah pengotor dalam sediaan.",
      " Menentukan stabilitas sediaan dalam jangka panjang.",
      " Menentukan harga jual sediaan obat."
    ],
    "correct": 1,
    "explanation": "Analisis kualitatif bertujuan untuk mengidentifikasi keberadaan atau jenis senyawa dalam sampel, dalam hal ini, memastikan jenis bahan aktif yang terkandung dalam obat."
  },
  {
    "category": "SKT",
    "question": "Manakah dari berikut ini yang merupakan contoh dari 'farmakoekonomi'?",
    "options": [
      " Menganalisis interaksi obat pada pasien.",
      " Menilai biaya pengobatan suatu penyakit dibandingkan dengan manfaatny",
      " Menentukan dosis obat yang tepat untuk pasien.",
      " Melakukan survei kepuasan pasien terhadap pelayanan farmasi.",
      " Mengembangkan formula obat baru."
    ],
    "correct": 1,
    "explanation": "Farmakoekonomi adalah studi yang menganalisis biaya (cost) dan hasil (outcome) dari penggunaan produk dan layanan farmasi, seperti biaya pengobatan vs. efektivitasny"
  },
  {
    "category": "SKT",
    "question": "Seorang pasien datang ke apotek dengan keluhan pusing, mual, dan nyeri ulu hati setelah mengonsumsi obat antiinflamasi non-steroid (NSAID). Sebagai apoteker, apa saran yang paling tepat untuk pasien tersebut?",
    "options": [
      " Menghentikan total penggunaan obat NSAID tersebut.",
      " Mengganti obat NSAID dengan parasetamol.",
      " Mengonsumsi obat NSAID setelah makan dan menambahkan obat pelindung lambung.",
      " Menyarankan pasien untuk minum lebih banyak air.",
      " Memberikan obat anti-mual dan melanjutkan penggunaan obat NSAI"
    ],
    "correct": 2,
    "explanation": "Efek samping gastrointestinal (mual, nyeri ulu hati) adalah umum terjadi pada penggunaan NSAI Saran terbaik adalah mengonsumsi obat setelah makan untuk mengurangi iritasi lambung dan menambahkan obat pelindung lambung (misalnya, omeprazol atau ranitidin) jika diperlukan."
  },
  {
    "category": "SKT",
    "question": "Proses sterilisasi dengan menggunakan uap panas bertekanan tinggi pada suhu 121°C selama 15 menit disebut...",
    "options": [
      " Sterilisasi kering",
      " Sterilisasi filtrasi",
      " Otoklaf",
      " Radiasi",
      " Sterilisasi gas"
    ],
    "correct": 2,
    "explanation": "Otoklaf adalah metode sterilisasi yang menggunakan uap panas bertekanan untuk membunuh mikroorganisme, sangat efektif untuk peralatan medis dan bahan-bahan yang tahan panas."
  },
  {
    "category": "SKT",
    "question": "Dalam pelayanan farmasi klinik, apa yang dimaksud dengan 'monitoring efek samping obat' (MESO)?",
    "options": [
      " Kegiatan mencatat tanggal kadaluarsa obat.",
      " Kegiatan memantau efektivitas terapi obat pada pasien.",
      " Kegiatan memantau setiap kejadian yang tidak diinginkan terkait penggunaan obat.",
      " Kegiatan mencatat jumlah obat yang diresepkan.",
      " Kegiatan memberikan edukasi tentang cara minum obat."
    ],
    "correct": 2,
    "explanation": "MESO adalah kegiatan pengamatan dan pencatatan setiap efek yang tidak diinginkan (Adverse Drug Reaction/ADR) yang mungkin terjadi akibat penggunaan obat pada pasien, untuk memastikan keselamatan pasien."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien dengan diabetes tipe 2 datang untuk menebus obat insulin. Apa yang harus disampaikan apoteker terkait penyimpanan insulin?",
    "options": [
      " Insulin harus disimpan di freezer.",
      " Insulin yang belum dibuka harus disimpan di suhu kamar.",
      " Insulin harus disimpan di kulkas (suhu 2-8°C), tidak di freezer.",
      " Insulin yang sedang digunakan harus disimpan di kulkas.",
      " Insulin boleh disimpan di tempat yang terkena sinar matahari langsung."
    ],
    "correct": 2,
    "explanation": "Insulin yang belum dibuka atau cadangan harus disimpan di lemari pendingin (kulkas) dengan suhu 2-8° Insulin yang sedang digunakan boleh disimpan di suhu kamar, tetapi harus digunakan dalam rentang waktu tertentu."
  },
  {
    "category": "SKT",
    "question": "Yang mana dari berikut ini yang merupakan fungsi dari 'suspending agent' dalam sediaan suspensi?",
    "options": [
      " Meningkatkan kelarutan zat aktif.",
      " Mencegah pengendapan partikel padat.",
      " Memberikan rasa manis pada sediaan.",
      " Mengatur pH sediaan.",
      " Meningkatkan viskositas sediaan agar mudah dituang."
    ],
    "correct": 1,
    "explanation": "Suspending agent berfungsi untuk menjaga partikel padat tetap terdispersi dan stabil dalam medium cair, sehingga mencegah pengendapan yang cepat."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien dengan tekanan darah tinggi disarankan dokter untuk mengonsumsi obat diuretik. Apa mekanisme kerja utama dari diuretik?",
    "options": [
      " Menyempitkan pembuluh darah.",
      " Meningkatkan volume darah.",
      " Menghambat enzim renin.",
      " Meningkatkan ekskresi urin dan garam.",
      " Menurunkan detak jantung."
    ],
    "correct": 3,
    "explanation": "Diuretik bekerja dengan meningkatkan produksi dan ekskresi urin, yang membantu mengeluarkan kelebihan garam (natrium) dan air dari tubuh, sehingga menurunkan volume darah dan tekanan darah."
  },
  {
    "category": "SKT",
    "question": "Apa yang dimaksud dengan 'farmakokinetik'?",
    "options": [
      " Efek obat pada tubuh.",
      " Interaksi obat dengan reseptor.",
      " Proses yang dialami obat di dalam tubuh (ADME: Absorpsi, Distribusi, Metabolisme, Ekskresi).",
      " Efek samping yang tidak diinginkan dari obat.",
      " Biaya yang dikeluarkan untuk pengobatan."
    ],
    "correct": 2,
    "explanation": "Farmakokinetik adalah ilmu yang mempelajari nasib obat di dalam tubuh, meliputi proses penyerapan (absorpsi), penyebaran (distribusi), perubahan (metabolisme), dan pengeluaran (ekskresi)."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien datang ke apotek dan bertanya tentang obat untuk batuk berdahak. Obat apa yang paling sesuai untuk direkomendasikan?",
    "options": [
      " Dekstrometorfan (DMP)",
      " Codeine",
      " Ambroxol",
      " Pseudoefedrin",
      " Loratadine"
    ],
    "correct": 2,
    "explanation": "Ambroxol adalah ekspektoran yang bekerja dengan mengencerkan dahak, sehingga memudahkan pengeluaranny Dekstrometorfan dan Codeine adalah antitusif untuk batuk kering, sedangkan Pseudoefedrin untuk hidung tersumbat, dan Loratadine untuk alergi."
  },
  {
    "category": "SKT",
    "question": "Apa tujuan dari 'uji disolusi' pada sediaan tablet?",
    "options": [
      " Menguji kekerasan tablet.",
      " Menguji waktu hancur tablet.",
      " Menentukan kecepatan pelepasan zat aktif dari sediaan.",
      " Menguji keseragaman bobot tablet.",
      " Menguji kandungan bahan aktif tablet."
    ],
    "correct": 2,
    "explanation": "Uji disolusi mengukur kecepatan dan jumlah zat aktif yang terlarut dari sediaan padat (seperti tablet atau kapsul) ke dalam medium cair, yang mencerminkan ketersediaan hayati (bioavailability) obat."
  },
  {
    "category": "SKT",
    "question": "Singkatan 'prn' pada resep obat berarti...",
    "options": [
      " Setiap pagi.",
      " Sebelum tidur.",
      " Jika diperlukan.",
      " Sebelum makan.",
      " Setelah makan."
    ],
    "correct": 2,
    "explanation": "Prn adalah singkatan dari bahasa Latin 'pro re nata', yang berarti 'jika diperlukan'. Ini menunjukkan bahwa obat hanya boleh digunakan saat pasien merasakan gejala, bukan secara rutin."
  },
  {
    "category": "SKT",
    "question": "Prinsip dasar 'swamedikasi' yang aman adalah...",
    "options": [
      " Menggunakan obat resep tanpa petunjuk dokter.",
      " Menggunakan obat bebas dengan dosis yang lebih tinggi dari anjuran.",
      " Mengobati diri sendiri dengan obat bebas (OTC) yang sesuai indikasi dan dosis.",
      " Membeli obat keras tanpa resep.",
      " Menggunakan obat-obatan herbal tanpa mengetahui efekny"
    ],
    "correct": 2,
    "explanation": "Swamedikasi adalah upaya pengobatan mandiri menggunakan obat bebas (over-the-counter/OTC) yang aman dan rasional, sesuai dengan indikasi dan dosis yang dianjurkan, serta tidak menimbulkan risiko serius."
  },
  {
    "category": "SKT",
    "question": "Jika sebuah sediaan infus memiliki pH 4,5, maka sediaan tersebut bersifat...",
    "options": [
      " Asam",
      " Basa",
      " Netral",
      " Sangat basa",
      " Sangat asam"
    ],
    "correct": 0,
    "explanation": "Skala pH adalah 0-14. pH di bawah 7 bersifat asam, pH 7 netral, dan pH di atas 7 bas pH 4,5 termasuk dalam rentang asam."
  },
  {
    "category": "SKT",
    "question": "Seorang apoteker harus melakukan 'Pencatatan dan Pelaporan Narkotika dan Psikotropika'. Institusi mana yang menjadi tujuan pelaporan tersebut?",
    "options": [
      " BPJS Kesehatan",
      " Kementrian Keuangan",
      " Badan Pengawas Obat dan Makanan (BPOM)",
      " Dinas Kesehatan setempat",
      " Organisasi profesi (IAI)"
    ],
    "correct": 2,
    "explanation": "Pencatatan dan pelaporan penggunaan narkotika dan psikotropika adalah wajib hukumnya dan ditujukan kepada Badan Pengawas Obat dan Makanan (BPOM) sebagai otoritas yang mengawasi peredaran obat-obatan tersebut."
  },
  {
    "category": "SKT",
    "question": "Dalam manajemen gudang farmasi, apa yang dimaksud dengan 'FEFO' (First Expired, First Out)?",
    "options": [
      " Mengeluarkan obat yang masuk pertama kali.",
      " Mengeluarkan obat yang paling sering digunakan.",
      " Mengeluarkan obat dengan tanggal kadaluarsa paling awal.",
      " Mengeluarkan obat yang paling mahal terlebih dahulu.",
      " Mengeluarkan obat yang tersisa sedikit."
    ],
    "correct": 2,
    "explanation": "Metode FEFO (First Expired, First Out) adalah strategi manajemen stok yang mengutamakan penggunaan atau pengeluaran obat yang memiliki tanggal kadaluarsa paling dekat, untuk menghindari kerugian akibat obat kadaluars"
  },
  {
    "category": "SKT",
    "question": "Sediaan sirup obat batuk kering mengandung zat aktif Dextromethorphan HBr. Apa yang dimaksud dengan 'Dextromethorphan HBr'?",
    "options": [
      " Nama merek obat.",
      " Nama umum (generic) zat aktif obat.",
      " Nama zat tambahan (eksipien).",
      " Nama ilmiah dari tanaman asal obat.",
      " Nama pabrik yang memproduksi obat."
    ],
    "correct": 1,
    "explanation": "Dextromethorphan HBr adalah nama generik atau nama umum dari bahan aktif obat yang memiliki efek menekan batuk."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien menebus resep yang berisi obat 'metformin'. Obat ini umumnya digunakan untuk mengobati penyakit...",
    "options": [
      " Hipertensi",
      " Diabetes melitus tipe 2",
      " Kolesterol tinggi",
      " Asma",
      " Gagal jantung"
    ],
    "correct": 1,
    "explanation": "Metformin adalah obat lini pertama yang digunakan untuk mengontrol kadar gula darah pada pasien diabetes melitus tipe 2."
  },
  {
    "category": "SKT",
    "question": "Dalam manajemen obat di rumah sakit, obat yang dikategorikan sebagai 'high alert medication' adalah obat yang...",
    "options": [
      " Memiliki harga sangat mahal.",
      " Memiliki risiko tinggi menyebabkan bahaya serius jika terjadi kesalahan penggunaan.",
      " Cepat kadaluars",
      " Sering diresepkan oleh dokter.",
      " Harus disimpan di suhu dingin."
    ],
    "correct": 1,
    "explanation": "High alert medication adalah obat yang berisiko tinggi menyebabkan bahaya atau cedera serius pada pasien jika terjadi kesalahan dalam penggunaan, seperti insulin, heparin, dan agen kemoterapi."
  },
  {
    "category": "SKT",
    "question": "Pada formulasi sediaan emulsi, 'emulgator' berfungsi sebagai...",
    "options": [
      " Pemberi rasa manis.",
      " Peningkat viskositas.",
      " Penstabil antara fase minyak dan air.",
      " Pengawet sediaan.",
      " Pelarut zat aktif."
    ],
    "correct": 2,
    "explanation": "Emulgator adalah zat yang digunakan untuk menstabilkan emulsi dengan mengurangi tegangan permukaan antara dua cairan yang tidak saling melarut, seperti minyak dan air."
  },
  {
    "category": "SKT",
    "question": "Apa yang dimaksud dengan 'bioavailabilitas' suatu obat?",
    "options": [
      " Kecepatan obat diserap oleh tubuh.",
      " Jumlah obat yang terbuang saat dikonsumsi.",
      " Efek obat pada sistem saraf.",
      " Fraksi obat yang tidak berubah dan mencapai sirkulasi sistemik setelah diberikan.",
      " Waktu yang diperlukan obat untuk mencapai konsentrasi puncak."
    ],
    "correct": 3,
    "explanation": "Bioavailabilitas adalah persentase atau fraksi dari dosis obat yang diberikan yang berhasil mencapai sirkulasi sistemik dalam bentuk tidak berubah dan siap untuk memberikan efek terapetik."
  },
  {
    "category": "SKT",
    "question": "Proses perubahan obat di dalam tubuh menjadi metabolit yang lebih mudah dikeluarkan disebut...",
    "options": [
      " Absorpsi",
      " Distribusi",
      " Metabolisme",
      " Eliminasi",
      " Ekskresi"
    ],
    "correct": 2,
    "explanation": "Metabolisme (atau biotransformasi) adalah proses perubahan kimia obat di dalam tubuh, terutama di hati, menjadi metabolit yang umumnya lebih polar dan lebih mudah untuk diekskresikan."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien datang dengan keluhan gatal-gatal dan biduran setelah mengonsumsi antibiotik. Apa tindakan pertama yang harus dilakukan apoteker?",
    "options": [
      " Langsung mengganti antibiotik dengan jenis lain.",
      " Menyuruh pasien melanjutkan konsumsi obat.",
      " Menganjurkan pasien untuk segera ke dokter karena kemungkinan alergi obat.",
      " Memberikan antihistamin tanpa konsultasi dokter.",
      " Menyarankan pasien mengurangi dosis obat."
    ],
    "correct": 2,
    "explanation": "Munculnya gatal-gatal dan biduran setelah minum antibiotik adalah gejala khas alergi obat. Reaksi alergi bisa berbahaya, sehingga pasien harus segera dianjurkan untuk berkonsultasi dengan dokter."
  },
  {
    "category": "SKT",
    "question": "Yang mana dari berikut ini yang merupakan contoh dari 'sediaan lepas lambat' (sustained-release)?",
    "options": [
      " Tablet kunyah",
      " Tablet sublingual",
      " Tablet effervescent",
      " Tablet salut enterik",
      " Kapsul dengan granula berlapis"
    ],
    "correct": 4,
    "explanation": "Sediaan lepas lambat dirancang untuk melepaskan obat secara perlahan dalam jangka waktu yang lebih lam Kapsul dengan granula berlapis adalah contoh umum, di mana setiap granula memiliki lapisan yang berbeda untuk melepaskan obat pada waktu yang berbed"
  },
  {
    "category": "SKT",
    "question": "Apa tujuan dari melakukan 'studi stabilitas dipercepat' (accelerated stability study) pada produk obat?",
    "options": [
      " Menentukan dosis maksimum obat.",
      " Memperkirakan masa simpan (shelf life) produk dengan cepat.",
      " Menguji efek samping jangka pendek.",
      " Menentukan metode penyimpanan terbaik.",
      " Menguji kelarutan obat."
    ],
    "correct": 1,
    "explanation": "Studi stabilitas dipercepat melibatkan penyimpanan produk pada kondisi ekstrim (suhu dan kelembaban tinggi) untuk mempercepat proses degradasi, sehingga dapat memperkirakan masa simpan produk dalam waktu yang lebih singkat."
  },
  {
    "category": "SKT",
    "question": "Dalam resep, singkatan 'gtt' biasanya merujuk pa.",
    "options": [
      " Gram",
      " Tetes (guttae)",
      " Tablet",
      " Sediaan injeksi",
      " Kapsul"
    ],
    "correct": 1,
    "explanation": "Singkatan 'gtt' adalah singkatan dari bahasa Latin 'guttae' yang berarti tetes, sering digunakan untuk sediaan obat tetes mata atau teling"
  },
  {
    "category": "SKT",
    "question": "Seorang apoteker menerima resep yang berisi 'codeine'. Obat ini termasuk dalam kategori...",
    "options": [
      " Narkotika",
      " Obat bebas",
      " Obat bebas terbatas",
      " Psikotropika",
      " Obat keras"
    ],
    "correct": 0,
    "explanation": "Codeine adalah turunan opium yang termasuk dalam golongan narkotika karena berpotensi menyebabkan ketergantungan."
  },
  {
    "category": "SKT",
    "question": "Apa peran utama apoteker dalam kegiatan 'Home Pharmacy Care'?",
    "options": [
      " Menyediakan obat bebas di rumah pasien.",
      " Melakukan diagnosis penyakit pasien di rumah.",
      " Memberikan pelayanan farmasi di rumah pasien, seperti konseling dan monitoring terapi.",
      " Menjual alat kesehatan secara onlin",
      " Membantu pasien membersihkan rumah."
    ],
    "correct": 2,
    "explanation": "Home Pharmacy Care adalah pelayanan farmasi di rumah pasien, di mana apoteker berperan dalam memberikan konseling, monitoring penggunaan obat, dan evaluasi terapi untuk meningkatkan kepatuhan dan hasil pengobatan pasien."
  },
  {
    "category": "SKT",
    "question": "Yang mana dari berikut ini yang merupakan contoh dari 'polifarmasi'?",
    "options": [
      " Seorang pasien hanya mengonsumsi satu jenis obat.",
      " Seorang pasien menggunakan banyak obat dari berbagai dokter.",
      " Seorang pasien hanya mengonsumsi obat herbal.",
      " Seorang pasien mengonsumsi obat resep dan obat bebas secara terpisah.",
      " Seorang pasien mengonsumsi obat dengan dosis yang lebih rendah dari anjuran."
    ],
    "correct": 1,
    "explanation": "Polifarmasi adalah penggunaan banyak obat secara bersamaan, seringkali diresepkan oleh lebih dari satu dokter, yang meningkatkan risiko interaksi obat dan efek samping."
  },
  {
    "category": "SKT",
    "question": "Metode pembuatan puyer yang menggabungkan bahan padat yang berbeda berat jenisnya agar homogen disebut...",
    "options": [
      " Triturasi",
      " Levigasi",
      " Inkorporasi",
      " Geometric dilution",
      " Eutektik"
    ],
    "correct": 3,
    "explanation": "Geometric dilution adalah metode pencampuran serbuk yang digunakan untuk memastikan bahan-bahan dengan jumlah dan berat jenis yang sangat berbeda dapat tercampur secara homogen, dimulai dengan mencampur bahan aktif dengan pengencer dalam jumlah yang sam"
  },
  {
    "category": "SKT",
    "question": "Seorang pasien datang ke apotek dengan keluhan pusing setelah minum obat antihipertensi. Apa tindakan yang paling tepat dilakukan apoteker?",
    "options": [
      " Menyarankan pasien untuk menghentikan penggunaan obat.",
      " Memberikan obat pusing tanpa menanyakan riwayat penggunaan.",
      " Menganjurkan pasien untuk minum obat pada malam hari dan istirahat yang cukup.",
      " Menyarankan pasien untuk mengurangi dosis tanpa konsultasi dokter.",
      " Memberikan obat pusing dan menyuruhnya kembali jika gejala tidak hilang."
    ],
    "correct": 2,
    "explanation": "Pusing adalah efek samping umum dari obat antihipertensi, terutama saat awal pengobatan. Salah satu cara untuk mengatasinya adalah dengan minum obat di malam hari atau sebelum tidur, sehingga pasien dapat beristirahat. Selain itu, apoteker harus mengedukasi pasien agar tidak menghentikan atau mengubah dosis tanpa anjuran dokter."
  },
  {
    "category": "SKT",
    "question": "Apa fungsi utama dari 'buffer' dalam formulasi sediaan farmasi?",
    "options": [
      " Menstabilkan pH sediaan.",
      " Meningkatkan kelarutan zat aktif.",
      " Memberikan rasa manis.",
      " Menambah volume sediaan.",
      " Mencegah pertumbuhan bakteri."
    ],
    "correct": 0,
    "explanation": "Buffer adalah zat atau campuran yang berfungsi untuk menahan perubahan pH sediaan, sangat penting untuk menjaga stabilitas zat aktif yang peka terhadap perubahan pH."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien menebus resep yang berisi obat antikoagulan. Apa pesan yang paling penting untuk disampaikan apoteker kepada pasien?",
    "options": [
      " Minum obat ini saat perut kosong.",
      " Hentikan obat jika ada luka berdarah.",
      " Obat ini dapat menyebabkan mudah berdarah, hati-hati saat beraktivitas.",
      " Obat ini harus disimpan di dalam lemari es.",
      " Obat ini harus dihabiskan dalam 3 hari."
    ],
    "correct": 2,
    "explanation": "Antikoagulan adalah obat pengencer darah. Efek samping yang paling signifikan adalah risiko perdarahan. Apoteker harus menekankan pentingnya berhati-hati untuk menghindari luka dan segera mencari pertolongan medis jika terjadi perdarahan yang tidak bias"
  },
  {
    "category": "SKT",
    "question": "Yang mana dari berikut ini yang merupakan contoh dari 'psikotropika golongan II'?",
    "options": [
      " Diazepam",
      " Amfetamin",
      " Alprazolam",
      " Fenobarbital",
      " Lorazepam"
    ],
    "correct": 1,
    "explanation": "Menurut Undang-Undang, Amfetamin merupakan psikotropika golongan II yang berkhasiat sebagai stimulan."
  },
  {
    "category": "SKT",
    "question": "Apa yang dimaksud dengan 'Interaksi Farmakodinamik'?",
    "options": [
      " Perubahan kecepatan absorbsi obat.",
      " Perubahan efek obat akibat obat lain pada reseptor yang sam",
      " Perubahan metabolisme obat di hati.",
      " Perubahan distribusi obat dalam tubuh.",
      " Perubahan kecepatan ekskresi obat."
    ],
    "correct": 1,
    "explanation": "Interaksi Farmakodinamik terjadi ketika satu obat memengaruhi efek obat lain pada reseptor atau sistem fisiologis yang sama, baik memperkuat (sinergis) atau melemahkan (antagonis) efekny"
  },
  {
    "category": "SKT",
    "question": "Dalam uji 'keregasan tablet' (friability test), apa yang diukur?",
    "options": [
      " Waktu yang dibutuhkan tablet untuk hancur.",
      " Ketahanan tablet terhadap goncangan dan gesekan selama distribusi.",
      " Kekerasan tablet saat ditekan.",
      " Keseragaman bobot tablet.",
      " Kecepatan zat aktif terlepas dari tablet."
    ],
    "correct": 1,
    "explanation": "Uji keregasan mengukur ketahanan tablet terhadap goncangan dan abrasi selama proses pengemasan, penyimpanan, dan pengiriman. Tujuannya adalah memastikan tablet tidak mudah rapuh."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien dengan penyakit jantung kronis datang dengan resep 'Digoxin'. Apa yang harus disampaikan apoteker sebagai edukasi?",
    "options": [
      " Minum obat ini saat perut kosong untuk penyerapan optimal.",
      " Obat ini untuk mengontrol tekanan darah.",
      " Lakukan pengukuran denyut nadi sebelum minum obat.",
      " Obat ini harus disimpan di kulkas.",
      " Obat ini dapat dihentikan jika gejala membaik."
    ],
    "correct": 2,
    "explanation": "Digoxin adalah obat dengan rentang terapetik sempit. Dosis berlebihan dapat menyebabkan bradikardia (denyut nadi lambat). Apoteker harus mengedukasi pasien untuk mengukur denyut nadi sebelum konsumsi; jika terlalu lambat, segera konsultasi ke dokter."
  },
  {
    "category": "SKT",
    "question": "Apa fungsi 'gelatin' dalam pembuatan sediaan kapsul?",
    "options": [
      " Sebagai zat aktif.",
      " Sebagai zat pewarn",
      " Sebagai bahan pembentuk cangkang kapsul.",
      " Sebagai pengawet.",
      " Sebagai penstabil suspensi."
    ],
    "correct": 2,
    "explanation": "Gelatin adalah polimer yang paling umum digunakan sebagai bahan dasar untuk membuat cangkang kapsul keras dan lunak karena sifatnya yang mudah larut dan tidak beracun."
  },
  {
    "category": "SKT",
    "question": "Penyakit yang disebabkan oleh kekurangan produksi hormon insulin atau kegagalan sel tubuh merespons insulin disebut...",
    "options": [
      " Hipertensi",
      " Gagal ginjal",
      " Hiperkolesterolemia",
      " Diabetes melitus",
      " Asma"
    ],
    "correct": 3,
    "explanation": "Diabetes melitus adalah kondisi kronis yang ditandai oleh kadar gula darah tinggi (hiperglikemia), baik karena tubuh tidak menghasilkan cukup insulin (tipe 1) atau tidak dapat menggunakan insulin secara efektif (tipe 2)."
  },
  {
    "category": "SKT",
    "question": "Yang mana dari berikut ini yang merupakan contoh dari 'Obat Bebas Terbatas' (OBT)?",
    "options": [
      " Parasetamol",
      " Aspirin",
      " Amoksisilin",
      " CTM (Chlorpheniramine Maleate)",
      " Morfin"
    ],
    "correct": 3,
    "explanation": "CTM termasuk dalam golongan obat bebas terbatas (lingkaran biru dengan garis tepi hitam). Obat ini dapat dibeli tanpa resep, namun dengan dosis dan peringatan tertentu."
  },
  {
    "category": "SKT",
    "question": "Apa yang dimaksud dengan 'efek samping' (adverse drug reaction)?",
    "options": [
      " Efek obat yang diinginkan.",
      " Efek farmakologi utama obat.",
      " Respon yang tidak diinginkan dan merugikan akibat penggunaan obat pada dosis normal.",
      " Reaksi alergi terhadap obat.",
      " Efek yang terjadi akibat overdosis obat."
    ],
    "correct": 2,
    "explanation": "Efek samping adalah respons yang tidak diharapkan dan merugikan yang timbul dari penggunaan obat pada dosis normal, berbeda dengan reaksi alergi yang merupakan respons imun."
  },
  {
    "category": "SKT",
    "question": "Yang mana dari berikut ini yang merupakan contoh dari 'obat generik berlogo'?",
    "options": [
      " Obat yang dipatenkan oleh perusahaan farmasi.",
      " Obat yang diproduksi dengan nama dagang tertentu.",
      " Obat yang mengandung zat aktif sama dengan obat originator dan diproduksi tanpa nama dagang.",
      " Obat herbal yang sudah terstandar.",
      " Obat yang dijual bebas di pasaran."
    ],
    "correct": 2,
    "explanation": "Obat generik berlogo adalah obat yang mengandung zat aktif yang sama dengan obat paten (originator) tetapi dijual dengan nama zat aktifnya dan diberi logo khusus oleh pemerintah."
  },
  {
    "category": "SKT",
    "question": "Tujuan utama dari 'studi pra-formulasi' dalam pengembangan obat adalah...",
    "options": [
      " Menentukan harga jual obat.",
      " Mempelajari sifat fisikokimia zat aktif untuk formulasi yang optimal.",
      " Menguji efek obat pada hewan cob",
      " Melakukan survei pasar untuk produk baru.",
      " Menguji stabilitas produk jadi."
    ],
    "correct": 1,
    "explanation": "Studi pra-formulasi adalah tahap awal dalam pengembangan obat, di mana sifat-sifat fisikokimia zat aktif (seperti kelarutan, titik leleh, dan stabilitas) dipelajari untuk merancang formulasi sediaan yang paling efektif dan stabil."
  },
  {
    "category": "SKT",
    "question": "Apa yang dimaksud dengan 'sinkronisasi resep' dalam pelayanan farmasi?",
    "options": [
      " Penyesuaian resep dengan stok obat yang tersedi",
      " Pengumpulan resep dari pasien yang berbed",
      " Menjadwalkan pengisian ulang resep pasien agar semua obat habis dalam waktu yang sam",
      " Memastikan resep ditulis dengan jelas oleh dokter.",
      " Pencatatan resep secara digital."
    ],
    "correct": 2,
    "explanation": "Sinkronisasi resep (medication synchronization) adalah program yang bertujuan untuk menyelaraskan pengisian ulang semua resep pasien, sehingga mereka dapat mengambil semua obat kronisnya dalam satu kunjungan bulanan ke apotek."
  },
  {
    "category": "SKT",
    "question": "Jika sebuah sediaan tablet tidak hancur dalam uji waktu hancur, maka itu menunjukkan...",
    "options": [
      " Tablet memiliki kekerasan yang sangat baik.",
      " Tablet tersebut tidak memenuhi standar mutu.",
      " Tablet tersebut dirancang sebagai sediaan lepas lambat.",
      " Tablet tersebut mengandung zat aktif yang mudah larut.",
      " Tablet tersebut memiliki bobot yang tidak seragam."
    ],
    "correct": 1,
    "explanation": "Waktu hancur adalah salah satu parameter kritis dalam kontrol kualitas tablet. Jika tablet tidak hancur dalam waktu yang ditentukan, zat aktif tidak akan terlarut dan terserap dengan baik, sehingga obat tidak akan memberikan efek terapetik yang diharapkan."
  },
  {
    "category": "SKT",
    "question": "Seorang apoteker menerima resep dengan dosis obat yang tidak lazim. Apa tindakan yang harus dilakukan apoteker?",
    "options": [
      " Langsung meracik obat sesuai resep.",
      " Mengurangi dosis obat sesuai standar.",
      " Menolak resep dan meminta pasien kembali ke dokter.",
      " Menghubungi dokter penulis resep untuk konfirmasi.",
      " Memberikan obat dengan dosis yang aman."
    ],
    "correct": 3,
    "explanation": "Jika ditemukan ketidaksesuaian dosis, apoteker harus melakukan konfirmasi dengan dokter penulis resep. Hal ini untuk memastikan keamanan pasien dan menghindari kesalahan medis."
  },
  {
    "category": "SKT",
    "question": "Apa yang dimaksud dengan 'farmakodinamik'?",
    "options": [
      " Proses yang dialami obat di dalam tubuh (ADME).",
      " Studi tentang interaksi obat dengan lingkungan.",
      " Efek obat pada tubuh dan mekanisme kerjany",
      " Analisis biaya dan manfaat pengobatan.",
      " Cara penyimpanan obat yang benar."
    ],
    "correct": 2,
    "explanation": "Farmakodinamik adalah cabang ilmu farmakologi yang mempelajari efek biokimia dan fisiologi obat pada tubuh serta mekanisme kerja obat."
  },
  {
    "category": "SKT",
    "question": "Sediaan obat yang dirancang untuk melepas zat aktifnya secara bertahap pada usus dan tidak di lambung disebut...",
    "options": [
      " Tablet kunyah",
      " Tablet effervescent",
      " Tablet salut gula",
      " Tablet salut enterik",
      " Tablet sublingual"
    ],
    "correct": 3,
    "explanation": "Tablet salut enterik memiliki lapisan khusus yang tahan terhadap asam lambung dan hanya akan hancur dan melepaskan zat aktifnya setelah mencapai lingkungan basa di usus."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien datang dengan resep yang berisi 'warfarin'. Sebagai apoteker, Anda harus mengedukasi pasien untuk berhati-hati dalam konsumsi makanan yang mengandung tinggi...",
    "options": [
      " Vitamin C",
      " Vitamin D",
      " Vitamin K",
      " Protein",
      " Karbohidrat"
    ],
    "correct": 2,
    "explanation": "Warfarin adalah antikoagulan yang kerjanya dipengaruhi oleh Vitamin K. Konsumsi makanan yang kaya Vitamin K (seperti sayuran hijau) dapat menurunkan efektivitas warfarin."
  },
  {
    "category": "SKT",
    "question": "Di bawah ini, manakah yang merupakan salah satu dari '7 langkah Pelayanan Farmasi Klinik'?",
    "options": [
      " Mencatat semua obat yang tersedia di apotek.",
      " Melakukan peninjauan resep dan riwayat pengobatan pasien.",
      " Menyiapkan laporan keuangan harian.",
      " Menerima pembayaran dari pasien.",
      " Memesan obat-obatan baru dari distributor."
    ],
    "correct": 1,
    "explanation": "Peninjauan resep (prescription review) adalah salah satu langkah utama dalam pelayanan farmasi klinik untuk memastikan keamanan dan efektivitas terapi obat bagi pasien."
  },
  {
    "category": "SKT",
    "question": "Seorang apoteker menerima resep yang berisi 'omeprazole'. Apa mekanisme kerja utama dari obat ini?",
    "options": [
      " Menetralkan asam lambung secara langsung.",
      " Menghambat produksi asam lambung dengan memblokir reseptor H2.",
      " Mengurangi motilitas usus.",
      " Menghambat pompa proton di lambung untuk mengurangi produksi asam.",
      " Melapisi dinding lambung."
    ],
    "correct": 3,
    "explanation": "Omeprazole adalah Proton Pump Inhibitor (PPI) yang bekerja dengan menghambat enzim (pompa proton) di sel-sel parietal lambung yang bertanggung jawab memproduksi asam."
  },
  {
    "category": "SKT",
    "question": "Berapakah kadar alkohol yang diizinkan dalam sediaan obat sirup menurut Farmakope Indonesia?",
    "options": [
      " Tidak boleh mengandung alkohol.",
      " Maksimal 1%.",
      " Maksimal 5%.",
      " Maksimal 10%.",
      " Tidak ada batasan khusus."
    ],
    "correct": 2,
    "explanation": "Menurut Farmakope Indonesia, kandungan alkohol pada sediaan sirup tidak boleh lebih dari 5% (terutama untuk anak-anak)."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien bertanya tentang efek samping dari obat 'Metronidazole'. Efek samping yang paling sering dilaporkan adalah...",
    "options": [
      " Sakit kepal",
      " Rasa logam di mulut.",
      " Diar",
      " Pusing.",
      " Rambut rontok."
    ],
    "correct": 1,
    "explanation": "Rasa logam atau pahit di mulut (metallic taste) adalah efek samping yang sangat umum dan khas dari penggunaan Metronidazol"
  },
  {
    "category": "SKT",
    "question": "Proses pencampuran dua serbuk yang mudah meleleh saat digerus bersama, seperti camphor dan menthol, disebut...",
    "options": [
      " Levigasi",
      " Triturasi",
      " Eutektik",
      " Kompresi",
      " Homogenisasi"
    ],
    "correct": 2,
    "explanation": "Campuran eutektik terjadi ketika dua atau lebih zat padat dicampur dan meleleh pada suhu di bawah titik leleh masing-masing zat."
  },
  {
    "category": "SKT",
    "question": "Untuk sediaan tetes mata, pengatur tonisitas yang umum digunakan adalah...",
    "options": [
      " Natrium Klorida",
      " Gliserin",
      " Asam Sitrat",
      " Natrium Benzoat",
      " Povidon"
    ],
    "correct": 0,
    "explanation": "Natrium klorida (NaCl) sering digunakan untuk menyesuaikan tonisitas sediaan tetes mata agar isotonis dengan cairan mata, sehingga tidak menyebabkan iritasi."
  },
  {
    "category": "SKT",
    "question": "Apa tujuan utama dari 'Good Manufacturing Practice' (GMP) dalam industri farmasi?",
    "options": [
      " Meningkatkan penjualan produk.",
      " Menurunkan biaya produksi.",
      " Memastikan produk dibuat secara konsisten dan sesuai standar kualitas.",
      " Mengembangkan produk baru.",
      " Melakukan pemasaran produk."
    ],
    "correct": 2,
    "explanation": "GMP atau CPOB (Cara Pembuatan Obat yang Baik) adalah pedoman yang memastikan bahwa produk farmasi dibuat dan dikontrol secara konsisten sesuai dengan standar kualitas yang ditetapkan."
  },
  {
    "category": "SKT",
    "question": "Bagaimana cara kerja dari obat anti-asma golongan agonis beta-2?",
    "options": [
      " Mengurangi produksi lendir.",
      " Melemaskan otot polos pada bronkus sehingga saluran napas melebar.",
      " Menghambat respons alergi.",
      " Menekan batuk.",
      " Mengurangi peradangan pada saluran napas."
    ],
    "correct": 1,
    "explanation": "Agonis beta-2, seperti salbutamol, bekerja dengan merangsang reseptor beta-2 di otot polos bronkus, menyebabkan bronkodilatasi (melebarnya saluran napas)."
  },
  {
    "category": "SKT",
    "question": "Apa perbedaan utama antara obat generik dan obat paten?",
    "options": [
      " Obat generik lebih mahal.",
      " Obat paten memiliki efek samping yang lebih sedikit.",
      " Obat generik dijual dengan nama zat aktifnya, obat paten dengan nama dagang.",
      " Obat generik tidak efektif.",
      " Obat paten tidak memiliki lisensi BPOM."
    ],
    "correct": 2,
    "explanation": "Perbedaan utama adalah pada penamaanny Obat generik dinamai sesuai zat aktifnya, sedangkan obat paten memiliki nama dagang yang dilindungi hak paten."
  },
  {
    "category": "SKT",
    "question": "Dalam pelayanan farmasi, istilah 'POR' (Patient Outcome Research) mengacu pa.",
    "options": [
      " Penelitian tentang harga obat.",
      " Penelitian yang mengukur hasil klinis dan ekonomi dari intervensi farmasi.",
      " Penelitian tentang cara penyimpanan obat.",
      " Penelitian tentang interaksi obat.",
      " Penelitian tentang dosis obat."
    ],
    "correct": 1,
    "explanation": "Patient Outcome Research adalah penelitian yang berfokus pada hasil yang diperoleh pasien dari pengobatan, termasuk hasil klinis (misalnya, penurunan tekanan darah) dan hasil ekonomi (misalnya, pengurangan biaya rumah sakit)."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien dengan penyakit ginjal kronis datang ke apotek. Apoteker harus memberikan perhatian khusus terhadap obat-obatan yang...",
    "options": [
      " Dimetabolisme di hati.",
      " Diabsorpsi di usus.",
      " Diekskresikan melalui ginjal.",
      " Diberikan secara topikal.",
      " Bersifat asam."
    ],
    "correct": 2,
    "explanation": "Obat-obatan yang diekskresikan melalui ginjal dapat menumpuk dalam tubuh pasien dengan penyakit ginjal kronis, menyebabkan toksisitas. Dosisnya perlu disesuaikan."
  },
  {
    "category": "SKT",
    "question": "Manakah dari berikut ini yang merupakan contoh dari 'sediaan injeksi subkutan'?",
    "options": [
      " Insulin",
      " Infus intravena",
      " Vaksin polio oral",
      " Salep mata",
      " Obat tetes hidung"
    ],
    "correct": 0,
    "explanation": "Injeksi subkutan adalah injeksi yang diberikan di bawah kulit. Insulin sering diberikan melalui rute ini."
  },
  {
    "category": "SKT",
    "question": "Apa kegunaan dari 'aerosol' dalam sediaan farmasi?",
    "options": [
      " Untuk meningkatkan kelarutan obat.",
      " Untuk mengendalikan pelepasan obat secara perlahan.",
      " Untuk memberikan obat dalam bentuk kabut halus ke saluran pernapasan.",
      " Untuk melapisi tablet.",
      " Untuk mengurangi efek samping obat."
    ],
    "correct": 2,
    "explanation": "Sediaan aerosol digunakan untuk terapi pernapasan (inhalasi), memungkinkan obat mencapai paru-paru secara langsung dalam bentuk partikel halus."
  },
  {
    "category": "SKT",
    "question": "Proses penghancuran sediaan tablet menjadi granul atau serbuk halus sebelum larut di tubuh disebut...",
    "options": [
      " Absorpsi",
      " Distribusi",
      " Disolusi",
      " Disintegrasi",
      " Ekskresi"
    ],
    "correct": 3,
    "explanation": "Disintegrasi adalah tahap pertama dalam pelepasan obat dari sediaan padat, yaitu proses hancurnya tablet menjadi partikel-partikel kecil."
  },
  {
    "category": "SKT",
    "question": "Apa yang dimaksud dengan 'Kompetensi Teknis' dalam ujian PPPK Farmasi?",
    "options": [
      " Pengetahuan tentang cara berinteraksi dengan masyarakat.",
      " Pengetahuan tentang struktur organisasi.",
      " Kemampuan untuk mengelola pekerjaan farmasi secara efektif.",
      " Pengetahuan, keterampilan, dan sikap kerja yang relevan dengan bidang farmasi.",
      " Kemampuan berkomunikasi dengan baik."
    ],
    "correct": 3,
    "explanation": "Kompetensi teknis adalah kemampuan khusus yang dibutuhkan untuk melakukan pekerjaan di bidang farmasi, mencakup pengetahuan, keterampilan, dan etika profesi."
  },
  {
    "category": "SKT",
    "question": "Seorang apoteker diminta untuk memberikan sediaan obat untuk pasien yang tidak bisa menelan tablet. Sediaan apa yang paling cocok?",
    "options": [
      " Kapsul",
      " Tablet Salut Gula",
      " Tablet Salut Film",
      " Sirup atau Suspensi",
      " Tablet Salut Enterik"
    ],
    "correct": 3,
    "explanation": "Untuk pasien yang kesulitan menelan, sediaan cair seperti sirup atau suspensi adalah pilihan terbaik karena lebih mudah ditelan."
  },
  {
    "category": "SKT",
    "question": "Apa yang dimaksud dengan 'efek aditif' dalam interaksi obat?",
    "options": [
      " Efek satu obat meningkatkan efek obat lain.",
      " Efek kombinasi dua obat sama dengan jumlah efek individu masing-masing obat.",
      " Efek satu obat mengurangi efek obat lain.",
      " Efek kombinasi obat lebih besar dari jumlah efek individu.",
      " Obat tidak memiliki efek samping jika dikonsumsi bersam"
    ],
    "correct": 1,
    "explanation": "Efek aditif terjadi ketika efek total dari dua obat yang diberikan bersamaan adalah sama dengan jumlah efek masing-masing obat (misalnya, 1+1=2)."
  },
  {
    "category": "SKT",
    "question": "Apa perbedaan antara sediaan 'kapsul keras' dan 'kapsul lunak'?",
    "options": [
      " Kapsul keras terbuat dari gelatin, kapsul lunak dari pati.",
      " Kapsul keras berisi cairan, kapsul lunak berisi serbuk.",
      " Kapsul keras memiliki dua bagian, kapsul lunak hanya satu bagian.",
      " Kapsul keras lebih mudah ditelan.",
      " Kapsul lunak lebih stabil dari kapsul keras."
    ],
    "correct": 2,
    "explanation": "Kapsul keras terdiri dari badan dan tutup yang terpisah, sedangkan kapsul lunak adalah cangkang tunggal yang berisi cairan atau suspensi."
  },
  {
    "category": "SKT",
    "question": "Apa yang dimaksud dengan 'tachyphylaxis'?",
    "options": [
      " Respons tubuh terhadap obat menurun drastis setelah pemberian berulang dalam waktu singkat.",
      " Peningkatan respons tubuh terhadap obat setelah pemberian berulang.",
      " Efek samping yang tidak diinginkan dari obat.",
      " Alergi terhadap obat tertentu.",
      " Kecepatan absorpsi obat yang sangat cepat."
    ],
    "correct": 0,
    "explanation": "Tachyphylaxis adalah penurunan respons yang cepat terhadap dosis obat yang berulang, sering terjadi dengan obat-obatan seperti epinefrin dan nitrat."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien menebus resep yang bertuliskan 's.i.d'. Apa artinya?",
    "options": [
      " Satu kali sehari.",
      " Dua kali sehari.",
      " Tiga kali sehari.",
      " Empat kali sehari.",
      " Hanya jika perlu."
    ],
    "correct": 3,
    "explanation": "'s.i.d' adalah singkatan dari Latin 'semel in die' yang berarti 'empat kali sehari'."
  },
  {
    "category": "SKT",
    "question": "Tujuan utama dari 'uji sterilitas' pada sediaan injeksi adalah...",
    "options": [
      " Memastikan obat mudah diserap tubuh.",
      " Menghitung jumlah partikel dalam sediaan.",
      " Memastikan sediaan bebas dari mikroorganisme hidup.",
      " Menentukan kekerasan sediaan.",
      " Memastikan pH sediaan sesuai."
    ],
    "correct": 2,
    "explanation": "Uji sterilitas dilakukan untuk memastikan bahwa sediaan injeksi bebas dari kontaminasi bakteri, jamur, atau mikroorganisme lain, yang dapat menyebabkan infeksi serius."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien datang dengan resep yang berisi 'Captopril'. Apoteker harus memberikan edukasi tentang efek samping umum berup..",
    "options": [
      " Diare",
      " Batuk kering",
      " Peningkatan berat badan",
      " Rambut rontok",
      " Kulit kering"
    ],
    "correct": 1,
    "explanation": "Batuk kering adalah efek samping yang sangat umum dari penggunaan ACE inhibitor seperti Captopril."
  },
  {
    "category": "SKT",
    "question": "Penyakit yang ditandai dengan peradangan pada sendi akibat penumpukan asam urat disebut...",
    "options": [
      " Hipertensi",
      " Arthritis reumatoid",
      " Gout",
      " Osteoporosis",
      " Lupus"
    ],
    "correct": 2,
    "explanation": "Gout (pirai) adalah bentuk radang sendi yang sangat nyeri, yang disebabkan oleh penumpukan kristal asam urat di dalam sendi."
  },
  {
    "category": "SKT",
    "question": "Manakah dari berikut ini yang merupakan contoh dari 'sediaan injeksi intramuskular'?",
    "options": [
      " Injeksi insulin",
      " Vaksin Tetanus",
      " Infus glukosa",
      " Injeksi heparin",
      " Injeksi lidokain"
    ],
    "correct": 1,
    "explanation": "Vaksin Tetanus umumnya diberikan secara intramuskular, yaitu ke dalam otot, untuk memastikan penyerapan yang optimal."
  },
  {
    "category": "SKT",
    "question": "Apa fungsi utama dari 'karagenan' dalam formulasi sediaan farmasi?",
    "options": [
      " Sebagai pengawet.",
      " Sebagai zat pewarn",
      " Sebagai gelling agent (pembentuk gel).",
      " Sebagai pelarut.",
      " Sebagai penambah ras"
    ],
    "correct": 2,
    "explanation": "Karagenan adalah hidrokoloid alami yang sering digunakan sebagai gelling agent, pengental, dan penstabil dalam berbagai sediaan farmasi dan makanan."
  },
  {
    "category": "SKT",
    "question": "Seorang apoteker diminta untuk menyiapkan sediaan emulsi. Alat utama yang dibutuhkan adalah...",
    "options": [
      " Mortir dan stamper.",
      " Blender.",
      " Homogenizer atau mixer.",
      " Autoklaf.",
      " Oven."
    ],
    "correct": 2,
    "explanation": "Homogenizer atau mixer digunakan untuk mencampur dua cairan yang tidak saling melarut (fase minyak dan air) menjadi emulsi yang stabil."
  },
  {
    "category": "SKT",
    "question": "Apa yang dimaksud dengan 'terapi komplementer'?",
    "options": [
      " Penggunaan obat-obatan yang mahal.",
      " Pengobatan yang hanya menggunakan satu jenis obat.",
      " Penggunaan metode pengobatan di luar kedokteran konvensional yang digunakan bersamaan dengan terapi utam",
      " Pengobatan yang hanya menggunakan obat resep.",
      " Pengobatan yang menggunakan dosis tinggi."
    ],
    "correct": 2,
    "explanation": "Terapi komplementer adalah pengobatan pelengkap yang digunakan bersamaan dengan terapi medis konvensional untuk meningkatkan kesehatan pasien, seperti akupunktur, yoga, atau herbal."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien datang ke apotek dengan keluhan nyeri dan demam. Kombinasi obat yang paling umum direkomendasikan untuk swamedikasi adalah...",
    "options": [
      " Parasetamol + Amoksisilin",
      " Ibuprofen + Antibiotik",
      " Parasetamol + Ibuprofen",
      " Aspirin + Simvastatin",
      " Loratadine + Parasetamol"
    ],
    "correct": 2,
    "explanation": "Kombinasi Parasetamol (untuk demam) dan Ibuprofen (untuk nyeri dan peradangan) adalah kombinasi umum dalam swamedikasi untuk gejala flu dan nyeri ringan hingga sedang."
  },
  {
    "category": "SKT",
    "question": "Apa tujuan dari 'uji stabilitas jangka panjang' pada produk obat?",
    "options": [
      " Memprediksi masa simpan produk dengan cepat.",
      " Menentukan pengaruh cahaya terhadap produk.",
      " Menentukan masa simpan produk dalam kondisi penyimpanan normal.",
      " Menguji efek samping yang jarang terjadi.",
      " Menguji kekerasan sediaan tablet."
    ],
    "correct": 2,
    "explanation": "Uji stabilitas jangka panjang (long-term stability study) dilakukan dalam kondisi penyimpanan yang direkomendasikan untuk menentukan masa simpan (shelf life) yang sebenarnya dari produk."
  },
  {
    "category": "SKT",
    "question": "Dalam resep, singkatan 'pc' berarti...",
    "options": [
      " Sebelum tidur.",
      " Setelah makan.",
      " Setiap pagi.",
      " Di bawah lidah.",
      " Jika perlu."
    ],
    "correct": 1,
    "explanation": "Singkatan 'pc' berasal dari bahasa Latin 'post cibum', yang berarti 'setelah makan'. Ini digunakan untuk obat yang harus diminum setelah makan."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien datang dengan keluhan batuk berdahak dan hidung tersumbat. Obat yang dapat mengatasi kedua gejala tersebut adalah...",
    "options": [
      " Dekstrometorfan",
      " Codeine",
      " Guaifenesin dan Pseudoefedrin",
      " Loratadine",
      " Amoxicillin"
    ],
    "correct": 2,
    "explanation": "Guaifenesin adalah ekspektoran yang membantu mengencerkan dahak, sedangkan Pseudoefedrin adalah dekongestan yang meredakan hidung tersumbat. Kombinasi keduanya efektif untuk gejala tersebut."
  },
  {
    "category": "SKT",
    "question": "Apa yang dimaksud dengan 'Komunikasi, Informasi, dan Edukasi' (KIE) dalam pelayanan farmasi?",
    "options": [
      " Kegiatan promosi produk farmasi.",
      " Proses menyampaikan informasi obat kepada pasien.",
      " Proses mendokumentasikan riwayat pasien.",
      " Kegiatan pengelolaan stok obat.",
      " Proses pelayanan resep."
    ],
    "correct": 1,
    "explanation": "KIE adalah salah satu peran apoteker dalam memberikan informasi yang jelas dan akurat tentang obat-obatan, cara penggunaannya, efek samping, dan hal-hal lain yang penting bagi pasien."
  },
  {
    "category": "SKT",
    "question": "Seorang pasien datang ke apotek dengan keluhan gatal-gatal pada kulit. Obat apa yang paling cocok untuk swamedikasi awal?",
    "options": [
      " Parasetamol",
      " Antihistamin (seperti Loratadine)",
      " Antibiotik",
      " Obat anti-inflamasi",
      " Obat batuk"
    ],
    "correct": 1,
    "explanation": "Gatal-gatal pada kulit sering disebabkan oleh reaksi alergi. Antihistamin adalah obat lini pertama yang digunakan untuk mengatasi gejala alergi."
  },
  {
    "category": "SKT",
    "question": "Apa tujuan utama dari 'Validasi Metode Analisis' dalam industri farmasi?",
    "options": [
      " Untuk memastikan harga obat sesuai standar.",
      " Untuk menguji stabilitas obat dalam berbagai kondisi lingkungan.",
      " Untuk memastikan metode analisis menghasilkan data yang akurat, presisi, dan dapat diandalkan.",
      " Untuk menentukan dosis obat yang optimal untuk pasien.",
      " Untuk memprediksi efek samping obat."
    ],
    "correct": 2,
    "explanation": "Validasi metode analisis adalah proses dokumentasi yang membuktikan bahwa metode tersebut cocok untuk tujuan yang dimaksudkan, memastikan data yang dihasilkan valid dan dapat diandalkan."
  },
  {
    "category": "Manajerial",
    "question": "Seorang apoteker dihadapkan pada tumpukan pekerjaan yang banyak dan tenggat waktu yang ketat. Sebagai manajer, apa yang harus Anda lakukan untuk menyelesaikan tugas secara efisien?",
    "options": [
      " Mengambil alih semua tugas agar cepat selesai.",
      " Mengerjakan tugas yang paling mudah terlebih dahulu.",
      " Mendelegasikan tugas kepada staf lain yang kompeten dan mengawasi pelaksanaanny",
      " Meminta perpanjangan waktu untuk semua tugas.",
      " Menghentikan sementara semua tugas yang ad"
    ],
    "correct": 2,
    "explanation": "Mendelegasikan tugas kepada tim yang kompeten dan melakukan pengawasan adalah tindakan manajerial yang efektif untuk memastikan semua pekerjaan dapat diselesaikan tepat waktu."
  },
  {
    "category": "Manajerial",
    "question": "Bagaimana cara Anda menanggapi keluhan pasien yang disampaikan dengan nada tinggi di depan staf dan pasien lain?",
    "options": [
      " Membalas dengan nada yang sama agar pasien mengerti.",
      " Mengabaikan pasien tersebut sampai ia tenang.",
      " Mempersilakan pasien untuk berbicara di ruang terpisah dan mendengarkan keluhannya dengan tenang.",
      " Menyarankan pasien untuk menyampaikan keluhan di lain waktu.",
      " Menegur pasien di depan umum agar ia tidak mengganggu."
    ],
    "correct": 2,
    "explanation": "Menanggapi keluhan dengan profesionalisme adalah kunci. Memindahkan percakapan ke ruang pribadi menunjukkan rasa hormat kepada pasien dan mencegah ketidaknyamanan bagi orang lain, serta memungkinkan komunikasi yang lebih efektif."
  },
  {
    "category": "Manajerial",
    "question": "Seorang staf Anda sering datang terlambat. Pendekatan manajerial apa yang paling tepat?",
    "options": [
      " Memberikan teguran keras di depan staf lain.",
      " Mengabaikan karena staf tersebut bekerja dengan baik.",
      " Memanggil staf secara pribadi, menanyakan alasannya, dan membuat kesepakatan untuk perbaikan.",
      " Memberikan surat peringatan tanpa komunikasi terlebih dahulu.",
      " Mengurangi gaji staf tersebut."
    ],
    "correct": 2,
    "explanation": "Pendekatan terbaik adalah secara proaktif dan empatik. Mendiskusikan masalah secara pribadi menunjukkan kepedulian dan memberikan kesempatan kepada staf untuk menjelaskan situasinya, yang dapat membantu menemukan solusi."
  },
  {
    "category": "Manajerial",
    "question": "Sebagai apoteker, Anda bertanggung jawab untuk meningkatkan efisiensi operasional. Langkah pertama yang paling efektif adalah...",
    "options": [
      " Membeli peralatan baru yang mahal.",
      " Mengurangi jumlah staf.",
      " Menganalisis alur kerja yang ada untuk menemukan area yang dapat dioptimalkan.",
      " Menambah jam kerja staf.",
      " Mengubah semua sistem menjadi digital tanpa pelatihan."
    ],
    "correct": 2,
    "explanation": "Langkah awal yang paling efektif adalah melakukan analisis menyeluruh terhadap proses atau alur kerja saat ini untuk mengidentifikasi inefisiensi dan bottleneck sebelum membuat perubahan yang signifikan."
  },
  {
    "category": "Manajerial",
    "question": "Bagaimana cara Anda memotivasi tim Anda untuk mencapai target yang ambisius?",
    "options": [
      " Mengancam dengan pemotongan gaji jika target tidak tercapai.",
      " Memberikan tugas tambahan sebagai hukuman.",
      " Memberikan pengakuan atas pencapaian kecil, menetapkan tujuan yang jelas, dan memberikan dukungan yang diperlukan.",
      " Menutup diri dan tidak berkomunikasi dengan tim.",
      " Menetapkan target tanpa penjelasan yang jelas."
    ],
    "correct": 2,
    "explanation": "Motivasi terbaik datang dari dukungan, pengakuan, dan tujuan yang jelas. Mengakui kerja keras tim dan memberikan dukungan adalah cara yang efektif untuk mendorong mereka mencapai tujuan yang lebih besar."
  },
  {
    "category": "Manajerial",
    "question": "Anda menemukan kesalahan dalam pencatatan stok yang dilakukan oleh salah satu staf. Apa yang harus Anda lakukan?",
    "options": [
      " Menegur staf tersebut di depan umum untuk memberi pelajaran.",
      " Mengabaikan kesalahan tersebut karena dianggap kecil.",
      " Melakukan koreksi sendiri tanpa memberitahu staf.",
      " Memberi tahu staf secara pribadi, mengoreksi kesalahan bersama, dan memberikan pelatihan tambahan jika perlu.",
      " Menyuruh staf tersebut mengulang seluruh pekerjaan dari awal."
    ],
    "correct": 3,
    "explanation": "Memberikan umpan balik secara pribadi dan konstruktif adalah pendekatan terbaik. Ini memungkinkan staf untuk belajar dari kesalahan tanpa merasa malu dan membantu meningkatkan kinerja tim secara keseluruhan."
  },
  {
    "category": "Manajerial",
    "question": "Bagaimana Anda memprioritaskan pekerjaan saat ada beberapa tugas mendesak yang datang bersamaan?",
    "options": [
      " Mengambil alih semua tugas secara acak.",
      " Mengerjakan tugas yang paling mudah dan cepat terlebih dahulu.",
      " Mengidentifikasi urgensi dan dampak dari setiap tugas, lalu mengerjakannya sesuai prioritas.",
      " Mendelegasikan semua tugas tanpa petunjuk.",
      " Menghentikan semua tugas hingga ada petunjuk yang jelas."
    ],
    "correct": 2,
    "explanation": "Prioritas yang efektif melibatkan penilaian terhadap urgensi dan pentingnya setiap tugas. Menganalisis dampak dari setiap tugas membantu Anda mengalokasikan waktu dan sumber daya dengan bijak."
  },
  {
    "category": "Manajerial",
    "question": "Seorang staf Anda mengemukakan ide baru yang inovatif. Apa respons yang paling tepat?",
    "options": [
      " Mengkritik ide tersebut tanpa memberikan alasan.",
      " Menghargai ide tersebut dan meminta staf untuk mempresentasikannya kepada tim.",
      " Mengabaikan ide tersebut karena dianggap terlalu berisiko.",
      " Mengambil ide tersebut dan mengklaim sebagai milik And",
      " Memerintahkan staf untuk berhenti memikirkan ide-ide lain."
    ],
    "correct": 1,
    "explanation": "Mendorong kreativitas dan inovasi adalah bagian dari kepemimpinan yang baik. Dengan meminta staf mempresentasikan idenya, Anda menunjukkan bahwa Anda menghargai kontribusinya dan memberinya kesempatan untuk berkembang."
  },
  {
    "category": "Manajerial",
    "question": "Anda adalah manajer tim apoteker di sebuah klinik. Apa yang menjadi tanggung jawab utama Anda?",
    "options": [
      " Menyusun jadwal jaga untuk semua staf.",
      " Memastikan ketersediaan stok obat.",
      " Mengawasi kinerja tim, memfasilitasi komunikasi, dan memastikan tercapainya tujuan organisasi.",
      " Melakukan semua pekerjaan operasional sehari-hari.",
      " Mencatat semua resep yang masuk."
    ],
    "correct": 2,
    "explanation": "Tanggung jawab manajer tidak hanya pada tugas operasional, tetapi juga pada kepemimpinan tim, memastikan mereka termotivasi, bekerja sama, dan mencapai tujuan bersam"
  },
  {
    "category": "Manajerial",
    "question": "Bagaimana Anda menciptakan lingkungan kerja yang positif dan kolaboratif?",
    "options": [
      " Memberlakukan aturan yang sangat ketat.",
      " Mengisolasi tim dan meminimalkan interaksi.",
      " Mendorong komunikasi terbuka, memberikan umpan balik yang konstruktif, dan mengakui kontribusi setiap anggota tim.",
      " Memfokuskan diri pada pekerjaan individu.",
      " Mengadakan rapat tanpa agenda yang jelas."
    ],
    "correct": 2,
    "explanation": "Lingkungan kerja yang positif dibangun di atas kepercayaan, komunikasi terbuka, dan pengakuan. Mendorong kolaborasi dan menghargai setiap individu dapat meningkatkan semangat kerja tim."
  },
  {
    "category": "Sosio-Kultural",
    "question": "Anda adalah apoteker di daerah pedesaan. Pasien dari suku berbeda meminta obat tradisional yang tidak sesuai dengan resep dokter. Apa respons yang paling tepat?",
    "options": [
      " Menolak permintaan tersebut dan langsung mengabaikanny",
      " Memberikan obat yang diminta untuk menghindari konflik.",
      " Menjelaskan secara hormat mengapa obat tradisional tidak dapat diberikan bersamaan dengan obat resep dan mengedukasi pasien tentang risiko interaksi.",
      " Memberikan obat resep sambil diam-diam memberikan obat tradisional.",
      " Menyuruh pasien untuk kembali ke daerah asalny"
    ],
    "correct": 2,
    "explanation": "Sikap sosio-kultural yang baik adalah menunjukkan rasa hormat terhadap kepercayaan pasien sambil tetap mengutamakan keselamatan. Edukasi dengan sopan adalah kunci untuk membangun kepercayaan."
  },
  {
    "category": "Sosio-Kultural",
    "question": "Seorang pasien lanjut usia kesulitan memahami instruksi pada etiket obat. Apa yang harus Anda lakukan?",
    "options": [
      " Menyuruh anggota keluarganya yang lain untuk datang.",
      " Memberikan obat dan membiarkan pasien mencari tahu sendiri.",
      " Menjelaskan instruksi dengan bahasa yang sederhana, lambat, dan memastikan pasien mengerti dengan mengulanginy",
      " Menulis instruksi dengan huruf yang lebih kecil.",
      " Menolak memberikan obat karena pasien dianggap tidak kooperatif."
    ],
    "correct": 2,
    "explanation": "Kemampuan beradaptasi dengan kebutuhan pasien adalah aspek penting. Menjelaskan secara sabar dan sederhana menunjukkan empati dan memastikan pasien dapat menggunakan obat dengan aman."
  },
  {
    "category": "Sosio-Kultural",
    "question": "Anda bekerja di lingkungan yang terdiri dari beragam etnis dan buday Bagaimana Anda memastikan komunikasi yang efektif dan inklusif?",
    "options": [
      " Berkomunikasi hanya dengan orang yang memiliki latar belakang yang sam",
      " Menggunakan bahasa formal dan kaku setiap saat.",
      " Menghindari topik sensitif dan membatasi interaksi.",
      " Bersikap terbuka, mendengarkan, dan belajar dari perbedaan, serta menyesuaikan gaya komunikasi jika perlu.",
      " Menganggap semua orang memiliki pemahaman yang sam"
    ],
    "correct": 3,
    "explanation": "Keterampilan sosio-kultural yang baik melibatkan kesadaran akan perbedaan dan kemampuan untuk beradaptasi. Keterbukaan dan kemauan untuk belajar adalah kunci dalam membangun hubungan yang kuat."
  },
  {
    "category": "Sosio-Kultural",
    "question": "Seorang pasien datang dengan keluhan yang tidak ada di dalam resep, namun ia terlihat sangat stres dan ingin bercerit Apa yang Anda lakukan?",
    "options": [
      " Langsung menyuruhnya pulang karena tidak ada resep.",
      " Mendengarkan dengan sabar dan menunjukkan empati.",
      " Mengalihkan pembicaraan ke topik lain.",
      " Menganggapnya hanya mencari perhatian.",
      " Memberikan saran tanpa mendengarkan ceritany"
    ],
    "correct": 1,
    "explanation": "Sebagai apoteker, peran Anda tidak hanya sebatas memberikan obat, tetapi juga memberikan dukungan emosional. Mendengarkan dengan sabar menunjukkan empati dan membangun kepercayaan, yang merupakan bagian penting dari pelayanan kesehatan."
  },
  {
    "category": "Sosio-Kultural",
    "question": "Anda bekerja di apotek yang melayani banyak pasien dari kelompok usia yang berbed Bagaimana cara Anda memastikan setiap kelompok merasa nyaman dan dilayani dengan baik?",
    "options": [
      " Menggunakan jargon medis agar terlihat profesional.",
      " Berfokus hanya pada pasien yang berusia produktif.",
      " Mengadaptasi gaya komunikasi Anda sesuai dengan usia pasien, misalnya dengan bahasa yang lebih sederhana untuk lansia atau anak-anak.",
      " Memberikan brosur saja sebagai pengganti penjelasan.",
      " Menganggap semua pasien memiliki pemahaman yang sama tentang obat."
    ],
    "correct": 2,
    "explanation": "Keterampilan sosio-kultural mencakup kemampuan untuk menyesuaikan diri dengan audiens. Menyesuaikan gaya komunikasi dengan kelompok usia yang berbeda memastikan informasi diterima dengan baik."
  },
  {
    "category": "Sosio-Kultural",
    "question": "Seorang pasien dari latar belakang budaya yang berbeda memiliki kebiasaan mengonsumsi obat herbal yang tidak terdaftar. Apa yang harus Anda lakukan?",
    "options": [
      " Melarang pasien mengonsumsi herbal tersebut tanpa penjelasan.",
      " Menghormati kebiasaan tersebut dan tidak membahasny",
      " Menjelaskan secara sopan tentang potensi interaksi herbal dengan obat resep, tanpa menghakimi kebiasaanny",
      " Mengambil herbal tersebut dari pasien.",
      " Mengatakan bahwa herbal tersebut tidak bergun"
    ],
    "correct": 2,
    "explanation": "Pendekatan terbaik adalah edukasi yang menghormati. Menjelaskan risiko secara faktual tanpa menghakimi kebiasaan pasien dapat meningkatkan kesadaran mereka tanpa merusak kepercayaan."
  },
  {
    "category": "Sosio-Kultural",
    "question": "Anda menerima pasien dengan disabilitas yang kesulitan berbicar Apa yang harus Anda lakukan untuk memberikan pelayanan terbaik?",
    "options": [
      " Meminta pasien menuliskan semua yang ingin ia sampaikan.",
      " Menganggap pasien tidak bisa berkomunikasi.",
      " Berbicara perlahan, menggunakan bahasa tubuh yang jelas, dan sabar menunggu respons pasien.",
      " Mengabaikan pasien tersebut karena sulit berkomunikasi.",
      " Memberikan resep tanpa penjelasan verbal."
    ],
    "correct": 2,
    "explanation": "Sikap sosio-kultural yang baik adalah bersikap inklusif terhadap semua individu. Menggunakan komunikasi non-verbal dan menunjukkan kesabaran adalah cara efektif untuk memberikan pelayanan yang sama baikny"
  },
  {
    "category": "Wawancara",
    "question": "Ceritakan tentang pengalaman Anda di mana Anda harus berhadapan dengan situasi kerja yang menantang. Bagaimana Anda menanganinya?",
    "options": [
      " Jawaban yang menunjukkan bahwa Anda tidak pernah menghadapi situasi yang menantang.",
      " Jawaban yang menyalahkan orang lain atas tantangan tersebut.",
      " Jawaban yang menjelaskan situasi, tindakan yang Anda ambil, dan hasil positifny",
      " Jawaban yang hanya menjelaskan masalah tanpa solusi.",
      " Jawaban yang menunjukkan Anda menyerah dalam menghadapi tantangan."
    ],
    "correct": 2,
    "explanation": "Dalam wawancara, jawaban yang terbaik adalah yang menggunakan metode 'STAR' (Situation, Task, Action, Result). Ini menunjukkan bahwa Anda memiliki kemampuan problem-solving dan dapat belajar dari pengalaman."
  },
  {
    "category": "Wawancara",
    "question": "Mengapa Anda tertarik bekerja sebagai apoteker di sektor publik?",
    "options": [
      " Karena Anda hanya ingin mencari pekerjaan yang stabil.",
      " Karena Anda ingin mendapatkan gaji yang lebih tinggi.",
      " Karena Anda ingin berkontribusi pada kesehatan masyarakat dan memiliki tujuan yang sejalan dengan visi pemerintah.",
      " Karena Anda tidak memiliki pilihan lain.",
      " Karena Anda tidak ingin bekerja di sektor swast"
    ],
    "correct": 2,
    "explanation": "Jawaban yang ideal menunjukkan motivasi yang tulus untuk mengabdi kepada masyarakat dan pemahaman tentang peran Anda dalam pelayanan publik, yang sejalan dengan tujuan PPPK."
  },
  {
    "category": "Wawancara",
    "question": "Bagaimana Anda menjaga profesionalisme dan etika kerja dalam situasi di mana Anda memiliki perbedaan pendapat dengan atasan atau rekan kerja?",
    "options": [
      " Mendiamkan perbedaan tersebut agar tidak terjadi konflik.",
      " Berdebat dan memaksakan pendapat And",
      " Menyampaikan perbedaan pendapat dengan sopan dan berdasarkan data, sambil tetap menjaga hubungan kerja yang baik.",
      " Langsung mengadu kepada atasan yang lebih tinggi.",
      " Membiarkan atasan atau rekan kerja mengambil keputusan tanpa masukan."
    ],
    "correct": 2,
    "explanation": "Menjaga profesionalisme adalah kunci. Jawaban ini menunjukkan kemampuan Anda untuk berargumentasi secara konstruktif dan menghormati hierarki tanpa mengorbankan integritas."
  }
];