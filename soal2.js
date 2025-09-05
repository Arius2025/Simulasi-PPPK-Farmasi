const questions = [
// Tambahan Soal Batch 1
    {
        "question": "Seorang pasien dengan penyakit diabetes tipe 2 memerlukan insulin. Apa yang harus disampaikan apoteker terkait penyimpanan insulin?",
        "options": [
            "Boleh disimpan di suhu kamar setelah dibuka.",
            "Wajib disimpan di freezer agar lebih awet.",
            "Disimpan di lemari es (suhu 2-8°C), tidak di bagian freezer, setelah dibuka bisa di suhu kamar.",
            "Disimpan di tempat yang hangat untuk menjaga efektivitasnya.",
            "Disimpan di tempat yang terkena sinar matahari langsung."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Insulin harus disimpan di lemari es pada suhu 2-8°C. Setelah kemasan dibuka, insulin dapat disimpan pada suhu kamar (15-30°C) selama 28 hari, namun tidak boleh dibekukan."
    },
    {
        "question": "Bagian dari resep yang memuat aturan penggunaan obat (signatura) adalah...",
        "options": [
            "Inscriptio",
            "Praescriptio",
            "Subscriptio",
            "Signatura",
            "Iter"
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "Bagian Signatura dalam resep adalah petunjuk penggunaan obat yang harus ditulis oleh dokter, seperti '2 x sehari 1 tablet'."
    },
    {
        "question": "Istilah farmasi 'bid' atau 'b.i.d' pada resep memiliki arti...",
        "options": [
            "Satu kali sehari",
            "Dua kali sehari",
            "Tiga kali sehari",
            "Empat kali sehari",
            "Sesuai kebutuhan"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "'bid' atau 'b.i.d' merupakan singkatan bahasa Latin, 'bis in die', yang berarti dua kali sehari."
    },
    {
        "question": "Apa prinsip Good Manufacturing Practice (GMP) yang harus diterapkan dalam pembuatan sediaan farmasi?",
        "options": [
            "Membuat produk sebanyak mungkin.",
            "Memastikan produk dibuat dan dikendalikan secara konsisten sesuai standar mutu.",
            "Menggunakan bahan baku termurah.",
            "Mempercepat proses produksi tanpa memperhatikan kualitas.",
            "Menghindari audit dari pihak berwenang."
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Prinsip GMP (Cara Pembuatan Obat yang Baik) bertujuan untuk menjamin produk farmasi dibuat dan dikendalikan secara konsisten untuk memenuhi standar mutu yang ditetapkan."
    },
    {
        "question": "Efek samping obat yang tidak diinginkan dan dapat diperkirakan disebut...",
        "options": [
            "Idiosinkrasi",
            "Reaksi alergi",
            "Interaksi obat",
            "Efek farmakologi",
            "Efek samping"
        ],
        "correct": 4,
        "category": "SKT",
        "explanation": "Efek samping obat (adverse drug reaction) adalah respon terhadap obat yang tidak diinginkan, tidak disengaja, dan terjadi pada dosis normal, serta dapat diprediksi dari efek farmakologinya."
    },
    {
        "question": "Apa peran utama apoteker dalam pengelolaan limbah medis di apotek?",
        "options": [
            "Menjual limbah medis yang tidak terpakai.",
            "Menyimpan semua limbah di satu tempat tanpa pemisahan.",
            "Melakukan pemilahan, penyimpanan, dan penyerahan limbah sesuai prosedur standar untuk pembuangan yang aman.",
            "Membuang limbah medis ke tempat sampah umum.",
            "Meminta pasien membawa pulang limbah medis bekas pakai."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Apoteker bertanggung jawab memastikan pengelolaan limbah medis dilakukan dengan benar, mulai dari pemilahan (misalnya, limbah tajam, limbah infeksius), penyimpanan sementara, hingga penyerahan kepada pihak ketiga yang berwenang."
    },
    {
        "question": "Tindakan apoteker untuk memastikan bahwa obat yang diresepkan sesuai dengan kebutuhan klinis pasien, dosisnya tepat, dan tidak ada interaksi obat yang berbahaya disebut...",
        "options": [
            "Pencatatan resep",
            "Dispensing",
            "Skrining resep",
            "Konseling",
            "Pelayanan farmasi klinis"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Skrining resep adalah tahapan awal apoteker dalam meninjau resep untuk mendeteksi masalah-masalah terkait obat, seperti ketidaksesuaian dosis, interaksi, atau kontraindikasi."
    },
    {
        "question": "Seorang apoteker adalah pemimpin tim di apotek. Saat menghadapi masalah, ia selalu melibatkan anggota tim, mendengarkan masukan mereka, dan mengambil keputusan bersama. Gaya kepemimpinan ini disebut...",
        "options": [
            "Otoriter",
            "Demokratis",
            "Laissez-faire",
            "Transaksional",
            "Karismatik"
        ],
        "correct": 1,
        "category": "Manajerial",
        "explanation": "Gaya kepemimpinan demokratis melibatkan anggota tim dalam proses pengambilan keputusan, menghargai masukan mereka, dan mendorong partisipasi aktif."
    },
    {
        "question": "Anda diberi target kerja yang sangat ambisius. Hal pertama yang akan Anda lakukan adalah...",
        "options": [
            "Mengeluh kepada rekan kerja.",
            "Mengajukan keberatan kepada atasan.",
            "Menganalisis target, membuat rencana strategis, dan membaginya ke dalam langkah-langkah yang lebih kecil.",
            "Langsung bekerja tanpa perencanaan.",
            "Meminta bantuan orang lain untuk mengerjakannya."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Respons ini menunjukkan kemampuan berpikir strategis, manajemen proyek, dan inisiatif. Merencanakan adalah langkah kunci untuk mencapai target yang menantang."
    },
    {
        "question": "Ketika ada perubahan prosedur kerja yang tidak Anda setujui, Anda akan...",
        "options": [
            "Menolak untuk menerapkannya.",
            "Menerapkannya namun sambil mengkritik di belakang.",
            "Mencoba memahami alasan di balik perubahan tersebut, bertanya jika ada yang tidak jelas, dan beradaptasi dengan perubahan.",
            "Mengajak rekan kerja lain untuk menentang perubahan tersebut.",
            "Melaksanakan prosedur lama tanpa sepengetahuan atasan."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Sikap ini menunjukkan fleksibilitas, kemauan untuk belajar, dan profesionalisme dalam menghadapi perubahan. Memahami alasan di balik perubahan adalah kunci untuk beradaptasi dengan baik."
    },
    {
        "question": "Bagaimana Anda menanggapi pasien dari latar belakang budaya yang berbeda yang mungkin memiliki kepercayaan unik tentang pengobatan?",
        "options": [
            "Mengabaikan kepercayaan mereka dan hanya berfokus pada ilmu farmasi.",
            "Mengejek kepercayaan mereka karena tidak ilmiah.",
            "Menghargai kepercayaan mereka, memberikan informasi obat yang relevan secara profesional, dan mencari cara untuk mengintegrasikan pengobatan dengan budaya mereka jika aman.",
            "Memaksa mereka untuk meninggalkan kepercayaannya.",
            "Menolak melayani pasien tersebut."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Seorang ASN harus memiliki kepekaan budaya. Menghargai dan mencoba memahami kepercayaan pasien menunjukkan empati, yang sangat penting dalam pelayanan kesehatan, sambil tetap memastikan keamanan dan efektivitas terapi."
    },
    {
        "question": "Di kantor Anda, terdapat program gotong royong untuk membersihkan area kerja. Anda akan...",
        "options": [
            "Menghindarinya karena merasa itu bukan tugas utama Anda.",
            "Berpartisipasi aktif dan mengajak rekan kerja lain untuk ikut serta.",
            "Hanya ikut jika ada atasan.",
            "Mengkritik program tersebut karena membuang waktu.",
            "Meminta dibebaskan dari kegiatan tersebut dengan alasan sibuk."
        ],
        "correct": 1,
        "category": "Sosio-Kultural",
        "explanation": "Partisipasi aktif dalam kegiatan sosial di lingkungan kerja menunjukkan sikap kolaborasi, rasa memiliki, dan kepedulian terhadap kebersamaan. Ini adalah nilai penting dalam dunia kerja sebagai ASN."
    },
    {
        "question": "Bagaimana Anda mendefinisikan integritas dalam bekerja?",
        "options": [
            "Melakukan pekerjaan hanya jika diawasi.",
            "Berlaku jujur dan konsisten antara perkataan dan perbuatan, bahkan saat tidak diawasi.",
            "Mendapatkan keuntungan pribadi dari posisi Anda.",
            "Mengutamakan kepentingan pribadi di atas segalanya.",
            "Hanya jujur kepada atasan."
        ],
        "correct": 1,
        "category": "Wawancara",
        "explanation": "Integritas adalah prinsip moral dan etika yang kuat, ditunjukkan dengan kejujuran, konsistensi, dan keteguhan dalam berpegang pada nilai-nilai tersebut, terlepas dari situasi."
    },
    {
        "question": "Jika Anda terpilih, apa kontribusi terbesar yang ingin Anda berikan kepada instansi ini?",
        "options": [
            "Mencapai target pribadi saya.",
            "Mendapatkan promosi secepatnya.",
            "Meningkatkan kualitas pelayanan kefarmasian, misalnya dengan mengedukasi masyarakat tentang penggunaan obat yang benar dan aman.",
            "Membuat kebijakan baru yang menguntungkan diri sendiri.",
            "Cukup menjalankan tugas sesuai deskripsi pekerjaan."
        ],
        "correct": 2,
        "category": "Wawancara",
        "explanation": "Jawaban yang baik fokus pada kontribusi nyata yang dapat diberikan kepada instansi dan masyarakat, menunjukkan inisiatif dan komitmen untuk melayani di luar tugas-tugas dasar."
    },
    {
        "question": "Anda menghadapi situasi di mana etika dan peraturan perusahaan bertentangan. Apa yang akan Anda lakukan?",
        "options": [
            "Mengabaikan etika dan hanya mengikuti peraturan.",
            "Mengutamakan etika pribadi di atas peraturan.",
            "Mencari solusi yang adil dan etis, berkomunikasi dengan atasan atau tim hukum untuk mencari jalan keluar yang sesuai dengan peraturan.",
            "Melakukan apa yang paling menguntungkan diri sendiri.",
            "Keluar dari pekerjaan."
        ],
        "correct": 2,
        "category": "Wawancara",
        "explanation": "Jawaban ini menunjukkan kematangan dalam pengambilan keputusan dan kemampuan untuk menavigasi situasi yang kompleks. Mencari solusi yang seimbang dan transparan adalah kunci untuk mempertahankan integritas."
    },

    // Tambahan Soal Batch 2
    {
        "question": "Seorang pasien mengeluh sakit kepala dan meminta obat pereda nyeri. Sebagai apoteker, apa yang harus Anda lakukan jika pasien tersebut juga sedang mengonsumsi warfarin?",
        "options": [
            "Memberikan ibuprofen karena efektif untuk sakit kepala.",
            "Memberikan aspirin karena mudah didapat.",
            "Memberikan parasetamol karena memiliki interaksi yang minimal dengan warfarin.",
            "Memberikan obat pereda nyeri yang mengandung kafein.",
            "Menyarankan pasien untuk berhenti mengonsumsi warfarin."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Parasetamol adalah pilihan yang paling aman karena ibuprofen dan aspirin dapat meningkatkan risiko perdarahan pada pasien yang mengonsumsi warfarin."
    },
    {
        "question": "Istilah farmasi 'pc' atau 'post coenam' pada resep memiliki arti...",
        "options": [
            "Sebelum makan",
            "Saat makan",
            "Setelah makan",
            "Sebelum tidur",
            "Setiap 4 jam"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Singkatan 'pc' atau 'post coenam' berasal dari bahasa Latin yang berarti setelah makan. Ini menunjukkan waktu yang dianjurkan untuk mengonsumsi obat."
    },
    {
        "question": "Seorang apoteker menerima resep yang berisi nama dagang obat. Apoteker tersebut memiliki persediaan obat generik dengan zat aktif yang sama. Apa yang harus dilakukan apoteker?",
        "options": [
            "Menolak resep tersebut.",
            "Memberikan obat paten karena nama resepnya nama dagang.",
            "Menyarankan pasien membeli obat di apotek lain.",
            "Menawarkan obat generik dengan menjelaskan manfaat dan perbedaannya kepada pasien, sesuai persetujuan pasien dan/atau dokter.",
            "Memberikan obat generik tanpa konfirmasi pasien."
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "Prinsip pelayanan farmasi yang baik adalah memberikan pilihan kepada pasien. Menawarkan obat generik yang setara secara farmakologi dan ekonomis adalah tindakan yang etis dan profesional, dengan tetap meminta persetujuan pasien."
    },
    {
        "question": "Metode pembuatan tablet yang melibatkan pencampuran bahan aktif dan eksipien kering tanpa melalui granulasi basah atau kering disebut...",
        "options": [
            "Granulasi kering",
            "Granulasi basah",
            "Kempa langsung",
            "Cetakan",
            "Fusi"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Kempa langsung (direct compression) adalah metode pembuatan tablet di mana bahan-bahan langsung dicampur dan dikempa menjadi tablet tanpa melalui proses granulasi."
    },
    {
        "question": "Apa yang dimaksud dengan 'Viskositas' dalam sediaan farmasi?",
        "options": [
            "Kekerasan suatu sediaan.",
            "Tingkat keasaman suatu larutan.",
            "Kemampuan suatu sediaan untuk larut.",
            "Tingkat kekentalan suatu cairan.",
            "Tingkat kestabilan sediaan."
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "Viskositas adalah ukuran ketahanan suatu fluida terhadap deformasi, yang sering dianggap sebagai 'kekentalan' suatu cairan. Ini penting dalam formulasi sediaan cair seperti sirup dan suspensi."
    },
    {
        "question": "Seorang apoteker menerima laporan dari pasien tentang adanya reaksi alergi setelah mengonsumsi obat. Apa yang harus apoteker lakukan selanjutnya?",
        "options": [
            "Mengabaikan laporan tersebut.",
            "Menyalahkan pasien karena tidak hati-hati.",
            "Mencatat kejadian tersebut dan melaporkannya ke pusat farmakovigilans atau BPOM sebagai bentuk monitoring efek samping obat.",
            "Langsung mengganti obat pasien tanpa konsultasi dokter.",
            "Menyarankan pasien untuk berhenti mengonsumsi semua obat."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Melaporkan efek samping obat adalah bagian penting dari farmakovigilans. Ini membantu pihak berwenang memantau keamanan obat di pasaran dan mengambil tindakan jika diperlukan."
    },
    {
        "question": "Metode sterilisasi yang digunakan untuk obat-obatan yang tidak tahan panas, seperti salep mata yang mengandung antibiotik, adalah...",
        "options": [
            "Autoklaf",
            "Pemanasan kering",
            "Pemanasan basah",
            "Filtrasi",
            "Radiasi"
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "Filtrasi adalah metode sterilisasi yang menghilangkan mikroorganisme dari cairan dengan melewatinya melalui filter berpori sangat kecil. Metode ini cocok untuk sediaan yang sensitif terhadap panas."
    },
    {
        "question": "Apoteker harus memastikan bahwa semua obat yang diterima di apotek memiliki izin edar dari...",
        "options": [
            "Departemen Kesehatan",
            "Badan Pengawas Obat dan Makanan (BPOM)",
            "Kementerian Keuangan",
            "Organisasi Kesehatan Dunia (WHO)",
            "Pemerintah Daerah"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "BPOM (Badan Pengawas Obat dan Makanan) adalah badan yang berwenang memberikan izin edar untuk produk farmasi di Indonesia, menjamin keamanan, khasiat, dan mutunya."
    },
    {
        "question": "Anda ditunjuk sebagai ketua tim dalam sebuah proyek. Anda memiliki bawahan yang kurang kompeten. Sikap yang paling tepat adalah...",
        "options": [
            "Mengeluarkan bawahan tersebut dari tim.",
            "Mengambil alih semua pekerjaannya agar cepat selesai.",
            "Membimbing, melatih, dan memberikan dukungan agar bawahan tersebut dapat meningkatkan kompetensinya.",
            "Memarahi bawahan tersebut di depan tim.",
            "Mengabaikan bawahan tersebut dan meminta atasan untuk menggantinya."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Seorang pemimpin yang efektif tidak hanya berfokus pada hasil, tetapi juga pada pengembangan tim. Membimbing dan melatih anggota tim menunjukkan komitmen Anda terhadap pertumbuhan mereka dan keberhasilan tim secara keseluruhan."
    },
    {
        "question": "Saat Anda menerima kritik dari rekan kerja, Anda akan...",
        "options": [
            "Menolak kritik tersebut dan membantah.",
            "Merasa tersinggung dan menghindari rekan kerja tersebut.",
            "Mendengarkan dengan terbuka, mengevaluasi validitas kritik, dan mengambil pelajaran untuk perbaikan.",
            "Membalas kritik dengan mengkritik balik.",
            "Langsung mengubah semua yang Anda lakukan tanpa evaluasi."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Sikap ini menunjukkan profesionalisme dan kemauan untuk berkembang. Mampu menerima kritik dengan lapang dada adalah kualitas penting untuk peningkatan diri."
    },
    {
        "question": "Anda melihat ada sistem atau prosedur kerja yang tidak efisien. Tindakan Anda adalah...",
        "options": [
            "Mendiamkannya saja karena itu bukan tugas Anda.",
            "Mengajukan ide perbaikan yang logis dan solutif kepada atasan atau tim terkait.",
            "Mengkritik sistem tersebut di depan rekan kerja.",
            "Menghindari sistem tersebut dan membuat cara kerja sendiri.",
            "Menyalahkan orang lain atas ketidak efisienan tersebut."
        ],
        "correct": 1,
        "category": "Manajerial",
        "explanation": "Berpikir proaktif dan solutif adalah ciri pegawai yang berinisiatif. Mengajukan ide perbaikan menunjukkan kepedulian Anda terhadap efisiensi dan kemajuan organisasi."
    },
    {
        "question": "Anda adalah seorang apoteker di daerah terpencil. Sebagian besar pasien adalah petani dan nelayan. Anda akan berkomunikasi dengan mereka menggunakan bahasa yang...",
        "options": [
            "Sangat formal dan ilmiah.",
            "Menggunakan istilah farmasi yang sulit.",
            "Sederhana, mudah dimengerti, dan relevan dengan kehidupan sehari-hari mereka.",
            "Bahasa isyarat.",
            "Hanya berkomunikasi lewat tulisan."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Sebagai pelayan publik, kemampuan berkomunikasi yang efektif adalah kunci. Menyesuaikan bahasa dan cara penyampaian agar mudah dipahami oleh audiens yang beragam adalah sikap profesional yang menunjukkan empati dan pelayanan prima."
    },
    {
        "question": "Pada sebuah acara di kantor, Anda melihat rekan kerja Anda sedang kesulitan membawa barang bawaan yang berat. Sikap Anda adalah...",
        "options": [
            "Mengabaikannya karena itu bukan urusan Anda.",
            "Menertawakannya.",
            "Mendatangi dan menawarkan bantuan untuk membawakan barang.",
            "Hanya menawarkan bantuan jika diminta.",
            "Menunggu atasan memerintahkan untuk membantu."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Sikap ini mencerminkan rasa kepedulian dan semangat gotong royong, yang merupakan nilai penting dalam lingkungan kerja. Membantu tanpa diminta menunjukkan inisiatif yang baik."
    },
    {
        "question": "Apa peran apoteker dalam mewujudkan Indonesia sehat?",
        "options": [
            "Hanya menjual obat.",
            "Membantu pasien mengurangi biaya pengobatan.",
            "Menjamin ketersediaan obat yang aman, efektif, dan berkualitas, serta memberikan edukasi kepada masyarakat untuk penggunaan obat yang rasional.",
            "Menyediakan obat impor.",
            "Mengabaikan isu kesehatan masyarakat."
        ],
        "correct": 2,
        "category": "Wawancara",
        "explanation": "Jawaban ini menunjukkan pemahaman yang komprehensif tentang peran apoteker. Selain menyediakan obat, peran edukasi dan jaminan mutu adalah kontribusi kunci apoteker untuk kesehatan masyarakat."
    },
    {
        "question": "Ceritakan pencapaian terbesar Anda dalam pekerjaan sebelumnya.",
        "options": [
            "Mendapatkan gaji yang lebih tinggi.",
            "Menyelesaikan pekerjaan yang diberikan tepat waktu.",
            "Mengembangkan sebuah sistem manajemen stok obat yang berhasil mengurangi kerugian hingga 20%, yang kemudian diadopsi oleh apotek lain.",
            "Menjadi karyawan favorit atasan.",
            "Menghindari masalah di tempat kerja."
        ],
        "correct": 2,
        "category": "Wawancara",
        "explanation": "Pencapaian terbesar tidak hanya dinilai dari tugas harian, melainkan dari kontribusi yang membawa dampak signifikan dan terukur bagi organisasi. Jawaban ini menunjukkan kemampuan berpikir inovatif dan berorientasi pada hasil."
    },


    // Tambahan Soal Batch 3
    {
        "question": "Seorang pasien datang dengan keluhan batuk berdahak. Anda akan memberikan obat batuk ekspektoran. Apa fungsi utama dari ekspektoran?",
        "options": [
            "Menekan batuk agar tidak batuk lagi.",
            "Mengencerkan dahak agar lebih mudah dikeluarkan.",
            "Menghentikan produksi dahak.",
            "Meredakan nyeri tenggorokan.",
            "Menghambat pertumbuhan bakteri penyebab batuk."
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Ekspektoran adalah golongan obat yang berfungsi mengencerkan dahak atau lendir di saluran pernapasan, sehingga mempermudah pengeluaran dahak saat batuk."
    },
    {
        "question": "Sediaan obat yang dikemas dalam bentuk kapsul keras yang memiliki lapisan lambung tahan asam adalah...",
        "options": [
            "Kapsul lunak",
            "Tablet kunyah",
            "Kapsul lepas lambat",
            "Kapsul salut enterik",
            "Kapsul transdermal"
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "Kapsul salut enterik (enteric-coated capsule) dirancang untuk tidak larut dalam asam lambung, melainkan larut di usus halus. Ini digunakan untuk melindungi obat dari asam lambung atau melindungi lambung dari iritasi obat."
    },
    {
        "question": "Proses biotransformasi obat di dalam tubuh, yang bertujuan mengubah obat menjadi bentuk yang lebih mudah diekskresikan, terjadi di organ...",
        "options": [
            "Ginjal",
            "Paru-paru",
            "Jantung",
            "Hati",
            "Limpa"
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "Hati adalah organ utama tempat terjadinya biotransformasi atau metabolisme obat. Proses ini mengubah obat menjadi metabolit yang lebih polar agar dapat dikeluarkan dari tubuh oleh ginjal."
    },
    {
        "question": "Seorang apoteker harus melakukan skrining resep. Salah satu aspek yang harus diperiksa adalah persyaratan administratif resep, yang mencakup...",
        "options": [
            "Kesesuaian dosis dan aturan pakai.",
            "Interaksi obat dan kontraindikasi.",
            "Nama dokter, nomor Surat Izin Praktik (SIP), tanggal penulisan resep, dan tanda tangan dokter.",
            "Riwayat alergi pasien.",
            "Efek samping yang mungkin terjadi."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Skrining administratif adalah langkah pertama dalam verifikasi resep untuk memastikan resep memenuhi kelengkapan formal sebelum apoteker melanjutkan ke skrining farmasetis dan klinis."
    },
    {
        "question": "Obat narkotika dan psikotropika harus disimpan di tempat khusus yang memenuhi syarat. Apa salah satu syarat utama tempat penyimpanan tersebut?",
        "options": [
            "Harus terbuat dari kaca transparan.",
            "Terletak di bagian depan apotek.",
            "Harus dalam lemari terkunci ganda dan terbuat dari bahan yang kuat.",
            "Boleh digabungkan dengan obat bebas.",
            "Tidak memerlukan pengawasan khusus."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Penyimpanan obat narkotika dan psikotropika diatur ketat oleh regulasi. Lemari khusus yang terkunci ganda adalah syarat wajib untuk mencegah penyalahgunaan dan pencurian."
    },
    {
        "question": "Apa yang dimaksud dengan dosis maksimum (DM) pada obat?",
        "options": [
            "Dosis yang paling efektif.",
            "Dosis yang selalu aman untuk semua orang.",
            "Jumlah obat tertinggi yang masih dapat diberikan kepada pasien tanpa menimbulkan efek toksik yang serius.",
            "Dosis yang harus selalu diberikan kepada pasien.",
            "Dosis yang diberikan satu kali sehari."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Dosis maksimum adalah batas atas jumlah obat yang dapat diberikan. Melebihi dosis ini berpotensi menyebabkan efek samping serius atau bahkan keracunan."
    },
    {
        "question": "Seorang pasien datang ke apotek dengan gejala pusing, mual, dan muntah. Setelah diberikan obat sesuai resep dokter, pasien mengalami ruam kulit. Apoteker harus segera...",
        "options": [
            "Meminta pasien kembali ke dokter.",
            "Mengganti obat pasien dengan obat lain.",
            "Melaporkan kejadian ini sebagai dugaan Kejadian Tidak Diinginkan Obat (KTD) kepada tim farmakovigilans.",
            "Mengabaikan keluhan pasien.",
            "Menyalahkan dokter yang meresepkan obat."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Reaksi merugikan obat (adverse drug event/ADE) wajib dilaporkan untuk pemantauan keamanan obat. Farmakovigilans adalah sistem yang melakukan pengawasan terhadap keamanan obat."
    },
    {
        "question": "Metode analisis obat yang mengandalkan pemisahan senyawa berdasarkan perbedaan afinitasnya terhadap fase diam dan fase gerak disebut...",
        "options": [
            "Spektrofotometri",
            "Kromatografi",
            "Titrimetri",
            "Gravimetri",
            "Destilasi"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Kromatografi adalah teknik pemisahan yang sangat umum dalam analisis farmasi. Prinsip kerjanya adalah memisahkan komponen dalam campuran berdasarkan interaksi yang berbeda dengan fase diam dan fase gerak."
    },
    {
        "question": "Anda menemukan sebuah masalah yang sangat kompleks dan belum pernah terjadi sebelumnya. Langkah pertama Anda sebagai manajer adalah...",
        "options": [
            "Mendeklarasikan bahwa masalah tersebut tidak dapat diselesaikan.",
            "Langsung mengambil keputusan berdasarkan intuisi.",
            "Mengumpulkan data dan informasi yang relevan, mendefinisikan masalah dengan jelas, dan melibatkan tim untuk brainstorming solusi.",
            "Menyalahkan tim atas masalah tersebut.",
            "Menunda penyelesaian masalah hingga waktu yang tidak ditentukan."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Kemampuan manajerial yang baik adalah mampu berpikir analitis dan sistematis dalam menghadapi masalah. Mengumpulkan data dan melibatkan tim menunjukkan pendekatan yang terstruktur dan kolaboratif."
    },
    {
        "question": "Bagaimana Anda memotivasi tim yang sedang mengalami kejenuhan kerja?",
        "options": [
            "Menambah beban kerja agar mereka tidak punya waktu untuk jenuh.",
            "Mendiamkan mereka karena itu urusan pribadi masing-masing.",
            "Mengadakan sesi diskusi, memberikan apresiasi atas kerja keras mereka, dan menawarkan fleksibilitas atau tantangan baru.",
            "Memberikan teguran keras agar mereka lebih fokus.",
            "Meningkatkan target kerja tanpa dukungan."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Seorang pemimpin yang efektif mampu mengenali kondisi tim dan memberikan motivasi yang tepat. Mendengarkan, menghargai, dan memberikan dukungan adalah cara terbaik untuk meningkatkan semangat dan produktivitas."
    },
    {
        "question": "Anda diminta untuk memimpin proyek yang tidak sesuai dengan keahlian Anda. Anda akan...",
        "options": [
            "Menolak tugas tersebut dengan tegas.",
            "Menerima tugas tersebut namun meminta tim lain yang mengerjakannya.",
            "Menerima tugas tersebut, belajar secepatnya, berkolaborasi dengan ahli di bidang itu, dan menunjukkan inisiatif untuk berhasil.",
            "Menyerah di awal karena tidak yakin.",
            "Berbohong bahwa Anda menguasai bidang tersebut."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Sikap ini menunjukkan sikap proaktif, kemauan untuk belajar, dan kemampuan beradaptasi. Menerima tantangan baru dan mencari dukungan adalah kunci untuk pertumbuhan karir."
    },
    {
        "question": "Di suatu acara kantor, Anda melihat rekan kerja Anda dari latar belakang berbeda sedang berdiskusi dengan bahasa daerahnya. Anda akan...",
        "options": [
            "Meminta mereka untuk berhenti menggunakan bahasa daerah di lingkungan kantor.",
            "Berpura-pura tidak melihat mereka.",
            "Menghargai keberagaman tersebut dan bahkan mungkin mencoba mempelajari beberapa kata dasar untuk membangun keakraban.",
            "Mengkritik mereka karena dianggap tidak inklusif.",
            "Ikut campur dalam percakapan padahal Anda tidak mengerti."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Menghargai keberagaman bahasa adalah bagian dari sikap toleransi. Menunjukkan minat untuk belajar bahkan hal kecil akan membangun jembatan komunikasi dan menciptakan lingkungan kerja yang inklusif."
    },
    {
        "question": "Apa yang dimaksud dengan sikap 'profesional' dalam bekerja?",
        "options": [
            "Hanya bekerja sesuai jam kerja.",
            "Menyelesaikan pekerjaan dengan minimal usaha.",
            "Bertanggung jawab, berintegritas, bekerja sesuai standar etika, dan mampu menjaga hubungan baik dengan rekan kerja dan klien.",
            "Hanya berfokus pada pekerjaan sendiri.",
            "Mendapatkan gaji yang tinggi."
        ],
        "correct": 2,
        "category": "Wawancara",
        "explanation": "Profesionalisme mencakup berbagai aspek, termasuk etika kerja, integritas, dan kemampuan interpersonal. Ini adalah kualitas penting yang dicari dalam setiap pegawai."
    },
    {
        "question": "Ceritakan situasi di mana Anda harus berhadapan dengan orang yang sulit (sulit diajak kerja sama atau berkonflik). Bagaimana Anda menyikapinya?",
        "options": [
            "Langsung konfrontasi.",
            "Menghindarinya sepenuhnya.",
            "Menggunakan pendekatan komunikasi yang terbuka, mencari akar masalah, dan mencoba mencapai pemahaman bersama dengan tenang dan logis.",
            "Melaporkannya ke atasan tanpa mencoba menyelesaikan sendiri.",
            "Meminta bantuan rekan kerja lain untuk menyelesaikannya."
        ],
        "correct": 2,
        "category": "Wawancara",
        "explanation": "Jawaban ini menunjukkan kemampuan negosiasi, manajemen konflik, dan kematangan emosional. Mengatasi masalah dengan komunikasi langsung dan terbuka adalah pendekatan yang paling efektif."
    },
    {
        "question": "Jika Anda mendapatkan kesempatan untuk memimpin tim, gaya kepemimpinan seperti apa yang akan Anda terapkan?",
        "options": [
            "Otoriter, di mana semua keputusan ada di tangan saya.",
            "Fleksibel, di mana setiap orang bekerja sesuai kemauannya sendiri.",
            "Kolaboratif dan supportif, di mana saya memotivasi, mendelegasikan tugas dengan jelas, dan memastikan setiap anggota tim merasa didukung untuk mencapai potensi terbaik mereka.",
            "Hanya fokus pada target tanpa memperhatikan kondisi tim.",
            "Mengandalkan anggota tim yang paling senior."
        ],
        "correct": 2,
        "category": "Wawancara",
        "explanation": "Kepemimpinan yang kolaboratif dan supportif dianggap efektif karena dapat membangun kepercayaan, meningkatkan produktivitas, dan memberdayakan anggota tim."
    },
    // Tambahan Soal Batch 4
    {
        "question": "Seorang pasien datang dengan resep yang mengandung tablet yang harus digerus. Apoteker harus memastikan bahwa obat tersebut tidak termasuk dalam kategori...",
        "options": [
            "Tablet yang bisa dikunyah.",
            "Tablet salut selaput.",
            "Tablet kunyah.",
            "Tablet salut enterik atau lepas lambat.",
            "Tablet sublingual."
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "Tablet salut enterik dan lepas lambat memiliki lapisan khusus yang mengontrol pelepasan obat. Jika digerus, lapisan ini akan rusak, mengakibatkan pelepasan obat yang tidak terkontrol dan berpotensi menyebabkan efek samping atau kehilangan efektivitas."
    },
    {
        "question": "Sediaan farmasi yang berupa campuran homogen antara dua cairan yang tidak saling melarutkan, distabilkan oleh emulgator, disebut...",
        "options": [
            "Suspensi",
            "Larutan",
            "Emulsi",
            "Eliksir",
            "Sirup"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Emulsi adalah sediaan yang terdiri dari dua fase cair yang tidak saling bercampur, seperti minyak dan air, yang distabilkan oleh agen pengemulsi (emulgator)."
    },
    {
        "question": "Apa yang dimaksud dengan dispensing dalam pelayanan farmasi?",
        "options": [
            "Pencatatan resep di komputer.",
            "Pemberian konseling kepada pasien.",
            "Proses penyiapan, peracikan, dan penyerahan obat kepada pasien sesuai resep.",
            "Pengadaan obat dari distributor.",
            "Penyimpanan obat di lemari."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Dispensing adalah inti dari pelayanan farmasi. Proses ini mencakup semua tahapan dari menerima resep hingga menyerahkan obat yang sudah siap pakai kepada pasien."
    },
    {
        "question": "Sediaan obat yang mengandung zat aktif dengan partikel padat yang tidak larut, terdispersi dalam pembawa cair, disebut...",
        "options": [
            "Suspensi",
            "Emulsi",
            "Larutan",
            "Sirup",
            "Eliksir"
        ],
        "correct": 0,
        "category": "SKT",
        "explanation": "Suspensi adalah sediaan cair yang mengandung partikel padat yang tidak larut, terdispersi secara merata dalam medium pendispersi cair. Contohnya adalah obat antasida cair."
    },
    {
        "question": "Penyakit yang disebabkan oleh kekurangan vitamin C disebut...",
        "options": [
            "Rakhitis",
            "Beriberi",
            "Scurvy",
            "Anemia",
            "Rabun senja"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Scurvy adalah penyakit yang timbul akibat kekurangan vitamin C, yang berperan penting dalam pembentukan kolagen."
    },
    {
        "question": "Apa fungsi utama dari Sistem Informasi Manajemen (SIM) di apotek?",
        "options": [
            "Membuat laporan keuangan saja.",
            "Hanya untuk mencetak label obat.",
            "Mengelola stok obat, mencatat transaksi, dan memantau pergerakan obat secara real-time.",
            "Menggantikan peran apoteker.",
            "Hanya untuk berkomunikasi dengan pasien."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "SIM apotek adalah alat penting untuk efisiensi operasional. Fungsinya meliputi manajemen inventaris, pencatatan penjualan, dan pemantauan data lain untuk mengoptimalkan kinerja apotek."
    },
    {
        "question": "Interaksi obat yang terjadi ketika satu obat mengurangi efek farmakologis obat lain disebut...",
        "options": [
            "Sinergis",
            "Antagonis",
            "Potensiasi",
            "Aditif",
            "Keracunan"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Interaksi antagonis adalah ketika efek kombinasi obat lebih kecil dari efek obat tunggal. Ini dapat menyebabkan kegagalan terapi jika tidak diantisipasi."
    },
    {
        "question": "Apa yang dimaksud dengan 'dosis lazim' pada obat?",
        "options": [
            "Dosis yang paling populer di pasaran.",
            "Dosis yang paling aman untuk anak-anak.",
            "Dosis yang paling sering digunakan dan memberikan efek terapi yang diinginkan.",
            "Dosis yang paling rendah yang masih memberikan efek.",
            "Dosis yang paling tinggi yang dapat diberikan."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Dosis lazim adalah dosis yang secara umum efektif dan aman untuk sebagian besar pasien, sesuai dengan pengalaman klinis dan standar yang ditetapkan."
    },
    {
        "question": "Anda menghadapi situasi di mana tim Anda menunjukkan resistensi terhadap penggunaan teknologi baru yang Anda usulkan. Sikap Anda sebagai pemimpin adalah...",
        "options": [
            "Memaksa tim untuk menggunakannya atau mengancam dengan sanksi.",
            "Mengabaikan resistensi mereka dan tetap melanjutkan.",
            "Mendengarkan kekhawatiran mereka, memberikan pelatihan dan dukungan yang memadai, serta menjelaskan manfaat jangka panjang dari teknologi tersebut.",
            "Membatalkan rencana penggunaan teknologi baru.",
            "Mengganti anggota tim yang menolak."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Seorang pemimpin yang efektif tidak hanya berfokus pada hasil, tetapi juga pada orang-orangnya. Memahami kekhawatiran tim dan memberikan dukungan adalah kunci untuk keberhasilan implementasi perubahan."
    },
    {
        "question": "Bagaimana Anda memastikan bahwa tim Anda tetap termotivasi dan produktif saat bekerja dari jarak jauh?",
        "options": [
            "Memantau setiap aktivitas mereka secara ketat.",
            "Memberikan tugas sebanyak mungkin agar mereka tetap sibuk.",
            "Membangun komunikasi yang teratur, memberikan kepercayaan, mengakui kontribusi mereka, dan memastikan mereka memiliki alat yang diperlukan.",
            "Menuntut mereka untuk selalu siap setiap saat.",
            "Mengurangi gaji jika produktivitas menurun."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Dalam lingkungan kerja jarak jauh, membangun kepercayaan dan menjaga komunikasi adalah hal yang esensial. Memberikan dukungan dan pengakuan adalah kunci untuk menjaga motivasi tim."
    },
    {
        "question": "Anda ditugaskan untuk memecahkan masalah yang melibatkan banyak pihak. Anda akan...",
        "options": [
            "Hanya berkomunikasi dengan atasan Anda.",
            "Mengambil keputusan sendiri tanpa berkonsultasi.",
            "Melakukan pertemuan dengan semua pihak terkait untuk memahami perspektif mereka dan mencari solusi yang komprehensif.",
            "Membiarkan masalah tersebut diselesaikan oleh pihak lain.",
            "Menyalahkan pihak lain atas masalah tersebut."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Pendekatan ini menunjukkan kemampuan berpikir holistik dan kolaboratif. Melibatkan semua pihak yang terkena dampak adalah cara terbaik untuk menemukan solusi yang berkelanjutan."
    },
    {
        "question": "Anda melihat rekan kerja Anda sering kali menyebarkan gosip tentang rekan lain. Sikap Anda sebagai ASN adalah...",
        "options": [
            "Ikut serta dalam gosip tersebut.",
            "Mendiamkan saja karena itu urusan pribadi.",
            "Menghindari percakapan tersebut dan secara halus mengingatkan rekan Anda tentang pentingnya menjaga etika dan profesionalisme di lingkungan kerja.",
            "Menegur rekan tersebut di depan umum.",
            "Melaporkan ke atasan tanpa mencoba berkomunikasi terlebih dahulu."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Seorang ASN harus menjaga profesionalisme dan etika. Mencegah penyebaran gosip dengan cara yang sopan dan profesional menunjukkan integritas dan komitmen untuk menciptakan lingkungan kerja yang positif."
    },
    {
        "question": "Anda ditempatkan di sebuah pos pelayanan yang membutuhkan kerja sama dengan instansi lain. Sikap Anda adalah...",
        "options": [
            "Berjalan sendiri tanpa berkoordinasi.",
            "Menganggap instansi lain sebagai pesaing.",
            "Membangun komunikasi yang baik dan berkolaborasi secara efektif untuk mencapai tujuan bersama.",
            "Menyalahkan instansi lain jika ada masalah.",
            "Menolak bekerja sama dengan instansi lain."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Sebagai pelayan publik, kolaborasi antar instansi sangat penting untuk memberikan pelayanan yang terpadu. Mampu membangun hubungan baik dan bekerja sama adalah kunci keberhasilan."
    },
    {
        "question": "Ceritakan tentang pengalaman Anda dalam menghadapi kegagalan. Apa yang Anda pelajari dari pengalaman itu?",
        "options": [
            "Saya tidak pernah gagal.",
            "Saya menyalahkan orang lain atas kegagalan tersebut.",
            "Saya menganalisis penyebab kegagalan, mengambil tanggung jawab, dan menggunakan pelajaran itu untuk tidak mengulangi kesalahan yang sama di masa depan.",
            "Saya merasa putus asa dan berhenti mencoba.",
            "Saya berpura-pura tidak terjadi apa-apa."
        ],
        "correct": 2,
        "category": "Wawancara",
        "explanation": "Jawaban ini menunjukkan kedewasaan, kemampuan refleksi diri, dan ketahanan dalam menghadapi tantangan. Mengakui kegagalan dan belajar darinya adalah kualitas penting bagi setiap profesional."
    },
    {
        "question": "Apa yang membuat Anda berbeda dari kandidat lain?",
        "options": [
            "Saya memiliki kualifikasi yang sama dengan yang lain.",
            "Saya tidak tahu.",
            "Saya memiliki kombinasi unik antara pengetahuan teknis farmasi yang kuat, pengalaman dalam manajemen tim, dan kemampuan interpersonal yang baik untuk melayani masyarakat dengan empati.",
            "Saya lebih senior dari yang lain.",
            "Saya hanya berharap keberuntungan."
        ],
        "correct": 2,
        "category": "Wawancara",
        "explanation": "Jawaban ini menunjukkan pemahaman diri yang baik dan kemampuan untuk mengartikulasikan nilai unik yang Anda miliki. Ini menunjukkan Anda telah memikirkan bagaimana Anda bisa menjadi aset bagi organisasi."
    },
    // Tambahan Soal Batch 5
    {
        "question": "Seorang pasien datang dengan keluhan mual dan muntah. Obat yang dapat diberikan untuk mengatasi gejala tersebut termasuk dalam golongan...",
        "options": [
            "Antibiotik",
            "Antihistamin",
            "Antiemetik",
            "Antipiretik",
            "Analgesik"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Antiemetik adalah golongan obat yang digunakan untuk mencegah atau mengatasi mual dan muntah."
    },
    {
        "question": "Sediaan cair yang mengandung alkohol, memiliki rasa manis, dan digunakan sebagai pembawa untuk obat, disebut...",
        "options": [
            "Sirup",
            "Eliksir",
            "Suspensi",
            "Tingtur",
            "Larutan"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Eliksir adalah sediaan cair yang jernih dan manis yang biasanya mengandung alkohol, digunakan sebagai pembawa obat."
    },
    {
        "question": "Salah satu fungsi utama dari label obat yang disiapkan apoteker adalah...",
        "options": [
            "Sebagai hiasan kemasan.",
            "Untuk mencantumkan tanggal kedaluwarsa saja.",
            "Menyediakan informasi penting seperti nama pasien, aturan pakai, dosis, dan peringatan.",
            "Menunjukkan bahwa obat tersebut mahal.",
            "Sebagai alat promosi."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Label obat adalah bagian krusial dari konseling. Label yang jelas dan informatif membantu pasien menggunakan obat dengan benar dan aman."
    },
    {
        "question": "Senyawa yang digunakan untuk meningkatkan kelarutan suatu zat aktif dalam formula sediaan farmasi disebut...",
        "options": [
            "Adsorben",
            "Lubrikan",
            "Solubilizer",
            "Disintegran",
            "Binder"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Solubilizer (pembantu kelarutan) adalah bahan tambahan yang digunakan untuk membantu melarutkan zat aktif yang sulit larut dalam pelarut."
    },
    {
        "question": "Proses pengadaan obat di apotek harus berdasarkan...",
        "options": [
            "Harga terendah saja.",
            "Permintaan pasien sehari-hari.",
            "Pola penyakit, pola konsumsi, dan data epidemiologi yang akurat.",
            "Prediksi semata tanpa data.",
            "Saran dari distributor."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Pengadaan obat yang efektif membutuhkan perencanaan yang matang. Menggunakan data yang akurat dapat mencegah penumpukan stok atau kekosongan obat."
    },
    {
        "question": "Apa yang dimaksud dengan uji disolusi pada tablet?",
        "options": [
            "Uji untuk mengukur kekerasan tablet.",
            "Uji untuk mengukur waktu tablet hancur.",
            "Uji untuk mengukur jumlah zat aktif dalam tablet.",
            "Uji untuk mengukur kecepatan zat aktif larut dalam medium cair.",
            "Uji untuk mengukur berat tablet."
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "Uji disolusi adalah uji mutu yang mengukur seberapa cepat zat aktif dari suatu sediaan padat (seperti tablet) larut ke dalam medium cair, yang merupakan indikasi ketersediaan hayati obat."
    },
    {
        "question": "Tujuan utama dari pemberian informasi obat (PIO) kepada pasien adalah...",
        "options": [
            "Menyalahkan pasien jika terjadi efek samping.",
            "Membuat pasien membeli obat lebih banyak.",
            "Meningkatkan kepatuhan pasien, memastikan keamanan, dan efektivitas terapi.",
            "Menghabiskan waktu yang tersedia.",
            "Hanya menjelaskan harga obat."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "PIO adalah pelayanan farmasi klinis esensial. Dengan informasi yang tepat, pasien lebih patuh, risiko efek samping berkurang, dan hasil terapi lebih optimal."
    },
    {
        "question": "Seorang pasien bertanya tentang efek samping obat yang diresepkan. Sebagai apoteker, Anda akan...",
        "options": [
            "Mengatakan tidak ada efek samping sama sekali.",
            "Memberikan jawaban yang sangat teknis dan rumit.",
            "Menjelaskan efek samping yang umum dan cara mengatasinya dengan bahasa yang mudah dipahami.",
            "Meminta pasien mencari informasi sendiri di internet.",
            "Menolak untuk memberikan informasi tersebut."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Konseling yang efektif memerlukan kemampuan untuk menyederhanakan informasi yang kompleks. Menjelaskan efek samping dengan jelas membantu pasien mengelola kesehatan mereka dengan lebih baik."
    },
    {
        "question": "Saat atasan Anda meminta laporan yang mendesak, dan Anda sedang mengerjakan tugas lain yang juga penting. Anda akan...",
        "options": [
            "Mengabaikan permintaan atasan.",
            "Menyelesaikan tugas lama dan mengabaikan permintaan baru.",
            "Berkomunikasi dengan atasan untuk mengklarifikasi prioritas, menanyakan tenggat waktu, dan menyesuaikan jadwal kerja Anda.",
            "Langsung mengerjakan permintaan baru tanpa menyelesaikan tugas lama.",
            "Meminta rekan kerja lain yang mengerjakan laporan tersebut."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Kemampuan berkomunikasi dan memprioritaskan tugas adalah keterampilan manajerial yang penting. Mengklarifikasi permintaan atasan menunjukkan inisiatif dan manajemen waktu yang baik."
    },
    {
        "question": "Seorang anggota tim sering menunjukkan kinerja di bawah standar. Anda akan...",
        "options": [
            "Mengabaikannya karena tidak mau berkonflik.",
            "Menegurnya di depan semua orang agar memberi efek jera.",
            "Mengadakan pertemuan empat mata, memberikan umpan balik yang konstruktif, dan menyusun rencana perbaikan kinerja bersama-sama.",
            "Mengeluh ke anggota tim lain.",
            "Menyerahkan tugasnya ke orang lain."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Seorang manajer yang efektif adalah pelatih bagi timnya. Memberikan umpan balik secara pribadi dan menawarkan dukungan adalah cara terbaik untuk membantu anggota tim berkembang."
    },
    {
        "question": "Jika Anda diberi tanggung jawab yang besar, tetapi Anda tidak yakin bisa melaksanakannya. Sikap Anda adalah...",
        "options": [
            "Menolak tanggung jawab tersebut.",
            "Menerima namun tidak serius mengerjakannya.",
            "Menerima tanggung jawab tersebut sebagai tantangan, membuat rencana, dan mencari bimbingan dari mentor atau atasan jika diperlukan.",
            "Menyerah sebelum mencoba.",
            "Meminta gaji tambahan."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Sikap ini menunjukkan keberanian, inisiatif, dan kemauan untuk belajar. Mengambil tanggung jawab yang lebih besar adalah salah satu cara terbaik untuk tumbuh dalam karier."
    },
    {
        "question": "Anda adalah apoteker di daerah pedesaan, dan ada pasien lansia yang kesulitan memahami petunjuk penggunaan obat. Anda akan...",
        "options": [
            "Menyuruh keluarga pasien yang datang mengambil obat.",
            "Berbicara dengan nada keras agar mereka mengerti.",
            "Menggunakan bahasa yang sangat sederhana, contoh visual, dan meminta pasien mengulang petunjuk untuk memastikan pemahaman.",
            "Menulis petunjuk yang rumit.",
            "Mengabaikan kebingungan pasien."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Berempati dengan kondisi pasien adalah kunci. Menggunakan metode komunikasi yang disesuaikan dengan kebutuhan individu menunjukkan pelayanan yang berkualitas dan berfokus pada pasien."
    },
    {
        "question": "Di lingkungan kerja Anda, muncul ide-ide baru yang mungkin kontroversial. Sikap Anda adalah...",
        "options": [
            "Langsung menolak ide tersebut.",
            "Menjadi pendukung utama tanpa evaluasi.",
            "Mendorong diskusi yang sehat, mengevaluasi ide secara objektif berdasarkan data, dan menghargai semua pendapat.",
            "Menghindari topik tersebut.",
            "Mengkritik orang yang punya ide tersebut."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Sikap ini menunjukkan keterbukaan pikiran dan kemampuan untuk berpikir kritis. Mendorong lingkungan di mana ide-ide dapat dievaluasi secara adil adalah penting untuk inovasi."
    },
    {
        "question": "Pemerintah memberikan tugas untuk melakukan penyuluhan kesehatan. Anda akan...",
        "options": [
            "Menolak karena bukan tugas utama Anda.",
            "Melaksanakan tugas tersebut dengan asal-asalan.",
            "Melaksanakan tugas tersebut dengan sebaik-baiknya, menganggapnya sebagai kesempatan untuk mengabdi, dan menyiapkan materi yang edukatif dan menarik.",
            "Meminta orang lain yang melakukannya.",
            "Menganggapnya sebagai beban tambahan."
        ],
        "correct": 2,
        "category": "Wawancara",
        "explanation": "Jawaban ini menunjukkan semangat pengabdian dan profesionalisme sebagai ASN. Mampu melihat tugas tambahan sebagai kesempatan untuk berkontribusi adalah kualitas yang sangat dihargai."
    },
    // Tambahan Soal Batch 6
    {
        "question": "Seorang apoteker harus melakukan skrining resep. Salah satu aspek yang harus diperiksa adalah persyaratan klinis resep, yang mencakup...",
        "options": [
            "Kesesuaian dosis dan aturan pakai.",
            "Nama dokter dan tanggal resep.",
            "Interaksi obat dan kontraindikasi.",
            "Pencatatan obat di kartu stok.",
            "Harga obat yang diresepkan."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Skrining klinis adalah tahap kritis di mana apoteker meninjau resep untuk memastikan tidak ada masalah klinis, seperti interaksi obat, alergi, atau dosis yang tidak sesuai untuk pasien."
    },
    {
        "question": "Metode pembuatan tablet yang paling sesuai untuk bahan aktif yang tidak tahan panas dan lembab adalah...",
        "options": [
            "Kempa langsung.",
            "Granulasi basah.",
            "Granulasi kering.",
            "Metode cetak.",
            "Metode peleburan."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Granulasi kering adalah metode yang digunakan ketika bahan aktif sensitif terhadap panas dan lembab. Prosesnya melibatkan pembentukan granul dari serbuk kering tanpa menggunakan pelarut."
    },
    {
        "question": "Sediaan obat yang mengandung zat aktif dengan partikel padat yang larut sempurna dalam pembawa cair, disebut...",
        "options": [
            "Suspensi.",
            "Emulsi.",
            "Solusi.",
            "Sirup.",
            "Eliksir."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Solusi (larutan) adalah sediaan cair homogen di mana zat aktif terlarut sepenuhnya dalam pelarut."
    },
    {
        "question": "Fungsi utama dari kartu stok obat di apotek adalah...",
        "options": [
            "Mencatat semua transaksi keuangan.",
            "Menampilkan harga jual obat.",
            "Mengontrol pergerakan obat masuk dan keluar, serta mencatat nomor batch dan tanggal kedaluwarsa.",
            "Menjadi alat promosi obat.",
            "Mencatat nama pasien yang membeli obat."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Kartu stok adalah alat vital untuk manajemen inventaris. Kartu ini memastikan apoteker memiliki catatan akurat tentang jumlah obat yang tersedia, sehingga dapat mencegah kekosongan atau penumpukan stok."
    },
    {
        "question": "Apa yang dimaksud dengan obat 'over-the-counter' (OTC)?",
        "options": [
            "Obat yang hanya bisa didapat dengan resep dokter.",
            "Obat yang dijual di pasar gelap.",
            "Obat yang bisa dibeli bebas tanpa resep.",
            "Obat yang hanya untuk penggunaan luar.",
            "Obat yang khusus untuk anak-anak."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Obat OTC atau obat bebas adalah obat yang aman digunakan oleh masyarakat untuk mengobati gejala penyakit ringan tanpa memerlukan resep dokter."
    },
    {
        "question": "Dalam manajemen apotek, apa yang dimaksud dengan 'First-In, First-Out' (FIFO)?",
        "options": [
            "Metode pelayanan di mana pasien yang datang duluan dilayani duluan.",
            "Prinsip manajemen stok di mana obat yang pertama kali masuk harus pertama kali dikeluarkan.",
            "Metode penataan obat berdasarkan abjad.",
            "Prinsip akuntansi untuk menghitung laba.",
            "Metode penyimpanan obat berdasarkan suhu."
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "FIFO adalah prinsip manajemen stok yang sangat penting di apotek untuk memastikan obat dengan tanggal kedaluwarsa lebih cepat digunakan terlebih dahulu, sehingga mengurangi kerugian akibat obat kedaluwarsa."
    },
    {
        "question": "Senyawa yang digunakan untuk menstabilkan emulsi agar tidak pecah dan terpisah disebut...",
        "options": [
            "Pelarut.",
            "Antioksidan.",
            "Pengawet.",
            "Emulgator.",
            "Pemanis."
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "Emulgator adalah zat yang digunakan untuk membuat emulsi menjadi stabil, yaitu mencegah fase-fase cair yang tidak saling melarutkan agar tidak terpisah kembali."
    },
    {
        "question": "Seorang pasien datang dengan keluhan mual dan muntah. Obat yang dapat diberikan untuk mengatasi gejala tersebut termasuk dalam golongan...",
        "options": [
            "Antibiotik",
            "Antihistamin",
            "Antiemetik",
            "Antipiretik",
            "Analgesik"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Antiemetik adalah golongan obat yang digunakan untuk mencegah atau mengatasi mual dan muntah."
    },
    {
        "question": "Seorang pasien datang ke apotek dengan gejala pusing, mual, dan muntah. Setelah diberikan obat sesuai resep dokter, pasien mengalami ruam kulit. Apoteker harus segera...",
        "options": [
            "Meminta pasien kembali ke dokter.",
            "Mengganti obat pasien dengan obat lain.",
            "Melaporkan kejadian ini sebagai dugaan Kejadian Tidak Diinginkan Obat (KTD) kepada tim farmakovigilans.",
            "Mengabaikan keluhan pasien.",
            "Menyalahkan dokter yang meresepkan obat."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Reaksi merugikan obat (adverse drug event/ADE) wajib dilaporkan untuk pemantauan keamanan obat. Farmakovigilans adalah sistem yang melakukan pengawasan terhadap keamanan obat."
    },
    {
        "question": "Anda ditugaskan untuk memimpin tim yang terdiri dari individu dengan beragam kepribadian. Anda akan...",
        "options": [
            "Memberlakukan aturan yang kaku untuk semua orang.",
            "Hanya berinteraksi dengan orang yang paling mirip dengan Anda.",
            "Mempelajari gaya komunikasi dan motivasi setiap anggota tim, dan menyesuaikan pendekatan Anda agar efektif.",
            "Membiarkan mereka bekerja sendiri-sendiri.",
            "Mengambil alih semua pekerjaan yang sulit."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Kemampuan untuk beradaptasi dengan berbagai gaya kerja adalah ciri kepemimpinan yang kuat. Memahami kebutuhan individu akan membantu Anda memimpin tim yang beragam dengan lebih efektif."
    },
    {
        "question": "Anda melihat ada sistem atau prosedur kerja yang tidak efisien. Tindakan Anda adalah...",
        "options": [
            "Mendiamkannya saja karena itu bukan tugas Anda.",
            "Mengajukan ide perbaikan yang logis dan solutif kepada atasan atau tim terkait.",
            "Mengkritik sistem tersebut di depan rekan kerja.",
            "Menghindari sistem tersebut dan membuat cara kerja sendiri.",
            "Menyalahkan orang lain atas ketidak efisienan tersebut."
        ],
        "correct": 1,
        "category": "Manajerial",
        "explanation": "Berpikir proaktif dan solutif adalah ciri pegawai yang berinisiatif. Mengajukan ide perbaikan menunjukkan kepedulian Anda terhadap efisiensi dan kemajuan organisasi."
    },
    {
        "question": "Bagaimana Anda memprioritaskan pekerjaan saat Anda memiliki banyak tugas dengan tenggat waktu yang sama?",
        "options": [
            "Mengerjakan tugas yang paling mudah terlebih dahulu.",
            "Mengerjakan semua tugas sekaligus.",
            "Membuat daftar prioritas berdasarkan urgensi dan dampak, lalu meminta arahan atasan jika diperlukan.",
            "Mengeluh kepada atasan.",
            "Menyerahkan tugas kepada rekan kerja lain."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Manajemen waktu dan kemampuan memprioritaskan adalah keterampilan manajerial yang krusial. Pendekatan yang terstruktur akan memastikan tugas paling penting selesai tepat waktu."
    },
    {
        "question": "Anda menemukan perbedaan pendapat yang signifikan antara rekan kerja Anda yang memiliki latar belakang budaya berbeda. Anda akan...",
        "options": [
            "Memilih satu pihak yang Anda dukung.",
            "Menghindari interaksi dengan keduanya.",
            "Mengajak kedua belah pihak untuk berdiskusi secara terbuka, memfasilitasi komunikasi yang saling menghormati, dan mencari titik temu.",
            "Menyalahkan salah satu pihak atas masalah tersebut.",
            "Mendiamkan masalah tersebut."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Sebagai ASN, Anda harus menjadi perekat bangsa. Mampu memfasilitasi dialog dan mendorong pemahaman lintas budaya adalah kunci untuk menciptakan lingkungan kerja yang harmonis."
    },
    {
        "question": "Anda adalah apoteker di daerah yang sering mengalami bencana alam. Sikap Anda sebagai ASN adalah...",
        "options": [
            "Menunggu perintah dari atasan tanpa inisiatif.",
            "Meminta bantuan dari luar daerah.",
            "Berpartisipasi aktif dalam tim penanggulangan bencana, menyiapkan dan mendistribusikan obat-obatan esensial, serta memberikan pelayanan kesehatan seoptimal mungkin.",
            "Menyalahkan pemerintah karena tidak sigap.",
            "Hanya mengurus apotek pribadi."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Seorang ASN harus memiliki kepedulian dan kesiapsiagaan untuk melayani masyarakat, terutama dalam situasi darurat. Bertindak proaktif adalah nilai yang sangat penting."
    },
    {
        "question": "Jika Anda melihat anggota tim yang kesulitan dalam pekerjaan, Anda akan...",
        "options": [
            "Mengabaikannya karena bukan masalah Anda.",
            "Memberitahu atasan bahwa dia tidak kompeten.",
            "Menawarkan bantuan, memberikan bimbingan, atau berbagi sumber daya yang dapat membantunya menyelesaikan tugas.",
            "Menyuruhnya mencari solusi sendiri.",
            "Mengambil alih pekerjaannya dan melakukannya sendiri."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Mendukung dan membantu rekan kerja menunjukkan semangat kolaborasi dan empati, yang sangat penting untuk menciptakan lingkungan kerja yang positif dan produktif."
    },
// Tambahan Soal Batch 7
    {
        "question": "Seorang pasien datang dengan keluhan mual dan muntah. Obat yang dapat diberikan untuk mengatasi gejala tersebut termasuk dalam golongan...",
        "options": [
            "Antibiotik",
            "Antihistamin",
            "Antiemetik",
            "Antipiretik",
            "Analgesik"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Antiemetik adalah golongan obat yang digunakan untuk mencegah atau mengatasi mual dan muntah."
    },
    {
        "question": "Sediaan cair yang mengandung alkohol, memiliki rasa manis, dan digunakan sebagai pembawa untuk obat, disebut...",
        "options": [
            "Sirup",
            "Eliksir",
            "Suspensi",
            "Tingtur",
            "Larutan"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Eliksir adalah sediaan cair yang jernih dan manis yang biasanya mengandung alkohol, digunakan sebagai pembawa obat."
    },
    {
        "question": "Salah satu fungsi utama dari label obat yang disiapkan apoteker adalah...",
        "options": [
            "Sebagai hiasan kemasan.",
            "Untuk mencantumkan tanggal kedaluwarsa saja.",
            "Menyediakan informasi penting seperti nama pasien, aturan pakai, dosis, dan peringatan.",
            "Menunjukkan bahwa obat tersebut mahal.",
            "Sebagai alat promosi."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Label obat adalah bagian krusial dari konseling. Label yang jelas dan informatif membantu pasien menggunakan obat dengan benar dan aman."
    },
    {
        "question": "Senyawa yang digunakan untuk meningkatkan kelarutan suatu zat aktif dalam formula sediaan farmasi disebut...",
        "options": [
            "Adsorben",
            "Lubrikan",
            "Solubilizer",
            "Disintegran",
            "Binder"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Solubilizer (pembantu kelarutan) adalah bahan tambahan yang digunakan untuk membantu melarutkan zat aktif yang sulit larut dalam pelarut."
    },
    {
        "question": "Proses pengadaan obat di apotek harus berdasarkan...",
        "options": [
            "Harga terendah saja.",
            "Permintaan pasien sehari-hari.",
            "Pola penyakit, pola konsumsi, dan data epidemiologi yang akurat.",
            "Prediksi semata tanpa data.",
            "Saran dari distributor."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Pengadaan obat yang efektif membutuhkan perencanaan yang matang. Menggunakan data yang akurat dapat mencegah penumpukan stok atau kekosongan obat."
    },
    {
        "question": "Apa yang dimaksud dengan uji disolusi pada tablet?",
        "options": [
            "Uji untuk mengukur kekerasan tablet.",
            "Uji untuk mengukur waktu tablet hancur.",
            "Uji untuk mengukur jumlah zat aktif dalam tablet.",
            "Uji untuk mengukur kecepatan zat aktif larut dalam medium cair.",
            "Uji untuk mengukur berat tablet."
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "Uji disolusi adalah uji mutu yang mengukur seberapa cepat zat aktif dari suatu sediaan padat (seperti tablet) larut ke dalam medium cair, yang merupakan indikasi ketersediaan hayati obat."
    },
    {
        "question": "Tujuan utama dari pemberian informasi obat (PIO) kepada pasien adalah...",
        "options": [
            "Menyalahkan pasien jika terjadi efek samping.",
            "Membuat pasien membeli obat lebih banyak.",
            "Meningkatkan kepatuhan pasien, memastikan keamanan, dan efektivitas terapi.",
            "Menghabiskan waktu yang tersedia.",
            "Hanya menjelaskan harga obat."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "PIO adalah pelayanan farmasi klinis esensial. Dengan informasi yang tepat, pasien lebih patuh, risiko efek samping berkurang, dan hasil terapi lebih optimal."
    },
    {
        "question": "Seorang pasien bertanya tentang efek samping obat yang diresepkan. Sebagai apoteker, Anda akan...",
        "options": [
            "Mengatakan tidak ada efek samping sama sekali.",
            "Memberikan jawaban yang sangat teknis dan rumit.",
            "Menjelaskan efek samping yang umum dan cara mengatasinya dengan bahasa yang mudah dipahami.",
            "Meminta pasien mencari informasi sendiri di internet.",
            "Menolak untuk memberikan informasi tersebut."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Konseling yang efektif memerlukan kemampuan untuk menyederhanakan informasi yang kompleks. Menjelaskan efek samping dengan jelas membantu pasien mengelola kesehatan mereka dengan lebih baik."
    },
    {
        "question": "Saat atasan Anda meminta laporan yang mendesak, dan Anda sedang mengerjakan tugas lain yang juga penting. Anda akan...",
        "options": [
            "Mengabaikan permintaan atasan.",
            "Menyelesaikan tugas lama dan mengabaikan permintaan baru.",
            "Berkomunikasi dengan atasan untuk mengklarifikasi prioritas, menanyakan tenggat waktu, dan menyesuaikan jadwal kerja Anda.",
            "Langsung mengerjakan permintaan baru tanpa menyelesaikan tugas lama.",
            "Meminta rekan kerja lain yang mengerjakan laporan tersebut."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Kemampuan berkomunikasi dan memprioritaskan tugas adalah keterampilan manajerial yang penting. Mengklarifikasi permintaan atasan menunjukkan inisiatif dan manajemen waktu yang baik."
    },
    {
        "question": "Seorang anggota tim sering menunjukkan kinerja di bawah standar. Anda akan...",
        "options": [
            "Mengabaikannya karena tidak mau berkonflik.",
            "Menegurnya di depan semua orang agar memberi efek jera.",
            "Mengadakan pertemuan empat mata, memberikan umpan balik yang konstruktif, dan menyusun rencana perbaikan kinerja bersama-sama.",
            "Mengeluh ke anggota tim lain.",
            "Menyerahkan tugasnya ke orang lain."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Seorang manajer yang efektif adalah pelatih bagi timnya. Memberikan umpan balik secara pribadi dan menawarkan dukungan adalah cara terbaik untuk membantu anggota tim berkembang."
    },
    {
        "question": "Jika Anda diberi tanggung jawab yang besar, tetapi Anda tidak yakin bisa melaksanakannya. Sikap Anda adalah...",
        "options": [
            "Menolak tanggung jawab tersebut.",
            "Menerima namun tidak serius mengerjakannya.",
            "Menerima tanggung jawab tersebut sebagai tantangan, membuat rencana, dan mencari bimbingan dari mentor atau atasan jika diperlukan.",
            "Menyerah sebelum mencoba.",
            "Meminta gaji tambahan."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Sikap ini menunjukkan keberanian, inisiatif, dan kemauan untuk belajar. Mengambil tanggung jawab yang lebih besar adalah salah satu cara terbaik untuk tumbuh dalam karier."
    },
    {
        "question": "Anda adalah apoteker di daerah pedesaan, dan ada pasien lansia yang kesulitan memahami petunjuk penggunaan obat. Anda akan...",
        "options": [
            "Menyuruh keluarga pasien yang datang mengambil obat.",
            "Berbicara dengan nada keras agar mereka mengerti.",
            "Menggunakan bahasa yang sangat sederhana, contoh visual, dan meminta pasien mengulang petunjuk untuk memastikan pemahaman.",
            "Menulis petunjuk yang rumit.",
            "Mengabaikan kebingungan pasien."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Berempati dengan kondisi pasien adalah kunci. Menggunakan metode komunikasi yang disesuaikan dengan kebutuhan individu menunjukkan pelayanan yang berkualitas dan berfokus pada pasien."
    },
    {
        "question": "Di lingkungan kerja Anda, muncul ide-ide baru yang mungkin kontroversial. Sikap Anda adalah...",
        "options": [
            "Langsung menolak ide tersebut.",
            "Menjadi pendukung utama tanpa evaluasi.",
            "Mendorong diskusi yang sehat, mengevaluasi ide secara objektif berdasarkan data, dan menghargai semua pendapat.",
            "Menghindari topik tersebut.",
            "Mengkritik orang yang punya ide tersebut."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Sikap ini menunjukkan keterbukaan pikiran dan kemampuan untuk berpikir kritis. Mendorong lingkungan di mana ide-ide dapat dievaluasi secara adil adalah penting untuk inovasi."
    },
    {
        "question": "Pemerintah memberikan tugas untuk melakukan penyuluhan kesehatan. Anda akan...",
        "options": [
            "Menolak karena bukan tugas utama Anda.",
            "Melaksanakan tugas tersebut dengan asal-asalan.",
            "Melaksanakan tugas tersebut dengan sebaik-baiknya, menganggapnya sebagai kesempatan untuk mengabdi, dan menyiapkan materi yang edukatif dan menarik.",
            "Meminta orang lain yang melakukannya.",
            "Menganggapnya sebagai beban tambahan."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Jawaban ini menunjukkan semangat pengabdian dan profesionalisme sebagai ASN. Mampu melihat tugas tambahan sebagai kesempatan untuk berkontribusi adalah kualitas yang sangat dihargai."
    },
    {
        "question": "Jika Anda melihat anggota tim yang kesulitan dalam pekerjaan, Anda akan...",
        "options": [
            "Mengabaikannya karena bukan masalah Anda.",
            "Memberitahu atasan bahwa dia tidak kompeten.",
            "Menawarkan bantuan, memberikan bimbingan, atau berbagi sumber daya yang dapat membantunya menyelesaikan tugas.",
            "Menyuruhnya mencari solusi sendiri.",
            "Mengambil alih pekerjaannya dan melakukannya sendiri."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Mendukung dan membantu rekan kerja menunjukkan semangat kolaborasi dan empati, yang sangat penting untuk menciptakan lingkungan kerja yang positif dan produktif."
    },
// Tambahan Soal Batch 8
    {
        "question": "Seorang pasien datang dengan keluhan mual dan muntah. Obat yang dapat diberikan untuk mengatasi gejala tersebut termasuk dalam golongan...",
        "options": [
            "Antibiotik",
            "Antihistamin",
            "Antiemetik",
            "Antipiretik",
            "Analgesik"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Antiemetik adalah golongan obat yang digunakan untuk mencegah atau mengatasi mual dan muntah."
    },
    {
        "question": "Sediaan cair yang mengandung alkohol, memiliki rasa manis, dan digunakan sebagai pembawa untuk obat, disebut...",
        "options": [
            "Sirup",
            "Eliksir",
            "Suspensi",
            "Tingtur",
            "Larutan"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Eliksir adalah sediaan cair yang jernih dan manis yang biasanya mengandung alkohol, digunakan sebagai pembawa obat."
    },
    {
        "question": "Salah satu fungsi utama dari label obat yang disiapkan apoteker adalah...",
        "options": [
            "Sebagai hiasan kemasan.",
            "Untuk mencantumkan tanggal kedaluwarsa saja.",
            "Menyediakan informasi penting seperti nama pasien, aturan pakai, dosis, dan peringatan.",
            "Menunjukkan bahwa obat tersebut mahal.",
            "Sebagai alat promosi."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Label obat adalah bagian krusial dari konseling. Label yang jelas dan informatif membantu pasien menggunakan obat dengan benar dan aman."
    },
    {
        "question": "Senyawa yang digunakan untuk meningkatkan kelarutan suatu zat aktif dalam formula sediaan farmasi disebut...",
        "options": [
            "Adsorben",
            "Lubrikan",
            "Solubilizer",
            "Disintegran",
            "Binder"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Solubilizer (pembantu kelarutan) adalah bahan tambahan yang digunakan untuk membantu melarutkan zat aktif yang sulit larut dalam pelarut."
    },
    {
        "question": "Proses pengadaan obat di apotek harus berdasarkan...",
        "options": [
            "Harga terendah saja.",
            "Permintaan pasien sehari-hari.",
            "Pola penyakit, pola konsumsi, dan data epidemiologi yang akurat.",
            "Prediksi semata tanpa data.",
            "Saran dari distributor."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Pengadaan obat yang efektif membutuhkan perencanaan yang matang. Menggunakan data yang akurat dapat mencegah penumpukan stok atau kekosongan obat."
    },
    {
        "question": "Apa yang dimaksud dengan uji disolusi pada tablet?",
        "options": [
            "Uji untuk mengukur kekerasan tablet.",
            "Uji untuk mengukur waktu tablet hancur.",
            "Uji untuk mengukur jumlah zat aktif dalam tablet.",
            "Uji untuk mengukur kecepatan zat aktif larut dalam medium cair.",
            "Uji untuk mengukur berat tablet."
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "Uji disolusi adalah uji mutu yang mengukur seberapa cepat zat aktif dari suatu sediaan padat (seperti tablet) larut ke dalam medium cair, yang merupakan indikasi ketersediaan hayati obat."
    },
    {
        "question": "Tujuan utama dari pemberian informasi obat (PIO) kepada pasien adalah...",
        "options": [
            "Menyalahkan pasien jika terjadi efek samping.",
            "Membuat pasien membeli obat lebih banyak.",
            "Meningkatkan kepatuhan pasien, memastikan keamanan, dan efektivitas terapi.",
            "Menghabiskan waktu yang tersedia.",
            "Hanya menjelaskan harga obat."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "PIO adalah pelayanan farmasi klinis esensial. Dengan informasi yang tepat, pasien lebih patuh, risiko efek samping berkurang, dan hasil terapi lebih optimal."
    },
    {
        "question": "Seorang pasien bertanya tentang efek samping obat yang diresepkan. Sebagai apoteker, Anda akan...",
        "options": [
            "Mengatakan tidak ada efek samping sama sekali.",
            "Memberikan jawaban yang sangat teknis dan rumit.",
            "Menjelaskan efek samping yang umum dan cara mengatasinya dengan bahasa yang mudah dipahami.",
            "Meminta pasien mencari informasi sendiri di internet.",
            "Menolak untuk memberikan informasi tersebut."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Konseling yang efektif memerlukan kemampuan untuk menyederhanakan informasi yang kompleks. Menjelaskan efek samping dengan jelas membantu pasien mengelola kesehatan mereka dengan lebih baik."
    },
    {
        "question": "Saat atasan Anda meminta laporan yang mendesak, dan Anda sedang mengerjakan tugas lain yang juga penting. Anda akan...",
        "options": [
            "Mengabaikan permintaan atasan.",
            "Menyelesaikan tugas lama dan mengabaikan permintaan baru.",
            "Berkomunikasi dengan atasan untuk mengklarifikasi prioritas, menanyakan tenggat waktu, dan menyesuaikan jadwal kerja Anda.",
            "Langsung mengerjakan permintaan baru tanpa menyelesaikan tugas lama.",
            "Meminta rekan kerja lain yang mengerjakan laporan tersebut."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Kemampuan berkomunikasi dan memprioritaskan tugas adalah keterampilan manajerial yang penting. Mengklarifikasi permintaan atasan menunjukkan inisiatif dan manajemen waktu yang baik."
    },
    {
        "question": "Seorang anggota tim sering menunjukkan kinerja di bawah standar. Anda akan...",
        "options": [
            "Mengabaikannya karena tidak mau berkonflik.",
            "Menegurnya di depan semua orang agar memberi efek jera.",
            "Mengadakan pertemuan empat mata, memberikan umpan balik yang konstruktif, dan menyusun rencana perbaikan kinerja bersama-sama.",
            "Mengeluh ke anggota tim lain.",
            "Menyerahkan tugasnya ke orang lain."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Seorang manajer yang efektif adalah pelatih bagi timnya. Memberikan umpan balik secara pribadi dan menawarkan dukungan adalah cara terbaik untuk membantu anggota tim berkembang."
    },
    {
        "question": "Jika Anda diberi tanggung jawab yang besar, tetapi Anda tidak yakin bisa melaksanakannya. Sikap Anda adalah...",
        "options": [
            "Menolak tanggung jawab tersebut.",
            "Menerima namun tidak serius mengerjakannya.",
            "Menerima tanggung jawab tersebut sebagai tantangan, membuat rencana, dan mencari bimbingan dari mentor atau atasan jika diperlukan.",
            "Menyerah sebelum mencoba.",
            "Meminta gaji tambahan."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Sikap ini menunjukkan keberanian, inisiatif, dan kemauan untuk belajar. Mengambil tanggung jawab yang lebih besar adalah salah satu cara terbaik untuk tumbuh dalam karier."
    },
    {
        "question": "Anda adalah apoteker di daerah pedesaan, dan ada pasien lansia yang kesulitan memahami petunjuk penggunaan obat. Anda akan...",
        "options": [
            "Menyuruh keluarga pasien yang datang mengambil obat.",
            "Berbicara dengan nada keras agar mereka mengerti.",
            "Menggunakan bahasa yang sangat sederhana, contoh visual, dan meminta pasien mengulang petunjuk untuk memastikan pemahaman.",
            "Menulis petunjuk yang rumit.",
            "Mengabaikan kebingungan pasien."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Berempati dengan kondisi pasien adalah kunci. Menggunakan metode komunikasi yang disesuaikan dengan kebutuhan individu menunjukkan pelayanan yang berkualitas dan berfokus pada pasien."
    },
    {
        "question": "Di lingkungan kerja Anda, muncul ide-ide baru yang mungkin kontroversial. Sikap Anda adalah...",
        "options": [
            "Langsung menolak ide tersebut.",
            "Menjadi pendukung utama tanpa evaluasi.",
            "Mendorong diskusi yang sehat, mengevaluasi ide secara objektif berdasarkan data, dan menghargai semua pendapat.",
            "Menghindari topik tersebut.",
            "Mengkritik orang yang punya ide tersebut."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Sikap ini menunjukkan keterbukaan pikiran dan kemampuan untuk berpikir kritis. Mendorong lingkungan di mana ide-ide dapat dievaluasi secara adil adalah penting untuk inovasi."
    },
    {
        "question": "Pemerintah memberikan tugas untuk melakukan penyuluhan kesehatan. Anda akan...",
        "options": [
            "Menolak karena bukan tugas utama Anda.",
            "Melaksanakan tugas tersebut dengan asal-asalan.",
            "Melaksanakan tugas tersebut dengan sebaik-baiknya, menganggapnya sebagai kesempatan untuk mengabdi, dan menyiapkan materi yang edukatif dan menarik.",
            "Meminta orang lain yang melakukannya.",
            "Menganggapnya sebagai beban tambahan."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Jawaban ini menunjukkan semangat pengabdian dan profesionalisme sebagai ASN. Mampu melihat tugas tambahan sebagai kesempatan untuk berkontribusi adalah kualitas yang sangat dihargai."
    },
    {
        "question": "Jika Anda melihat anggota tim yang kesulitan dalam pekerjaan, Anda akan...",
        "options": [
            "Mengabaikannya karena bukan masalah Anda.",
            "Memberitahu atasan bahwa dia tidak kompeten.",
            "Menawarkan bantuan, memberikan bimbingan, atau berbagi sumber daya yang dapat membantunya menyelesaikan tugas.",
            "Menyuruhnya mencari solusi sendiri.",
            "Mengambil alih pekerjaannya dan melakukannya sendiri."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Mendukung dan membantu rekan kerja menunjukkan semangat kolaborasi dan empati, yang sangat penting untuk menciptakan lingkungan kerja yang positif dan produktif."
    },
    // Tambahan Soal Batch Terakhir
    {
        "question": "Penyimpanan obat yang memerlukan suhu 2°C hingga 8°C harus disimpan di...",
        "options": [
            "Suhu kamar",
            "Lemari es",
            "Freezer",
            "Suhu hangat",
            "Lemari narkotika"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Suhu 2°C hingga 8°C adalah rentang suhu yang sesuai untuk lemari es. Penyimpanan pada suhu ini diperlukan untuk obat-obatan seperti insulin, vaksin, dan beberapa antibiotik."
    },
    {
        "question": "Obat yang memiliki efek terhadap sistem saraf pusat dan dapat menyebabkan ketergantungan serta penyalahgunaan, namun tidak termasuk dalam golongan narkotika, adalah...",
        "options": [
            "Obat bebas",
            "Obat bebas terbatas",
            "Obat keras",
            "Obat psikotropika",
            "Obat herbal"
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "Obat psikotropika adalah zat atau obat, baik alamiah maupun sintetis, yang berkhasiat psikoaktif melalui pengaruh selektif pada susunan saraf pusat dan menyebabkan perubahan khas pada aktivitas mental dan perilaku."
    },
    {
        "question": "Karakteristik sediaan tablet yang baik harus memiliki waktu hancur yang cepat. Uji yang digunakan untuk menilai karakteristik ini adalah...",
        "options": [
            "Uji kekerasan",
            "Uji keseragaman bobot",
            "Uji waktu hancur",
            "Uji friabilitas",
            "Uji disolusi"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Uji waktu hancur adalah tes standar untuk menentukan apakah suatu tablet dapat hancur dalam waktu yang ditentukan saat kontak dengan cairan biologis, yang merupakan langkah awal penting dalam pelepasan obat."
    },
    {
        "question": "Fungsi utama dari kartu stok obat di apotek adalah...",
        "options": [
            "Mencatat semua transaksi keuangan.",
            "Menampilkan harga jual obat.",
            "Mengontrol pergerakan obat masuk dan keluar, serta mencatat nomor batch dan tanggal kedaluwarsa.",
            "Menjadi alat promosi obat.",
            "Mencatat nama pasien yang membeli obat."
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Kartu stok adalah alat vital untuk manajemen inventaris. Kartu ini memastikan apoteker memiliki catatan akurat tentang jumlah obat yang tersedia, sehingga dapat mencegah kekosongan atau penumpukan stok."
    },
    {
        "question": "Anda melihat rekan kerja Anda sering kali menyebarkan gosip tentang rekan lain. Sikap Anda sebagai ASN adalah...",
        "options": [
            "Ikut serta dalam gosip tersebut.",
            "Mendiamkan saja karena itu urusan pribadi.",
            "Menghindari percakapan tersebut dan secara halus mengingatkan rekan Anda tentang pentingnya menjaga etika dan profesionalisme di lingkungan kerja.",
            "Menegur rekan tersebut di depan umum.",
            "Melaporkan ke atasan tanpa mencoba berkomunikasi terlebih dahulu."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Seorang ASN harus menjaga profesionalisme dan etika. Mencegah penyebaran gosip dengan cara yang sopan dan profesional menunjukkan integritas dan komitmen untuk menciptakan lingkungan kerja yang positif."
    },
    {
        "question": "Anda ditempatkan di sebuah pos pelayanan yang membutuhkan kerja sama dengan instansi lain. Sikap Anda adalah...",
        "options": [
            "Berjalan sendiri tanpa berkoordinasi.",
            "Menganggap instansi lain sebagai pesaing.",
            "Membangun komunikasi yang baik dan berkolaborasi secara efektif untuk mencapai tujuan bersama.",
            "Menyalahkan instansi lain jika ada masalah.",
            "Menolak bekerja sama dengan instansi lain."
        ],
        "correct": 2,
        "category": "Sosio-Kultural",
        "explanation": "Sebagai pelayan publik, kolaborasi antar instansi sangat penting untuk memberikan pelayanan yang terpadu. Mampu membangun hubungan baik dan bekerja sama adalah kunci keberhasilan."
    },
    {
        "question": "Anda ditugaskan untuk memimpin tim yang terdiri dari individu dengan beragam kepribadian. Anda akan...",
        "options": [
            "Memberlakukan aturan yang kaku untuk semua orang.",
            "Hanya berinteraksi dengan orang yang paling mirip dengan Anda.",
            "Mempelajari gaya komunikasi dan motivasi setiap anggota tim, dan menyesuaikan pendekatan Anda agar efektif.",
            "Membiarkan mereka bekerja sendiri-sendiri.",
            "Mengambil alih semua pekerjaan yang sulit."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Kemampuan untuk beradaptasi dengan berbagai gaya kerja adalah ciri kepemimpinan yang kuat. Memahami kebutuhan individu akan membantu Anda memimpin tim yang beragam dengan lebih efektif."
    },
    {
        "question": "Bagaimana Anda memprioritaskan pekerjaan saat Anda memiliki banyak tugas dengan tenggat waktu yang sama?",
        "options": [
            "Mengerjakan tugas yang paling mudah terlebih dahulu.",
            "Mengerjakan semua tugas sekaligus.",
            "Membuat daftar prioritas berdasarkan urgensi dan dampak, lalu meminta arahan atasan jika diperlukan.",
            "Mengeluh kepada atasan.",
            "Menyerahkan tugas kepada rekan kerja lain."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Manajemen waktu dan kemampuan memprioritaskan adalah keterampilan manajerial yang krusial. Pendekatan yang terstruktur akan memastikan tugas paling penting selesai tepat waktu."
    },
    {
        "question": "Anda harus mendelegasikan tugas kepada anggota tim. Apa yang Anda pertimbangkan?",
        "options": [
            "Mendelegasikan tugas termudah saja.",
            "Mendelegasikan semua tugas kepada satu orang yang paling kompeten.",
            "Mendelegasikan tugas berdasarkan kompetensi, beban kerja, dan potensi pengembangan setiap anggota tim.",
            "Mendelegasikan tugas yang paling Anda tidak sukai.",
            "Tidak mendelegasikan tugas sama sekali."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Pendelegasian yang efektif mempertimbangkan kemampuan dan potensi setiap individu. Ini tidak hanya memastikan tugas selesai dengan baik tetapi juga memberdayakan anggota tim untuk berkembang."
    },
    {
        "question": "Bagaimana Anda mengelola sumber daya (waktu, staf, anggaran) dalam sebuah proyek?",
        "options": [
            "Menggunakan semua sumber daya yang tersedia secepat mungkin.",
            "Mengabaikan anggaran dan fokus pada kualitas.",
            "Membuat perencanaan yang detail, memonitor penggunaan sumber daya secara berkala, dan membuat penyesuaian untuk memastikan efisiensi dan efektivitas.",
            "Membiarkan tim mengelola sumber daya sendiri.",
            "Mengandalkan intuisi daripada data."
        ],
        "correct": 2,
        "category": "Manajerial",
        "explanation": "Manajemen sumber daya yang baik adalah inti dari manajemen proyek. Pendekatan yang terencana dan berbasis data memastikan proyek berjalan lancar dan mencapai tujuannya."
    },
    // Pengganti 16 Soal Terakhir (Semua Soal Hitungan)
    {
        "question": "Seorang anak dengan berat badan 25 kg diresepkan obat Amoxicillin 40 mg/kgBB/hari yang dibagi dalam 2 dosis. Berapa mg obat yang harus diberikan untuk setiap dosis?",
        "options": [
            "200 mg",
            "300 mg",
            "400 mg",
            "500 mg",
            "600 mg"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Dosis total per hari: 40 mg/kg x 25 kg = 1000 mg. Dosis per dosis: 1000 mg / 2 = 500 mg. Jawaban yang tepat adalah 500 mg."
    },
    {
        "question": "Seorang apoteker akan membuat larutan injeksi 500 mL dengan konsentrasi 0.9% b/v. Berapa gram (g) zat aktif yang dibutuhkan?",
        "options": [
            "0.45 g",
            "4.5 g",
            "9 g",
            "45 g",
            "90 g"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "0.9% b/v berarti 0.9 gram zat aktif dalam 100 mL larutan. Untuk 500 mL, perhitungannya (0.9 g / 100 mL) x 500 mL = 4.5 gram."
    },
    {
        "question": "Berapa mililiter (mL) sirup Ibuprofen 100 mg/5 mL yang dibutuhkan untuk memberikan dosis 200 mg kepada seorang pasien?",
        "options": [
            "5 mL",
            "10 mL",
            "15 mL",
            "20 mL",
            "25 mL"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Konsentrasi sirup adalah 100 mg dalam 5 mL. Untuk dosis 200 mg, perhitungannya (200 mg / 100 mg) x 5 mL = 10 mL."
    },
    {
        "question": "Jika sebuah kapsul mengandung 250 mg obat, berapa banyak kapsul yang diperlukan untuk memberikan dosis total 1.5 gram kepada pasien?",
        "options": [
            "2 kapsul",
            "4 kapsul",
            "6 kapsul",
            "8 kapsul",
            "10 kapsul"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Dosis total 1.5 gram = 1500 mg. Jumlah kapsul yang diperlukan: 1500 mg / 250 mg = 6 kapsul."
    },
    {
        "question": "Seorang pasien dewasa membutuhkan dosis obat 10 mg setiap 8 jam. Berapa total dosis obat dalam sehari?",
        "options": [
            "10 mg",
            "20 mg",
            "30 mg",
            "40 mg",
            "50 mg"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Sehari ada 24 jam. Dosis diberikan setiap 8 jam, jadi dalam sehari ada 24 / 8 = 3 kali pemberian. Total dosis per hari: 10 mg x 3 = 30 mg."
    },
    {
        "question": "Berapa gram (g) sodium klorida (NaCl) yang diperlukan untuk membuat 250 mL larutan isotonis (0.9% b/v)?",
        "options": [
            "0.225 g",
            "0.45 g",
            "1.125 g",
            "2.25 g",
            "4.5 g"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "0.9% b/v berarti 0.9 g NaCl dalam 100 mL larutan. Untuk 250 mL, perhitungannya (0.9 g / 100 mL) x 250 mL = 2.25 gram."
    },
    {
        "question": "Seorang pasien anak dengan berat badan 15 kg diresepkan parasetamol dengan dosis 15 mg/kgBB. Berapa tablet parasetamol 500 mg yang harus diberikan?",
        "options": [
            "1/2 tablet",
            "1 tablet",
            "1 1/2 tablet",
            "2 tablet",
            "2 1/2 tablet"
        ],
        "correct": 0,
        "category": "SKT",
        "explanation": "Dosis yang dibutuhkan: 15 mg/kg x 15 kg = 225 mg. Jumlah tablet: 225 mg / 500 mg = 0.45 tablet, atau sekitar 1/2 tablet."
    },
    {
        "question": "Jika Anda memiliki sediaan injeksi antibiotik 1 gram per vial, dan resep meminta dosis 300 mg. Berapa mililiter (mL) injeksi yang harus disiapkan jika sediaan dilarutkan dalam 10 mL pelarut?",
        "options": [
            "1 mL",
            "2 mL",
            "3 mL",
            "4 mL",
            "5 mL"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Konsentrasi larutan: 1 g = 1000 mg. Jadi, 1000 mg dalam 10 mL. Dosis yang diminta 300 mg. Perhitungannya (300 mg / 1000 mg) x 10 mL = 3 mL."
    },
    {
        "question": "Seorang apoteker menerima resep untuk 30 kapsul obat. Masing-masing kapsul mengandung 150 mg zat aktif. Berapa total zat aktif dalam gram (g) yang dibutuhkan?",
        "options": [
            "3 g",
            "4.5 g",
            "6 g",
            "9 g",
            "12 g"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Total zat aktif dalam mg: 30 kapsul x 150 mg = 4500 mg. Konversi ke gram: 4500 mg / 1000 = 4.5 gram."
    },
    {
        "question": "Berapa gram (g) glukosa yang dibutuhkan untuk membuat 500 mL larutan glukosa 10% b/v?",
        "options": [
            "5 g",
            "10 g",
            "25 g",
            "50 g",
            "100 g"
        ],
        "correct": 3,
        "category": "SKT",
        "explanation": "10% b/v berarti 10 gram glukosa dalam 100 mL larutan. Untuk 500 mL, perhitungannya (10 g / 100 mL) x 500 mL = 50 gram."
    },
    {
        "question": "Pasien menerima resep untuk obat cair 250 mL, dengan dosis 5 mL dua kali sehari. Berapa hari obat tersebut akan habis?",
        "options": [
            "15 hari",
            "20 hari",
            "25 hari",
            "30 hari",
            "35 hari"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Dosis harian: 5 mL x 2 = 10 mL. Total volume 250 mL. Waktu habis: 250 mL / 10 mL/hari = 25 hari."
    },
    {
        "question": "Dosis parasetamol untuk anak adalah 10-15 mg/kgBB. Jika anak memiliki berat 18 kg, berapa dosis maksimal yang aman dalam miligram (mg)?",
        "options": [
            "180 mg",
            "270 mg",
            "300 mg",
            "450 mg",
            "500 mg"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Dosis maksimal: 15 mg/kgBB x 18 kg = 270 mg."
    },
    {
        "question": "Seorang apoteker akan membuat sediaan salep 30 gram dengan kandungan zat aktif 2%. Berapa gram (g) zat aktif yang dibutuhkan?",
        "options": [
            "0.06 g",
            "0.6 g",
            "1.5 g",
            "2 g",
            "6 g"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Kandungan zat aktif: 2% dari 30 gram. Perhitungannya (2 / 100) x 30 g = 0.6 gram."
    },
    {
        "question": "Berapa total kalori yang terkandung dalam 500 mL infus dekstrosa 5%?",
        "options": [
            "50 kkal",
            "100 kkal",
            "150 kkal",
            "170 kkal",
            "200 kkal"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "5% dekstrosa artinya 5 gram dalam 100 mL. Total glukosa dalam 500 mL adalah (5 g / 100 mL) x 500 mL = 25 gram. Nilai kalori glukosa adalah 4 kkal/g. Jadi, 25 g x 4 kkal/g = 100 kkal."
    },
    {
        "question": "Jika sebuah tablet memiliki bobot 500 mg, dan 15% dari bobotnya adalah zat aktif. Berapa miligram (mg) zat aktif dalam satu tablet?",
        "options": [
            "15 mg",
            "50 mg",
            "75 mg",
            "100 mg",
            "150 mg"
        ],
        "correct": 2,
        "category": "SKT",
        "explanation": "Jumlah zat aktif: 15% dari 500 mg. Perhitungannya (15 / 100) x 500 mg = 75 mg."
    },
    {
        "question": "Sebuah botol obat memiliki label 1000 mg/50 mL. Berapa miligram (mg) obat dalam 1 mL?",
        "options": [
            "10 mg",
            "20 mg",
            "30 mg",
            "40 mg",
            "50 mg"
        ],
        "correct": 1,
        "category": "SKT",
        "explanation": "Konsentrasi: 1000 mg / 50 mL = 20 mg/mL."
    }

];



    