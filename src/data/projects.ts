export type ProjectCategory = "web" | "mobile" | "backend" | "pos" | "unity";

export interface ProjectLink {
  label?: string;
  href: string;
  iconClass?: string;
}

export interface ProjectData {
  title: string;
  category: ProjectCategory | ProjectCategory[];
  image: string;
  alt: string;
  description: string;
  tech: string[];
  statusText: string;
  statusClass: "completed" | "in-development";
  repoText: "Public" | "Private";
  repoClass: "public" | "private";
  links: ProjectLink[];
  previewGalleryId?: string;
  badgeText?: string;
  badgeColor?: "danger" | "violet";
}

export const projectFilters: Array<{
  key: "all" | ProjectCategory;
  label: string;
}> = [
  { key: "all", label: "Semua" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "pos", label: "POS" },
  { key: "backend", label: "Backend & ML" },
  { key: "unity", label: "Unity" },
];

export const projects: ProjectData[] = [
  {
    title: "Aplikasi Absensi Pegawai PT XYZ",
    category: ["web", "mobile"],
    image: "/assets/projects/secret.jpg",
    alt: "PT XYZ Absensi",
    description:
      "Sebagai developer dalam pembuatan aplikasi absensi pegawai untuk perusahaan PT XYZ, yang membantu dalam pengelolaan kehadiran dan absensi karyawan secara efisien.",
    tech: ["Laravel", "Livewire", "MySQL", "Flutter"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Private",
    repoClass: "private",
    links: [
      { href: "https://img.freepik.com/premium-vector/red-icon-with-top-secret-concept_123447-747.jpg" },
    ],
  },
  {
    title: "Berkah Jaya",
    category: "pos",
    image: "/assets/projects/berkahjayamart.com.png",
    alt: "Berkah Jaya",
    description:
      "Sebagai developer dalam pembuatan aplikasi untuk pengelolaan usaha fotocopy.",
    tech: ["Laravel", "Livewire", "MySQL"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Private",
    repoClass: "private",
    links: [
      { href: "https://berkahjayamart.com/" },
    ],
  },
  {
    title: "Makassar Grosir",
    category: "pos",
    image: "/assets/projects/makassar-grosir.png",
    alt: "Makassar Grosir",
    description:
      "Sebagai developer dalam pembuatan aplikasi untuk pengelolaan bisnis.",
    tech: ["Laravel", "Livewire", "MySQL"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Private",
    repoClass: "private",
    links: [
      { href: "https://makassargrosir.com/" },
    ],
  },
  {
    title: "OSC",
    category: "pos",
    image: "/assets/projects/osc-makassar.png",
    alt: "OSC",
    description:
      "Sebagai developer dalam pembuatan aplikasi untuk pengelolaan bisnis pada wilayah Makassar.",
    tech: ["Laravel","Livewire", "MySQL"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Private",
    repoClass: "private",
    links: [
      { href: "https://osc.co.id" },
    ],
  },
  {
    title: "ABSENSIX",
    category: "pos",
    image: "/assets/projects/absensix.fsu.my.id_login.png",
    alt: "ABSENSIX",
    description:
      "Sebagai developer dalam pembuatan aplikasi POS untuk pengelolaan absensi pegawai.",
    tech: ["Laravel","Livewire", "MySQL"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Private",
    repoClass: "private",
    links: [
      { href: "https://absensix.fsu.my.id" },
    ],
  },
  {
    title: "Laundry Joss",
    category: "pos",
    image: "/assets/projects/laundryjoss.fsu.my.id_login.png",
    alt: "Laundry Joss",
    description:
      "Sebagai developer dalam pembuatan aplikasi POS untuk pengelolaan usaha laundry.",
    tech: ["Laravel","Livewire", "MySQL"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Private",
    repoClass: "private",
    links: [
      { href: "https://laundryjoss.fsu.my.id" },
    ],
  },
  {
    title: "Toko Bangunan Joss",
    category: "pos",
    image: "/assets/projects/tokobangunan.fsu.my.id_login.png",
    alt: "Toko Bangunan Joss",
    description:
      "Sebagai developer dalam pembuatan aplikasi POS untuk pengelolaan usaha toko bangunan.",
    tech: ["Laravel","Livewire", "MySQL"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Private",
    repoClass: "private",
    links: [
      { href: "https://tokobangunan.fsu.my.id" },
    ],
  },
  {
    title: "Kantin Jawara",
    category: "mobile",
    image: "/assets/projects/KANTIN JAWARA.png",
    alt: "Kantin Jawara",
    description:
      "Proyek ini adalah sebuah aplikasi mobile yang dirancang untuk membantu mahasiswa dalam melakukan pemesanan makanan di kantin kampus.",
    tech: ["Flutter", "Laravel"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Public",
    repoClass: "public",
    previewGalleryId: "kantin-jawara",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/penyulaut/Kantin-Jawara",
        iconClass: "fab fa-github",
      },
    ],
  },
  {
    title: "OSC",
    category: "pos",
    image: "/assets/projects/osc-makassar.png",
    alt: "OSC Makassar",
    description:
      "Sebagai developer dalam pembuatan aplikasi untuk pengelolaan bisnis pada wilayah Makassar.",
    tech: ["Laravel", "MySQL"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Private",
    repoClass: "private",
    links: [
      { href: "https://osc.co.id" },
    ],
  },
  {
    title: "MBER",
    category: "web",
    image: "/assets/projects/mber.png",
    alt: "MBER",
    description:
      "Aplikasi web untuk mengetahui jumlah posisi penerimaan berbasis scraping data dan prediksi keyword untuk mahasiswa.",
    tech: ["React", "Github Pages"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Public",
    repoClass: "public",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/firdausmntp/mber",
        iconClass: "fab fa-github",
      },
      {
        label: "Live Demo",
        href: "https://firdausmntp.github.io/mber/",
        iconClass: "fas fa-external-link-alt",
      },
    ],
  },
  {
    title: "Cucikuy",
    category: "web",
    image: "/assets/projects/cucikuy-transaksipage.png",
    alt: "Cucikuy",
    description:
      "Solusi manajemen cuci kendaraan dengan fitur admin untuk pengelolaan transaksi dan pembaruan data.",
    tech: ["Django", "Python"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Public",
    repoClass: "public",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/firdausmntp/CuciKuy",
        iconClass: "fab fa-github",
      },
    ],
  },
  {
    title: "OpenSinta",
    category: "web",
    image:
      "https://raw.githubusercontent.com/firdausmntp/opensinta/a96930af2878e15eaf25c5b940233eee85abee08/docs/images/home-preview.png",
    alt: "OpenSinta",
    description:
      "Platform visualisasi data terbuka untuk publikasi SINTA Indonesia dengan dashboard interaktif dan tools eksplorasi data.",
    tech: ["React", "Vite", "Tailwind CSS", "Recharts"],
    statusText: "Archived",
    statusClass: "in-development",
    repoText: "Public",
    repoClass: "public",
    badgeText: "Deprecated",
    badgeColor: "danger",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/firdausmntp/opensinta",
        iconClass: "fab fa-github",
      },
      {
        label: "Live Demo",
        href: "https://firdausmntp.github.io/opensinta/",
        iconClass: "fas fa-external-link-alt",
      },
    ],
  },
  {
    title: "HMIF",
    category: "web",
    image: "/assets/projects/webhmif.png",
    alt: "HMIF",
    description:
      "Website untuk meningkatkan keterlibatan anggota Himpunan Mahasiswa Informatika melalui forum, pengumuman, dan galeri kegiatan.",
    tech: ["Laravel", "Vite", "PHP"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Private",
    repoClass: "private",
    badgeText: "Mantan Kontributor",
    badgeColor: "violet",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/firdausmntp/hmif",
        iconClass: "fab fa-github",
      },
    ],
  },
  {
    title: "NUSANTARAHOP",
    category: "unity",
    image: "/assets/projects/nusantarahop.png",
    alt: "NUSANTARAHOP",
    description:
      "Game edukasi interaktif untuk mengeksplorasi budaya, sejarah, dan keindahan alam Indonesia.",
    tech: ["Unity", "C#"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Public",
    repoClass: "public",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/firdausmntp/nusantarahopfix",
        iconClass: "fab fa-github",
      },
    ],
  },
  {
    title: "SIPINRUNG (Sistem Peminjaman Ruangan)",
    category: "web",
    image: "/assets/projects/sipinrung-adminpage.png",
    alt: "SIPINRUNG",
    description:
      "Aplikasi web untuk peminjaman ruangan kegiatan secara online dengan alur pemesanan yang responsif. Website telah digunakan pada kampus dalam membantu proses peminjaman ruangan untuk berbagai kegiatan mahasiswa.",
    tech: ["Laravel", "PHP"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Private",
    repoClass: "private",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/firdausmntp/sipinrung",
        iconClass: "fab fa-github",
      },
      {
        label: "Live Website",
        href: "https://peminjamanruang.ft.untirta.ac.id/",
        iconClass: "fas fa-external-link-alt",
      },
    ],
  },
  {
    title: "Pemesanan Wisata",
    category: "web",
    image: "/assets/projects/pemesananwisata-landingpage.png",
    alt: "Pemesanan Wisata",
    description:
      "Aplikasi web untuk pemesanan destinasi wisata secara online dengan alur paket yang mudah dipilih.",
    tech: ["Laravel", "PHP"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Public",
    repoClass: "public",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/firdausmntp/pemesananwisata",
        iconClass: "fab fa-github",
      },
    ],
  },
  {
    title: "Kantin Jawara Backend",
    category: "backend",
    image: "/assets/projects/kaja-backend.png",
    alt: "Kantin Jawara Backend",
    description:
      "API untuk pengelolaan menu, transaksi, dan laporan operasional kantin kampus.",
    tech: ["Laravel"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Public",
    repoClass: "public",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/firdausmntp/kaja-backend",
        iconClass: "fab fa-github",
      },
      {
        label: "Api Documentation",
        href: "https://registry.scalar.com/@firdaussatut-gmail-com-team/apis/kaja-kantin-jawara-api/1.0.9?format=preview",
        iconClass: "fas fa-external-link-alt",
      },
    ],
  },
  {
    title: "Derana Deteksi",
    category: "web",
    image: "/assets/projects/deranadeteksi.png",
    alt: "Derana Deteksi",
    description:
      "Aplikasi web untuk analisis AI detection pada tugas mahasiswa, disertai pembelajaran API dan scraping.",
    tech: ["React", "Github Pages"],
    statusText: "Selesai",
    statusClass: "completed",
    repoText: "Public",
    repoClass: "public",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/firdausmntp/DeranaDeteksi",
        iconClass: "fab fa-github",
      },
      {
        label: "Live Demo",
        href: "https://firdausmntp.github.io/DeranaDeteksi/",
        iconClass: "fas fa-external-link-alt",
      },
    ],
  },
];
